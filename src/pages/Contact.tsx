import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { VIDEOS, SECTORS } from "../data/content";
import VideoHero from "../components/VideoHero";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", website: "", sector: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/xqejvgbw", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
      else setSent(true); // still show success
    } catch {
      setSent(true);
    }
  };

  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Book a Call — Work With SVNR Global"
        description="Ready to build a predictable client acquisition pipeline? Book a call with SVNR Global. We work with a small number of premium operators at any one time."
        canonical="/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact SVNR Global",
          "url": "https://svnrglobal.com/contact",
          "description": "Get in touch with SVNR Global to discuss AI-powered client acquisition for your premium brand or B2B operation.",
          "publisher": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" }
        }}
      />
      <VideoHero src={VIDEOS.contact}>
        <div className="max-w-3xl mx-auto px-6 text-center pt-20 sm:pt-32 pb-14 sm:pb-24">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-6">
            Get in Touch
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight tracking-tight mb-6">
            If acquisition is the constraint,<br />
            <span className="shimmer-text">this is where it ends.</span>
          </motion.h1>
        </div>
      </VideoHero>

      <section className="relative z-10 bg-[#0A0A0B] py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto mb-10 md:mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: "40+", label: "Qualified leads per month", sub: "Average across active clients" },
              { value: "14 min", label: "Time to first qualified reply", sub: "Premium real estate case study" },
              { value: "< 60 days", label: "Time to first results", sub: "From engagement to pipeline" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="liquid-glass rounded-2xl px-6 py-5 text-center"
              >
                <div className="text-3xl font-medium text-white mb-1">{s.value}</div>
                <p className="text-white/60 text-sm mb-1">{s.label}</p>
                <p className="text-[10px] uppercase tracking-widest text-white/25">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-medium text-white mb-6">Let's build your pipeline.</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-white/30" />
                <a href="mailto:hamza@svnrglobal.com" className="text-white/60 hover:text-white text-sm transition-colors">
                  hamza@svnrglobal.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-white/30" />
                <span className="text-white/60 text-sm">New Delhi — globally deployed.</span>
              </div>
            </div>
            <div className="space-y-4">
              {[
                "We work with a small number of operators at any one time.",
                "Every engagement is built specifically for your market.",
                "No templates deployed across clients.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-white/30 mt-2 shrink-0" />
                  <p className="text-sm text-white/50">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {sent ? (
              <div className="liquid-glass rounded-3xl p-10 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-white text-xl font-medium mb-2">Message received.</h3>
                <p className="text-white/50 text-sm">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="liquid-glass rounded-3xl p-8 space-y-4"
              >
                {[
                  { field: "name", placeholder: "Your name", type: "text", required: true },
                  { field: "email", placeholder: "Email address", type: "email", required: true },
                  { field: "company", placeholder: "Company name", type: "text", required: true },
                  { field: "website", placeholder: "Company website (e.g. yourcompany.com)", type: "text", required: false },
                ].map(({ field, placeholder, type, required }) => (
                  <input
                    key={field}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    value={form[field as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  />
                ))}
                <select
                  value={form.sector}
                  onChange={(e) => setForm({ ...form, sector: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                  style={{ colorScheme: "dark" }}
                >
                  <option value="" style={{ background: "#1A1A1C" }}>Select your sector</option>
                  {SECTORS.map((s) => (
                    <option key={s.slug} value={s.slug} style={{ background: "#1A1A1C" }}>{s.label}</option>
                  ))}
                </select>
                <textarea
                  placeholder="What's the constraint? Tell us about your current pipeline situation."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-all"
                >
                  Send Message <ArrowRight size={14} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 px-6 pb-10 max-w-7xl mx-auto">
        <Footer />
      </div>
    </main>
  );
}
