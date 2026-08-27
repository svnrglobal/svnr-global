import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";

const BELIEFS = [
  {
    label: "Infrastructure, not agency",
    line: "Systems that find, reach, and warm the right people, running continuously, without constant human input.",
  },
  {
    label: "Precision over volume",
    line: "We optimise for speed at the right moment, reaching the right person with the right context before anyone else does.",
  },
  {
    label: "Craft deserves reach",
    line: "Exceptional work shouldn't be one relationship, one trade fair, or one lucky introduction away from falling apart.",
  },
];

const CREDENTIALS = [
  { name: "Founder & CEO", line: "SVNR Global — AI-powered acquisition infrastructure, founded 2019." },
  { name: "Background", line: "Family business in the luxury rug and carpet trade, one of India's oldest craft-intensive industries." },
  { name: "Education", line: "Degree in computer applications, completed while building SVNR." },
  { name: "Base", line: "New Delhi, operating globally." },
  { name: "Reach", line: "9+ industries served across luxury, real estate, private equity, and high-ticket B2B." },
  { name: "LinkedIn", line: "in.linkedin.com/in/hamza-omair-5434b1354" },
];

export default function Founder() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Hamza Omair — Founder, SVNR Global"
        description="Hamza Omair founded SVNR Global to build AI-powered acquisition infrastructure for premium operators. Rooted in manufacturing, built on technology."
        canonical="/founder"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Founder", url: "/founder" }]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://svnrglobal.com/#hamza-omair",
            "name": "Hamza Omair",
            "jobTitle": "Founder & CEO",
            "worksFor": { "@id": "https://svnrglobal.com/#organization" },
            "url": "https://svnrglobal.com/founder/",
            "image": "https://svnrglobal.com/hamza.jpg",
            "sameAs": ["https://in.linkedin.com/in/hamza-omair-5434b1354"],
            "description": "Hamza Omair is the founder of SVNR Global, an AI-powered client acquisition infrastructure firm serving luxury brands, premium real estate, private equity, and high-ticket B2B operators globally.",
            "address": { "@type": "PostalAddress", "addressLocality": "New Delhi", "addressCountry": "IN" }
          }
        ]}
      />

      <Nav />

      {/* HERO */}
      <section className="relative pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Founder" }]} />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] tracking-[0.28em] uppercase text-white/40 mt-8 mb-6"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Founder
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-[64px] font-medium leading-[1.05] tracking-tight text-white max-w-[900px]"
          >
            I wanted to build employees for myself, without hiring employees.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/45 text-lg leading-relaxed max-w-2xl mt-6"
          >
            Hamza Omair, Founder &amp; CEO of SVNR Global — AI-powered acquisition infrastructure for premium operators, built from New Delhi and run globally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all"
            >
              Book a call <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BELIEFS */}
      <section className="px-6 md:px-12 py-20 border-t border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {BELIEFS.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <p
                className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {b.label}
              </p>
              <p className="text-white/45 text-base leading-relaxed">{b.line}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 md:px-12 py-20 border-t border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 text-white/45 text-base leading-relaxed"
          >
            <p>
              I was finishing my degree in computer applications when I started building what would become SVNR. Technology and AI had always been close to how I thought, but the problem I was trying to solve was very practical.
            </p>
            <p>
              I grew up around my family's business in the luxury rug and carpet trade, one of the oldest and most craft-intensive industries in India. I watched exceptional work struggle to reach the buyers it deserved. Not because of quality. Because acquisition was either one relationship, one trade fair, or one lucky introduction away from falling apart.
            </p>
            <p>
              I didn't want to build an agency. I wanted to build infrastructure, systems that could do the work of finding, reaching, and warming the right people, running continuously, without constant human input. Employees without the overhead of employees.
            </p>
            <p>
              Most acquisition businesses optimise for volume. More outreach, more contacts, more campaigns. We optimise for speed at the right moment, reaching the right person with the right context before anyone else does.
            </p>
            <p>
              That's what AI makes possible when it's built correctly. Not automation for automation's sake. Infrastructure that moves faster than any team could manually, and does it with the precision that premium markets demand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CREDENTIALS — dense name-plus-line list */}
      <section className="px-6 md:px-12 py-20 border-t border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-8"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Background
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {CREDENTIALS.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-4 border-b border-white/[0.08]"
              >
                <span className="text-white text-sm font-medium whitespace-nowrap sm:w-40 shrink-0">{c.name}</span>
                <span className="text-white/40 text-sm leading-relaxed">{c.line}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 mt-12"
          >
            <a
              href="https://in.linkedin.com/in/hamza-omair-5434b1354"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/[0.08] hover:border-white/[0.14] text-white/45 hover:text-white transition-all text-sm"
            >
              LinkedIn <ArrowRight size={12} />
            </a>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/[0.08] hover:border-white/[0.14] text-white/45 hover:text-white transition-all text-sm"
            >
              About SVNR Global <ArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="px-6 md:px-12 pb-10 max-w-[1200px] mx-auto">
        <Footer />
      </div>
    </main>
  );
}
