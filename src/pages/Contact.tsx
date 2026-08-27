import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { SECTORS } from "../data/content";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";

const MONO = { fontFamily: "var(--font-mono)" };
const EASE = [0.16, 1, 0.3, 1] as const;

// Field definitions are lifted verbatim from the previous implementation:
// same ids, same types, same validation, same order.
const FIELDS = [
  { field: "name", label: "Name", placeholder: "Your name", type: "text", required: true },
  { field: "email", label: "Email", placeholder: "you@company.com", type: "email", required: true },
  { field: "company", label: "Company", placeholder: "Company name", type: "text", required: true },
  { field: "website", label: "Website (optional)", placeholder: "yourcompany.com", type: "text", required: false },
];

const NEXT = [
  { n: "01", label: "We reply", detail: "We'll be in touch within 24 hours." },
  {
    n: "02",
    label: "We scope it",
    detail: "Sector, target geography, complexity of the market, and the scope of infrastructure required.",
  },
  {
    n: "03",
    label: "We build",
    detail: "The first 2–3 weeks are build and calibration. From week 4, outreach is live.",
  },
];

const TERMS = [
  "We work with a small number of operators at any one time.",
  "Every engagement is built specifically for your market.",
  "No templates deployed across clients.",
];

const LABEL_CLS = "block text-[10px] tracking-[0.28em] uppercase text-white/40 mb-2";
const FIELD_CLS =
  "w-full rounded-xl border border-white/[0.08] bg-white/[0.015] px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-white/30 hover:border-white/[0.14] transition-colors";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "error" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "", website: "", sector: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xqejvgbw", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="Book a Call — Work With SVNR Global"
        description="Ready to build a predictable client acquisition pipeline? Book a call with SVNR Global. We work with a small number of premium operators at any one time."
        canonical="/contact"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact SVNR Global",
            "url": "https://svnrglobal.com/contact",
            "description": "Get in touch with SVNR Global to discuss AI-powered client acquisition for your premium brand or B2B operation.",
            "publisher": { "@type": "Organization", "name": "SVNR Global", "url": "https://svnrglobal.com" }
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SVNR Global",
            "url": "https://svnrglobal.com",
            "logo": "https://svnrglobal.com/svnr-logo.svg",
            "foundingDate": "2019",
            "address": { "@type": "PostalAddress", "addressLocality": "New Delhi", "addressCountry": "IN" },
            "contactPoint": { "@type": "ContactPoint", "email": "contact@svnrglobal.com", "contactType": "sales" },
            "sameAs": [
              "https://www.instagram.com/svnr.lab",
              "https://in.pinterest.com/svnrglobal/",
              "https://www.linkedin.com/company/svnrglobal"
            ]
          }
        ]}
      />

      {/* HERO + FORM — the split. Left states the case, right takes the enquiry. */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-20 md:pb-28">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.92fr] gap-12 lg:gap-16 items-start">
            {/* LEFT — the pitch, then what actually happens next. */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="text-[10px] tracking-[0.28em] text-white/40 mb-6"
                style={MONO}
              >
                GET IN TOUCH
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
                className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight"
              >
                If acquisition is the constraint, this is where it ends.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-white/45 text-base md:text-lg mt-6 max-w-lg leading-relaxed"
              >
                Tell us where the pipeline breaks. We'll be in touch within 24 hours.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mt-9"
              >
                <div className="flex items-center gap-2.5">
                  <Mail size={14} className="text-white/25 shrink-0" />
                  <a
                    href="mailto:contact@svnrglobal.com"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    contact@svnrglobal.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin size={14} className="text-white/25 shrink-0" />
                  <span className="text-white/45 text-sm">New Delhi, globally deployed.</span>
                </div>
              </motion.div>

              {/* WHAT HAPPENS NEXT — the sequence a sender is buying into. */}
              <div className="mt-12 md:mt-14 pt-10 border-t border-white/[0.06]">
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="text-[10px] tracking-[0.28em] text-white/40 mb-7"
                  style={MONO}
                >
                  WHAT HAPPENS NEXT
                </motion.p>
                <div className="flex flex-col gap-6">
                  {NEXT.map((s, i) => (
                    <motion.div
                      key={s.n}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                      className="flex items-start gap-5"
                    >
                      <span className="text-[10px] tracking-widest text-white/20 tabular-nums pt-[3px]" style={MONO}>
                        {s.n}
                      </span>
                      <div>
                        <p className="text-white text-sm font-medium leading-snug">{s.label}</p>
                        <p className="text-white/40 text-sm leading-relaxed mt-1">{s.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — the form. Nothing competes with it. */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
              className="lg:sticky lg:top-28"
            >
              {status === "sent" ? (
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7 sm:p-8">
                  <div className="flex items-center gap-2.5 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70 shrink-0" />
                    <span className="text-[10px] tracking-[0.28em] text-emerald-400/70" style={MONO}>
                      RECEIVED
                    </span>
                  </div>
                  <h2 className="text-white text-xl md:text-2xl font-medium tracking-tight mb-2">Message received.</h2>
                  <p className="text-white/45 text-sm leading-relaxed">We'll be in touch within 24 hours.</p>
                  <p className="text-[10px] tracking-[0.28em] text-white/40 mt-10 mb-4" style={MONO}>
                    WHILE YOU WAIT
                  </p>
                  <div className="flex flex-col gap-3">
                    <Link
                      to="/case-studies"
                      className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 px-5 py-4"
                    >
                      <span className="text-white/80 text-sm">See client results</span>
                      <ArrowRight
                        size={14}
                        className="shrink-0 text-white/20 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300"
                      />
                    </Link>
                    <Link
                      to="/engagement"
                      className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 px-5 py-4"
                    >
                      <span className="text-white/80 text-sm">How engagements work</span>
                      <ArrowRight
                        size={14}
                        className="shrink-0 text-white/20 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300"
                      />
                    </Link>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7 sm:p-8 space-y-5"
                >
                  <p className="text-[10px] tracking-[0.28em] text-white/40" style={MONO}>
                    ENQUIRY
                  </p>

                  {FIELDS.map(({ field, label, placeholder, type, required }) => (
                    <div key={field}>
                      <label htmlFor={field} className={LABEL_CLS} style={MONO}>
                        {label}
                      </label>
                      <input
                        id={field}
                        type={type}
                        placeholder={placeholder}
                        required={required}
                        value={form[field as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        className={FIELD_CLS}
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="sector" className={LABEL_CLS} style={MONO}>
                      Sector
                    </label>
                    <select
                      id="sector"
                      value={form.sector}
                      onChange={(e) => setForm({ ...form, sector: e.target.value })}
                      className={FIELD_CLS}
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="" style={{ background: "#000000" }}>
                        Select your sector
                      </option>
                      {SECTORS.map((s) => (
                        <option key={s.slug} value={s.slug} style={{ background: "#000000" }}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={LABEL_CLS} style={MONO}>
                      Your situation
                    </label>
                    <textarea
                      id="message"
                      placeholder="What's the constraint? Tell us about your current pipeline situation."
                      rows={4}
                      required
                      minLength={10}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${FIELD_CLS} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-wait"
                  >
                    {status === "sending" ? "Sending..." : <>Send Message <ArrowRight size={14} /></>}
                  </button>

                  {status === "error" && (
                    <p className="text-sm text-white/50 leading-relaxed">
                      Something went wrong. Email us directly at{" "}
                      <a
                        href="mailto:contact@svnrglobal.com"
                        className="text-white/80 underline underline-offset-4 decoration-white/25 hover:decoration-white/60 transition-colors"
                      >
                        contact@svnrglobal.com
                      </a>
                    </p>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TERMS OF WORKING — three plain statements, no decoration. */}
      <section className="relative z-10 px-6 md:px-12 py-16 md:py-20 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-[10px] tracking-[0.28em] text-white/40 mb-8"
            style={MONO}
          >
            HOW WE WORK
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TERMS.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-6"
              >
                <span className="text-[10px] tracking-widest text-white/20 tabular-nums" style={MONO}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-white/45 text-sm leading-relaxed mt-4">{t}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10 px-6 md:px-12 pb-10 max-w-[1200px] mx-auto">
        <Footer />
      </div>
    </main>
  );
}
