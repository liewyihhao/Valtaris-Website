# Portal side — receive applications from the Website

Ready-to-paste implementation of the ingest endpoint the Website posts to. This
folder lives in the **Website** repo for reference; the files are meant to be
copied into the **Portal** repo (`liewyihhao/Valtaris-Portal`).

The Website is already built and tested against this contract (see
`../portal-integration.md`). Once these are in place and the env vars match,
the flow is live end-to-end.

## Files

| File | Copy to (Portal repo) |
|---|---|
| `ingest-applications.route.ts` | `app/api/ingest/applications/route.ts` |
| `schema.additions.prisma` | append to `prisma/schema.prisma` |

## Steps

1. **Schema** — append the models in `schema.additions.prisma` to
   `prisma/schema.prisma`, then:
   ```bash
   npx prisma db push        # or: prisma migrate dev
   ```
   (Or skip these models and map the ingest route's `create` onto your existing
   applicant model — see ADAPT #2 in the route file.)

2. **Route** — copy `ingest-applications.route.ts` to
   `app/api/ingest/applications/route.ts`. Fix the two ADAPT blocks:
   - **ADAPT #1**: the Prisma client import path (`@/lib/db`).
   - **ADAPT #2**: the persistence call (uses `prisma.contributorApplication`).

3. **Env** (Portal) — set a shared secret and (optionally) a private upload dir:
   ```
   PORTAL_INGEST_TOKEN="<a long random secret>"
   PRIVATE_UPLOAD_DIR="/var/data/valtaris-cvs"   # optional; default ./private-uploads
   ```

4. **Env** (Website) — set the **same** token and point it at your endpoint:
   ```
   PORTAL_APPLICATION_ENDPOINT="https://<portal-host>/api/ingest/applications"
   PORTAL_INGEST_TOKEN="<the same secret>"
   ```

5. **Middleware note** — if the Portal has auth middleware, make sure
   `/api/ingest/applications` is **excluded** from the login gate (it's
   authenticated by the Bearer token, not a user session).

## What the endpoint does

- Verifies `Authorization: Bearer <PORTAL_INGEST_TOKEN>` (constant-time; `401` on mismatch).
- Validates `fullName`, `email`, `consentDataProcessing`.
- Decodes `resumeBase64` (≤ 6 MB, PDF/DOC/DOCX/txt) and stores it privately —
  **swap the local write for object storage in production** and serve CVs only
  through an authenticated route.
- Creates a `ContributorApplication` (+ language rows) with `status: "NEW"`.
- Returns `201 { "id": "...", "status": "NEW" }`.

## Test it against the Website

```bash
# Portal running with PORTAL_INGEST_TOKEN set, e.g. on :3007
curl -i -X POST http://localhost:3007/api/ingest/applications \
  -H "Authorization: Bearer <PORTAL_INGEST_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test User","email":"t@example.com","consentDataProcessing":true,
       "languages":[{"languageName":"Malay","proficiency":"Native","isStrongest":true}]}'
# expect: HTTP/1.1 201 ... {"id":"...","status":"NEW"}
```

Then point the Website at it (`PORTAL_APPLICATION_ENDPOINT`) and submit through
`/apply`. The full payload shape is in `../portal-integration.md`.

## Hardening checklist (before production)

- [ ] CVs go to **private object storage**, not the local filesystem
- [ ] A strong, rotated `PORTAL_INGEST_TOKEN`
- [ ] Rate limiting / basic abuse protection on the endpoint
- [ ] Idempotency if the Website may retry (see the commented dedupe block)
- [ ] Applicant-facing confirmation email (from the Portal or the Website)
- [ ] Data-retention + deletion handling for applicant PII
