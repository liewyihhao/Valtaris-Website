// -------------------------------------------------------------------------
// Recruitment content + constants for the Valtaris Contributor recruitment
// section. The Website OWNS the open-positions listing (editable here) and
// hosts the application form; submitted applications are forwarded to the
// Portal (see app/api/apply/route.ts + docs/portal-integration.md).
// -------------------------------------------------------------------------

export const PROJECT_CATEGORIES = [
  "Text", "Image", "Video", "Audio", "Speech", "Translation", "Localization",
  "LLM Evaluation", "AI Response Evaluation", "Search Evaluation", "Content Evaluation",
  "Data Collection", "Computer Vision", "3D / LiDAR", "Domain Expert", "Quality Assurance", "Other",
] as const;

export const WORK_TYPES = ["Remote", "On-site", "Hybrid"] as const;
export const ENGAGEMENTS = ["One-time", "Short-term", "Long-term", "Ongoing", "Freelance", "Part-time", "Full-time"] as const;
export const EXPERIENCE_LEVELS = ["No previous experience", "Entry level", "Experienced", "Specialist", "Expert"] as const;
export const AVAILABILITY_BANDS = ["Less than 5 hours/week", "5–10 hours/week", "10–20 hours/week", "20–30 hours/week", "30–40 hours/week", "40+ hours/week"] as const;
export const PROFICIENCY_LEVELS = ["Native", "C2", "C1", "B2", "B1", "A2", "A1"] as const;
export const SKILL_LEVELS = ["Native", "Expert", "Advanced", "Intermediate", "Basic"] as const;
export const EDUCATION_LEVELS = ["Secondary", "Diploma", "Bachelor's", "Master's", "Doctorate", "Other"] as const;
export const START_AVAILABILITY = ["Immediately", "Within 1 week", "Within 2 weeks", "Within 1 month", "More than 1 month"] as const;
export const EXPERIENCE_CATEGORIES = [
  "Data annotation", "AI evaluation", "Translation", "Transcription", "Localization",
  "Content moderation", "Linguistics", "Machine learning", "Software development", "Data analysis",
  "Quality assurance", "Research", "Teaching", "Writing/editing", "Customer service", "Other",
];
export const AVAILABILITY_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const AVAILABILITY_TIMES = ["Morning", "Afternoon", "Evening", "Night"];

export const SKILL_CATALOG: Record<string, string[]> = {
  "Language & Linguistics": ["Translation", "Transcription", "Localization", "Linguistic review", "Grammar", "Editing", "Proofreading", "Terminology", "Dialect knowledge"],
  "AI & Data": ["Data annotation", "Image annotation", "Video annotation", "Text annotation", "Audio annotation", "AI response evaluation", "LLM evaluation", "Prompt writing", "AI testing", "Search relevance", "Data quality"],
  Technical: ["Python", "SQL", "JavaScript", "Machine learning", "Data analysis", "Excel", "Annotation platforms"],
  "Domain Expertise": ["Finance", "Healthcare", "Legal", "Education", "Engineering", "Automotive", "Retail", "Marketing", "Science", "Technology", "Gaming"],
};

export const ESSAY_QUESTIONS = [
  { id: "q1", label: "What language or area of expertise are you most confident contributing to, and why?" },
  { id: "q2", label: "Tell us about a situation where accuracy and attention to detail were particularly important." },
  { id: "q3", label: "Why are you interested in contributing to AI development?" },
  { id: "q4", label: "What makes you good at identifying mistakes, inconsistencies or subtle differences?" },
];

// Language list (name, native). Expandable — the Portal is the long-term
// system of record for languages; this drives the application form's picker.
export const LANGUAGES: { name: string; native: string }[] = [
  ["English", "English"], ["Spanish", "Español"], ["Portuguese", "Português"], ["French", "Français"],
  ["German", "Deutsch"], ["Italian", "Italiano"], ["Dutch", "Nederlands"], ["Russian", "Русский"],
  ["Ukrainian", "Українська"], ["Polish", "Polski"], ["Czech", "Čeština"], ["Slovak", "Slovenčina"],
  ["Hungarian", "Magyar"], ["Romanian", "Română"], ["Bulgarian", "Български"], ["Serbian", "Српски"],
  ["Croatian", "Hrvatski"], ["Slovenian", "Slovenščina"], ["Greek", "Ελληνικά"], ["Albanian", "Shqip"],
  ["Turkish", "Türkçe"], ["Arabic", "العربية"], ["Hebrew", "עברית"], ["Persian", "فارسی"],
  ["Urdu", "اردو"], ["Hindi", "हिन्दी"], ["Bengali", "বাংলা"], ["Punjabi", "ਪੰਜਾਬੀ"],
  ["Tamil", "தமிழ்"], ["Telugu", "తెలుగు"], ["Marathi", "मराठी"], ["Gujarati", "ગુજરાતી"],
  ["Malayalam", "മലയാളം"], ["Kannada", "ಕನ್ನಡ"], ["Sinhala", "සිංහල"], ["Nepali", "नेपाली"],
  ["Thai", "ไทย"], ["Vietnamese", "Tiếng Việt"], ["Indonesian", "Bahasa Indonesia"], ["Malay", "Bahasa Melayu"],
  ["Tagalog", "Tagalog"], ["Burmese", "မြန်မာ"], ["Khmer", "ខ្មែរ"], ["Lao", "ລາວ"],
  ["Mandarin Chinese", "中文"], ["Cantonese", "粵語"], ["Japanese", "日本語"], ["Korean", "한국어"],
  ["Mongolian", "Монгол"], ["Kazakh", "Қазақ"], ["Uzbek", "Oʻzbek"], ["Swedish", "Svenska"],
  ["Norwegian", "Norsk"], ["Danish", "Dansk"], ["Finnish", "Suomi"], ["Icelandic", "Íslenska"],
  ["Estonian", "Eesti"], ["Latvian", "Latviešu"], ["Lithuanian", "Lietuvių"], ["Georgian", "ქართული"],
  ["Armenian", "Հայերեն"], ["Azerbaijani", "Azərbaycan"], ["Swahili", "Kiswahili"], ["Zulu", "isiZulu"],
  ["Afrikaans", "Afrikaans"], ["Amharic", "አማርኛ"], ["Somali", "Soomaali"], ["Yoruba", "Yorùbá"],
  ["Igbo", "Igbo"], ["Hausa", "Hausa"],
].map(([name, native]) => ({ name, native }));

// -------------------------------------------------------------------------
// Open positions (Website-owned content). Edit here to add/remove listings.
// -------------------------------------------------------------------------

export type Opportunity = {
  slug: string;
  title: string;
  projectCode: string;
  summary: string;
  description: string;
  category: (typeof PROJECT_CATEGORIES)[number];
  workType: (typeof WORK_TYPES)[number];
  engagement: string;
  experienceLevel: (typeof EXPERIENCE_LEVELS)[number];
  languages: string[];
  locales: string[];
  responsibilities: string[];
  requirements: string[];
  preferredExperience: string[];
  requiredProficiency?: string;
  minWeeklyHours?: number;
  duration?: string;
  compensation?: string; // shown as-is; leave undefined to display "Disclosed during selection"
  assessmentNote?: string;
  status: "open" | "paused" | "closed";
};

export const OPPORTUNITIES: Opportunity[] = [
  {
    slug: "malay-ai-language-annotator",
    title: "AI Language Annotator — Malay",
    projectCode: "MS-TEXT-01",
    summary: "Review and annotate Malay text data to help train and evaluate AI language models.",
    description:
      "Valtaris is building high-quality Malay language data for a generative AI project. As an AI Language Annotator you will review AI-generated Malay text, label content, and provide language-specific feedback that helps the model understand Malay more accurately.",
    category: "Text", workType: "Remote", engagement: "Project-based", experienceLevel: "Entry level",
    languages: ["Malay"], locales: ["Malaysia"],
    responsibilities: ["Review AI-generated Malay text", "Identify errors and inconsistencies", "Compare and rank responses", "Follow detailed project guidelines", "Provide language-specific feedback"],
    requirements: ["Native or near-native Malay", "Good English for understanding project instructions", "Strong written communication", "Attention to detail", "Computer and reliable internet access"],
    preferredExperience: ["Translation", "Editing", "Linguistics", "Writing", "Data annotation"],
    requiredProficiency: "Native", minWeeklyHours: 10, duration: "4–8 weeks / ongoing",
    assessmentNote: "Includes a short Malay language assessment during selection.", status: "open",
  },
  {
    slug: "japanese-ai-response-evaluator",
    title: "AI Response Evaluator — Japanese",
    projectCode: "JA-LLM-04",
    summary: "Evaluate and rank AI-generated Japanese responses for quality, accuracy and naturalness.",
    description:
      "Help improve a large language model's Japanese output. You will read model responses, judge them against detailed rubrics, and rank alternatives so the model learns to produce more natural, accurate Japanese.",
    category: "LLM Evaluation", workType: "Remote", engagement: "Ongoing", experienceLevel: "Experienced",
    languages: ["Japanese"], locales: ["Japan"],
    responsibilities: ["Rate AI responses against a rubric", "Compare responses side by side", "Flag unsafe or low-quality output", "Write clear justifications for ratings"],
    requirements: ["Native or near-native Japanese", "Strong reading comprehension", "Good English for guidelines", "Consistent, careful judgment"],
    preferredExperience: ["AI evaluation", "Editing", "Linguistics", "Content moderation"],
    requiredProficiency: "Native", minWeeklyHours: 15, duration: "Ongoing", compensation: "Competitive project-based compensation",
    assessmentNote: "Includes a short evaluation assessment during selection.", status: "open",
  },
  {
    slug: "thai-speech-transcription",
    title: "Speech Transcription Contributor — Thai",
    projectCode: "TH-SPEECH-02",
    summary: "Transcribe Thai audio recordings accurately to build speech datasets for AI.",
    description:
      "Valtaris is collecting and transcribing Thai speech to train speech-recognition systems. You will listen to audio clips and produce accurate, time-aligned transcriptions following our style guide.",
    category: "Speech", workType: "Remote", engagement: "Short-term", experienceLevel: "Entry level",
    languages: ["Thai"], locales: ["Thailand"],
    responsibilities: ["Transcribe Thai audio accurately", "Apply timestamps and speaker labels", "Follow transcription conventions", "Maintain high accuracy"],
    requirements: ["Native Thai listening and writing", "Good hearing and a quiet workspace", "Attention to detail", "Computer with headphones"],
    preferredExperience: ["Transcription", "Editing", "Customer service"],
    requiredProficiency: "Native", minWeeklyHours: 10, duration: "3–6 weeks", status: "open",
  },
  {
    slug: "indonesian-search-relevance-rater",
    title: "Search Relevance Rater — Indonesian",
    projectCode: "ID-SEARCH-03",
    summary: "Judge how relevant search results are for Indonesian queries.",
    description:
      "Help a search system serve better results in Indonesian. You will review query–result pairs and rate their relevance using clear guidelines.",
    category: "Search Evaluation", workType: "Remote", engagement: "Part-time", experienceLevel: "No previous experience",
    languages: ["Indonesian"], locales: ["Indonesia"],
    responsibilities: ["Rate relevance of search results", "Interpret user intent behind queries", "Apply rating guidelines consistently"],
    requirements: ["Native Indonesian", "Good general knowledge of local context", "Reliable internet access"],
    preferredExperience: ["Data annotation", "Research", "Customer service"],
    requiredProficiency: "Native", minWeeklyHours: 5, duration: "Ongoing", status: "open",
  },
  {
    slug: "english-computer-vision-annotator",
    title: "Computer Vision Annotator — English",
    projectCode: "EN-CV-07",
    summary: "Label images and video for computer-vision models (bounding boxes, segmentation).",
    description:
      "Support a computer-vision project by drawing and labeling objects in images and video. Full training on our annotation tools is provided — no prior annotation experience required.",
    category: "Computer Vision", workType: "Remote", engagement: "Long-term", experienceLevel: "No previous experience",
    languages: ["English"], locales: ["Worldwide"],
    responsibilities: ["Draw bounding boxes and polygons", "Label objects and attributes", "Follow annotation guidelines precisely", "Maintain labeling consistency"],
    requirements: ["Good English for instructions", "Strong attention to detail", "Computer with a mouse", "Reliable internet access"],
    preferredExperience: ["Data annotation", "Quality assurance", "Gaming"],
    minWeeklyHours: 20, duration: "Ongoing", status: "open",
  },
  {
    slug: "arabic-llm-preference-evaluator",
    title: "LLM Preference Evaluator — Arabic",
    projectCode: "AR-RLHF-05",
    summary: "Provide human preference data comparing AI responses in Arabic.",
    description:
      "Contribute human preference signals for alignment. You will compare pairs of Arabic AI responses and choose the better one, with a short reason — data used to make the model more helpful and culturally aware.",
    category: "AI Response Evaluation", workType: "Remote", engagement: "Ongoing", experienceLevel: "Experienced",
    languages: ["Arabic"], locales: ["Egypt", "Saudi Arabia"],
    responsibilities: ["Compare pairs of AI responses", "Choose the stronger response", "Explain your reasoning briefly", "Consider cultural and dialect context"],
    requirements: ["Native Arabic (dialect knowledge a plus)", "Good English for guidelines", "Sound judgment and consistency"],
    preferredExperience: ["AI evaluation", "Translation", "Content moderation", "Linguistics"],
    requiredProficiency: "Native", minWeeklyHours: 10, duration: "Ongoing", compensation: "Competitive project-based compensation",
    assessmentNote: "Includes a short evaluation assessment during selection.", status: "open",
  },
  {
    slug: "vietnamese-localization-specialist",
    title: "Localization Specialist — Vietnamese",
    projectCode: "VI-LOC-06",
    summary: "Localize and review Vietnamese content so it reads naturally to native speakers.",
    description:
      "Adapt AI-generated and product content into natural Vietnamese, ensuring tone, terminology and cultural context are right for the local audience.",
    category: "Localization", workType: "Remote", engagement: "Freelance", experienceLevel: "Specialist",
    languages: ["Vietnamese"], locales: ["Vietnam"],
    responsibilities: ["Localize content into natural Vietnamese", "Review and correct machine translations", "Maintain consistent terminology", "Adapt tone and cultural references"],
    requirements: ["Native Vietnamese", "Strong English comprehension", "Localization or translation experience"],
    preferredExperience: ["Localization", "Translation", "Editing", "Terminology"],
    requiredProficiency: "Native", minWeeklyHours: 10, duration: "Project-based", status: "open",
  },
  {
    slug: "spanish-healthcare-domain-expert",
    title: "Domain Expert Evaluator (Healthcare) — Spanish",
    projectCode: "ES-DOM-08",
    summary: "Use healthcare expertise to evaluate AI answers to medical questions in Spanish.",
    description:
      "We need healthcare professionals to review AI-generated medical content in Spanish for accuracy and safety. This is expert evaluation work — your domain knowledge directly improves how safely the model handles health topics.",
    category: "Domain Expert", workType: "Remote", engagement: "Project-based", experienceLevel: "Expert",
    languages: ["Spanish"], locales: ["Spain", "Mexico"],
    responsibilities: ["Evaluate AI medical answers for accuracy", "Flag unsafe or misleading content", "Apply clinical judgment to edge cases", "Document reasoning clearly"],
    requirements: ["Healthcare qualification or professional background", "Native or fluent Spanish", "Good English for guidelines", "Rigorous, careful judgment"],
    preferredExperience: ["Healthcare", "Research", "AI evaluation", "Quality assurance"],
    requiredProficiency: "C1", minWeeklyHours: 8, duration: "4–8 weeks", compensation: "Competitive project-based compensation",
    assessmentNote: "Includes a short domain assessment during selection.", status: "open",
  },
];

export function getOpenOpportunities(): Opportunity[] {
  return OPPORTUNITIES.filter((o) => o.status === "open");
}
export function getOpportunity(slug: string): Opportunity | undefined {
  return OPPORTUNITIES.find((o) => o.slug === slug);
}
export function compensationLabel(o: Opportunity): string {
  return o.compensation ?? "Disclosed during selection";
}
