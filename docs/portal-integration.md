# Website → Portal application handoff

The **Website** (this repo) shows open positions and hosts the application form
(questionnaire + resume + essay). On submit it **forwards the application to the
Portal** (`liewyihhao/Valtaris-Portal`), which is the system of record for
applicants — storage, login, assessments, qualifications, exams, certification.

The Website stores nothing permanently (a local `./_applications/*.json`
fallback exists only for dev when no Portal endpoint is configured).

```
Applicant → Website form → POST → Portal ingest endpoint → Portal DB
                                                     └→ applicant later logs in
                                                        to Portal for assessments
```

## Configuration (Website side)

Set in the Website's environment (e.g. `.env.local` or hosting env):

| Variable | Purpose |
|---|---|
| `PORTAL_APPLICATION_ENDPOINT` | Full URL of the Portal ingest endpoint. |
| `PORTAL_INGEST_TOKEN` | Shared secret; sent as `Authorization: Bearer <token>`. |

If `PORTAL_APPLICATION_ENDPOINT` is unset, the Website writes each application
to `./_applications/*.json` and returns success (dev only).

## Request the Website sends

`POST {PORTAL_APPLICATION_ENDPOINT}`
Headers: `Content-Type: application/json`, `Authorization: Bearer <PORTAL_INGEST_TOKEN>` (if set)

Body (JSON):

```jsonc
{
  "source": "valtaris-website",
  "submittedAt": "2026-08-21T09:00:00.000Z",
  "opportunitySlug": "malay-ai-language-annotator", // or null (general Contributor Network application)

  // Personal
  "fullName": "…", "preferredName": "…", "email": "…", "phone": "…",
  "country": "…", "state": "…", "city": "…", "timezone": "Asia/Kuala_Lumpur",
  "preferredContact": "Email", "linkedin": "…", "portfolio": "…", "website": "…",

  // Languages (array — the key signal for matching)
  "languages": [
    {
      "languageName": "Malay", "proficiency": "Native",
      "speaking": "Native", "reading": "Native", "writing": "Native", "listening": "Native",
      "yearsExposure": "25", "learnedIn": "Malaysia", "dialectLocale": "Malaysian Malay",
      "isStrongest": true
    }
  ],

  // Education
  "highestEducation": "Bachelor's", "fieldOfStudy": "…", "institution": "…", "graduationYear": "2019",

  // Experience
  "hasPriorExperience": true, "yearsExperience": "3–5",
  "experienceEntries": [ { "category": "Translation" }, { "notes": "…" } ],

  // Skills
  "skills": ["Translation", "LLM evaluation"], "customSkills": ["…"],

  // Availability
  "hoursPerWeek": "10–20 hours/week",
  "availabilitySlots": ["Mon-Morning", "Tue-Evening"],
  "startAvailability": "Within 1 week", "openToFuture": true,

  // Resume (optional). Sent inline; move to object storage on the Portal side.
  "resumeFileName": "cv.pdf", "resumeType": "application/pdf",
  "resumeBase64": "…base64 of the file, or null…",

  // Essay
  "essay": "…", "essayQ1": "…", "essayQ2": "…", "essayQ3": "…", "essayQ4": "…",

  // Consent
  "consentDataProcessing": true, "consentContact": true
}
```

### Notes for the Portal ingest endpoint

- **Validate** `fullName`, `email`, and `consentDataProcessing` (the Website
  already checks these, but re-validate).
- **Auth**: verify the `Bearer` token matches your shared secret.
- **Resume**: `resumeBase64` is the file bytes (≤ 6 MB). Decode and store in
  **private** object storage; never expose via a predictable URL.
- **Idempotency**: consider de-duplicating on `email` + `opportunitySlug` +
  `submittedAt` if retries are possible.
- **Applicant status**: create the applicant with an initial status (e.g. `NEW`)
  in the Portal's own applicant model, then drive assessments/qualifications
  from there.

### Expected response

- `2xx` with optional JSON (e.g. `{ "id": "…" }`) → the Website shows the
  "Application Received" confirmation.
- Non-2xx → the Website shows a retry message to the applicant.
