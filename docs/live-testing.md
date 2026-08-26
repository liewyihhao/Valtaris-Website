# Live testing — contributor recruitment flow

How to run and test the recruitment journey end-to-end: browse open positions →
apply (questionnaire + resume + essay) → submit → forwarded to the Portal.

## 1. Run the Website

```bash
npm install
npm run dev        # http://localhost:3000
```

Key pages:

- `/opportunities` — open positions, searchable + filterable
- `/opportunities/<slug>` — a position's detail page
- `/apply` — the application wizard (also `/apply?opportunity=<slug>`)

## 2. Choose a submission target

The Website **forwards** every submitted application to the Portal (the system
of record). Where it goes depends on env:

| Mode | Env | What happens on submit |
|---|---|---|
| **Local fallback** (default) | *(none set)* | Saved to `./_applications/*.json`. Good for testing the form itself. |
| **Forward to Portal** | `PORTAL_APPLICATION_ENDPOINT` (+ `PORTAL_INGEST_TOKEN`) | POSTed to that endpoint with `Authorization: Bearer <token>`. |

### Testing the forward path with the mock Portal

A mock endpoint that implements the contract (see `portal-integration.md`) is
included so you can test the real forward path before the Portal is wired:

```bash
# Terminal 1 — mock Portal (listens on :4055, token "test-token")
node scripts/mock-portal-ingest.mjs

# Terminal 2 — Website pointed at the mock
PORTAL_APPLICATION_ENDPOINT="http://localhost:4055/api/ingest/applications" \
PORTAL_INGEST_TOKEN="test-token" \
npm run dev
```

Submitted applications appear in `./_mock-portal/` (one `<id>.json` per
applicant, plus the decoded CV file). The mock logs each receipt and rejects a
wrong/missing token with `401`.

## 3. Test checklist

- [ ] `/opportunities` lists positions; search + each filter group narrows results
- [ ] Filters combine (e.g. Language = Japanese + Category = LLM Evaluation)
- [ ] A position detail page shows responsibilities/requirements and **Apply**
- [ ] **Apply** carries the position through (`/apply?opportunity=…` shows "Applying for …")
- [ ] Wizard blocks Continue until name + a valid email (step 1)
- [ ] Languages step: add multiple, mark a "strongest"
- [ ] Essay step requires a real answer (≥ ~30 words)
- [ ] Resume upload accepts a PDF/DOC/DOCX (≤ 6 MB)
- [ ] Review shows a correct summary; consent is required to submit
- [ ] Submit → "Application Received" page
- [ ] The application arrives (in `_applications/`, or `_mock-portal/`, or the real Portal)
- [ ] Refreshing mid-application restores your progress (autosave)

## 4. Going live against the real Portal

1. The Portal implements the ingest endpoint per `portal-integration.md`.
2. Set `PORTAL_APPLICATION_ENDPOINT` + `PORTAL_INGEST_TOKEN` in the Website's
   production environment (e.g. Vercel project env vars).
3. Set the production domain in `app/layout.tsx` (`metadataBase`) and
   `lib/content.ts` (`site.url`).
4. Deploy. Applicants then log in to the **Portal** for assessments,
   qualifications, exams and certification.

> Note: the `_applications/` fallback writes to the local filesystem and is for
> dev only — it won't persist on serverless hosting. In production, always set
> `PORTAL_APPLICATION_ENDPOINT`.
