import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SEO from "../components/SEO";
import VideoHero from "../components/VideoHero";

const FOUNDER_VIDEO = "https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8";

export default function Founder() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Hamza Omair — Founder, SVNR Global"
        description="Hamza Omair founded SVNR Global to build AI-powered acquisition infrastructure for premium operators. Rooted in manufacturing, built on technology."
        canonical="/founder"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Founder", url: "/founder" }]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Hamza Omair",
            "jobTitle": "Founder & CEO",
            "worksFor": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" },
            "url": "https://svnrglobal.com/founder",
            "image": "https://svnrglobal.com/hamza.jpg",
            "sameAs": ["https://in.linkedin.com/in/hamza-omair-5434b1354"],
            "description": "Hamza Omair is the founder of SVNR Global, an AI-powered client acquisition infrastructure firm serving luxury brands, premium real estate, private equity, and high-ticket B2B operators globally.",
            "address": { "@type": "PostalAddress", "addressLocality": "New Delhi", "addressCountry": "IN" }
          }
        ]}
      />

      <Nav />

      {/* HERO, video background */}
      <VideoHero src={FOUNDER_VIDEO} minHeight="min-h-screen">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-end min-h-screen">
          {/* Text */}
          <div className="flex flex-col justify-end pb-4">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6"
            >
              Founder
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="text-5xl sm:text-6xl md:text-7xl font-medium text-white leading-[1.0] tracking-tight mb-6"
            >
              Hamza<br />Omair
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-white/40 text-base leading-relaxed max-w-sm"
            >
              Founder & CEO, SVNR Global.<br />
              New Delhi, operating globally.
            </motion.p>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4 }}
            className="flex justify-center md:justify-end items-end pb-4"
          >
            <div className="relative w-64 sm:w-72 md:w-80">
              <img
                src="/hamza.jpg"
                alt="Hamza Omair, Founder of SVNR Global"
                className="w-full rounded-2xl object-cover"
                style={{ aspectRatio: "1/1" }}
              />
              {/* Subtle bottom fade to blend with page */}
              <div className="absolute bottom-0 left-0 right-0 h-16 rounded-b-2xl"
                style={{ background: "linear-gradient(to top, rgba(10,10,11,0.6), transparent)" }} />
            </div>
          </motion.div>
        </div>
      </VideoHero>

      {/* STORY */}
      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-3xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-8">The beginning</p>
            <p className="text-white text-2xl sm:text-3xl font-medium leading-snug tracking-tight mb-8">
              I wanted to build employees for myself, without hiring employees.
            </p>
            <div className="space-y-5 text-white/50 text-base leading-relaxed">
              <p>
                I was finishing my degree in computer applications when I started building what would become SVNR. Technology and AI had always been close to how I thought, but the problem I was trying to solve was very practical.
              </p>
              <p>
                I grew up around my family's business in the luxury rug and carpet trade, one of the oldest and most craft-intensive industries in India. I watched exceptional work struggle to reach the buyers it deserved. Not because of quality. Because acquisition was either one relationship, one trade fair, or one lucky introduction away from falling apart.
              </p>
              <p>
                I didn't want to build an agency. I wanted to build infrastructure, systems that could do the work of finding, reaching, and warming the right people, running continuously, without constant human input. Employees without the overhead of employees.
              </p>
            </div>
          </motion.div>

          <div className="h-px bg-white/5 mb-20" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-8">The conviction</p>
            <p className="text-white text-2xl sm:text-3xl font-medium leading-snug tracking-tight mb-8">
              Speed without precision is just noise.
            </p>
            <div className="space-y-5 text-white/50 text-base leading-relaxed">
              <p>
                Most acquisition businesses optimise for volume. More outreach, more contacts, more campaigns. We optimise for speed at the right moment, reaching the right person with the right context before anyone else does.
              </p>
              <p>
                That's what AI makes possible when it's built correctly. Not automation for automation's sake. Infrastructure that moves faster than any team could manually, and does it with the precision that premium markets demand.
              </p>
            </div>
          </motion.div>

          <div className="h-px bg-white/5 mb-20" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6 mb-20"
          >
            {[
              { value: "2019", label: "Founded" },
              { value: "9+", label: "Industries served" },
              { value: "Global", label: "Operating reach" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-medium text-white mb-1">{s.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/25">{s.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="h-px bg-white/5 mb-20" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://in.linkedin.com/in/hamza-omair-5434b1354"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/50 hover:text-white hover:border-white/40 transition-all text-sm"
            >
              LinkedIn <ArrowRight size={12} />
            </a>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/50 hover:text-white hover:border-white/40 transition-all text-sm"
            >
              About SVNR Global <ArrowRight size={12} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all"
            >
              Book a call <ArrowRight size={12} />
            </Link>
          </motion.div>

        </div>
      </section>

      <div className="relative z-10 px-6 pb-10 max-w-7xl mx-auto">
        <Footer />
      </div>
    </main>
  );
}
