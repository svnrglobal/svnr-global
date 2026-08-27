import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";

// Single source of truth — mirrors the footer taxonomy.
const SERVICES = [
  { label: "Client Acquisition", href: "/services/client-acquisition", desc: "Reach and warm the exact decision-makers in your market." },
  { label: "AI Receptionist", href: "/services/ai-receptionist", desc: "A trained AI front desk that qualifies and routes." },
  { label: "Revenue Operations", href: "/services/revenue-operations", desc: "Full-funnel ops built around your deal cycle." },
  { label: "Sector Workflows", href: "/services/sector-workflows", desc: "Industry-specific automation that replaces manual work." },
  { label: "Intelligence Research", href: "/services/intelligence-research", desc: "Deep prospect research and signal monitoring." },
  { label: "Brand Outreach", href: "/services/brand-outreach", desc: "Message sequences written at the level of your market." },
  { label: "Deal Flow & Investors", href: "/services/dealflow-investor", desc: "Proprietary deal flow for PE and family offices." },
  { label: "Channel Partnership", href: "/services/channel-partnership", desc: "The partner acquisition system for channel sellers." },
];

const INDUSTRIES = [
  { label: "Luxury Rugs", href: "/sectors/luxury-rugs-home-textiles" },
  { label: "Premium Real Estate", href: "/sectors/premium-real-estate" },
  { label: "Private Equity", href: "/sectors/private-equity-family-offices" },
  { label: "B2B Luxury Brands", href: "/sectors/b2b-luxury-brands" },
  { label: "Wealth Management", href: "/sectors/wealth-management" },
  { label: "High-Ticket E-commerce", href: "/sectors/high-ticket-ecommerce" },
  { label: "Maritime & Logistics", href: "/sectors/maritime-logistics" },
  { label: "Professional Services", href: "/sectors/professional-services" },
];

const PLAIN = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "How We Work", href: "/engagement" },
  { label: "About", href: "/about" },
];

type MenuKey = "services" | "industries";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const HIDE = ["/login", "/signup", "/verify", "/dashboard", "/admin", "/settings", "/member", "/chat"];
  if (HIDE.some((p) => location.pathname.startsWith(p))) return null;

  const linkCls = "text-[13px] text-white/55 hover:text-white transition-colors px-3 py-2";

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className={`relative transition-colors duration-300 ${
          scrolled || openMenu ? "bg-[#0A0A0B]/90 backdrop-blur-xl border-b border-white/8" : "border-b border-transparent"
        }`}
      >
        <div className="h-14 px-5 md:px-7 flex items-center gap-6">
          {/* Logo — tight to left edge */}
          <Link to="/" className="flex items-center text-white shrink-0" aria-label="SVNR Global home">
            <Logo variant="mark" size={26} />
          </Link>

          {/* Desktop nav + mega-menu — immediately after logo */}
          <nav
            className="hidden lg:flex items-center gap-0.5 relative"
            onMouseLeave={() => setOpenMenu(null)}
          >
            {(["services", "industries"] as MenuKey[]).map((key) => (
              <div key={key} onMouseEnter={() => setOpenMenu(key)} className="relative">
                <button
                  type="button"
                  aria-expanded={openMenu === key}
                  onClick={() => setOpenMenu(openMenu === key ? null : key)}
                  className={`${linkCls} capitalize inline-flex items-center gap-1 ${openMenu === key ? "text-white" : ""}`}
                >
                  {key}
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${openMenu === key ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            ))}
            {PLAIN.map((l) => (
              <Link key={l.href} to={l.href} className={linkCls} onMouseEnter={() => setOpenMenu(null)}>
                {l.label}
              </Link>
            ))}

            {/* Mega-menu panel */}
            <AnimatePresence>
              {openMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 mt-3 w-[min(680px,90vw)]"
                >
                  <div className="rounded-xl border border-white/10 bg-[#101012] p-5 shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
                    <p className="eyebrow text-white/40 mb-4 capitalize">{openMenu}</p>
                    {openMenu === "services" ? (
                      <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.href}
                            to={s.href}
                            className="group rounded-lg px-3 py-2.5 hover:bg-white/[0.04] transition-colors"
                          >
                            <span className="block text-sm text-white/85 group-hover:text-white">{s.label}</span>
                            <span className="block text-xs text-white/35 mt-0.5 leading-snug">{s.desc}</span>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-x-6 gap-y-0.5">
                        {INDUSTRIES.map((s) => (
                          <Link
                            key={s.href}
                            to={s.href}
                            className="rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/[0.04] transition-colors"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                    <Link
                      to={openMenu === "services" ? "/services" : "/sectors"}
                      className="mt-4 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/70 hover:text-white hover:border-white/20 transition-colors"
                    >
                      <span>{openMenu === "services" ? "Explore the agent stack" : "See all sectors"}</span>
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          {/* Right: Log in + CTA + mobile toggle */}
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <Link
              to="/cassian"
              className="hidden sm:inline-flex text-[13px] text-white/55 hover:text-white transition-colors px-3 py-2"
            >
              Log in
            </Link>
            <Link to="/contact" className="btn-primary hidden sm:inline-flex">
              Book a call <span aria-hidden>↗</span>
            </Link>
            <button
              type="button"
              className="lg:hidden text-white/60 hover:text-white transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden mx-4 mt-2 rounded-2xl border border-white/8 bg-[#0C0C0E]/97 backdrop-blur-xl overflow-hidden"
          >
            <div className="max-h-[70vh] overflow-y-auto p-3">
              <p className="eyebrow text-white/35 px-3 pt-2 pb-1">Services</p>
              {SERVICES.map((s) => (
                <Link key={s.href} to={s.href} className="block px-3 py-2 rounded-lg text-sm text-white/65 hover:text-white hover:bg-white/5 transition-colors">
                  {s.label}
                </Link>
              ))}
              <p className="eyebrow text-white/35 px-3 pt-3 pb-1">Industries</p>
              {INDUSTRIES.map((s) => (
                <Link key={s.href} to={s.href} className="block px-3 py-2 rounded-lg text-sm text-white/65 hover:text-white hover:bg-white/5 transition-colors">
                  {s.label}
                </Link>
              ))}
              <div className="h-px bg-white/8 my-2" />
              {PLAIN.map((l) => (
                <Link key={l.href} to={l.href} className="block px-3 py-2 rounded-lg text-sm text-white/65 hover:text-white hover:bg-white/5 transition-colors">
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary w-full mt-2">
                Book a call <span aria-hidden>↗</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
