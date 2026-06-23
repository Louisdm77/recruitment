import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const testimonials = [
  {
    name: "Group CEO",
    org: "Global Infrastructure Group",
    sector: "Infrastructure · Private Equity",
    text: "Apex ran a CFO search for us that we'd failed to fill for seven months through other firms. They came back with a shortlist of four people in three weeks — all of whom we would have hired. We placed one. She's exceptional.",
    outcome: "CFO placed in 34 days",
  },
  {
    name: "Chief People Officer",
    org: "Series C HealthTech",
    sector: "Healthcare · Technology",
    text: "We needed a Chief People Officer who understood hypergrowth and had genuine operator experience — not just HR theory. Apex found someone we couldn't have reached ourselves. The brief was sensitive. They handled it with complete discretion.",
    outcome: "CPO placed in 41 days",
  },
  {
    name: "Chairman",
    org: "UK Regional Bank",
    sector: "Financial Services",
    text: "When we decided to replace our MD, only a handful of people could know. Apex managed the entire process without a single leak. The candidate didn't know who the client was until the final interview. That level of control is extraordinary.",
    outcome: "Managing Director placed confidentially",
  },
  {
    name: "Founder & CEO",
    org: "Consumer Brand (Series B)",
    sector: "Consumer · Retail",
    text: "Our commercial director resigned with three months' notice and we had no pipeline. Apex delivered a shortlist in 18 days. The person they placed has since been promoted. I recommend them to every founder I know.",
    outcome: "Commercial Director placed in 28 days",
  },
  {
    name: "VP People",
    org: "Global Consulting Firm",
    sector: "Professional Services",
    text: "What sets Apex apart is that they push back. They told us our initial brief was too narrow and would take six months. They were right. We revised the spec on their advice and placed in six weeks.",
    outcome: "Regional Managing Director placed",
  },
  {
    name: "CEO",
    org: "Industrial Manufacturing Group",
    sector: "Engineering · Manufacturing",
    text: "We've worked with Apex on four searches over three years. Every placement is still with us. That retention record is the only number that matters to me. They understand what we're building.",
    outcome: "4 senior placements over 3 years",
  },
];

const stats = [
  { n: "94%", label: "12-month retention rate" },
  { n: "91%", label: "Offer acceptance rate" },
  { n: "21", label: "Avg. days to shortlist" },
  { n: "500+", label: "Senior placements made" },
];

const logos = [
  "Financial Services Group", "HealthTech Ltd", "Regional Bank", "Consumer Brands Co.",
  "Global Consulting", "Industrial Group",
];

export default function Testimonials() {
  return (
    <div className="bg-[#06121E] text-white font-sans">

      {/* ── HERO — offset image ───────────────── */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06121E]/70 via-[#06121E]/80 to-[#06121E]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-3 text-[#C6963A] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="w-6 h-px bg-[#C6963A]" />Client Results<span className="w-6 h-px bg-[#C6963A]" />
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mt-4">
              What our clients
              <br />
              <span className="text-[#C6963A]">actually say.</span>
            </h1>
            <p className="text-gray-400 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
              We don't publish client names — they're confidential, like every search we run.
              But we do share what they've said. The outcomes speak for themselves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────── */}
      <section className="py-20 bg-[#080F18] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={s.label} {...fadeUpView(i * 0.1)} className="text-center">
                <p className="text-4xl font-bold text-white">{s.n}</p>
                <p className="text-gray-500 text-sm mt-3">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────── */}
      <section className="py-28 bg-[#06121E]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUpView()} className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C6963A]">Testimonials</span>
            <h2 className="text-4xl font-bold mt-4">Client feedback</h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">
              All testimonials are provided voluntarily. Names and organisations are anonymised at the client's request.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/[0.03] border border-white/8 rounded-2xl p-8 flex flex-col hover:border-[#C6963A]/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                {/* stars */}
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-[#C6963A] text-sm">★</span>)}
                </div>

                <p className="text-gray-300 leading-relaxed text-sm flex-1 italic">"{t.text}"</p>

                {/* outcome chip */}
                <div className="mt-6 mb-5">
                  <span className="bg-[#C6963A]/10 border border-[#C6963A]/20 text-[#C6963A] text-xs font-semibold px-3 py-1.5 rounded-full">
                    ✓ {t.outcome}
                  </span>
                </div>

                <div className="pt-5 border-t border-white/8">
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{t.org} · <span className="text-gray-600">{t.sector}</span></p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGOS ─────────────────────── */}
      <section className="py-20 bg-[#080F18] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs text-gray-600 tracking-[0.2em] uppercase mb-10">
            Organisations that have trusted Apex Recruiters — names withheld by request
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {logos.map((l) => (
              <div key={l} className="bg-white/[0.03] border border-white/8 text-gray-600 text-sm rounded-xl px-6 py-3 font-medium">
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT SECTION ───────────────────── */}
      <section className="py-28 bg-[#06121E]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/[0.03] border border-white/8 rounded-3xl p-12 grid lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C6963A]">The Proof</span>
              <h2 className="text-3xl font-bold mt-4 leading-tight">
                Every number here
                <br />represents a real outcome.
              </h2>
              <p className="text-gray-500 mt-6 leading-relaxed text-sm">
                We don't quote vanity metrics. Our 94% retention figure is calculated from
                placements made in the last five years. Our 21-day average is measured
                from brief receipt to shortlist delivery, not to first contact.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 text-[#C6963A] text-sm font-semibold hover:gap-3 transition-all duration-200"
              >
                Start a search →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "2000+", l: "Senior placements" },
                { n: "22", l: "Countries" },
                { n: "12+", l: "Years operating" },
                { n: "8", l: "Sectors covered" },
              ].map(({ n, l }) => (
                <div key={l} className="bg-[#C6963A]/5 border border-[#C6963A]/15 rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-white">{n}</p>
                  <p className="text-gray-500 text-xs mt-2">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="relative overflow-hidden py-24 bg-[#C6963A]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">Add your organisation to this list.</h2>
          <p className="text-amber-100 mt-5 text-lg">The first conversation is confidential and costs nothing.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/contact" className="bg-[#06121E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0d1f30] transition-colors duration-200">
              Submit a Brief
            </Link>
            <Link to="/services" className="border border-white/40 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors duration-200">
              View Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}