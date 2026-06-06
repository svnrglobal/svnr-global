import { motion } from "motion/react";
import { Link } from "react-router-dom";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Services: [
    { label: "Client Acquisition", href: "/services/client-acquisition" },
    { label: "AI Receptionist", href: "/services/ai-receptionist" },
    { label: "Revenue Operations", href: "/services/revenue-operations" },
    { label: "Sector Workflows", href: "/services/sector-workflows" },
    { label: "Intelligence Research", href: "/services/intelligence-research" },
    { label: "Brand Outreach", href: "/services/brand-outreach" },
    { label: "Deal Flow & Investors", href: "/services/dealflow-investor" },
    { label: "Channel Partnership", href: "/services/channel-partnership" },
  ],
  Industries: [
    { label: "Luxury Rugs", href: "/sectors/luxury-rugs-home-textiles" },
    { label: "Premium Real Estate", href: "/sectors/premium-real-estate" },
    { label: "Private Equity", href: "/sectors/private-equity-family-offices" },
    { label: "B2B Luxury Brands", href: "/sectors/b2b-luxury-brands" },
    { label: "Wealth Management", href: "/sectors/wealth-management" },
    { label: "High-Ticket E-commerce", href: "/sectors/high-ticket-ecommerce" },
    { label: "Maritime & Logistics", href: "/sectors/maritime-logistics" },
    { label: "Professional Services", href: "/sectors/professional-services" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Founder", href: "/founder" },
    { label: "How We Work", href: "/engagement" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "SVNR vs Alternatives", href: "/compare" },
    { label: "Blog", href: "/blog" },
    { label: "Ask Aether", href: "/aether" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      className="liquid-glass w-full rounded-3xl p-6 md:p-10 text-white/70 mt-32 md:mt-40"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">
        <div className="md:col-span-4">
          <Link to="/" className="flex items-center mb-6 group">
            <img
              src="/svnr-logo.svg"
              alt="SVNR Global"
              className="w-[88px] h-[88px] md:w-[124px] md:h-[124px]"
              style={{ objectFit: "contain", mixBlendMode: "screen" }}
            />
          </Link>
          <p className="text-sm leading-relaxed max-w-xs text-white/50">
            Bespoke AI infrastructure for premium operators. We build the systems that bring the right clients to you.
          </p>
          <p className="text-xs text-white/30 mt-4">New Delhi, globally deployed.</p>
          <a
            href="mailto:contact@svnrglobal.com"
            className="text-xs text-white/50 hover:text-white transition-colors mt-2 block"
          >
            contact@svnrglobal.com
          </a>
        </div>

        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8">
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section}>
              <p className="text-sm uppercase tracking-wider text-white font-medium mb-4">{section}</p>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="text-xs text-white/50 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        <p className="text-[10px] uppercase tracking-widest opacity-50">
          SVNR Global &copy; {new Date().getFullYear()} &mdash; All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <span className="text-[10px] uppercase tracking-widest opacity-50">Connect:</span>
          {/* Instagram */}
          <a href="https://www.instagram.com/svnr.lab" target="_blank" rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition-opacity hover:text-white" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          {/* Pinterest */}
          <a href="https://in.pinterest.com/svnrglobal/" target="_blank" rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition-opacity hover:text-white" aria-label="Pinterest">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/company/svnrglobal" target="_blank" rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition-opacity hover:text-white" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
