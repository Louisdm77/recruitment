import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const team = [
  {
    name: "Marcus Elliot",
    title: "Managing Partner",
    focus: "Financial Services · Private Equity",
    bio: "Marcus has 18 years of executive search experience, having previously led talent advisory at a Big Four firm. He personally oversees all CFO, CEO, and board-level mandates.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    name: "Serena Okafor",
    title: "Senior Search Consultant",
    focus: "Healthcare · Life Sciences",
    bio: "Serena spent a decade in healthcare operations before moving into talent. Her network across hospital systems, pharma, and med-tech is unmatched in the sector.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  },
  {
    name: "James Whitfield",
    title: "Principal Consultant",
    focus: "Technology · SaaS · Fintech",
    bio: "James focuses on scaling leadership teams for high-growth tech companies. He has placed over 60 VPs, CPOs, and CTOs across Series A through pre-IPO stages.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
  },
  {
    name: "Adaeze Nwosu",
    title: "Search Consultant",
    focus: "Consumer · Retail · FMCG",
    bio: "Adaeze brings a commercial lens to talent acquisition, drawing on her background in brand strategy. She specialises in commercial leadership and marketing roles.",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
  },
  {
    name: "Daniel Hurst",
    title: "Research & Intelligence Lead",
    focus: "Market Mapping · Competitive Intelligence",
    bio: "Daniel leads the research function that underpins every search. His market mapping gives our consultants the intelligence edge that passive outreach alone can't provide.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
  },
  {
    name: "Priya Mehta",
    title: "Search Consultant",
    focus: "Professional Services · Legal · Consulting",
    bio: "Priya specialises in senior hires within professional services firms — from equity partnerships to regional managing director appointments across 14 countries.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
  },
];

const values = [
  {
    icon: "◈",
    title: "Discretion as default",
    desc: "We operate on the principle that every engagement is confidential until explicitly stated otherwise. Your brief, your candidates, and your identity are never disclosed without your consent.",
  },
  {
    icon: "✦",
    title: "Specialist, not generalist",
    desc: "Each consultant owns a sector. They speak the language, know the players, and have the relationships. You get genuine expertise, not a recruiter who Googled the industry this morning.",
  },
  {
    icon: "◎",
    title: "Candidate-first assessment",
    desc: "We only present people we would hire ourselves if we were in your position. Every shortlist is a recommendation — not a data dump of CVs gathered from a database.",
  },
  {
    icon: "✺",
    title: "Long-term accountability",
    desc: "Our work doesn't end at placement. We follow up at 3, 6, and 12 months. A 94% retention rate isn't a coincidence — it's what happens when search is treated as a strategic act.",
  },
];

export default function About() {
  return (
    <div className="bg-[#06121E] text-white font-sans">

      {/* ── HERO — image left ────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06121E]/60 via-[#06121E]/80 to-[#06121E]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div {...fadeUpView(0.1)}>
            <span className="inline-flex items-center gap-3 text-[#C6963A] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="w-6 h-px bg-[#C6963A]" />About Apex Recruiters<span className="w-6 h-px bg-[#C6963A]" />
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mt-4">
              Built on trust.
              <br />
              <span className="text-[#C6963A]">Measured by tenure.</span>
            </h1>
            <p className="text-gray-400 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
              Apex Recruiters is a specialist executive search firm. We work exclusively
              with organisations on confidential mandates, roles that can't be advertised,
              leaders who aren't actively looking, and searches where failure isn't an option.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STORY ────────────────────────────── */}
      <section className="py-28 bg-[#06121E]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeUpView()}>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C6963A]">Our Story</span>
            <h2 className="text-4xl font-bold mt-4 leading-tight">
              Twelve years of
              <br />confidential search.
            </h2>
            <div className="mt-8 space-y-5 text-gray-400 leading-relaxed">
              <p>
                Apex Recruiters was founded in 2013 by Marcus Elliot, after a decade in executive talent advisory at a global consulting firm. The firm was built on a simple observation: organisations with the most critical hiring needs were the least well-served by conventional recruitment.
              </p>
              <p>
                We started with a single sector and a single promise — to treat every search as if the future of the organisation depended on it. In many cases, it does.
              </p>
              <p>
                Today, our team of six specialist consultants operates across eight sectors, with placements in 22 countries. Every search is still run the same way: with a dedicated consultant, a structured process, and complete confidentiality.
              </p>
            </div>
            <div className="flex gap-10 mt-12 pt-8 border-t border-white/10">
              {[["500+", "Placements"], ["22", "Countries"], ["94%", "12-Month Retention"]].map(([n, l]) => (
                <div key={l}>
                  <p className="text-2xl font-bold text-white">{n}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80"
              alt="Office"
              className="rounded-3xl w-full object-cover aspect-[4/3] border border-white/8"
            />
            <div className="absolute -bottom-5 -right-5 bg-[#C6963A] rounded-2xl px-6 py-4 shadow-2xl">
              <p className="text-white text-xs font-semibold">Founded</p>
              <p className="text-white font-bold text-2xl mt-0.5">2013</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VALUES — lighter bg ───────────────── */}
      <section className="py-28 bg-[#080F18]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUpView()} className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C6963A]">How We Work</span>
            <h2 className="text-4xl font-bold mt-4">Principles, not platitudes</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUpView(i * 0.1)}
                className="bg-white/[0.03] border border-white/8 rounded-2xl p-8 hover:border-[#C6963A]/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                <span className="text-2xl text-[#C6963A]">{v.icon}</span>
                <h3 className="text-white font-bold mt-5">{v.title}</h3>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────── */}
      <section className="py-28 bg-[#06121E]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUpView()} className="mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C6963A]">Our Team</span>
            <h2 className="text-4xl font-bold mt-4">The search team</h2>
            <p className="text-gray-500 mt-4 max-w-xl leading-relaxed">
              Six specialist consultants. Each owns a sector. Each operates with the same standard of discretion and rigour.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden hover:border-[#C6963A]/30 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06121E] to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-white font-bold">{m.name}</p>
                  <p className="text-[#C6963A] text-xs font-semibold mt-0.5">{m.title}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{m.focus}</p>
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed">{m.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="relative overflow-hidden py-28 bg-[#C6963A]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white leading-tight">Work with a team that takes your search seriously.</h2>
          <p className="text-amber-100 text-lg mt-6 max-w-xl mx-auto">Every brief is handled with care. Every conversation is confidential. Let's talk.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link to="/contact" className="bg-[#06121E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#0d1f30] transition-colors duration-200">
              Start a Confidential Brief
            </Link>
            <Link to="/services" className="border border-white/40 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors duration-200">
              Our Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}