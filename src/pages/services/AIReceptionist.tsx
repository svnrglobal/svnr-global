import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Footer from "../../components/Footer";
import FaqSection from "../../components/FaqSection";
import SEO from "../../components/SEO";
import Breadcrumbs from "../../components/Breadcrumbs";
import OpticalType from "../../components/OpticalType";
import Counter from "../../components/Counter";
import { useIdleMischief } from "../../hooks/useIdleMischief";
import ConsoleFrame from "../../components/console/ConsoleFrame";
import { SERVICE_REPLICA } from "../../components/console/replicas";
import { SelfResolvingAlert, RedactedName, AgeingTimestamp, LogTail } from "../../components/console/primitives";

const MONO = { fontFamily: "var(--font-mono)" };
const EASE = [0.16, 1, 0.3, 1] as const;

const HERO_STATS = [
  { v: "60s", l: "Response time" },
  { v: "94%", l: "Qualification rate" },
  { v: "12", l: "Languages supported" },
];

const sectors = ["Premium Real Estate", "Wealth Management", "Professional Services", "High-Ticket Ecommerce"];

const steps = [
  { n: "01", label: "Map inquiry types", desc: "We document every type of inquiry your business receives and define qualification criteria for each." },
  { n: "02", label: "Build conversation flows", desc: "AI conversation trees are designed for each inquiry type, calibrated to your brand voice and qualification logic." },
  { n: "03", label: "Integrate with CRM and calendar", desc: "The system is connected to your existing CRM and calendar infrastructure for seamless data flow." },
  { n: "04", label: "Deploy and train", desc: "Live deployment with a two-week calibration period where responses are monitored and refined." },
];

const RELATED = [
  { to: "/blog/what-is-outreach-infrastructure", label: "What Is Outreach Infrastructure" },
  { to: "/blog/client-acquisition-system-vs-campaign", label: "System vs Campaign" },
];

const AI_RECEPTIONIST_FAQS = [
  { q: "What is an AI receptionist for B2B businesses?", a: "An AI receptionist is a trained AI system that responds to every inbound enquiry, from website forms, email, or WhatsApp, in under 60 seconds. It qualifies the enquiry against your defined criteria, collects relevant information, and routes it to the right person or next step, 24 hours a day." },
  { q: "How is SVNR's AI receptionist different from a chatbot?", a: "A chatbot follows decision trees. SVNR's AI receptionist is trained on your sector, service offering, and qualification criteria — it conducts natural, context-aware conversations that accurately qualify enquiries and never give generic responses." },
  { q: "How quickly does the AI receptionist respond to inbound enquiries?", a: "Under 60 seconds, 24/7, including outside business hours, weekends, and across time zones. No inbound enquiry is ever missed or delayed." },
  { q: "What businesses is the AI receptionist suitable for?", a: "The AI receptionist is deployed across luxury brands, wealth management boutiques, premium real estate firms, private healthcare, dental clinics, legal practices, and any premium B2B operator where inbound enquiry quality and response speed directly affect conversion rates." },
];

// THE STRIPE MOMENT — the service's own console replica, blown up to hero
// scale inside the bordered instrument panel. Plays on load, replays once
// quietly after a reader hovers and moves on.
function ReceptionistHeroConsole() {
  const { mischief, bind } = useIdleMischief();
  const [replay, setReplay] = useState(0);

  useEffect(() => {
    if (mischief) setReplay((n) => n + 1);
  }, [mischief]);

  return (
    <motion.div
      {...bind}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
    >
      <ConsoleFrame label="inbound.log" badge="LIVE" className="min-h-[300px] md:min-h-[380px]">
        <div key={replay} className="pt-1">
          {SERVICE_REPLICA["ai-receptionist"]?.(true)}
        </div>
      </ConsoleFrame>
    </motion.div>
  );
}

// Block 1 — Instant Response: an enquiry landing and resolving inside a beat.
function InstantResponseDemo({ lit }: { lit: boolean }) {
  return (
    <SelfResolvingAlert
      lit={lit}
      problem="New enquiry received — website contact form"
      resolution="Answered and routed to sales, response in 8s"
      meta="8s"
    />
  );
}

// Block 2 — Lead Qualification: a redacted enquiry, aging while it's held
// against the qualification criteria.
function QualificationDemo({ lit }: { lit: boolean }) {
  return (
    <div className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-3.5 py-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-white/65 font-medium">
          <RedactedName lit={lit} name="Enquiry #4471" delay={250} />
        </span>
        <span className="text-[9px] text-white/30" style={MONO}>
          <AgeingTimestamp lit={lit} startMinutes={1} />
        </span>
      </div>
      <p className="text-[10px] text-white/30 mt-1" style={MONO}>
        Budget confirmed · Timeline confirmed · Decision-maker confirmed
      </p>
      <span
        className="inline-block mt-2.5 text-[8px] tracking-widest border border-emerald-400/25 text-emerald-400/70 rounded px-1.5 py-0.5"
        style={MONO}
      >
        QUALIFIED
      </span>
    </div>
  );
}

// Block 3 — Calendar Booking: the qualified enquiry converting to a booked
// slot without a human touching a calendar.
function BookingDemo({ lit }: { lit: boolean }) {
  return (
    <SelfResolvingAlert
      lit={lit}
      problem="Qualified lead ready for scheduling"
      resolution="Consultation booked directly to calendar, no manual step"
      meta="Booked"
    />
  );
}

// Block 4 — CRM Sync: every interaction logged, streaming in.
function CrmSyncDemo({ lit }: { lit: boolean }) {
  const rows = [
    { t: "09:14:02", status: "sync", text: "Enquiry logged — contact + transcript" },
    { t: "09:14:09", status: "sync", text: "Qualification outcome written to record" },
    { t: "10:48:55", status: "sync", text: "Booking synced to calendar + CRM" },
    { t: "11:15:36", status: "sync", text: "Routing decision logged, owner assigned" },
  ];
  return <LogTail lit={lit} rows={rows} />;
}

const FEATURE_BLOCKS = [
  {
    label: "PRODUCT AREA · RESPONSE",
    badge: "01",
    title: "Every inquiry answered in under 60 seconds.",
    desc: "No time zone, no hour, no queue. The AI receptionist picks up the moment an enquiry lands.",
    frameLabel: "response.stream",
    Demo: InstantResponseDemo,
  },
  {
    label: "PRODUCT AREA · QUALIFICATION",
    badge: "02",
    title: "Leads qualified before a human is involved.",
    desc: "Every enquiry is held against your criteria and scored before it ever reaches a team member.",
    frameLabel: "qualify.card",
    Demo: QualificationDemo,
  },
  {
    label: "PRODUCT AREA · SCHEDULING",
    badge: "03",
    title: "Qualified leads move straight to a booked call.",
    desc: "No manual scheduling overhead. A qualified enquiry becomes a calendar slot in the same conversation.",
    frameLabel: "booking.flow",
    Demo: BookingDemo,
  },
  {
    label: "PRODUCT AREA · CRM",
    badge: "04",
    title: "Every interaction logged automatically.",
    desc: "Conversation, qualification outcome, and booking are written to your CRM without manual entry.",
    frameLabel: "crm.sync",
    Demo: CrmSyncDemo,
  },
];

function FeatureBlock({
  label,
  badge,
  title,
  desc,
  frameLabel,
  Demo,
  index,
}: {
  label: string;
  badge: string;
  title: string;
  desc: string;
  frameLabel: string;
  Demo: (props: { lit: boolean }) => React.ReactElement;
  index: number;
}) {
  const { mischief, bind } = useIdleMischief();
  const reduce = useReducedMotion();
  const [hoverLit, setHoverLit] = useState(false);
  const [replay, setReplay] = useState(0);

  useEffect(() => {
    if (mischief) setReplay((n) => n + 1);
  }, [mischief]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: EASE }}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-7"
      {...bind}
      onMouseEnter={() => setHoverLit(true)}
      onMouseLeave={() => setHoverLit(false)}
    >
      <div className="flex items-center justify-between gap-3 mb-5">
        <span className="text-[10px] tracking-[0.28em] text-white/40" style={MONO}>
          {label}
        </span>
        <span
          className="text-[9px] tracking-widest text-white/30 border border-white/[0.08] rounded px-1.5 py-0.5"
          style={MONO}
        >
          {badge}
        </span>
      </div>
      <h3 className="text-white text-lg md:text-xl font-medium tracking-tight mb-2">{title}</h3>
      <p className="text-white/40 text-sm leading-relaxed mb-5">{desc}</p>
      <ConsoleFrame label={frameLabel}>
        <div key={replay}>
          <Demo lit={reduce ? true : hoverLit || mischief} />
        </div>
      </ConsoleFrame>
    </motion.div>
  );
}

export default function AIReceptionist() {
  return (
    <main className="relative w-full bg-black font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="AI Receptionist — Instant Inbound Qualification | SVNR Global"
        description="AI Receptionist for luxury brands, wealth managers, and premium B2B: qualifies every inbound enquiry in under 60 seconds, 24/7. No missed leads, no delayed responses, no manual triage."
        canonical="/services/ai-receptionist"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Receptionist, Inbound Enquiry Qualification",
            "provider": { "@id": "https://svnrglobal.com/#organization" },
            "description": "A sector-trained AI front desk system that qualifies, responds to, and routes every inbound enquiry in under 60 seconds, 24/7. Deployed for luxury brands, wealth managers, real estate firms, and premium B2B operators.",
            "areaServed": ["Global"],
            "serviceType": ["AI Receptionist", "Inbound Lead Qualification", "Automated Enquiry Response", "AI Customer Service"]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is an AI receptionist for B2B businesses?",
                "acceptedAnswer": { "@type": "Answer", "text": "An AI receptionist is a trained AI system that responds to every inbound enquiry, from website forms, email, or WhatsApp, in under 60 seconds. It qualifies the enquiry against your defined criteria, collects relevant information, and routes it to the right person or next step, 24 hours a day." }
              },
              {
                "@type": "Question",
                "name": "How is SVNR's AI receptionist different from a chatbot?",
                "acceptedAnswer": { "@type": "Answer", "text": "A chatbot follows decision trees. SVNR's AI receptionist is trained on your sector, service offering, and qualification criteria, it conducts natural, context-aware conversations that accurately qualify enquiries and never give generic responses." }
              },
              {
                "@type": "Question",
                "name": "How quickly does the AI receptionist respond to inbound enquiries?",
                "acceptedAnswer": { "@type": "Answer", "text": "Under 60 seconds, 24/7, including outside business hours, weekends, and across time zones. No inbound enquiry is ever missed or delayed." }
              },
              {
                "@type": "Question",
                "name": "What businesses is the AI receptionist suitable for?",
                "acceptedAnswer": { "@type": "Answer", "text": "The AI receptionist is deployed across luxury brands, wealth management boutiques, premium real estate firms, private healthcare, dental clinics, legal practices, and any premium B2B operator where inbound enquiry quality and response speed directly affect conversion rates." }
              }
            ]
          }
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "AI Receptionist", url: "/services/ai-receptionist" },
        ]}
      />

      {/* HERO */}
      <section className="relative z-10 px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "AI Receptionist" }]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="text-[10px] tracking-[0.28em] text-white/40 mb-6"
                style={MONO}
              >
                SYSTEM 02 · AI RECEPTIONIST
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              >
                <OpticalType className="text-4xl sm:text-5xl md:text-[64px] font-medium text-white leading-[1.05] tracking-tight">
                  Every inbound handled. Instantly.
                </OpticalType>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="text-white/45 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              >
                Never miss a qualified inquiry. Respond in under 60 seconds, 24/7.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 mt-9"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
                >
                  Start the conversation <ArrowRight size={14} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
                >
                  All systems <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>

            <ReceptionistHeroConsole />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 md:mt-16">
            {HERO_STATS.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 px-6 py-5"
              >
                <Counter value={s.v} className="block text-2xl md:text-[28px] font-medium text-white tabular-nums leading-none" />
                <p className="text-[10px] tracking-[0.28em] text-white/40 mt-3" style={MONO}>
                  {s.l.toUpperCase()}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHICH INDUSTRIES */}
      <section className="relative z-10 px-6 md:px-12 py-16 md:py-20 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-6" style={MONO}>
              WHICH INDUSTRIES BENEFIT MOST
            </p>
            <div className="flex flex-wrap gap-3">
              {sectors.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 rounded-full text-xs uppercase tracking-widest text-white/70 border border-white/[0.14]"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURE BLOCKS — the core of the page */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-12"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              WHAT THE SYSTEM DELIVERS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              Four systems, one conversation.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURE_BLOCKS.map((b, i) => (
              <FeatureBlock key={b.frameLabel} index={i} {...b} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-10"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              PROCESS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">
              How the system deploys.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-6"
              >
                <span className="text-[10px] tracking-widest text-white/20 tabular-nums" style={MONO}>
                  {s.n}
                </span>
                <p className="text-white text-sm font-medium leading-snug mt-4">{s.label}</p>
                <p className="text-white/40 text-xs leading-relaxed mt-2">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE }}
            className="max-w-2xl"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              NEXT
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-5">
              Stop losing leads to slow response times.
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-9">
              Deploy the AI receptionist and convert every inquiry into a qualified conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Start the conversation <ArrowRight size={14} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.14] text-white/80 text-sm hover:border-white/30 hover:text-white transition-colors"
              >
                All systems <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FaqSection faqs={AI_RECEPTIONIST_FAQS} title="Common questions about the AI Receptionist" />

      {/* RELATED INSIGHTS */}
      <section className="relative z-10 px-6 md:px-12 py-20 md:py-24 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-8"
          >
            <p className="text-[10px] tracking-[0.28em] text-white/40 mb-5" style={MONO}>
              RELATED INSIGHTS
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight">From the SVNR blog</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RELATED.map((r, i) => (
              <motion.div
                key={r.to}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
              >
                <Link
                  to={r.to}
                  className="group relative flex items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.015] hover:border-white/[0.14] hover:bg-white/[0.028] transition-colors duration-300 p-6"
                >
                  <div>
                    <p className="text-[10px] tracking-[0.28em] text-white/40 mb-2" style={MONO}>
                      READ
                    </p>
                    <p className="text-white text-sm font-medium leading-snug">{r.label}</p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="shrink-0 text-white/20 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300"
                  />
                </Link>
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
