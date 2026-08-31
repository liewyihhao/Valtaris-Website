import {
  Boxes,
  ScanEye,
  Video,
  Languages,
  AudioLines,
  Scale,
  Gauge,
  Sparkles,
  UserCheck,
  GraduationCap,
  MousePointerClick,
  Bot,
  Database,
  ShieldCheck,
  Car,
  HeartPulse,
  Landmark,
  ShoppingCart,
  Search,
  Building2,
  Camera,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  SITE / BRAND                                                        */
/* ------------------------------------------------------------------ */

export const site = {
  name: "Valtaris",
  legalName: "Valtaris",
  tagline: "Human Intelligence for the AI Era",
  description:
    "Valtaris provides high-quality human data, expert evaluation, and scalable annotation infrastructure for companies building the world's next generation of AI.",
  // Placeholder contact details — replace with real company information.
  email: "hello@valtaris.ai", // [REPLACE] real inbound email
  location: "Kuala Lumpur, Malaysia", // [REPLACE] if needed
  url: "https://valtaris.ai", // [REPLACE] production domain
};

/* ------------------------------------------------------------------ */
/*  NAVIGATION                                                         */
/* ------------------------------------------------------------------ */

export const nav = [
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "About", href: "/about" },
];

/* ------------------------------------------------------------------ */
/*  VALUE PROPS (Home trust strip)                                     */
/* ------------------------------------------------------------------ */

export const valueProps: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Scale",
    body: "Assemble and manage distributed human workforces for large, multi-phase AI data projects.",
    icon: Boxes,
  },
  {
    title: "Quality",
    body: "Qualification, consensus, adjudication and continuous QA engineered into every workflow.",
    icon: ShieldCheck,
  },
  {
    title: "Expertise",
    body: "General contributors alongside domain specialists — linguists, engineers and researchers.",
    icon: GraduationCap,
  },
  {
    title: "Multilingual",
    body: "Coverage across diverse languages and regional contexts, anchored in Southeast Asia.",
    icon: Languages,
  },
  {
    title: "Speed",
    body: "Rapid project scoping and workforce ramp-up so evaluation and labeling start quickly.",
    icon: Gauge,
  },
  {
    title: "Security",
    body: "Confidential projects and customer data handled with disciplined access controls.",
    icon: ShieldCheck,
  },
];

/* ------------------------------------------------------------------ */
/*  SERVICES                                                           */
/* ------------------------------------------------------------------ */

export type Service = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
  icon: LucideIcon;
  group: "Vision" | "Language" | "Evaluation" | "Data";
};

export const services: Service[] = [
  {
    slug: "computer-vision",
    title: "Computer Vision",
    summary:
      "Structured visual data for perception systems — 2D and 3D, static and in motion.",
    points: ["Bounding boxes & polygons", "Semantic segmentation", "Keypoint & pose", "3D point-cloud / LiDAR"],
    icon: ScanEye,
    group: "Vision",
  },
  {
    slug: "image-video-annotation",
    title: "Image & Video Annotation",
    summary:
      "Frame-accurate labeling for detection, tracking and scene understanding at volume.",
    points: ["Object tracking", "Temporal event tagging", "Attribute classification", "Instance segmentation"],
    icon: Video,
    group: "Vision",
  },
  {
    slug: "nlp-text-data",
    title: "NLP & Text Data",
    summary:
      "Text annotation and generation that captures meaning, intent and structure.",
    points: ["Entity & relation tagging", "Classification & sentiment", "Summarization pairs", "Instruction data"],
    icon: Languages,
    group: "Language",
  },
  {
    slug: "audio-speech",
    title: "Audio & Speech",
    summary:
      "Transcription, speech collection and audio labeling across languages and accents.",
    points: ["Transcription & timestamps", "Speech data collection", "Speaker diarization", "Accent & dialect coverage"],
    icon: AudioLines,
    group: "Language",
  },
  {
    slug: "llm-evaluation",
    title: "LLM Evaluation",
    summary:
      "Human judgment on model outputs — accuracy, safety, helpfulness and tone.",
    points: ["Response rating", "Side-by-side comparison", "Rubric-based scoring", "Red-teaming inputs"],
    icon: Scale,
    group: "Evaluation",
  },
  {
    slug: "ai-model-evaluation",
    title: "AI Model Evaluation",
    summary:
      "Structured testing programs that measure model quality against real tasks.",
    points: ["Benchmark task design", "Regression evaluation", "Failure-mode analysis", "Quality dashboards"],
    icon: Gauge,
    group: "Evaluation",
  },
  {
    slug: "human-preference-data",
    title: "Human Preference Data",
    summary:
      "Preference signals and comparison data to align models with human intent.",
    points: ["Pairwise preferences", "Ranking tasks", "RLHF-ready datasets", "Reward-model signal"],
    icon: Sparkles,
    group: "Evaluation",
  },
  {
    slug: "expert-data",
    title: "Expert Data",
    summary:
      "Domain specialists for tasks that demand real subject-matter knowledge.",
    points: ["Coding & STEM", "Medical & legal review", "Finance & research", "Specialist QA"],
    icon: GraduationCap,
    group: "Evaluation",
  },
  {
    slug: "ai-agent-evaluation",
    title: "AI Agent Evaluation",
    summary:
      "Human evaluation of computer-use and agentic systems on real workflows.",
    points: ["Task-completion scoring", "Trajectory review", "Tool-use validation", "Safety checks"],
    icon: MousePointerClick,
    group: "Evaluation",
  },
  {
    slug: "robotics-data",
    title: "Robotics Data",
    summary:
      "Real-world, physical-world data and human demonstrations for embodied AI.",
    points: ["First-person video", "Action & trajectory data", "Teleoperation capture", "Environment collection"],
    icon: Bot,
    group: "Data",
  },
  {
    slug: "data-collection",
    title: "Data Collection",
    summary:
      "Sourced and commissioned datasets built to your specification and consent standards.",
    points: ["Image & video capture", "Speech & audio", "Multilingual text", "Custom collection projects"],
    icon: Database,
    group: "Data",
  },
  {
    slug: "data-quality-validation",
    title: "Data Quality & Validation",
    summary:
      "Independent review, validation and error analysis to certify dataset quality.",
    points: ["Multi-pass review", "Gold-standard audits", "Consensus & adjudication", "Continuous monitoring"],
    icon: ShieldCheck,
    group: "Data",
  },
];

/* ------------------------------------------------------------------ */
/*  INDUSTRIES                                                         */
/* ------------------------------------------------------------------ */

export type Industry = {
  slug: string;
  name: string;
  challenge: string;
  solution: string;
  icon: LucideIcon;
};

export const industries: Industry[] = [
  {
    slug: "generative-ai",
    name: "Generative AI",
    challenge: "Need human preference signals to align model behavior.",
    solution: "LLM response evaluation, preference and RLHF-ready data.",
    icon: Sparkles,
  },
  {
    slug: "robotics",
    name: "Robotics",
    challenge: "Need real-world human demonstrations and physical data.",
    solution: "First-person video, action and teleoperation datasets.",
    icon: Bot,
  },
  {
    slug: "autonomous-vehicles",
    name: "Autonomous Vehicles",
    challenge: "Need precise perception data across complex scenes.",
    solution: "3D/LiDAR, segmentation and multi-sensor annotation.",
    icon: Car,
  },
  {
    slug: "healthcare-ai",
    name: "Healthcare AI",
    challenge: "Need expert-reviewed, high-stakes labeled data.",
    solution: "Clinician-in-the-loop annotation and specialist QA.",
    icon: HeartPulse,
  },
  {
    slug: "fintech",
    name: "Fintech",
    challenge: "Need accurate document, risk and language data.",
    solution: "Document extraction, classification and expert review.",
    icon: Landmark,
  },
  {
    slug: "retail",
    name: "Retail",
    challenge: "Need product and shelf understanding at scale.",
    solution: "Catalog tagging, visual search and attribute data.",
    icon: ShoppingCart,
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    challenge: "Need structured product and intent signals.",
    solution: "Query relevance, ranking and catalog enrichment.",
    icon: ShoppingCart,
  },
  {
    slug: "search-recommendation",
    name: "Search & Recommendation",
    challenge: "Need human relevance judgments to tune ranking.",
    solution: "Relevance rating, side-by-side and preference data.",
    icon: Search,
  },
  {
    slug: "enterprise-ai",
    name: "Enterprise AI",
    challenge: "Need reliable evaluation for internal AI systems.",
    solution: "Custom evaluation programs and quality reporting.",
    icon: Building2,
  },
  {
    slug: "computer-vision",
    name: "Computer Vision",
    challenge: "Need structured visual data for perception models.",
    solution: "Image and video annotation across the CV stack.",
    icon: Camera,
  },
];

/* ------------------------------------------------------------------ */
/*  SOLUTIONS (problem-led)                                            */
/* ------------------------------------------------------------------ */

export type Solution = {
  slug: string;
  title: string;
  problem: string;
  approach: string;
  services: string[];
  icon: LucideIcon;
};

export const solutions: Solution[] = [
  {
    slug: "build-training-datasets",
    title: "Build Training Datasets",
    problem: "You need large, clean, well-structured data to train a model.",
    approach:
      "We design the labeling schema, qualify contributors, and run multi-pass QA to deliver training-ready datasets.",
    services: ["Image & Video Annotation", "NLP & Text Data", "Data Collection"],
    icon: Database,
  },
  {
    slug: "improve-model-accuracy",
    title: "Improve Model Accuracy",
    problem: "Your model underperforms on specific cases or edge conditions.",
    approach:
      "We surface failure modes, generate targeted data, and validate improvements with structured evaluation.",
    services: ["Data Quality & Validation", "AI Model Evaluation", "Expert Data"],
    icon: Gauge,
  },
  {
    slug: "evaluate-llms",
    title: "Evaluate LLMs",
    problem: "You need trustworthy human judgment on model outputs.",
    approach:
      "We build rubrics, calibrate raters, and run rating, comparison and red-teaming programs at scale.",
    services: ["LLM Evaluation", "Human Preference Data", "AI Agent Evaluation"],
    icon: Scale,
  },
  {
    slug: "build-multilingual-ai",
    title: "Build Multilingual AI",
    problem: "You need regional language and cultural understanding.",
    approach:
      "We assemble native-speaker teams for speech, text and linguistic evaluation across target locales.",
    services: ["Audio & Speech", "NLP & Text Data", "Data Collection"],
    icon: Languages,
  },
  {
    slug: "test-ai-agents",
    title: "Test AI Agents",
    problem: "You need to know whether your agent completes real tasks safely.",
    approach:
      "We evaluate computer-use trajectories, tool calls and outcomes against defined success criteria.",
    services: ["AI Agent Evaluation", "AI Model Evaluation", "Expert Data"],
    icon: MousePointerClick,
  },
  {
    slug: "generate-human-preference-data",
    title: "Generate Human Preference Data",
    problem: "You need preference signal to align and reward-model your system.",
    approach:
      "We produce pairwise, ranked and rubric-scored preference data ready for alignment pipelines.",
    services: ["Human Preference Data", "LLM Evaluation", "Expert Data"],
    icon: Sparkles,
  },
  {
    slug: "collect-real-world-data",
    title: "Collect Real-World Data",
    problem: "You need original data from the physical world, ethically sourced.",
    approach:
      "We commission image, video, speech and robotics data to your spec with consent and quality controls.",
    services: ["Robotics Data", "Data Collection", "Audio & Speech"],
    icon: Camera,
  },
  {
    slug: "scale-human-evaluation",
    title: "Scale Human Evaluation",
    problem: "You need to expand evaluation without losing consistency.",
    approach:
      "We stand up managed evaluation teams with calibration, monitoring and reporting built in.",
    services: ["AI Model Evaluation", "LLM Evaluation", "Data Quality & Validation"],
    icon: BrainCircuit,
  },
];

/* ------------------------------------------------------------------ */
/*  WORKFLOW (AI + human)                                              */
/* ------------------------------------------------------------------ */

export const workflow: { step: string; label: string; detail: string }[] = [
  { step: "01", label: "Raw Data", detail: "Source or ingest customer data." },
  { step: "02", label: "AI Pre-Annotation", detail: "Models handle the obvious cases." },
  { step: "03", label: "Human Annotation", detail: "Trained contributors label the rest." },
  { step: "04", label: "Expert Review", detail: "Specialists resolve hard edge cases." },
  { step: "05", label: "Quality Control", detail: "Consensus, gold tasks, adjudication." },
  { step: "06", label: "Validated Dataset", detail: "Certified, structured, delivery-ready." },
  { step: "07", label: "Model Training", detail: "Feeds your training pipeline." },
  { step: "08", label: "Model Evaluation", detail: "Human evaluation closes the loop." },
];

/* ------------------------------------------------------------------ */
/*  QUALITY PILLARS                                                    */
/* ------------------------------------------------------------------ */

export const qualityPillars: { title: string; body: string }[] = [
  { title: "Contributor qualification", body: "Screening and skills testing before any production work." },
  { title: "Training & calibration", body: "Task-specific onboarding and continuous calibration." },
  { title: "Gold-standard tasks", body: "Hidden benchmark items measure ongoing accuracy." },
  { title: "Multiple-pass review", body: "Independent passes catch and correct errors." },
  { title: "Consensus", body: "Agreement across contributors before a label is accepted." },
  { title: "Adjudication", body: "Senior reviewers resolve disagreement on hard items." },
  { title: "Expert review", body: "Domain specialists validate high-stakes data." },
  { title: "Continuous monitoring", body: "Live dashboards track quality across the project." },
  { title: "Error analysis", body: "Root-cause review feeds back into training." },
];

/* ------------------------------------------------------------------ */
/*  WORKFORCE                                                          */
/* ------------------------------------------------------------------ */

export const workforceCategories: { title: string; body: string; icon: LucideIcon }[] = [
  { title: "General contributors", body: "Trained, qualified annotators for high-volume tasks.", icon: UserCheck },
  { title: "Language specialists", body: "Native speakers across target languages and dialects.", icon: Languages },
  { title: "AI evaluators", body: "Calibrated raters for model and agent evaluation.", icon: Scale },
  { title: "Domain experts", body: "Medical, legal, finance and scientific reviewers.", icon: GraduationCap },
  { title: "Programmers & engineers", body: "Technical contributors for code and STEM data.", icon: BrainCircuit },
  { title: "Researchers", body: "Specialists for complex, novel data problems.", icon: Sparkles },
  { title: "Data collectors", body: "Field teams for real-world and physical data.", icon: Camera },
  { title: "Quality reviewers", body: "Dedicated QA layer independent of production.", icon: ShieldCheck },
];

// [REPLACE] with verified company metrics before launch.
export const stats: { value: string; label: string; placeholder: boolean }[] = [
  { value: "XX+", label: "Qualified contributors", placeholder: true },
  { value: "XX", label: "Languages supported", placeholder: true },
  { value: "XX", label: "Countries reached", placeholder: true },
  { value: "XX", label: "Projects delivered", placeholder: true },
];

/* ------------------------------------------------------------------ */
/*  CASE STUDIES (placeholders — do not fabricate)                     */
/* ------------------------------------------------------------------ */

export const caseStudies = [
  {
    id: "01",
    client: "[Client / Industry]",
    project: "[Project]",
    challenge: "[Challenge]",
    solution: "[Solution]",
    result: "[Result]",
  },
  {
    id: "02",
    client: "[Client / Industry]",
    project: "[Project]",
    challenge: "[Challenge]",
    solution: "[Solution]",
    result: "[Result]",
  },
  {
    id: "03",
    client: "[Client / Industry]",
    project: "[Project]",
    challenge: "[Challenge]",
    solution: "[Solution]",
    result: "[Result]",
  },
];

/* ------------------------------------------------------------------ */
/*  TRUST / COMPLIANCE (placeholders — claim nothing unverified)       */
/* ------------------------------------------------------------------ */

export const trustPlaceholders: { title: string; note: string }[] = [
  { title: "[Security Certification]", note: "Add once obtained" },
  { title: "[Compliance Standard]", note: "e.g. regional data regulation" },
  { title: "[Enterprise Security]", note: "Access control & isolation" },
  { title: "[Data Protection]", note: "Handling & retention policy" },
  { title: "[NDA Availability]", note: "Confidentiality on request" },
  { title: "[Quality Standard]", note: "Internal QA framework" },
];

export { Camera, Database, ScanEye };
