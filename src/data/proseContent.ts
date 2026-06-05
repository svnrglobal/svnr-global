// Per-page content for PROSE — the greeting shown when the chat opens and the
// rotating suggested questions used by the carousel launcher. Matched by the
// most specific path prefix.

export interface ProsePageContent {
  greeting: string;
  prompts: string[];
}

const HOME: ProsePageContent = {
  greeting:
    "SVNR builds the system that brings the right clients to you. What would you like to understand better?",
  prompts: [
    "What does SVNR actually build?",
    "How is this different from a marketing agency?",
    "What would this look like for my sector?",
    "What does an engagement cost?",
  ],
};

const PAGES: Record<string, ProsePageContent> = {
  "/": HOME,

  "/services": {
    greeting:
      "Each service plugs into the same system. What are you trying to fix in your pipeline?",
    prompts: [
      "Which service do I actually need?",
      "How does the AI receptionist work?",
      "What does client acquisition include?",
      "Can you handle inbound and outbound?",
    ],
  },

  "/sectors": {
    greeting:
      "Each vertical works differently. Which sector are you in? I can tell you exactly what SVNR would build for your market.",
    prompts: [
      "What would SVNR build for my industry?",
      "Do you work in my sector?",
      "How do you reach buyers in my market?",
      "Is there proof in my vertical?",
    ],
  },

  "/engagement": {
    greeting:
      "There are three levels of infrastructure. Tell me where your pipeline is today and I will tell you which one fits.",
    prompts: [
      "Which tier is right for me?",
      "What is included at each level?",
      "How is pricing scoped?",
      "Campaign vs infrastructure -- what is the difference?",
    ],
  },

  "/compare": {
    greeting:
      "If you are weighing SVNR against an agency or doing it in-house, I can lay out the real differences.",
    prompts: [
      "How is this different from an agency?",
      "Why not just hire an SDR?",
      "What about other outreach tools?",
      "What makes this hard to copy?",
    ],
  },

  "/about": {
    greeting:
      "SVNR has an unusual background for this kind of work. What would you like to know?",
    prompts: [
      "Who is Hamza?",
      "Why does SVNR's background matter?",
      "How many clients do you take on?",
      "Where is SVNR based?",
    ],
  },

  "/founder": {
    greeting:
      "SVNR has an unusual background for this kind of work. What would you like to know about Hamza?",
    prompts: [
      "Who is Hamza?",
      "Why does the rug-trade background matter here?",
      "Does he run engagements personally?",
      "How do I speak with him?",
    ],
  },

  "/case-studies": {
    greeting:
      "These are real engagements. Tell me your sector and I will point you to the most relevant one.",
    prompts: [
      "What results have you produced?",
      "Is there a case study for my sector?",
      "How fast did these clients see results?",
      "Could this work for my business?",
    ],
  },

  "/blog": {
    greeting:
      "Does any of this map to something you are currently working through?",
    prompts: [
      "How would this work for my business?",
      "Is my industry a fit?",
      "What would results look like for me?",
      "How do I get started?",
    ],
  },

  "/contact": {
    greeting:
      "If you have a specific question about how an engagement works or what it costs, I can answer that directly.",
    prompts: [
      "What does an engagement cost?",
      "How fast are results?",
      "How do we get started?",
      "What do you need from me to begin?",
    ],
  },

  "/prose": {
    greeting:
      "Tell me about your business. I will tell you whether SVNR is relevant to what you are trying to build.",
    prompts: [
      "Here is what my business does...",
      "My problem is an unpredictable pipeline.",
      "We rely too much on referrals.",
      "What would SVNR build for me?",
    ],
  },
};

/** Returns the PROSE content for a pathname, matching the most specific prefix. */
export function getProseContent(pathname: string): ProsePageContent {
  const path = pathname || "/";
  // Exact match first.
  if (PAGES[path]) return PAGES[path];
  // Longest matching prefix (so /sectors/premium-real-estate -> /sectors).
  const keys = Object.keys(PAGES)
    .filter((k) => k !== "/" && path.startsWith(k))
    .sort((a, b) => b.length - a.length);
  if (keys[0]) return PAGES[keys[0]];
  return HOME;
}

/**
 * Tips PROSE can give — shown in the teaser carousel to preview the kind of
 * thinking members get once access is granted. PROSE voice: no em dashes,
 * no exclamation points.
 */
export const PROSE_TIPS: string[] = [
  "Referrals feel free, but they quietly cap how fast you can grow.",
  "The best time to reach a buyer is before they start looking. The signals are findable.",
  "A campaign ends. Infrastructure compounds. The gap shows by month three.",
  "One researched reply in 14 minutes beats a hundred cold sends.",
  "You can reach principals directly, without portals, ads, or trade fairs.",
  "Most pipelines break at follow-up. A system does not forget, and does not stop.",
];
