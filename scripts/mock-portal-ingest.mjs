// Mock Portal ingest endpoint — for LIVE-TESTING the Website → Portal handoff
// without the real Portal. It implements the contract in
// docs/portal-integration.md: verifies the Bearer token, stores each received
// application (CV decoded to a file), and returns { id }.
//
// Usage:
//   node scripts/mock-portal-ingest.mjs            # listens on :4055, token "test-token"
//   PORT=5000 INGEST_TOKEN=secret node scripts/mock-portal-ingest.mjs
//
// Then run the Website pointing at it:
//   PORTAL_APPLICATION_ENDPOINT=http://localhost:4055/api/ingest/applications \
//   PORTAL_INGEST_TOKEN=test-token npm run dev

import http from "node:http";
import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const PORT = Number(process.env.PORT || 4055);
const TOKEN = process.env.INGEST_TOKEN || "test-token";
const OUT = path.join(process.cwd(), "_mock-portal");

const server = http.createServer((req, res) => {
  if (req.method !== "POST") {
    res.writeHead(405).end("Method Not Allowed");
    return;
  }
  const auth = req.headers["authorization"] || "";
  if (auth !== `Bearer ${TOKEN}`) {
    console.warn("✗ rejected: bad/missing bearer token");
    res.writeHead(401, { "content-type": "application/json" }).end(JSON.stringify({ error: "Unauthorized" }));
    return;
  }
  let body = "";
  req.on("data", (c) => (body += c));
  req.on("end", async () => {
    try {
      const data = JSON.parse(body);
      const id = "app_" + crypto.randomBytes(6).toString("hex");
      await fs.mkdir(OUT, { recursive: true });

      // Decode CV to a real file, like the Portal would move it to private storage.
      let cvNote = "none";
      if (data.resumeBase64 && data.resumeFileName) {
        const cvPath = path.join(OUT, `${id}-${data.resumeFileName}`);
        await fs.writeFile(cvPath, Buffer.from(data.resumeBase64, "base64"));
        cvNote = cvPath;
      }
      // Store the record without the giant base64 blob.
      const { resumeBase64, ...record } = data;
      await fs.writeFile(path.join(OUT, `${id}.json`), JSON.stringify(record, null, 2), "utf8");

      console.log(
        `✓ ${id}  ${data.fullName} <${data.email}>  langs=${(data.languages || []).map((l) => l.languageName).join("/")}  cv=${cvNote}`,
      );
      res.writeHead(201, { "content-type": "application/json" }).end(JSON.stringify({ id, status: "NEW" }));
    } catch (e) {
      console.error("✗ error", e);
      res.writeHead(400, { "content-type": "application/json" }).end(JSON.stringify({ error: "Bad payload" }));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Mock Portal ingest listening on http://localhost:${PORT}/api/ingest/applications`);
  console.log(`Expecting  Authorization: Bearer ${TOKEN}`);
  console.log(`Saving received applications to ${OUT}/`);
});
