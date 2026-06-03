import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, CheckCircle, Calendar, RefreshCw } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

const gradient = "linear-gradient(135deg, #4facfe, #00f2fe)";

const chartData = [
  { day: "Mon", response: 58, booking: 62 }, { day: "Tue", response: 52, booking: 70 },
  { day: "Wed", response: 45, booking: 75 }, { day: "Thu", response: 48, booking: 73 },
  { day: "Fri", response: 42, booking: 79 }, { day: "Sat", response: 38, booking: 80 },
  { day: "Sun", response: 41, booking: 78 },
];

const capabilities = [
  { icon: MessageSquare, title: "Instant Response", desc: "Every inquiry receives a personalised response in under 60 seconds, regardless of time zone or hour." },
  { icon: CheckCircle, title: "Lead Qualification", desc: "The AI qualifies every lead against your criteria before a human is ever involved in the conversation." },
  { icon: Calendar, title: "Calendar Booking", desc: "Qualified leads are moved directly to calendar booking without any manual scheduling overhead." },
  { icon: RefreshCw, title: "CRM Sync", desc: "Every interaction, qualification outcome, and booking is logged to your CRM automatically." },
];

const steps = [
  { n: "01", title: "Map inquiry types", desc: "We document every type of inquiry your business receives and define qualification criteria for each." },
  { n: "02", title: "Build conversation flows", desc: "AI conversation trees are designed for each inquiry type, calibrated to your brand voice and qualification logic." },
  { n: "03", title: "Integrate with CRM and calendar", desc: "The system is connected to your existing CRM and calendar infrastructure for seamless data flow." },
  { n: "04", title: "Deploy and train", desc: "Live deployment with a two-week calibration period where responses are monitored and refined." },
  { n: "05", title: "Monitor and refine", desc: "Ongoing monitoring of qualification accuracy and booking rates with continuous optimisation." },
];

const sectors = ["Premium Real Estate", "Wealth Management", "Professional Services", "High-Ticket Ecommerce"];

export default function AIReceptionist() {
  return (
    <main className="relative w-full bg-[#0A0A0B] font-sans selection:bg-white/20 selection:text-white">
      <SEO
        title="AI Receptionist — Instant Inbound Qualification | SVNR Global"
        description="A trained AI front desk that qualifies, responds, and routes every enquiry with precision — in under 60 seconds, 24/7."
        canonical="/services/ai-receptionist"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "AI Receptionist", url: "/services/ai-receptionist" },
        ]}
      />
      <section className="relative w-full h-screen flex items-end justify-start overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover z-0" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4" autoPlay loop muted playsInline />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to top, rgba(10,10,11,1) 0%, rgba(10,10,11,0.55) 55%, rgba(10,10,11,0.25) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">Service 03</p>
            <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-4">AI Receptionist</h1>
            <p className="text-xl text-white/60 max-w-xl">Never miss a qualified inquiry. Respond in under 60 seconds, 24/7.</p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] pt-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-2xl overflow-hidden border border-white/10">
            <img src="/services/ai-receptionist.png" alt="AI Receptionist Dashboard" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6">Which industries benefit most</p>
            <div className="flex flex-wrap gap-3">
              {sectors.map((s) => <span key={s} className="px-4 py-2 rounded-full text-xs uppercase tracking-widest text-white/70 border border-white/15">{s}</span>)}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-16 px-6 border-t border-white/8">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
          {[{ value: "<60s", label: "Response time" }, { value: "94%", label: "Qualification accuracy" }, { value: "78%", label: "Booking rate" }].map((m) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <div className="text-4xl md:text-5xl font-medium text-white mb-2">{m.value}</div>
              <p className="text-xs uppercase tracking-widest text-white/40">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">What the system delivers</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ rotateX: -5, rotateY: 5, scale: 1.02 }} style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className="liquid-glass rounded-2xl p-7">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: gradient }}>
                  <c.icon size={18} className="text-white" />
                </div>
                <h3 className="text-white font-medium mb-2">{c.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6 border-t border-white/8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Process</p>
            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">How the system deploys</h2>
          </motion.div>
          <div className="relative">
            <div className="hidden md:block absolute left-[28px] top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div key={step.n} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-8">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-xs font-medium text-white border border-white/20 bg-[#0A0A0B] relative z-10">{step.n}</div>
                  <div className="pt-3">
                    <h3 className="text-white font-medium mb-1">{step.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed max-w-xl">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6 border-t border-white/8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4">Performance</p>
            <h2 className="text-3xl font-medium text-white tracking-tight">Response time vs booking rate (weekly)</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="liquid-glass rounded-2xl p-8">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="air-grad1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4facfe" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#4facfe" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="air-grad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00f2fe" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#00f2fe" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: "#1A1A1C", border: "none", borderRadius: 8, fontSize: 12, color: "#fff" }} />
                  <Area type="monotone" dataKey="response" stroke="#4facfe" strokeWidth={2} fill="url(#air-grad1)" dot={false} name="Avg Response (s)" />
                  <Area type="monotone" dataKey="booking" stroke="#00f2fe" strokeWidth={2} fill="url(#air-grad2)" dot={false} name="Booking Rate %" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0A0A0B] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">Stop losing leads to slow response times.</h2>
            <p className="text-white/50 mb-10">Deploy the AI receptionist and convert every inquiry into a qualified conversation.</p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all">
              Book a Consultation <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      
      {/* RELATED INSIGHTS */}
      <section className="relative z-10 bg-[#0A0A0B] pb-16 px-6 border-t border-white/8">
        <div className="max-w-7xl mx-auto pt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-3">Related Insights</p>
            <h2 className="text-2xl font-medium text-white tracking-tight">From the SVNR blog</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 * 0.1 }}>
              <Link to="/blog/what-is-outreach-infrastructure" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">What Is Outreach Infrastructure</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1 * 0.1 }}>
              <Link to="/blog/client-acquisition-system-vs-campaign" className="block liquid-glass rounded-2xl p-5 hover:border-white/20 transition-all border border-white/8">
                <p className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Read</p>
                <p className="text-white/80 text-sm font-medium leading-snug hover:text-white transition-colors">System vs Campaign</p>
                <p className="text-white/30 text-[10px] mt-3 uppercase tracking-widest">→ svnrglobal.com/blog</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative z-10 px-6 pb-10 max-w-7xl mx-auto"><Footer /></div>
    </main>
  );
}
