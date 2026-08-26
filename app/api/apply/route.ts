import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

/**
 * Receives an application from the Website form and forwards it to the Portal,
 * which is the system of record for applicants (storage, assessments, login).
 *
 * Configure the Portal ingest endpoint via env:
 *   PORTAL_APPLICATION_ENDPOINT = https://portal.valtaris.ai/api/ingest/applications
 *   PORTAL_INGEST_TOKEN         = <shared secret> (sent as Authorization: Bearer …)
 *
 * If no endpoint is configured (local dev), the application is written to
 * ./_applications/*.json as a fallback so nothing is lost while the Portal
 * endpoint is being wired. See docs/portal-integration.md for the contract.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = String(body.fullName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const consent = Boolean(body.consentDataProcessing);

  if (!fullName) return NextResponse.json({ error: "Full name is required." }, { status: 422 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return NextResponse.json({ error: "A valid email is required." }, { status: 422 });
  if (!consent) return NextResponse.json({ error: "Consent to data processing is required." }, { status: 422 });

  const payload = {
    source: "valtaris-website",
    submittedAt: new Date().toISOString(),
    ...body,
  };

  const endpoint = process.env.PORTAL_APPLICATION_ENDPOINT;

  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.PORTAL_INGEST_TOKEN
            ? { Authorization: `Bearer ${process.env.PORTAL_INGEST_TOKEN}` }
            : {}),
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("[apply] Portal ingest failed", res.status, text);
        return NextResponse.json(
          { error: "We couldn't submit your application right now. Please try again shortly." },
          { status: 502 },
        );
      }
      const data = await res.json().catch(() => ({}));
      return NextResponse.json({ ok: true, forwarded: true, portal: data });
    } catch (e) {
      console.error("[apply] Portal ingest error", e);
      return NextResponse.json(
        { error: "We couldn't reach the application service. Please try again shortly." },
        { status: 502 },
      );
    }
  }

  // Dev fallback — no Portal endpoint configured.
  try {
    const dir = path.join(process.cwd(), "_applications");
    await fs.mkdir(dir, { recursive: true });
    const safe = email.replace(/[^a-z0-9._-]/gi, "_");
    const file = path.join(dir, `${Date.now()}-${safe}.json`);
    await fs.writeFile(file, JSON.stringify(payload, null, 2), "utf8");
    console.warn(
      "[apply] PORTAL_APPLICATION_ENDPOINT not set — saved application locally to",
      file,
    );
    return NextResponse.json({ ok: true, forwarded: false, note: "stored-locally (Portal endpoint not configured)" });
  } catch (e) {
    console.error("[apply] local fallback write failed", e);
    return NextResponse.json({ error: "Submission failed. Please try again." }, { status: 500 });
  }
}
