import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const services = [
  {
    id: "01",
    icon: "◈",
    title: "Executive Search",
    subtitle: "C-Suite · Board · Senior Leadership",
    desc: "For organisations that need to make a critical hire at the highest level. We identify and approach leaders who aren't looking — people who are excelling in their current roles and would never respond to a job ad.",
    detail: [
      "CEO, CFO, COO, CHRO, CTO, CMO mandates",
      "Board Director and NED appointments",
      "Country Manager and Divisional Head roles",
      "Turnaround and transformation leadership",
    ],
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
  },
  {
    id: "02",
    icon: "◎",
    title: "Retained Search",
    subtitle: "Dedicated · Structured · Accountable",
    desc: "A fully dedicated search engagement. One consultant, one mandate, one standard. Retained search is how organisations fill roles where the cost of a bad hire — or a slow hire — is measured in millions.",
    detail: [
      "Exclusive mandate, dedicated consultant",
      "Full market map and longlist within 10 days",
      "Structured assessment and shortlist delivery",
      "Offer management and onboarding support",
    ],
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
  },
  {
    id: "03",
    icon: "✦",
    title: "Confidential Campaigns",
    subtitle: "When the role cannot be disclosed",
    desc: "Some positions can't be advertised. A restructure that isn't public, a successor being identified before an announcement, a role that would create market sensitivity. We manage these entirely behind closed doors.",
    detail: [
      "Zero public disclosure at any stage",
      "Candidate NDAs where required",
      "Codename briefs for sensitive mandates",
      "Reporting to board or owner only",
    ],
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
  },
  {
    id: "04",
    icon: "✺",
    title: "Talent Strategy & Advisory",
    subtitle: "Workforce Planning · Succession",
    desc: "Beyond individual hires, we help organisations think about their leadership pipeline — who's ready, who needs developing, and where the critical gaps will emerge in 12 to 36 months.",
    detail: [
      "Leadership team diagnostic and benchmarking",
      "Succession planning for key roles",
      "Competitor talent mapping",
      "Compensation benchmarking and market data",
    ],
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  },
  {
    id: "05",
    icon: "⬡",
    title: "Diversity-Led Search",
    subtitle: "Inclusive · Representative · Rigorous",
    desc: "We help organisations build leadership teams that reflect the world they operate in. This isn't a bolt-on — it's an approach woven into every stage of our search methodology.",
    detail: [
      "Diverse longlist guaranteed on every mandate",
      "Blind-to-demographic initial screening",
      "Structured interviewing to reduce bias",
      "Reporting on pipeline diversity at each stage",
    ],
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    id: "06",
    icon: "⊕",
    title: "Interim & Project Leadership",
    subtitle: "Fast · Experienced · Available Now",
    desc: "When a leadership gap opens unexpectedly — through resignation, illness, or acquisition — we can deploy senior interim leaders within days, not weeks.",
    detail: [
      "Interim CEO, CFO, HR, and functional heads",
      "Transformation and integration leaders",
      "Available within 5–10 business days",
      "Day-rate and fixed-term arrangements",
    ],
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
  },
];

const differentiators = [
  { label: "Average time to shortlist", value: "21 days" },
  { label: "Offer acceptance rate", value: "91%" },
  { label: "12-month placement retention", value: "94%" },
  { label: "Searches completed", value: "500+" },
];

export default function Services() {
  return (
    <div className="bg-[#06121E] text-white font-sans">

      {/* ── HERO — gold bg ───────────────────── */}
      <section className="relative overflow-hidden bg-[#C6963A] pt-32 pb-24">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white opacity-[0.06] blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-3 text-amber-200 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="w-6 h-px bg-amber-200" />What We Do<span className="w-6 h-px bg-amber-200" />
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mt-4">
              Search services built
              <br />for critical hires.
            </h1>
            <p className="text-amber-100 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
              Six distinct services, one standard of rigour. Whether you need a CEO or
              a strategic interim, we bring the same level of discipline to every mandate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── METRICS STRIP ────────────────────── */}
      <section className="py-14 bg-[#080F18] border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((d, i) => (
              <motion.div key={d.label} {...fadeUpView(i * 0.08)} className="text-center">
                <p className="text-3xl font-bold text-white">{d.value}</p>
                <p className="text-gray-500 text-sm mt-2">{d.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES LIST ────────────────────── */}
      <section className="py-28 bg-[#06121E]">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden hover:border-[#C6963A]/30 transition-all duration-300 grid lg:grid-cols-[1fr_360px]`}
            >
              <div className="p-10">
                <div className="flex items-start gap-5">
                  <div className="shrink-0">
                    <span className="text-[#C6963A]/40 text-xs font-bold tracking-widest">{s.id}</span>
                    <span className="text-2xl text-[#C6963A] block mt-1">{s.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 tracking-wider">{s.subtitle}</p>
                    <h3 className="text-2xl font-bold text-white mt-1">{s.title}</h3>
                    <p className="text-gray-400 mt-4 leading-relaxed">{s.desc}</p>
                    <ul className="mt-6 space-y-2">
                      {s.detail.map((d) => (
                        <li key={d} className="flex items-center gap-3 text-sm text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C6963A] shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#06121E]/60 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── APPROACH CALLOUT ─────────────────── */}
      <section className="py-24 bg-[#080F18]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/[0.03] border border-white/8 rounded-3xl p-12 grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C6963A]">Our Guarantee</span>
              <h2 className="text-3xl font-bold mt-4 leading-tight">
                If the placement doesn't work,
                <br />we search again — at no charge.
              </h2>
              <p className="text-gray-500 mt-6 leading-relaxed">
                Every retained search comes with a 12-month replacement guarantee. If the
                placed candidate leaves within the first year for any reason, we run a
                full replacement search at zero additional cost.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 text-[#C6963A] text-sm font-semibold hover:gap-3 transition-all duration-200"
              >
                Discuss a mandate →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Written brief", desc: "Every mandate starts with a written brief — no ambiguity." },
                { title: "Progress reports", desc: "Weekly written updates on search progress and market feedback." },
                { title: "Honest shortlists", desc: "We tell you when the brief is unrealistic. We won't waste your time." },
                { title: "One consultant", desc: "The same person who takes your brief presents the shortlist." },
              ].map((item) => (
                <div key={item.title} className="bg-white/[0.04] border border-white/8 rounded-xl p-5">
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="relative overflow-hidden py-28 bg-[#06121E]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-[#06121E]/70" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C6963A]">Get Started</span>
          <h2 className="text-5xl font-bold text-white mt-4 leading-tight">
            Ready to discuss
            <br />a confidential mandate?
          </h2>
          <p className="text-gray-400 text-lg mt-6 max-w-xl mx-auto">
            The conversation costs nothing. Tell us about the role, and we'll tell you
            how we'd approach the search.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link to="/contact" className="bg-[#C6963A] hover:bg-[#b5872f] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg shadow-[#C6963A]/20">
              Submit a Confidential Brief
            </Link>
            <Link to="/about" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg transition-colors duration-200">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}