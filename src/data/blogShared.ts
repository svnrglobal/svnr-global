// Shared types + category metadata for the blog, imported by the index,
// the article page, and the Aether posts data file.

export type ContentSection = {
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
};

export type FAQ = { q: string; a: string };

export type Article = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
  datePublished: string;
  seoDescription?: string;
  excerpt?: string;
  bloom?: boolean; // render the dot-matrix bloom hero instead of a photo
  howToSteps?: { name: string; text: string }[];
  content: ContentSection[];
  faqs?: FAQ[];
  related?: string[];
};

export const categoryColors: Record<string, string> = {
  "Luxury Rugs": "#F5A623",
  "Premium Real Estate": "#0071E3",
  "Private Equity": "#667eea",
  "Professional Services": "#ffd200",
  "Wealth Management": "#11998e",
  "B2B Platforms": "#f953c6",
  "Strategy": "#FC466B",
  "Aether": "#8b7dff",
  "Use Cases": "#38bdf8",
  "Maritime & Logistics": "#4facfe",
  "High-Ticket E-commerce": "#00C6FF",
  Hospitality: "#e0a458",
  "Yachting & Aviation": "#3fb6c4",
  "Art & Luxury Goods": "#c77dba",
  "Commercial Real Estate": "#5b8def",
  "B2B SaaS": "#41c98a",
  Consulting: "#d98b5f",
  "Design & Furniture": "#b58b6a",
};

// Each category points to its pillar page for topical authority + conversion.
export const categoryLinks: Record<string, { label: string; href: string }> = {
  "Luxury Rugs": { label: "Luxury Rugs & Home Textiles", href: "/sectors/luxury-rugs-home-textiles" },
  "Premium Real Estate": { label: "Premium Real Estate", href: "/sectors/premium-real-estate" },
  "Private Equity": { label: "Private Equity & Family Offices", href: "/sectors/private-equity-family-offices" },
  "Professional Services": { label: "Professional Services", href: "/sectors/professional-services" },
  "Wealth Management": { label: "Wealth Management", href: "/sectors/wealth-management" },
  "B2B Platforms": { label: "B2B Luxury Brands", href: "/sectors/b2b-luxury-brands" },
  "Strategy": { label: "Client Acquisition", href: "/services/client-acquisition" },
  "Aether": { label: "Aether", href: "/aether" },
  "Use Cases": { label: "Client Acquisition", href: "/services/client-acquisition" },
  "Maritime & Logistics": { label: "Maritime & Logistics", href: "/sectors/maritime-logistics" },
  "High-Ticket E-commerce": { label: "High-Ticket E-commerce", href: "/sectors/high-ticket-ecommerce" },
  Hospitality: { label: "Client Acquisition", href: "/services/client-acquisition" },
  "Yachting & Aviation": { label: "Client Acquisition", href: "/services/client-acquisition" },
  "Art & Luxury Goods": { label: "B2B Luxury Brands", href: "/sectors/b2b-luxury-brands" },
  "Commercial Real Estate": { label: "Premium Real Estate", href: "/sectors/premium-real-estate" },
  "B2B SaaS": { label: "Client Acquisition", href: "/services/client-acquisition" },
  Consulting: { label: "Professional Services", href: "/sectors/professional-services" },
  "Design & Furniture": { label: "B2B Luxury Brands", href: "/sectors/b2b-luxury-brands" },
};

// Display order for the index category filter.
export const CATEGORY_ORDER = [
  "Aether",
  "Use Cases",
  "Strategy",
  "Luxury Rugs",
  "Premium Real Estate",
  "Private Equity",
  "Wealth Management",
  "B2B Platforms",
  "High-Ticket E-commerce",
  "Maritime & Logistics",
  "Professional Services",
  "Hospitality",
  "Yachting & Aviation",
  "Art & Luxury Goods",
  "Commercial Real Estate",
  "B2B SaaS",
  "Consulting",
  "Design & Furniture",
];
