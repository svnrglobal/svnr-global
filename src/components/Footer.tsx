import { Link } from "react-router-dom";
import Logo from "./Logo";

const COLS: { header: string; links: { label: string; href: string }[] }[] = [
  {
    header: "Acquisition",
    links: [
      { label: "Client Acquisition", href: "/services/client-acquisition" },
      { label: "Intelligence Research", href: "/services/intelligence-research" },
      { label: "Brand Outreach", href: "/services/brand-outreach" },
      { label: "AI Receptionist", href: "/services/ai-receptionist" },
      { label: "Deal Flow & Investors", href: "/services/dealflow-investor" },
    ],
  },
  {
    header: "Operations",
    links: [
      { label: "Revenue Operations", href: "/services/revenue-operations" },
      { label: "Sector Workflows", href: "/services/sector-workflows" },
      { label: "Channel Partnership", href: "/services/channel-partnership" },
    ],
  },
  {
    header: "Sectors",
    links: [
      { label: "Luxury Rugs", href: "/sectors/luxury-rugs-home-textiles" },
      { label: "Premium Real Estate", href: "/sectors/premium-real-estate" },
      { label: "Private Equity", href: "/sectors/private-equity-family-offices" },
      { label: "B2B Luxury Brands", href: "/sectors/b2b-luxury-brands" },
    ],
  },
  {
    header: "More Sectors",
    links: [
      { label: "Wealth Management", href: "/sectors/wealth-management" },
      { label: "High-Ticket E-commerce", href: "/sectors/high-ticket-ecommerce" },
      { label: "Maritime & Logistics", href: "/sectors/maritime-logistics" },
      { label: "Professional Services", href: "/sectors/professional-services" },
    ],
  },
  {
    header: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Founder", href: "/founder" },
      { label: "How We Work", href: "/engagement" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    header: "Platform",
    links: [
      { label: "Ask Cassian", href: "/cassian" },
      { label: "Blog", href: "/blog" },
      { label: "SVNR vs Alternatives", href: "/compare" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10">
      {/* Link grid */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-10">
          {COLS.map((col) => (
            <div key={col.header}>
              <p className="eyebrow text-white/35 mb-4">{col.header}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      className="text-[13px] text-white/45 hover:text-white transition-colors leading-none"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar — full bleed, matches Vercel */}
      <div className="border-t border-white/[0.06] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-6">
            <Link to="/" aria-label="SVNR Global home">
              <Logo variant="mark" size={22} />
            </Link>
            <span
              className="flex items-center gap-2 text-[11px] text-white/35 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00CA50] shrink-0" />
              All systems operational
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-[11px] text-white/25 hidden sm:inline">
              © {new Date().getFullYear()} SVNR Global
            </span>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/svnr.lab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* Pinterest */}
            <a
              href="https://in.pinterest.com/svnrglobal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors"
              aria-label="Pinterest"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/svnrglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
