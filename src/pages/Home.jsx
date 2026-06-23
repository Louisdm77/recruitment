import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

const fadeUpView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Home() {
  const services = [
    {
      icon: "◈",
      title: "Executive Search",
      desc: "Confidential identification and recruitment of C-suite and senior leadership talent for organisations that can't afford to advertise.",
    },
    {
      icon: "◎",
      title: "Retained Search",
      desc: "Dedicated search partnerships for critical roles requiring deep market mapping, discretion, and a rigorous assessment process.",
    },
    {
      icon: "✦",
      title: "Talent Strategy",
      desc: "Advisory support on workforce planning, succession pipelines, and building leadership teams aligned with long-term organisational goals.",
    },
    {
      icon: "✺",
      title: "Confidential Campaigns",
      desc: "When a position cannot be publicly disclosed, our team manages the entire process — from brief to placement — in complete confidence.",
    },
  ];

  const stats = [
    { n: "500+", label: "Placements Made" },
    { n: "12+", label: "Years in Executive Search" },
    { n: "30+", label: "Industries Served" },
    { n: "94%", label: "Retention at 12 Months" },
  ];

  const sectors = [
    "Financial Services", "Healthcare & Life Sciences", "Technology & SaaS",
    "Energy & Infrastructure", "Consumer & Retail", "Professional Services",
    "Government & Public Sector", "Private Equity & VC",
  ];

  const team = [
    {
      name: "Marcus Elliot",
      title: "Managing Partner",
      focus: "Financial Services · Private Equity",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      name: "Serena Okafor",
      title: "Senior Search Consultant",
      focus: "Healthcare · Life Sciences",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "James Whitfield",
      title: "Principal Consultant",
      focus: "Technology · SaaS · Fintech",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    },
    {
      name: "Adaeze Nwosu",
      title: "Search Consultant",
      focus: "Consumer · Retail · FMCG",
      img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
    },
  ];

  return (
    <div className="bg-[#06121E] text-white font-sans">

      {/* ── HERO ─────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06121E] via-[#06121E]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06121E] via-transparent to-transparent" />
        </div>

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#C6963A 1px, transparent 1px), linear-gradient(90deg, #C6963A 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Eyebrow */}
            <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#C6963A]" />
              <span className="text-[#C6963A] text-xs font-semibold tracking-[0.25em] uppercase">
                Confidential Executive Search
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.2)} className="text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
              We find the leaders
              <br />
              <span className="text-[#C6963A]">no one else</span>
              <br />
              can reach.
            </motion.h1>

            <motion.p {...fadeUp(0.35)} className="text-gray-400 text-lg mt-8 leading-relaxed max-w-lg">
              Apex Recruiters partners with organisations to identify, assess, and
              secure exceptional talent for positions that require the highest level
              of discretion. No public listings. No noise. Just results.
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/contact"
                className="bg-[#C6963A] hover:bg-[#b5872f] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-[#C6963A]/20"
              >
                Start a Confidential Brief
              </Link>
              <Link
                to="/services"
                className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg transition-all duration-200"
              >
                Our Services
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-6 mt-14 pt-8 border-t border-white/10">
              {stats.map(({ n, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-white">{n}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Active search card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-[#C6963A] font-semibold tracking-wider uppercase mb-1">Active Search</p>
                  <p className="text-white font-bold">Chief Financial Officer</p>
                  <p className="text-gray-500 text-sm mt-1">Global Infrastructure Group · Confidential</p>
                </div>
                <span className="bg-emerald-500/15 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/20">
                  In Progress
                </span>
              </div>
              <div className="flex gap-4 text-xs text-gray-500 mt-3 border-t border-white/8 pt-4">
                <span>📍 London, UK</span>
                <span>⏱ Retained Search</span>
                <span>🔒 Confidential</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-[#C6963A] font-semibold tracking-wider uppercase mb-1">Recently Placed</p>
                  <p className="text-white font-bold">Chief People Officer</p>
                  <p className="text-gray-500 text-sm mt-1">Series C HealthTech · Confidential</p>
                </div>
                <span className="bg-[#C6963A]/15 text-[#C6963A] text-xs font-semibold px-3 py-1 rounded-full border border-[#C6963A]/20">
                  Placed
                </span>
              </div>
              <div className="flex gap-4 text-xs text-gray-500 mt-3 border-t border-white/8 pt-4">
                <span>📍 New York, US</span>
                <span>⏱ 38 days</span>
                <span>🔒 Confidential</span>
              </div>
            </div>

            <div className="bg-[#C6963A]/10 border border-[#C6963A]/20 rounded-2xl p-6 flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#C6963A]/20 flex items-center justify-center text-[#C6963A] text-xl shrink-0">
                🔒
              </div>
              <div>
                <p className="text-white font-semibold text-sm">All searches are confidential</p>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  Positions are never publicly disclosed. Your brief stays between us.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES STRIP ───────────────────── */}
      <section className="py-28 bg-[#06121E]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUpView} className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C6963A]">What We Do</span>
            <h2 className="text-4xl font-bold mt-4">Search without compromise</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Every engagement is handled by a dedicated search team — not handed off. We embed in your organisation's goals before we open a single conversation with the market.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/[0.03] border border-white/8 rounded-2xl p-8 hover:border-[#C6963A]/30 hover:bg-white/[0.06] transition-all duration-300"
              >
                <span className="text-2xl text-[#C6963A]">{s.icon}</span>
                <h3 className="text-white font-bold mt-5 text-base">{s.title}</h3>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#C6963A] text-sm font-semibold hover:gap-3 transition-all duration-200"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — offset dark ───────── */}
      <section className="py-28 bg-[#080F18]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeUpView}>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C6963A]">The Process</span>
              <h2 className="text-4xl font-bold mt-4 leading-tight">
                How a confidential
                <br />search works
              </h2>
              <p className="text-gray-500 mt-6 leading-relaxed">
                We don't post job ads. We don't blast inboxes. We use a structured, intelligence-led
                approach to map the market and bring the right people to the table — quietly.
              </p>

              <div className="mt-12 space-y-8">
                {[
                  { step: "01", title: "Discovery & Brief", desc: "We meet with your leadership team to understand the role, culture, timeline, and what 'exceptional' looks like for this hire." },
                  { step: "02", title: "Market Mapping", desc: "Our consultants build a targeted longlist of candidates through direct research, network intelligence, and industry relationships." },
                  { step: "03", title: "Discreet Outreach", desc: "We approach passive candidates confidentially — never revealing the client or position until mutual interest is confirmed." },
                  { step: "04", title: "Assessment & Shortlist", desc: "Candidates are assessed against your brief. You receive a concise shortlist with our full evaluation, ready for interview." },
                  { step: "05", title: "Placement & Retention", desc: "We manage offer, negotiation, and onboarding support — and follow up at 3, 6, and 12 months to protect the placement." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-[#C6963A]/10 border border-[#C6963A]/20 flex items-center justify-center">
                      <span className="text-[#C6963A] text-xs font-bold">{item.step}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=900&q=80"
                alt="Executive meeting"
                className="rounded-3xl w-full object-cover aspect-[3/4] border border-white/8"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#080F18]/60 to-transparent" />
              {/* Floating metric */}
              <div className="absolute bottom-8 left-8 right-8 bg-[#06121E]/90 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Average time to shortlist</p>
                  <p className="text-white font-bold text-xl mt-0.5">21 days</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <p className="text-xs text-gray-500">Offer acceptance rate</p>
                  <p className="text-white font-bold text-xl mt-0.5">91%</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <p className="text-xs text-gray-500">12-month retention</p>
                  <p className="text-white font-bold text-xl mt-0.5">94%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTORS ──────────────────────────── */}
      <section className="py-24 bg-[#06121E]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUpView} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C6963A]">Sector Coverage</span>
              <h2 className="text-4xl font-bold mt-4">Industries we serve</h2>
            </div>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              Our consultants have deep domain knowledge — not generalist coverage — across eight core sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {sectors.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white/[0.03] border border-white/8 hover:border-[#C6963A]/30 hover:bg-white/[0.06] rounded-xl px-5 py-4 text-sm text-gray-400 hover:text-white transition-all duration-200 cursor-default"
              >
                {s}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────── */}
      <section className="py-28 bg-[#080F18]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUpView} className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C6963A]">Our Team</span>
            <h2 className="text-4xl font-bold mt-4">The people behind the search</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Every search is led by a specialist consultant with direct domain expertise. You work with the same person from brief to placement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06121E] via-[#06121E]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-bold">{m.name}</p>
                    <p className="text-[#C6963A] text-xs font-semibold mt-0.5">{m.title}</p>
                    <p className="text-gray-400 text-xs mt-1">{m.focus}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/about" className="inline-flex items-center gap-2 text-[#C6963A] text-sm font-semibold hover:gap-3 transition-all duration-200">
              Meet the full team →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────── */}
      <section className="relative overflow-hidden py-28 bg-[#C6963A]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white leading-tight tracking-tight">
            A critical hire
            <br />deserves a discreet search.
          </h2>
          <p className="text-amber-100 text-lg mt-6 max-w-xl mx-auto">
            Tell us about the position. We'll tell you how we'd approach it.
            The conversation is always confidential.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              to="/contact"
              className="bg-[#06121E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0d1f30] transition-colors duration-200"
            >
              Submit a Confidential Brief
            </Link>
            <Link
              to="/services"
              className="border border-white/40 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}