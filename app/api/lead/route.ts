import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

/**
 * Receives a "Get Started" / sales lead from the marketing form.
 *
 * Configure a destination via env:
 *   LEAD_ENDPOINT       — a CRM / form-service / email webhook URL to POST to
 *   LEAD_ENDPOINT_TOKEN — optional; sent as `Authorization: Bearer <token>`
 *
 * If LEAD_ENDPOINT is unset (local dev), the lead is written to
 * ./_leads/*.json as a fallback so nothing is lost.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  if (!name) return NextResponse.json({ error: "Please enter your name." }, { status: 422 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return NextResponse.json({ error: "Please enter a valid work email." }, { status: 422 });

  const payload = { source: "valtaris-website", type: "lead", submittedAt: new Date().toISOString(), ...body };
  const endpoint = process.env.LEAD_ENDPOINT;

  if (endpoint) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.LEAD_ENDPOINT_TOKEN
            ? { Authorization: `Bearer ${process.env.LEAD_ENDPOINT_TOKEN}` }
            : {}),
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        console.error("[lead] endpoint failed", res.status);
        return NextResponse.json({ error: "We couldn't submit right now. Please try again shortly." }, { status: 502 });
      }
      return NextResponse.json({ ok: true, forwarded: true });
    } catch (e) {
      console.error("[lead] endpoint error", e);
      return NextResponse.json({ error: "We couldn't reach the service. Please try again shortly." }, { status: 502 });
    }
  }

  // Dev fallback
  try {
    const dir = path.join(process.cwd(), "_leads");
    await fs.mkdir(dir, { recursive: true });
    const safe = email.replace(/[^a-z0-9._-]/gi, "_");
    await fs.writeFile(path.join(dir, `${Date.now()}-${safe}.json`), JSON.stringify(payload, null, 2), "utf8");
    return NextResponse.json({ ok: true, forwarded: false });
  } catch (e) {
    console.error("[lead] fallback write failed", e);
    return NextResponse.json({ error: "Submission failed. Please try again." }, { status: 500 });
  }
}
