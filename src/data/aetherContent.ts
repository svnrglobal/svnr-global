// Brand + model definitions for Cassian (SVNR's AI layer).
// Cassian is the family name. Three models sit under it:
//   Cassian Ora    (free)      — clear answers about SVNR
//   Cassian Prose  (paid)      — connects to your company documents, knows your business at scale
//   Cassian Soleth (flagship)  — builds agents and operates autonomously
// Filename stays aetherContent.ts for import stability; exports are Cassian-named.

export const CASSIAN = {
  brand: "Cassian",
  tagline: "The intelligence layer for premium acquisition.",
  intro:
    "Cassian is SVNR's AI. Talk to it about your pipeline, your market, and exactly what SVNR would build for you.",
};

// Ora's free usage limit.
export const ORA_LIMIT = 20;
export const ORA_WINDOW_MS = 5 * 60 * 60 * 1000; // 5 hours

export interface CassianModel {
  id: "ora" | "prose" | "soleth";
  name: string; // short name: Ora / Prose / Soleth
  fullName: string; // Cassian Ora / Cassian Prose / Cassian Soleth
  tier: string;
  verb: string; // Answers / Knows / Operates
  tagline: string;
  blurb: string;
  capabilities: string[];
  access: "free" | "paid";
  flagship?: boolean;
}

export const CASSIAN_MODELS: CassianModel[] = [
  {
    id: "ora",
    name: "Ora",
    fullName: "Cassian Ora",
    tier: "Free",
    verb: "Answers",
    access: "free",
    tagline: "Clear answers about SVNR.",
    blurb:
      "The free model. Ask Ora anything about SVNR, the services, your sector fit, pricing, and how to get started.",
    capabilities: [
      "Curated answers across every sector and service",
      "Sector fit and pricing guidance",
      "20 questions every 5 hours",
    ],
  },
  {
    id: "prose",
    name: "Prose",
    fullName: "Cassian Prose",
    tier: "Pro",
    verb: "Knows",
    access: "paid",
    tagline: "Knows your company at scale, from your own documents.",
    blurb:
      "A paid model that connects to your company's documents and knowledge. It reads your files, learns how your business actually works, and reasons over everything you give it, then drafts outreach, plans, and positioning grounded in your real context.",
    capabilities: [
      "Everything in Ora",
      "Connects to your company documents",
      "Knows your business at scale, from your own files",
      "Multi-step research and drafting in your voice",
      "Deeper, tailored reasoning and higher limits",
    ],
  },
  {
    id: "soleth",
    name: "Soleth",
    fullName: "Cassian Soleth",
    tier: "Flagship",
    verb: "Operates",
    access: "paid",
    flagship: true,
    tagline: "The flagship. Builds agents and operates autonomously.",
    blurb:
      "The most capable model. Soleth builds and runs AI agents and voice agents, and operates your acquisition autonomously alongside your team, from outreach to follow-up to pipeline, end to end. It also watches the world around your business, markets, policy, and risk, and moves early to keep you ahead of it.",
    capabilities: [
      "Everything in Prose",
      "Builds and runs AI agents and voice agents",
      "Operates autonomously across your tools",
      "Watches markets, policy and global risk, and acts early",
      "Outreach, calls, follow-up and pipeline, end to end",
      "Highest limits and priority",
    ],
  },
];

export const UPGRADE_NOTE =
  "Prose and Soleth are paid models. When you are ready to upgrade, our team sets it up with you.";

// Per-page greeting + starter prompts for the Ora launcher, matched by the
// most specific path prefix.
export interface CassianPageContent {
  greeting: string;
  prompts: string[];
}

const HOME: CassianPageContent = {
  greeting:
    "SVNR builds the system that brings the right clients to you. What would you like to understand better?",
  prompts: [
    "What does SVNR actually build?",
    "How is this different from a marketing agency?",
    "What would this look like for my sector?",
    "What does an engagement cost?",
  ],
};

const PAGES: Record<string, CassianPageContent> = {
  "/": HOME,
  "/services": {
    greeting: "Each service plugs into the same system. What are you trying to fix in your pipeline?",
    prompts: [
      "Which service do I actually need?",
      "How does the AI receptionist work?",
      "What does Client Acquisition include?",
      "What is Revenue Operations?",
    ],
  },
  "/sectors": {
    greeting:
      "Each vertical works differently. Which sector are you in? I can tell you exactly what SVNR would build for your market.",
    prompts: [
      "Do you work with premium real estate?",
      "Do you work with private equity and family offices?",
      "Do you work with luxury rugs and home textiles?",
      "What if my sector is not listed?",
    ],
  },
  "/engagement": {
    greeting:
      "There are three levels of infrastructure. Tell me where your pipeline is today and I will tell you which one fits.",
    prompts: [
      "What are the engagement tiers?",
      "How is pricing scoped?",
      "What does an engagement cost?",
      "Campaign vs infrastructure, what is the difference?",
    ],
  },
  "/compare": {
    greeting:
      "If you are weighing SVNR against an agency or doing it in-house, I can lay out the real differences.",
    prompts: [
      "How is this different from a marketing agency?",
      "What makes this hard to copy?",
      "Is this done for me, or do I run it?",
      "What ROI should I expect?",
    ],
  },
  "/about": {
    greeting: "SVNR has an unusual background for this kind of work. What would you like to know?",
    prompts: [
      "Who is the founder?",
      "Where is SVNR based?",
      "Who do you work with?",
      "What makes this hard to copy?",
    ],
  },
  "/founder": {
    greeting:
      "SVNR has an unusual background for this kind of work. What would you like to know about Hamza?",
    prompts: [
      "Who is the founder?",
      "Where is SVNR based?",
      "Who do you work with?",
      "How do I book a call?",
    ],
  },
  "/case-studies": {
    greeting:
      "These are real engagements. Tell me your sector and I will point you to the most relevant one.",
    prompts: [
      "What results have you produced?",
      "Is there a case study for my sector?",
      "How fast do I see results?",
      "Could this work for my business?",
    ],
  },
  "/blog": {
    greeting: "Does any of this map to something you are currently working through?",
    prompts: [
      "What is Cassian?",
      "What are Ora, Prose and Soleth?",
      "What would this look like for my sector?",
      "How do I get started?",
    ],
  },
  "/contact": {
    greeting:
      "If you have a specific question about how an engagement works or what it costs, I can answer that directly.",
    prompts: [
      "What does an engagement cost?",
      "How fast do I see results?",
      "How do I get started?",
      "What do you need from me to start?",
    ],
  },
  "/cassian": {
    greeting:
      "I am Ora, the free Cassian model. Ask me about SVNR, your sector, pricing, or how SVNR would build for you.",
    prompts: [
      "What is Cassian?",
      "What are Ora, Prose and Soleth?",
      "What would SVNR build for me?",
      "How do I get started?",
    ],
  },
};

// /aether kept as an alias so the old greeting still resolves if anything hits it.
PAGES["/aether"] = PAGES["/cassian"];

/** Returns the Cassian page content for a pathname, matching the most specific prefix. */
export function getCassianContent(pathname: string): CassianPageContent {
  const path = pathname || "/";
  if (PAGES[path]) return PAGES[path];
  const keys = Object.keys(PAGES)
    .filter((k) => k !== "/" && path.startsWith(k))
    .sort((a, b) => b.length - a.length);
  if (keys[0]) return PAGES[keys[0]];
  return HOME;
}

// Tips Cassian can give, shown in the teaser carousel to preview the kind of
// thinking members get. Voice: no em dashes, no exclamation points.
export const CASSIAN_TIPS: string[] = [
  "Referrals feel free, but they quietly cap how fast you can grow.",
  "The best time to reach a buyer is before they start looking. The signals are findable.",
  "A campaign ends. Infrastructure compounds. The gap shows by month three.",
  "One researched reply in 14 minutes beats a hundred cold sends.",
  "You can reach principals directly, without portals, ads, or trade fairs.",
  "Most pipelines break at follow-up. A system does not forget, and does not stop.",
  "A shift in policy or supply can reach your pipeline weeks before the news does. It is worth seeing early.",
];
