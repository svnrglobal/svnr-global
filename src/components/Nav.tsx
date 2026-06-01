import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services",   href: "/services" },
  { label: "Industries", href: "/sectors" },
  { label: "Results",    href: "/results" },
  { label: "Blog",       href: "/blog" },
  { label: "About",      href: "/about" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const lastScrollY = useRef(0);

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < 60) {
        setVisible(true);
      } else if (y > lastScrollY.current + 8) {
        setVisible(false);
        setOpen(false);
      } else if (y < lastScrollY.current - 8) {
        setVisible(true);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      animate={{ y: visible ? 0 : -120, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 md:px-10 pt-5 pointer-events-none"
    >

      {/* ── Logo (left) ── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto shrink-0 hidden md:block"
      >
        <Link to="/" className="flex items-center">
          <img
            src="/svnr-logo.svg"
            alt="SVNR Global"
            className="block w-[72px] h-[72px] md:w-[112px] md:h-[112px]"
            style={{ objectFit: "contain", mixBlendMode: "screen" }}
          />
        </Link>
      </motion.div>

      {/* ── Floating glass pill — desktop ── */}
      <motion.nav
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:flex items-center pointer-events-auto absolute left-1/2 -translate-x-1/2"
        style={{
          background: "rgba(15,15,17,0.65)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: "9999px",
          padding: "5px 6px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {links.map((l) => {
          const active =
            location.pathname === l.href ||
            (l.href !== "/" && location.pathname.startsWith(l.href));
          return (
            <Link
              key={l.href}
              to={l.href}
              className="relative px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.16em] font-light transition-colors duration-200 hover:text-white"
              style={{ color: active ? "#fff" : "rgba(255,255,255,0.45)" }}
            >
              {active && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "rgba(255,255,255,0.09)" }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </Link>
          );
        })}

        {/* Separator */}
        <div
          className="mx-1 shrink-0"
          style={{ width: 1, height: 16, background: "rgba(255,255,255,0.12)" }}
        />

        {/* CTA button inside pill */}
        <Link
          to="/contact"
          className="flex items-center gap-1 px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.16em] font-medium text-[#0A0A0B] transition-all hover:opacity-90 shrink-0"
          style={{ background: "#ffffff" }}
        >
          Book a Call <span className="text-[10px]">↗</span>
        </Link>
      </motion.nav>

      {/* ── Mobile hamburger ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="md:hidden pointer-events-auto text-white/60 hover:text-white transition-colors mt-1 shrink-0"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </motion.button>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[64px] left-4 right-4 pointer-events-auto rounded-2xl overflow-hidden"
            style={{
              background: "rgba(12,12,14,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex flex-col gap-1 p-3">
              <Link
                to="/"
                className="px-4 py-3 rounded-xl text-sm text-white/60 hover:text-white hover:bg-white/5 uppercase tracking-widest font-light transition-all"
              >
                Home
              </Link>
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="px-4 py-3 rounded-xl text-sm text-white/60 hover:text-white hover:bg-white/5 uppercase tracking-widest font-light transition-all"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-1 mx-1 text-center px-4 py-3 rounded-xl text-xs uppercase tracking-widest text-[#0A0A0B] bg-white font-medium hover:opacity-90 transition-all"
              >
                Book a Call ↗
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
