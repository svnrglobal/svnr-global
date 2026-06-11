// Self-made cover art for each case study, in the same Claude-style line-art
// language as the blog covers: a unique (motif, pastel background) per study.
const P = {
  lavender: "#c9c7ec",
  periwinkle: "#bcbfe9",
  sky: "#aecbe8",
  mint: "#a9d6bf",
  sage: "#9aa873",
  butter: "#e7d493",
  peach: "#ecc8a6",
  terracotta: "#d2674a",
  rose: "#e3a7b5",
};

export const CASE_STUDY_COVER: Record<string, { motif: string; bg: string }> = {
  "luxury-real-estate-pipeline": { motif: "building", bg: P.sky },
  "hotel-direct-bookings": { motif: "bed", bg: P.butter },
  "wealth-management-pipeline": { motif: "coins", bg: P.mint },
  "law-firm-consultations": { motif: "columns", bg: P.periwinkle },
  "dental-clinic-revenue": { motif: "target", bg: P.rose },
  "private-healthcare-network": { motif: "network", bg: P.sage },
  "manufacturing-export-buyers": { motif: "globe", bg: P.peach },
  "ecommerce-dtc-revenue": { motif: "cart", bg: P.lavender },
  "aesthetic-clinic-revenue": { motif: "gem", bg: P.terracotta },
  "aether-autonomous-ecommerce-cofounder": { motif: "orbit", bg: P.periwinkle },
};

export function getCaseStudyCover(slug: string): { motif: string; bg: string } {
  return CASE_STUDY_COVER[slug] ?? { motif: "spark", bg: P.lavender };
}
