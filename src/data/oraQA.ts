// Ora's curated knowledge bank. Ora is the free Aether model: it answers
// questions about SVNR, the services, sector fit, pricing, process and the
// Aether models themselves. Answers are written in SVNR's voice: direct,
// specific, no em dashes, no exclamation points. Grounded in the real site
// content so Ora is accurate rather than invented.

export interface QA {
  id: string;
  category: string;
  q: string;
  a: string;
  keywords?: string[];
  /** Shown in the autocomplete starter list when the input is empty. */
  featured?: boolean;
}

export const ORA_QA: QA[] = [
  // ── SVNR: the basics ───────────────────────────────────────────────
  {
    id: "what-svnr-builds",
    category: "SVNR",
    q: "What does SVNR actually build?",
    a: "SVNR builds AI-powered client acquisition infrastructure for premium operators. Instead of ads or referrals, we build the system that identifies, reaches, and warms the exact decision-makers in your market, continuously, without taking your time.",
    keywords: ["what is svnr", "what do you do", "what does svnr do", "services", "build"],
    featured: true,
  },
  {
    id: "vs-agency",
    category: "SVNR",
    q: "How is this different from a marketing agency?",
    a: "An agency rents you activity and it stops the moment the retainer ends. We build infrastructure you own that compounds. A campaign ends, infrastructure keeps producing pipeline, and the gap usually shows clearly by month three.",
    keywords: ["agency", "different", "vs", "compare", "marketing"],
    featured: true,
  },
  {
    id: "who-you-work-with",
    category: "SVNR",
    q: "Who do you work with?",
    a: "Premium and high-ticket operators: luxury brands, premium real estate, private equity and family offices, wealth management, maritime and logistics, high-ticket ecommerce, and professional services. If your deals are high value and relationship-led, it fits.",
    keywords: ["who", "clients", "fit", "work with", "industries"],
  },
  {
    id: "where-based",
    category: "SVNR",
    q: "Where is SVNR based?",
    a: "SVNR works with clients internationally. The founder's roots are in luxury rug manufacturing and international trade out of Bhadohi, India, which is where the focus on relationship-led, high-value markets comes from.",
    keywords: ["based", "location", "where", "country", "office"],
  },
  {
    id: "founder",
    category: "SVNR",
    q: "Who is the founder?",
    a: "SVNR was founded by Hamza Omair, who came from luxury rug manufacturing and international trade before building acquisition infrastructure for premium operators. There is more on the founder page.",
    keywords: ["founder", "hamza", "ceo", "who runs", "owner"],
  },
  {
    id: "moat",
    category: "SVNR",
    q: "What makes this hard to copy?",
    a: "The system is built specifically to your market and your buyer, and it compounds with every reply and signal it gathers. That specificity is what a template or a generic tool cannot reproduce.",
    keywords: ["moat", "hard to copy", "defensible", "unique", "why you"],
  },
  {
    id: "data-confidential",
    category: "SVNR",
    q: "Is my data confidential?",
    a: "Your data and your market stay yours. We build inside your tools and hand over infrastructure you own, rather than locking it in a black box you cannot see into.",
    keywords: ["data", "confidential", "privacy", "secure", "safe", "own"],
  },
  {
    id: "use-ai",
    category: "SVNR",
    q: "How do you use AI?",
    a: "AI runs the heavy, repetitive parts: research, prospect mapping, signal monitoring, qualification, and follow-up. People stay on judgement, positioning, and relationships. The result is the reach of a large team without the headcount.",
    keywords: ["ai", "automation", "how ai", "technology", "tools"],
  },

  // ── Aether and the three models ────────────────────────────────────
  {
    id: "what-is-aether",
    category: "Aether & models",
    q: "What is Aether?",
    a: "Aether is SVNR's intelligence layer, an AI you can talk to about your pipeline, your market, and how SVNR would build for you. It comes in three models: Ora, Soleth, and Aether.",
    keywords: ["aether", "what is aether", "ai", "assistant", "chat"],
    featured: true,
  },
  {
    id: "three-models",
    category: "Aether & models",
    q: "What are Ora, Soleth and Aether?",
    a: "They are the three Aether models. Ora is the free model, focused on clear answers about SVNR. Soleth adds advisory conversation, file uploads, and drafting in your voice. Aether is the flagship: it builds and runs AI agents and voice agents and operates your acquisition autonomously. You start on Ora and upgrade when you are ready.",
    keywords: ["ora", "soleth", "aether", "models", "difference", "tiers"],
    featured: true,
  },
  {
    id: "what-ora-does",
    category: "Aether & models",
    q: "What can Ora do?",
    a: "Ora answers questions about SVNR, the services, your sector fit, pricing, and how to get started. It is the free model, so it stays focused on answers and is limited to 20 questions every five hours.",
    keywords: ["ora", "free", "limited", "what can ora do"],
  },
  {
    id: "what-soleth-does",
    category: "Aether & models",
    q: "What can Soleth do?",
    a: "Soleth is a paid model that goes beyond answers into advice. It researches across multiple steps, reasons over your own documents and files, and drafts outreach and plans in your voice. It unlocks once your team grants access.",
    keywords: ["soleth", "paid", "files", "advice", "what can soleth do", "drafting", "research"],
  },
  {
    id: "what-aether-model-does",
    category: "Aether & models",
    q: "What can the Aether model do?",
    a: "Aether is the flagship model. It builds and runs AI agents and voice agents, and can operate your acquisition autonomously across your tools: outreach, calls, follow-up, and pipeline handled end to end, alongside your team. It has the highest limits and priority and is granted to members on the top tier.",
    keywords: ["aether model", "flagship", "best model", "top tier", "most capable", "agents", "voice agents", "autonomous", "automate"],
  },
  {
    id: "model-access",
    category: "Aether & models",
    q: "How do I get access to Aether?",
    a: "Create a free account and apply. Our team reviews each application and grants access to Ora, with Soleth and Aether available as you upgrade.",
    keywords: ["access", "apply", "sign up", "get in", "join", "request"],
    featured: true,
  },
  {
    id: "model-cost",
    category: "Aether & models",
    q: "How much do the models cost?",
    a: "Ora is free once you are approved. Soleth and Aether are paid tiers. There is no checkout to click through right now: when you are ready to upgrade, our team sets it up with you. Use the upgrade button or book a call.",
    keywords: ["cost", "price", "pricing", "models cost", "subscription", "upgrade"],
  },
  {
    id: "file-upload",
    category: "Aether & models",
    q: "Can I upload files?",
    a: "Uploading files is a paid feature on Soleth and Aether. Ora stays focused on answering questions and does not take file uploads.",
    keywords: ["upload", "files", "documents", "attach", "pdf"],
  },
  {
    id: "switch-models",
    category: "Aether & models",
    q: "How do I switch between models?",
    a: "Once you have access to more than one model, you switch between them from the model menu at the top of the chat.",
    keywords: ["switch", "change model", "model menu", "select model"],
  },
  {
    id: "ora-limit",
    category: "Aether & models",
    q: "What is Ora's question limit?",
    a: "Ora is limited to 20 questions every five hours, on a rolling window, so the count refills over time. Soleth and Aether have higher limits.",
    keywords: ["limit", "20 questions", "5 hours", "quota", "cap", "reset"],
  },

  // ── Pricing and engagement ─────────────────────────────────────────
  {
    id: "engagement-cost",
    category: "Pricing & engagement",
    q: "What does an engagement cost?",
    a: "Engagements are scoped to your market and goals rather than sold off a fixed price list. The fastest way to a real number is a short call, and I can walk you through what shapes the cost first.",
    keywords: ["cost", "price", "how much", "fees", "engagement cost", "budget"],
    featured: true,
  },
  {
    id: "pricing-scoped",
    category: "Pricing & engagement",
    q: "How is pricing scoped?",
    a: "Pricing depends on your sector, how many markets you want to reach, and which services you need. We scope it to what will actually move your pipeline, then quote it.",
    keywords: ["pricing", "scoped", "quote", "how priced", "estimate"],
  },
  {
    id: "engagement-tiers",
    category: "Pricing & engagement",
    q: "What are the engagement tiers?",
    a: "There are three levels: a focused Foundation, a broader Infrastructure build, and a Full Stack engagement that runs the whole acquisition system. We help you pick the one that fits where your pipeline is today.",
    keywords: ["tiers", "levels", "foundation", "infrastructure", "full stack", "packages"],
  },
  {
    id: "commitment",
    category: "Pricing & engagement",
    q: "How long is the commitment?",
    a: "Infrastructure is built to compound, so engagements run long enough to show that, usually over months rather than weeks. The specifics are agreed on the call.",
    keywords: ["commitment", "contract", "term", "how long", "months", "lock in"],
  },
  {
    id: "roi",
    category: "Pricing & engagement",
    q: "What ROI should I expect?",
    a: "Clients measure it in qualified pipeline: replies, meetings, and deals that would not have happened otherwise, such as fourteen minutes to a qualified reply or thirteen enquiries in two weeks. We scope toward that, not vanity metrics.",
    keywords: ["roi", "return", "results", "worth it", "value", "payback"],
  },
  {
    id: "campaign-vs-infra",
    category: "Pricing & engagement",
    q: "Campaign vs infrastructure, what is the difference?",
    a: "A campaign is a burst of activity that ends. Infrastructure is a system you own that keeps producing pipeline. The difference usually shows clearly by month three.",
    keywords: ["campaign", "infrastructure", "difference", "one off", "ongoing"],
  },

  // ── How it works ───────────────────────────────────────────────────
  {
    id: "onboarding",
    category: "How it works",
    q: "How does onboarding work?",
    a: "We start by mapping your market and your ideal buyer, build the outreach and systems around your deal cycle, then go live and optimise. You stay focused on closing, not prospecting.",
    keywords: ["onboarding", "start", "setup", "process", "begin", "kickoff"],
  },
  {
    id: "how-fast",
    category: "How it works",
    q: "How fast do I see results?",
    a: "It varies by sector, but first qualified replies often land within the first couple of weeks. For one real estate firm a qualified principal replied in fourteen minutes.",
    keywords: ["fast", "how long", "results", "timeline", "speed", "when"],
    featured: true,
  },
  {
    id: "what-you-need",
    category: "How it works",
    q: "What do you need from me to start?",
    a: "A clear picture of your ideal client and your offer, access to the tools we will build in, and time for a short onboarding. We handle the rest.",
    keywords: ["need from me", "requirements", "to start", "what do you need"],
  },
  {
    id: "find-prospects",
    category: "How it works",
    q: "How do you find prospects?",
    a: "We map the market, identify the decision-makers, and verify them before any outreach, using research and signal monitoring rather than bought lists.",
    keywords: ["prospects", "find", "leads", "lists", "data", "targeting"],
  },
  {
    id: "write-outreach",
    category: "How it works",
    q: "How do you write outreach?",
    a: "Every sequence is written for your market and your buyer, with no templates and no mass sends, so it reads like a peer rather than a campaign. That is how open rates reach the fifties and replies stay positive.",
    keywords: ["outreach", "messages", "copy", "email", "write", "sequences"],
  },
  {
    id: "follow-up",
    category: "How it works",
    q: "Do you handle follow-up?",
    a: "Yes. The system handles follow-up so nothing is forgotten. Most pipelines break at follow-up, and a system does not forget and does not stop.",
    keywords: ["follow up", "followup", "nurture", "sequence", "reminders"],
  },
  {
    id: "channels",
    category: "How it works",
    q: "What channels do you use?",
    a: "Primarily direct, research-led outreach across the channels your buyers actually use, plus instant inbound handling. The mix is built to your market rather than fixed.",
    keywords: ["channels", "email", "linkedin", "phone", "inbound", "outbound"],
  },
  {
    id: "reporting",
    category: "How it works",
    q: "How do you measure success?",
    a: "You get visibility into the pipeline at every stage, with reporting that shows replies, meetings, and deal movement rather than raw activity counts.",
    keywords: ["reporting", "measure", "metrics", "dashboard", "track", "kpi"],
  },
  {
    id: "done-for-you",
    category: "How it works",
    q: "Is this done for me, or do I run it?",
    a: "It is built and run for you. We stand up the infrastructure, operate it, and hand you the qualified conversations. You stay on closing.",
    keywords: ["done for you", "managed", "do i run", "who runs", "hands off"],
  },

  // ── Services ───────────────────────────────────────────────────────
  {
    id: "svc-client-acquisition",
    category: "Services",
    q: "What does Client Acquisition include?",
    a: "We identify, reach, and warm the exact decision-makers in your market, continuously, without taking your time. It replaces the one rainmaker or the trade-fair cycle with a permanent operating system, typically around 40 qualified leads a month with first replies inside about two weeks.",
    keywords: ["client acquisition", "leads", "pipeline", "acquisition"],
  },
  {
    id: "svc-ai-receptionist",
    category: "Services",
    q: "How does the AI receptionist work?",
    a: "A trained AI front desk captures, qualifies, and routes every enquiry instantly, day or night. It responds in about 60 seconds, qualifies at roughly 94 percent, and logs everything to your CRM, so a late-night enquiry is never a lost deal.",
    keywords: ["ai receptionist", "front desk", "inbound", "answer", "qualify"],
  },
  {
    id: "svc-revenue-operations",
    category: "Services",
    q: "What is Revenue Operations?",
    a: "Full-funnel revenue operations built around your deal cycle, so pipeline lives in a system instead of email threads and memory. You get full pipeline visibility, faster deal velocity, and hours of manual reporting back each week.",
    keywords: ["revenue operations", "revops", "crm", "pipeline", "operations"],
  },
  {
    id: "svc-sector-workflows",
    category: "Services",
    q: "What are Sector Workflows?",
    a: "Industry-specific automation that replaces manual process with reliable infrastructure built for how your business actually runs. A rug house quotes differently than a PE firm, so the workflows are built to your vertical, cutting process time sharply and errors to near zero.",
    keywords: ["sector workflows", "automation", "workflow", "process", "vertical"],
  },
  {
    id: "svc-intelligence-research",
    category: "Services",
    q: "What is Intelligence Research?",
    a: "Deep prospect research, competitive mapping, and signal monitoring, delivered as intelligence rather than raw data. We map who is buying, where from, and the signals that predict when they move, with a weekly intelligence brief.",
    keywords: ["intelligence", "research", "signals", "market research", "monitoring"],
  },
  {
    id: "svc-brand-outreach",
    category: "Services",
    q: "What is Brand Outreach?",
    a: "Message sequences written and deployed at the level of your market, with no templates and no mass sends. Generic outreach damages a premium brand, so every message is written for your buyer, which is how open rates reach the fifties and replies stay positive.",
    keywords: ["brand outreach", "outreach", "messaging", "sequences", "email"],
  },
  {
    id: "svc-dealflow",
    category: "Services",
    q: "What is Dealflow for Investors?",
    a: "Proprietary deal flow for PE firms and family offices who need to see opportunities before they are formally marketed. We build the relationship infrastructure that surfaces transactions pre-process, with regular GP introductions.",
    keywords: ["dealflow", "deal flow", "investors", "pe", "private equity", "deals"],
  },
  {
    id: "svc-channel-partnership",
    category: "Services",
    q: "What is Channel Partnership?",
    a: "For operators who sell through agents, studios, or specifiers, we build the partner acquisition system that finds, reaches, and activates the right architects and designers for your product. Trade distribution is won through relationships, not marketing.",
    keywords: ["channel", "partnership", "partners", "distribution", "specifiers", "trade"],
  },
  {
    id: "which-service",
    category: "Services",
    q: "Which service do I actually need?",
    a: "It depends on where your pipeline breaks. If you have no flow, start with Client Acquisition. If inbound leaks, the AI Receptionist. If deals get lost, Revenue Operations. Tell me the symptom and I will point you to the fit.",
    keywords: ["which service", "what do i need", "recommend", "where to start"],
  },

  // ── Sectors ────────────────────────────────────────────────────────
  {
    id: "sec-luxury-rugs",
    category: "Sectors",
    q: "Do you work with luxury rugs and home textiles?",
    a: "Yes. For rug and carpet houses building international B2B distribution in markets where the architecture and design community specifies everything. One German carpet house saw thirteen qualified B2B enquiries in under two weeks.",
    keywords: ["rugs", "carpet", "textiles", "home", "luxury rugs", "a&d"],
  },
  {
    id: "sec-premium-real-estate",
    category: "Sectors",
    q: "Do you work with premium real estate?",
    a: "Yes. For firms moving off portal dependency toward direct relationships with HNW and institutional investors. For a Zurich firm, a qualified principal replied in fourteen minutes.",
    keywords: ["real estate", "property", "hnw", "premium real estate", "brokerage"],
  },
  {
    id: "sec-private-equity",
    category: "Sectors",
    q: "Do you work with private equity and family offices?",
    a: "Yes. Proprietary pipeline infrastructure for firms that need to see opportunities before formal marketing, with roughly three quarters of deal flow surfaced pre-process.",
    keywords: ["private equity", "pe", "family office", "family offices", "gp", "lp"],
  },
  {
    id: "sec-b2b-luxury",
    category: "Sectors",
    q: "Do you work with B2B luxury brands?",
    a: "Yes. We build and activate trade buyer relationships at scale for premium fashion, interiors, and lifestyle brands. One luxury brand saw a 78 percent increase in qualified trade buyer enquiries within six weeks.",
    keywords: ["luxury brands", "b2b luxury", "fashion", "interiors", "stockist", "wholesale"],
  },
  {
    id: "sec-wealth-management",
    category: "Sectors",
    q: "Do you work with wealth management?",
    a: "Yes. Client acquisition for wealth boutiques and family office advisors who need to reach UHNW clients without a brand marketing budget, starting from a verified principal list before any outreach.",
    keywords: ["wealth management", "wealth", "advisors", "uhnw", "boutique", "aum"],
  },
  {
    id: "sec-high-ticket-ecommerce",
    category: "Sectors",
    q: "Do you work with high-ticket ecommerce?",
    a: "Yes. For high-ticket product businesses building wholesale and trade distribution alongside their D2C channel. One operator saw a 312 percent increase in average order value through the trade channel.",
    keywords: ["ecommerce", "high ticket", "wholesale", "d2c", "products", "retail"],
  },
  {
    id: "sec-maritime",
    category: "Sectors",
    q: "Do you work with maritime and logistics?",
    a: "Yes. Commercial relationship infrastructure for shipping operators, port services, and freight principals reaching cargo owners and charterers, with thousands of cargo-owner contacts mapped.",
    keywords: ["maritime", "logistics", "shipping", "freight", "port", "cargo"],
  },
  {
    id: "sec-professional-services",
    category: "Sectors",
    q: "Do you work with professional services?",
    a: "Yes. For architecture studios, legal boutiques, and advisory firms where work comes through mandates. One architecture studio booked six qualified mandate introductions in its first quarter.",
    keywords: ["professional services", "architecture", "legal", "advisory", "consulting", "mandate"],
  },
  {
    id: "sector-not-listed",
    category: "Sectors",
    q: "What if my sector is not listed?",
    a: "If your business is high value and relationship-led, the system usually still fits. The principle is the same: map the buyer, reach them directly, and build infrastructure you own. Tell me your sector and I will tell you honestly.",
    keywords: ["not listed", "other sector", "my industry", "different industry"],
  },

  // ── Results and proof ──────────────────────────────────────────────
  {
    id: "results",
    category: "Results",
    q: "What results have you produced?",
    a: "Examples include a qualified principal reply in fourteen minutes, thirteen B2B enquiries in under two weeks for a carpet house, a 78 percent lift in trade enquiries for a luxury brand, and a 312 percent average order value increase through a trade channel.",
    keywords: ["results", "proof", "outcomes", "case study", "numbers", "track record"],
    featured: true,
  },
  {
    id: "case-study-sector",
    category: "Results",
    q: "Is there a case study for my sector?",
    a: "There is likely a relevant one. Tell me your sector and I will point you to the closest example, or see the case studies page for the full set.",
    keywords: ["case study", "example", "my sector", "proof", "reference"],
  },

  // ── Getting started ────────────────────────────────────────────────
  {
    id: "get-started",
    category: "Getting started",
    q: "How do I get started?",
    a: "Create a free account and apply for Aether access, or book a call directly. Our team reviews each application and gets you set up.",
    keywords: ["get started", "begin", "start", "sign up", "next step"],
    featured: true,
  },
  {
    id: "book-a-call",
    category: "Getting started",
    q: "How do I book a call?",
    a: "Use the Book a Call button in the header, or the contact page, to find a time. It is the fastest route to a scoped answer for your business.",
    keywords: ["book", "call", "meeting", "demo", "talk", "schedule"],
  },
  {
    id: "talk-to-human",
    category: "Getting started",
    q: "Can I talk to a human?",
    a: "Of course. Book a call or use the contact page and you will reach the team directly.",
    keywords: ["human", "person", "real person", "speak", "team", "support"],
  },
  {
    id: "after-apply",
    category: "Getting started",
    q: "What happens after I apply?",
    a: "Our team reviews your application and grants Ora access, usually quickly. You will see your status update on your dashboard.",
    keywords: ["after apply", "application", "review", "approved", "next", "wait"],
  },
];

// ── Matching engine ──────────────────────────────────────────────────

export const ORA_CATEGORIES: string[] = Array.from(new Set(ORA_QA.map((x) => x.category)));

export const ORA_FALLBACK =
  "I do not have a confident answer to that one yet. I can cover SVNR, the services, your sector fit, pricing, how it works, and the Aether models. For anything specific, the fastest path is to book a call and the team will answer directly.";

function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

interface Scored {
  qa: QA;
  score: number;
}

/** Rank Q&A entries against a free-text query. Returns highest first. */
export function searchOra(query: string, limit = 6): QA[] {
  const q = norm(query);
  if (!q) return ORA_QA.filter((x) => x.featured).slice(0, limit);

  const tokens = q.split(" ").filter((t) => t.length > 1);
  const scored: Scored[] = ORA_QA.map((qa) => {
    const hay = norm(`${qa.q} ${qa.category} ${(qa.keywords || []).join(" ")}`);
    let score = 0;
    if (hay.includes(q)) score += 12; // whole-phrase hit
    for (const t of tokens) {
      if (hay.includes(t)) score += 2;
      if (norm(qa.q).startsWith(t)) score += 1;
    }
    // small boost for keyword exact matches
    for (const k of qa.keywords || []) {
      if (q === norm(k)) score += 6;
    }
    return { qa, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.qa);
}

/** Best answer for a free-text query, or a graceful fallback. */
export function oraAnswer(query: string): { qa: QA | null; answer: string } {
  const hits = searchOra(query, 1);
  const top = hits[0];
  if (!top) return { qa: null, answer: ORA_FALLBACK };
  // Require a minimum confidence for very short / vague queries.
  return { qa: top, answer: top.a };
}

export function oraFeatured(limit = 8): QA[] {
  return ORA_QA.filter((x) => x.featured).slice(0, limit);
}
