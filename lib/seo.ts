// -------------------------------------------------------------------------
// SEO content pack — unique on-page copy for every Services / Solutions /
// Industries detail page, plus the Company pages. Centralised so meta, H1s
// and body copy stay unique per page (no templated duplicates) and internal
// linking is data-driven. Positioning leads on Southeast Asia.
// -------------------------------------------------------------------------

import {
  ScanEye, Video, Languages, AudioLines, Scale, Gauge, Database, TrendingUp,
  ClipboardCheck, Globe2, Bot, Sparkles, Car, HeartPulse, Landmark, ShoppingCart,
  type LucideIcon,
} from "lucide-react";

export type SeoSection = { heading: string; body: string };
export type RelatedLink = { label: string; href: string };

export type SeoPage = {
  slug: string; // path segment (e.g. "computer-vision")
  section: "services" | "solutions" | "industries";
  name: string; // short label for cards / nav / breadcrumbs
  cardSummary: string; // one-line summary for hub cards
  icon: LucideIcon;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: SeoSection[];
  related: RelatedLink[];
};

/* ===================================================================== */
/*  SERVICES                                                             */
/* ===================================================================== */

export const services: SeoPage[] = [
  {
    slug: "computer-vision",
    section: "services",
    name: "Computer Vision",
    cardSummary: "Human-verified training data for detection, segmentation, classification and tracking.",
    icon: ScanEye,
    primaryKeyword: "computer vision data annotation services",
    secondaryKeywords: ["CV training data", "perception model data", "object detection dataset labeling"],
    metaTitle: "Computer Vision Data Annotation Services | Valtaris",
    metaDescription:
      "Training data for object detection, segmentation, tracking, and classification models. Human-verified computer vision annotation at production scale.",
    h1: "Data that teaches machines to see accurately",
    intro:
      "Vision models fail quietly — a mislabeled edge case doesn't throw an error, it just ships a wrong prediction. We build the labeled datasets behind perception systems for detection, segmentation, classification, and tracking, with annotators certified per task type and a QA layer that catches the errors a single reviewer misses.",
    sections: [
      {
        heading: "Where we help",
        body: "Object detection and bounding-box datasets for retail, security, and industrial inspection; instance and semantic segmentation for robotics and manufacturing defect detection; pose and keypoint estimation for fitness, sports, and human-motion models; multi-object tracking across video for surveillance and traffic analytics.",
      },
      {
        heading: "How we keep it accurate",
        body: "Gold-standard tasks seeded into every batch, inter-annotator agreement scoring on ambiguous classes, and a human validator review layer before delivery — so class boundaries stay consistent across thousands of images, not just the first hundred.",
      },
    ],
    related: [
      { label: "Image & Video Annotation", href: "/services/image-video-annotation" },
      { label: "Build Training Datasets", href: "/solutions/build-training-datasets" },
      { label: "Autonomous Vehicles", href: "/industries/autonomous-vehicles" },
      { label: "Robotics", href: "/industries/robotics" },
    ],
  },
  {
    slug: "image-video-annotation",
    section: "services",
    name: "Image & Video Annotation",
    cardSummary: "Boxes, polygons, masks and frame-accurate video tracking, in your model's native format.",
    icon: Video,
    primaryKeyword: "image and video annotation services",
    secondaryKeywords: ["video labeling company", "bounding box polygon annotation", "frame-by-frame video tagging"],
    metaTitle: "Image & Video Annotation Services | Valtaris",
    metaDescription:
      "Bounding boxes, polygons, semantic segmentation, and frame-accurate video tracking — image and video annotation delivered in your model's native format.",
    h1: "Image and video labeling, format-ready for your pipeline",
    intro:
      "This is the production layer underneath computer vision, generative AI, and robotics projects alike: the actual annotation work, done to spec, in whatever format your training pipeline expects. Bounding boxes, polygons, cuboids, semantic and instance segmentation masks, keypoints, and video object tracking with frame-to-frame consistency.",
    sections: [
      {
        heading: "Formats and tooling",
        body: "Exports in COCO, YOLO, Pascal VOC, or your custom schema. Video work includes interpolation-checked tracking so an object doesn't silently drift or disappear between keyframes, plus shot-level metadata tagging for content and moderation use cases.",
      },
      {
        heading: "Scale without drift",
        body: "Large image and video batches are the easiest place for label quality to decay over time. We control for that with rotating gold tasks, versioned guidelines annotators must re-acknowledge on change, and sampled human review throughout the batch — not just at the start.",
      },
    ],
    related: [
      { label: "Computer Vision", href: "/services/computer-vision" },
      { label: "Build Training Datasets", href: "/solutions/build-training-datasets" },
      { label: "Autonomous Vehicles", href: "/industries/autonomous-vehicles" },
      { label: "Robotics", href: "/industries/robotics" },
    ],
  },
  {
    slug: "nlp-text-data",
    section: "services",
    name: "NLP & Text Data",
    cardSummary: "Classification, entity extraction and sentiment labeled by native-fluency, domain-matched teams.",
    icon: Languages,
    primaryKeyword: "NLP data annotation services",
    secondaryKeywords: ["text data labeling", "named entity recognition annotation", "text classification dataset"],
    metaTitle: "NLP & Text Data Annotation Services | Valtaris",
    metaDescription:
      "Text classification, entity extraction, sentiment labeling, and text data curation for NLP models — annotated by native-fluency, domain-matched teams.",
    h1: "Text data labeled by people who actually read it",
    intro:
      "Language is contextual in a way pixels aren't — sarcasm, negation, and domain jargon break naive labeling instructions constantly. Our text annotation teams are matched by language proficiency and, where the task calls for it, subject-matter background, so nuance survives into the labels.",
    sections: [
      {
        heading: "What we label",
        body: "Text classification and topic tagging, named entity recognition, sentiment and intent labeling, relation extraction, summarization quality scoring, and text data collection or curation for pretraining and fine-tuning corpora.",
      },
      {
        heading: "Handling the hard cases",
        body: "Every text project starts with a calibration pass — a small set of deliberately ambiguous examples — to confirm annotators and guidelines agree before the batch scales. That single step catches most of the systematic labeling drift that shows up as a confusing accuracy plateau three weeks into a project.",
      },
    ],
    related: [
      { label: "Audio & Speech", href: "/services/audio-speech" },
      { label: "Build Multilingual AI", href: "/solutions/build-multilingual-ai" },
      { label: "Healthcare AI", href: "/industries/healthcare-ai" },
      { label: "Fintech", href: "/industries/fintech" },
    ],
  },
  {
    slug: "audio-speech",
    section: "services",
    name: "Audio & Speech",
    cardSummary: "Transcription, diarization and accent-diverse speech data, QA-checked by ear.",
    icon: AudioLines,
    primaryKeyword: "audio and speech data annotation",
    secondaryKeywords: ["speech transcription services", "speaker diarization labeling", "audio classification dataset"],
    metaTitle: "Audio & Speech Data Annotation Services | Valtaris",
    metaDescription:
      "Transcription, speaker diarization, audio event tagging, and accent-diverse speech data for voice AI models — annotated and QA-checked by ear.",
    h1: "Speech and audio data, labeled by ear",
    intro:
      "Voice AI breaks on the accents, dialects, and background noise its training data didn't cover. We build audio datasets with deliberate coverage across accent, speaker demographic, and recording condition, transcribed and tagged by annotators fluent in the source language — with particularly deep coverage across Southeast Asian languages and accents.",
    sections: [
      {
        heading: "What we cover",
        body: "Verbatim and clean transcription, speaker diarization and identification, intent and emotion tagging, audio event and sound classification, wake-word and keyword-spotting data, and pronunciation or accent labeling for multilingual voice models.",
      },
      {
        heading: "Quality on a moving target",
        body: "Audio is harder to spot-check than text or images — a reviewer has to actually listen. We build listening-based QA sampling into every batch rather than relying on transcript-only review, which is where most audio quality problems hide.",
      },
    ],
    related: [
      { label: "NLP & Text Data", href: "/services/nlp-text-data" },
      { label: "Build Multilingual AI", href: "/solutions/build-multilingual-ai" },
      { label: "Generative AI", href: "/industries/generative-ai" },
    ],
  },
  {
    slug: "llm-evaluation",
    section: "services",
    name: "LLM Evaluation",
    cardSummary: "Rubric scoring, pairwise comparison and red-teaming by calibrated human evaluators.",
    icon: Scale,
    primaryKeyword: "LLM evaluation services",
    secondaryKeywords: ["large language model evaluation", "RLHF pairwise comparison", "hallucination detection evaluation"],
    metaTitle: "LLM Evaluation Services | Valtaris",
    metaDescription:
      "Rubric-based human evaluation, pairwise comparison, and red-teaming for large language models — hallucination, helpfulness, and safety scoring.",
    h1: "Human judgment on your model's output, at scale",
    intro:
      "Automated metrics don't catch a confidently wrong answer. We run structured human evaluation on LLM outputs — rubric scoring, pairwise preference comparison, and adversarial red-teaming — using evaluators trained on your model's specific guidelines, not a generic quality checklist.",
    sections: [
      {
        heading: "Evaluation types",
        body: "Response quality scoring against a custom rubric (helpfulness, factual accuracy, tone, formatting); pairwise and best-of-N comparison for RLHF and model-selection decisions; hallucination and factual-consistency checks against source documents; red-teaming for harmful, biased, or policy-violating outputs; and multi-turn conversation evaluation for chat and agent use cases.",
      },
      {
        heading: "Evaluator quality",
        body: "Evaluators are calibrated against a gold answer set before scoring live data and re-checked periodically with hidden calibration items, so a rubric score means the same thing on day one and day ninety of a project.",
      },
    ],
    related: [
      { label: "Evaluate LLMs", href: "/solutions/evaluate-llms" },
      { label: "Test AI Agents", href: "/solutions/test-ai-agents" },
      { label: "Generate Human Preference Data", href: "/solutions/human-preference-data" },
      { label: "Generative AI", href: "/industries/generative-ai" },
    ],
  },
  {
    slug: "ai-model-evaluation",
    section: "services",
    name: "AI Model Evaluation",
    cardSummary: "Human-in-the-loop benchmarking and error analysis for any model — not just LLMs.",
    icon: Gauge,
    primaryKeyword: "AI model evaluation services",
    secondaryKeywords: ["model benchmarking services", "human-in-the-loop model testing", "model error analysis"],
    metaTitle: "AI Model Evaluation Services | Valtaris",
    metaDescription:
      "Human-in-the-loop benchmarking, error analysis, and regression testing for AI models of any kind — not just LLMs. Find failure modes before your users do.",
    h1: "Find out where your model actually breaks",
    intro:
      "Aggregate accuracy hides the failures that matter — the 3% of cases that are also your highest-value customers. We evaluate model output across vision, tabular, recommendation, and language models alike, with human review targeted at the edge cases automated metrics can't judge.",
    sections: [
      {
        heading: "What this covers",
        body: "Structured error analysis and failure-mode categorization, benchmark dataset construction and scoring, release-over-release regression testing, and adversarial or edge-case testing designed to stress a model rather than confirm what it already does well.",
      },
      {
        heading: "How it's different from LLM Evaluation",
        body: "Our LLM Evaluation service is purpose-built for chat, generation, and agent outputs; AI Model Evaluation is the broader benchmarking and error-analysis service for any model type — computer vision classifiers, recommendation systems, fraud models, and traditional ML — where the question is “where does this break” rather than “how good is this response.”",
      },
    ],
    related: [
      { label: "LLM Evaluation", href: "/services/llm-evaluation" },
      { label: "Improve Model Accuracy", href: "/solutions/improve-model-accuracy" },
      { label: "Fintech", href: "/industries/fintech" },
      { label: "Healthcare AI", href: "/industries/healthcare-ai" },
    ],
  },
];

/* ===================================================================== */
/*  SOLUTIONS                                                            */
/* ===================================================================== */

export const solutions: SeoPage[] = [
  {
    slug: "build-training-datasets",
    section: "solutions",
    name: "Build Training Datasets",
    cardSummary: "Go from zero to a production-ready dataset — sourcing, labeling and QA as one pipeline.",
    icon: Database,
    primaryKeyword: "build custom AI training dataset",
    secondaryKeywords: ["training data creation service", "dataset sourcing and labeling", "machine learning dataset from scratch"],
    metaTitle: "Build Custom AI Training Datasets | Valtaris",
    metaDescription:
      "Go from zero to a production-ready training dataset — sourcing, labeling, QA, and delivery managed as one pipeline, not three separate vendors.",
    h1: "From nothing to a training-ready dataset",
    intro:
      "Teams starting a new model rarely have a data problem so much as a data-pipeline problem: sourcing, labeling, and QA usually sit with different vendors that don't talk to each other. We run it as one program, so the dataset that reaches you is already validated, not just delivered.",
    sections: [
      {
        heading: "How the engagement runs",
        body: "We start by defining the taxonomy and edge cases with you, build and test guidelines against a small sample batch, then scale annotation with consensus scoring and human validation layered in throughout — not audited after the fact once errors are already baked into your model.",
      },
      {
        heading: "Good for",
        body: "Teams building a model in a domain with no existing labeled dataset, teams whose current data was scraped or weakly labeled and needs a real ground-truth pass, and teams that need a dataset built to a specific schema for a specific downstream architecture.",
      },
    ],
    related: [
      { label: "Computer Vision", href: "/services/computer-vision" },
      { label: "NLP & Text Data", href: "/services/nlp-text-data" },
      { label: "Image & Video Annotation", href: "/services/image-video-annotation" },
      { label: "Improve Model Accuracy", href: "/solutions/improve-model-accuracy" },
    ],
  },
  {
    slug: "improve-model-accuracy",
    section: "solutions",
    name: "Improve Model Accuracy",
    cardSummary: "Diagnose whether it's your data or your model, then re-label the batches holding you back.",
    icon: TrendingUp,
    primaryKeyword: "improve AI model accuracy",
    secondaryKeywords: ["data quality for machine learning", "model error correction data", "edge case data labeling"],
    metaTitle: "Improve AI Model Accuracy with Better Training Data | Valtaris",
    metaDescription:
      "Stuck at an accuracy plateau? We diagnose whether it's your data or your model, then mine edge cases and re-label the batches actually holding you back.",
    h1: "When more data isn't fixing the accuracy problem",
    intro:
      "A model that's plateaued usually isn't short on data volume — it's short on the right data. We start with error analysis on your current model's failures, trace them back to gaps or inconsistencies in the training set, and target new and re-labeled data specifically at what's actually wrong.",
    sections: [
      {
        heading: "How we approach it",
        body: "Failure clustering against your validation set to find which classes or scenarios drive most of the error; targeted sourcing or synthetic augmentation to fill the gaps that surfaces; re-annotation of existing batches where label inconsistency, not data scarcity, turns out to be the real cause.",
      },
      {
        heading: "Good for",
        body: "Teams with a model already in production whose accuracy has stalled, teams that suspect labeling inconsistency in an existing dataset but haven't had the bandwidth to audit it, and teams preparing for a model version bump who want to close known gaps first.",
      },
    ],
    related: [
      { label: "AI Model Evaluation", href: "/services/ai-model-evaluation" },
      { label: "Build Training Datasets", href: "/solutions/build-training-datasets" },
      { label: "Computer Vision", href: "/services/computer-vision" },
    ],
  },
  {
    slug: "evaluate-llms",
    section: "solutions",
    name: "Evaluate LLMs",
    cardSummary: "The ongoing evaluation harness that benchmarks quality release over release.",
    icon: ClipboardCheck,
    primaryKeyword: "LLM benchmarking and evaluation program",
    secondaryKeywords: ["compare LLM outputs", "model release regression testing", "evaluate large language models before launch"],
    metaTitle: "LLM Benchmarking & Evaluation Programs | Valtaris",
    metaDescription:
      "Ship model updates with confidence. We build the ongoing human evaluation harness that benchmarks quality release over release, not just once.",
    h1: "Know your model is better before you ship it",
    intro:
      "A single evaluation run tells you how a model performs today; it doesn't tell you whether the next release is actually an improvement. We build repeatable evaluation programs — the same rubric, the same held-out test set, the same calibrated evaluators — so every release comparison means something.",
    sections: [
      {
        heading: "What this includes",
        body: "Evaluation harness and rubric design tailored to your product's definition of quality, held-out benchmark sets that don't leak into training data, release-over-release comparison reporting, and competitive benchmarking against other models on the market.",
      },
      {
        heading: "How it differs from our LLM Evaluation service",
        body: "LLM Evaluation (see Services) is the operational scoring work — rubrics, pairwise comparison, red-teaming on a given batch. This solution is the program built around it: the recurring cadence, benchmark governance, and reporting that turns one-off evaluation into a decision-making system your team can rely on release after release.",
      },
    ],
    related: [
      { label: "LLM Evaluation", href: "/services/llm-evaluation" },
      { label: "Test AI Agents", href: "/solutions/test-ai-agents" },
      { label: "Generate Human Preference Data", href: "/solutions/human-preference-data" },
      { label: "Generative AI", href: "/industries/generative-ai" },
    ],
  },
  {
    slug: "build-multilingual-ai",
    section: "solutions",
    name: "Build Multilingual AI",
    cardSummary: "Native-fluency annotation, dialect coverage and localization-aware QA for new markets.",
    icon: Globe2,
    primaryKeyword: "multilingual AI training data",
    secondaryKeywords: ["multilingual NLP dataset", "localization data for AI models", "low-resource language data annotation"],
    metaTitle: "Multilingual AI Training Data & Localization | Valtaris",
    metaDescription:
      "Expand your model into new languages and markets with native-fluency annotation, dialect coverage, and localization-aware QA.",
    h1: "Take your model beyond its first language",
    intro:
      "A model that works well in one language doesn't automatically generalize — idiom, script, and cultural context all need their own labeled data, not a translated copy of the English set. We source and annotate with native-fluency teams per target language, with especially deep reach across Southeast Asian languages and dialects, including regional variation where it matters for your use case.",
    sections: [
      {
        heading: "Where this applies",
        body: "Localizing an NLP or LLM product into new markets, building multilingual speech and voice models with accent and dialect coverage, and collecting culturally grounded preference or evaluation data so a model's tone lands correctly outside its original market.",
      },
      {
        heading: "Coverage over translation",
        body: "We treat each target language as its own data problem rather than a translation pass on English guidelines — idioms, sentiment expression, and even what counts as an edge case shift by language, and our guidelines and calibration process are built per language accordingly.",
      },
    ],
    related: [
      { label: "NLP & Text Data", href: "/services/nlp-text-data" },
      { label: "Audio & Speech", href: "/services/audio-speech" },
      { label: "Retail & E-Commerce", href: "/industries/retail" },
    ],
  },
  {
    slug: "test-ai-agents",
    section: "solutions",
    name: "Test AI Agents",
    cardSummary: "Human-judged evaluation of tool use, multi-step reasoning and task completion.",
    icon: Bot,
    primaryKeyword: "AI agent testing and evaluation",
    secondaryKeywords: ["agentic workflow testing", "tool-use evaluation for AI agents", "multi-turn task completion testing"],
    metaTitle: "AI Agent Testing & Evaluation Services | Valtaris",
    metaDescription:
      "Test whether your AI agent actually completes the task — tool use, multi-step reasoning, and recovery from errors, evaluated by humans against real scenarios.",
    h1: "Does your agent actually finish the job?",
    intro:
      "Agent failures rarely look like a wrong single answer — they look like a task that technically “completed” with a broken tool call three steps earlier. We evaluate agents end-to-end: did it choose the right tools, recover from an unexpected response, and reach a correct outcome, not just produce plausible-looking output.",
    sections: [
      {
        heading: "What we test",
        body: "Tool-selection and tool-use accuracy across multi-step tasks, task-completion scoring against realistic scenario sets, failure and recovery behavior when a tool call errors or returns unexpected data, and multi-turn consistency across longer agent sessions.",
      },
      {
        heading: "Good for",
        body: "Teams shipping an agent product who need scenario-based testing beyond unit tests, and teams comparing agent frameworks or model backbones who need a consistent, human-judged completion benchmark to compare against.",
      },
    ],
    related: [
      { label: "LLM Evaluation", href: "/services/llm-evaluation" },
      { label: "AI Model Evaluation", href: "/services/ai-model-evaluation" },
      { label: "Evaluate LLMs", href: "/solutions/evaluate-llms" },
      { label: "Generative AI", href: "/industries/generative-ai" },
    ],
  },
  {
    slug: "human-preference-data",
    section: "solutions",
    name: "Generate Human Preference Data",
    cardSummary: "Pairwise comparisons and preference rankings from trained, calibrated raters for RLHF.",
    icon: Sparkles,
    primaryKeyword: "human preference data for RLHF",
    secondaryKeywords: ["RLHF data collection", "pairwise preference ranking data", "alignment training data"],
    metaTitle: "Human Preference Data for RLHF & Alignment | Valtaris",
    metaDescription:
      "Pairwise comparisons and preference rankings collected from trained, calibrated raters — the human signal behind RLHF and model alignment.",
    h1: "The preference signal behind a model that feels right",
    intro:
      "RLHF and alignment tuning are only as good as the preference judgments that drive them, and a rushed or inconsistent rater pool shows up in the model's personality later. We collect pairwise comparisons and ranked preference data from raters calibrated against your specific definition of a “better” response.",
    sections: [
      {
        heading: "What we deliver",
        body: "Pairwise and N-way response ranking, best-of-N selection data, preference data segmented by criteria (helpfulness, safety, tone, factuality) when a single blended score would hide trade-offs, and demographic or persona-diverse rater pools where your use case calls for it.",
      },
      {
        heading: "Consistency at scale",
        body: "Preference data is uniquely vulnerable to rater drift — the definition of “better” can quietly shift over a long project. We re-calibrate raters against held-out gold comparisons throughout, so preference data collected in week ten is still consistent with week one.",
      },
    ],
    related: [
      { label: "LLM Evaluation", href: "/services/llm-evaluation" },
      { label: "Evaluate LLMs", href: "/solutions/evaluate-llms" },
      { label: "Generative AI", href: "/industries/generative-ai" },
    ],
  },
];

/* ===================================================================== */
/*  INDUSTRIES                                                           */
/* ===================================================================== */

export const industries: SeoPage[] = [
  {
    slug: "generative-ai",
    section: "industries",
    name: "Generative AI",
    cardSummary: "Preference data, safety review and output evaluation for models that create.",
    icon: Sparkles,
    primaryKeyword: "generative AI training data",
    secondaryKeywords: ["data for text-to-image models", "generative model safety evaluation", "content moderation for AI-generated media"],
    metaTitle: "Data & Evaluation for Generative AI Models | Valtaris",
    metaDescription:
      "Training and preference data for text, image, and video generation models, plus human evaluation of generated output for quality and safety.",
    h1: "Data for models that create, not just classify",
    intro:
      "Generative models need a different kind of human input than classifiers do — preference judgments on subjective quality, safety review of what the model can produce, and evaluation that catches a technically-correct-but-wrong output. We support generative AI teams across data sourcing, preference collection, and output evaluation.",
    sections: [
      {
        heading: "Where we help",
        body: "Training and fine-tuning data for text, image, and video generation models; pairwise preference data for aligning generative output to what users actually want; and human review of generated content for safety, bias, and policy compliance before it reaches production.",
      },
      {
        heading: "Good for",
        body: "Teams fine-tuning a foundation model for a specific creative or product use case, and teams that need an ongoing human safety-review layer on generated output rather than a one-time audit.",
      },
    ],
    related: [
      { label: "LLM Evaluation", href: "/services/llm-evaluation" },
      { label: "Generate Human Preference Data", href: "/solutions/human-preference-data" },
      { label: "Evaluate LLMs", href: "/solutions/evaluate-llms" },
    ],
  },
  {
    slug: "robotics",
    section: "industries",
    name: "Robotics",
    cardSummary: "Multi-sensor annotation and manipulation data for perception and control models.",
    icon: Bot,
    primaryKeyword: "training data for robotics",
    secondaryKeywords: ["robotics data annotation", "sensor fusion data labeling", "manipulation task annotation"],
    metaTitle: "Training Data & Annotation for Robotics | Valtaris",
    metaDescription:
      "Multi-sensor annotation — LiDAR, depth, and multi-camera — plus manipulation and task-labeling data for robotics perception and control models.",
    h1: "Perception and manipulation data for real-world robots",
    intro:
      "Robotics data rarely comes from a single sensor, and errors compound across a pipeline in ways that are harder to spot than in a single-image classifier. We annotate across camera, depth, and LiDAR inputs together, keeping objects and events consistent across sensor streams rather than labeling each in isolation.",
    sections: [
      {
        heading: "What we cover",
        body: "Multi-camera and sensor-fusion object annotation, 3D bounding boxes and point-cloud segmentation, manipulation and grasp-task labeling, and simulation-to-real data curation for sim-trained policies being validated against real-world footage.",
      },
      {
        heading: "Good for",
        body: "Teams building perception stacks for warehouse, industrial, or field robotics, and teams validating a sim-trained policy against real sensor data before deployment.",
      },
    ],
    related: [
      { label: "Image & Video Annotation", href: "/services/image-video-annotation" },
      { label: "Computer Vision", href: "/services/computer-vision" },
      { label: "Build Training Datasets", href: "/solutions/build-training-datasets" },
    ],
  },
  {
    slug: "autonomous-vehicles",
    section: "industries",
    name: "Autonomous Vehicles",
    cardSummary: "3D point-cloud, multi-camera and edge-case annotation held to a safety-critical standard.",
    icon: Car,
    primaryKeyword: "autonomous vehicle data annotation",
    secondaryKeywords: ["AV training data", "3D point cloud annotation", "ADAS data labeling"],
    metaTitle: "Autonomous Vehicle Data Annotation | Valtaris",
    metaDescription:
      "3D point cloud, multi-camera, and edge-case scenario annotation for AV and ADAS perception models — built for safety-critical accuracy.",
    h1: "Annotation held to a safety-critical standard",
    intro:
      "There's no acceptable error rate for a model deciding whether an object in the road is a pedestrian. AV and ADAS annotation gets our tightest QA configuration by default — higher-tier annotators only, mandatory consensus on safety-relevant classes, and full audit trails back to who labeled what.",
    sections: [
      {
        heading: "What we cover",
        body: "3D point cloud annotation and object tracking across LiDAR and radar, multi-camera scene labeling with cross-sensor consistency, lane and drivable-surface segmentation, and targeted edge-case and rare-scenario mining — the long-tail weather, occlusion, and unusual-object cases that matter more than another thousand clear-day highway frames.",
      },
      {
        heading: "Good for",
        body: "Teams building perception or prediction models for L2+ ADAS and autonomous driving stacks that need annotation quality documented well enough to survive a safety review.",
      },
    ],
    related: [
      { label: "Computer Vision", href: "/services/computer-vision" },
      { label: "Image & Video Annotation", href: "/services/image-video-annotation" },
      { label: "Build Training Datasets", href: "/solutions/build-training-datasets" },
    ],
  },
  {
    slug: "healthcare-ai",
    section: "industries",
    name: "Healthcare AI",
    cardSummary: "Domain-matched medical imaging and clinical text annotation, privacy-conscious by design.",
    icon: HeartPulse,
    primaryKeyword: "healthcare AI training data",
    secondaryKeywords: ["medical imaging annotation", "clinical NLP data labeling", "HIPAA-conscious data annotation"],
    metaTitle: "Healthcare AI Training Data & Annotation | Valtaris",
    metaDescription:
      "Medical imaging and clinical text annotation by domain-matched teams, with privacy-conscious handling built into the workflow, not added after.",
    h1: "Clinical-grade data for models that touch patient care",
    intro:
      "Healthcare data carries two demands most other domains don't: annotators need enough domain knowledge to label correctly, and every step needs to handle sensitive data properly. We match projects to annotators with relevant clinical or domain background and build de-identification and access controls into the workflow from day one.",
    sections: [
      {
        heading: "What we cover",
        body: "Medical imaging annotation (radiology, pathology, dermatology) with segmentation and finding-level labeling; clinical text and NLP annotation — entity extraction, coding, and de-identification review; and structured evaluation of clinical decision-support or diagnostic-assist model output.",
      },
      {
        heading: "Good for",
        body: "Teams building diagnostic-assist or imaging models that need domain-literate annotators, not generalists guessing at anatomy, and teams whose data-handling requirements rule out a standard crowdsourced pipeline.",
      },
    ],
    related: [
      { label: "NLP & Text Data", href: "/services/nlp-text-data" },
      { label: "Computer Vision", href: "/services/computer-vision" },
      { label: "AI Model Evaluation", href: "/services/ai-model-evaluation" },
    ],
  },
  {
    slug: "fintech",
    section: "industries",
    name: "Fintech",
    cardSummary: "Fraud pattern labeling, document/KYC data and compliance-aware NLP with an audit trail.",
    icon: Landmark,
    primaryKeyword: "fintech AI training data",
    secondaryKeywords: ["fraud detection data labeling", "financial document annotation", "KYC data processing for AI"],
    metaTitle: "Fintech AI Training Data & Annotation | Valtaris",
    metaDescription:
      "Fraud pattern labeling, financial document and KYC data annotation, and compliance-aware NLP data for fintech and banking AI models.",
    h1: "Data for AI that has to get the money right",
    intro:
      "Fintech models operate where a false positive costs a customer and a false negative costs the company — the annotation quality bar has to be higher than average, and every label needs to be traceable if a regulator or auditor asks how a training decision was made.",
    sections: [
      {
        heading: "What we cover",
        body: "Fraud and anomaly-pattern labeling on transaction data, financial document extraction and KYC data processing, sentiment and intent labeling for financial NLP (support, compliance monitoring, advisory chat), and evaluation of model decisions against compliance-relevant criteria.",
      },
      {
        heading: "Good for",
        body: "Teams building fraud-detection or transaction-risk models that need labeled edge cases beyond the obvious patterns, and teams whose model decisions need an audit trail back to training data provenance.",
      },
    ],
    related: [
      { label: "NLP & Text Data", href: "/services/nlp-text-data" },
      { label: "AI Model Evaluation", href: "/services/ai-model-evaluation" },
      { label: "Improve Model Accuracy", href: "/solutions/improve-model-accuracy" },
    ],
  },
  {
    slug: "retail",
    section: "industries",
    name: "Retail & E-Commerce",
    cardSummary: "Catalog tagging, visual search and preference data for search and recommendation AI.",
    icon: ShoppingCart,
    primaryKeyword: "retail AI training data",
    secondaryKeywords: ["product catalog tagging", "visual search training data", "e-commerce recommendation data"],
    metaTitle: "Retail & E-Commerce AI Training Data | Valtaris",
    metaDescription:
      "Product catalog tagging, visual search training data, and customer preference data for retail recommendation and search AI.",
    h1: "Data that helps shoppers find what they actually want",
    intro:
      "Retail AI lives or dies on catalog and preference data quality — a mistagged product or an inconsistent attribute schema quietly degrades search and recommendation for every customer downstream. We label at catalog scale with consistent taxonomy enforcement across the full product range.",
    sections: [
      {
        heading: "What we cover",
        body: "Product catalog tagging and attribute extraction at scale, visual search and similarity training data, customer preference and behavior-signal labeling for recommendation models, and evaluation of search and recommendation relevance against real query sets.",
      },
      {
        heading: "Good for",
        body: "Retail and marketplace teams onboarding a large or fast-changing catalog, and teams building visual search or recommendation systems that need consistent attribute labeling across hundreds of thousands of SKUs.",
      },
    ],
    related: [
      { label: "Computer Vision", href: "/services/computer-vision" },
      { label: "NLP & Text Data", href: "/services/nlp-text-data" },
      { label: "Build Multilingual AI", href: "/solutions/build-multilingual-ai" },
    ],
  },
];

export const seoBySection = { services, solutions, industries };

export function getSeoPage(section: "services" | "solutions" | "industries", slug: string): SeoPage | undefined {
  return seoBySection[section].find((p) => p.slug === slug);
}
