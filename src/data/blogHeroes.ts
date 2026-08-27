import type { HeroKind } from "../components/blog/BlogHeroArt";

export interface HeroSpec {
  kind: HeroKind;
  color: string;
  light?: boolean; // cream background instead of near-black
}

// Each new post gets a distinct (kind, color) so every hero looks different.
export const HERO_BY_SLUG: Record<string, HeroSpec> = {
  // Aether / models
  "aether-ai-for-premium-acquisition": { kind: "rays", color: "#fb7185" },
  "ora-free-ai-model-svnr": { kind: "grid", color: "#38bdf8" },
  "soleth-ai-model-advisory": { kind: "waves", color: "#fda4af" },
  "aether-flagship-model": { kind: "network", color: "#fb7185" },
  "ora-soleth-aether-comparison": { kind: "stack", color: "#22d3ee" },
  "how-aether-learns-your-market": { kind: "orbit", color: "#60a5fa" },
  "aether-data-privacy": { kind: "rings", color: "#818cf8" },
  "ai-vs-marketing-agency-acquisition": { kind: "bloom", color: "#bc4a30", light: true },
  // Use cases
  "ai-prospect-research-aether": { kind: "orbit", color: "#38bdf8" },
  "ai-draft-outreach-soleth": { kind: "waves", color: "#f472b6" },
  "ai-qualify-inbound-enquiries": { kind: "grid", color: "#34d399" },
  "ai-market-mapping-aether": { kind: "network", color: "#f59e0b" },
  "ai-buyer-signal-monitoring": { kind: "rings", color: "#f43f5e" },
  "ai-pipeline-review-aether": { kind: "stack", color: "#a3e635" },
  // New industries
  "luxury-hotels-direct-bookings": { kind: "waves", color: "#e0a458" },
  "superyacht-brokerage-client-acquisition": { kind: "rings", color: "#3fb6c4" },
  "private-aviation-charter-clients": { kind: "orbit", color: "#8fb4ff" },
  "art-gallery-collector-acquisition": { kind: "grid", color: "#c77dba" },
  "fine-jewellery-watch-client-acquisition": { kind: "rays", color: "#caa6e8" },
  "fine-wine-spirits-trade-buyers": { kind: "stack", color: "#b5564a" },
  "commercial-real-estate-institutional-buyers": { kind: "stack", color: "#5b8def" },
  "enterprise-saas-outbound": { kind: "network", color: "#41c98a" },
  "boutique-consulting-mandates": { kind: "waves", color: "#d98b5f" },
  "luxury-furniture-design-distribution": { kind: "grid", color: "#b58b6a" },
  // Pre-existing industry posts
  "ai-client-acquisition-luxury-brands": { kind: "rays", color: "#f472b6" },
  "ai-deal-flow-private-equity": { kind: "network", color: "#8aa0ff" },
  "ai-outreach-premium-real-estate": { kind: "waves", color: "#5fb0e8" },
  "ai-client-acquisition-wealth-management": { kind: "rings", color: "#34d39a" },
  "ai-distribution-luxury-rugs": { kind: "grid", color: "#f0b24a" },
  "ai-business-development-maritime": { kind: "orbit", color: "#4facfe" },
  "ai-client-acquisition-professional-services": { kind: "stack", color: "#cbd56a" },
  "ai-wholesale-high-ticket-ecommerce": { kind: "stack", color: "#00c6ff" },
};
