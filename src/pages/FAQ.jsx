import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "Confidentiality",
    items: [
      {
        q: "How do you guarantee confidentiality throughout a search?",
        a: "Every mandate is assigned a codename. Candidates are not informed of the client's identity until mutual interest is confirmed and the client gives explicit approval. Our team signs NDAs where required. No public job postings are ever made.",
      },
      {
        q: "Can you run a search without our competitors knowing we're hiring?",
        a: "Yes. This is standard for many of our mandates. We approach candidates through direct, discreet outreach — never advertising, never using job boards. The market won't know you're looking unless you choose to tell them.",
      },
      {
        q: "Do you share our brief with anyone outside your team?",
        a: "No. Your brief, your identity, and all associated details remain within Apex Recruiters' search team. We don't subcontract work or share information with third-party databases.",
      },
    ],
  },
  {
    category: "The Search Process",
    items: [
      {
        q: "How long does an executive search take?",
        a: "Our average time from brief to shortlist is 21 days. Full placement — including offer, negotiation, and acceptance — typically takes 35–55 days depending on notice periods and the complexity of the role. We'll give you a realistic timeline at the start of every engagement.",
      },
      {
        q: "How do you find candidates who aren't actively looking?",
        a: "Through direct market research, relationship networks built over 12+ years, and structured intelligence gathering. We map the relevant talent universe for every role — not just the people who happen to be on LinkedIn looking.",
      },
      {
        q: "How many candidates will be on the shortlist?",
        a: "We typically present 3–5 candidates per shortlist. We won't present someone unless we'd recommend them. A shorter list of strong candidates is more valuable than a long list of maybes.",
      },
      {
        q: "Do you handle the interview process and offer negotiation?",
        a: "Yes. We coordinate interview scheduling, provide candidate briefing notes, gather structured feedback, and manage offer and negotiation on both sides. Our goal is to protect the placement — not just facilitate the connection.",
      },
    ],
  },
  {
    category: "Fees & Engagement",
    items: [
      {
        q: "How are you fee structured?",
        a: "Retained search fees are typically structured in three stages: an engagement fee on signing, a delivery fee on shortlist submission, and a placement fee on start date. Fees are calculated as a percentage of the first-year compensation package. We'll provide a written proposal before any engagement begins.",
      },
      {
        q: "What is your replacement guarantee?",
        a: "Every retained search includes a 12-month replacement guarantee. If the placed candidate leaves the organisation for any reason within 12 months of their start date, we will conduct a full replacement search at no additional charge.",
      },
      {
        q: "Do you work on contingency?",
        a: "For most senior mandates, we work on a retained basis — this is how we ensure the search receives the dedicated resource it requires. We can discuss contingency arrangements for specific circumstances on a case-by-case basis.",
      },
    ],
  },
  {
    category: "Working With Apex",
    items: [
      {
        q: "Who will be running our search?",
        a: "A single named consultant will lead your engagement from brief to placement. You'll meet them before the search begins. They'll give you their direct contact details. There is no bait-and-switch to a junior researcher after you sign.",
      },
      {
        q: "Do you work internationally?",
        a: "Yes. We have placed candidates in 22 countries and regularly manage cross-border searches. Our consultants have direct networks in the UK, Europe, North America, the Middle East, and Sub-Saharan Africa.",
      },
      {
        q: "Can you handle multiple searches simultaneously?",
        a: "Yes, though we deliberately limit the number of active mandates each consultant carries to ensure quality. If we can't give your search the attention it deserves, we'll tell you before we take your brief.",
      },
    ],
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null);

  const toggle = (id) => setOpenItem(openItem === id ? null : id);

  return (
    <div className="bg-[#06121E] text-white font-sans">

      {/* ── HERO — white-ish bg (most unique on site) ── */}
      <section className="relative overflow-hidden bg-white pt-32 pb-24">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#C6963A]" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[#C6963A] opacity-[0.06] blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-3 text-[#C6963A] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="w-6 h-px bg-[#C6963A]" />Frequently Asked Questions<span className="w-6 h-px bg-[#C6963A]" />
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#06121E] leading-[1.08] tracking-tight mt-4">
              Questions about
              <br />
              <span className="text-[#C6963A]">working with us.</span>
            </h1>
            <p className="text-gray-500 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
              Everything organisations ask before their first confidential brief.
              If you don't see your question here, ask us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────── */}
      <section className="py-28 bg-[#06121E]">
        <div className="max-w-4xl mx-auto px-6 space-y-14">
          {faqs.map((cat) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#C6963A] text-xs font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
                <span className="w-6 h-px bg-[#C6963A]" />{cat.category}
              </p>
              <div className="space-y-3">
                {cat.items.map((item, j) => {
                  const id = `${cat.category}-${j}`;
                  const isOpen = openItem === id;
                  return (
                    <div
                      key={id}
                      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${isOpen ? "border-[#C6963A]/30" : "border-white/8 hover:border-white/15"}`}
                    >
                      <button
                        onClick={() => toggle(id)}
                        className="w-full flex items-center justify-between px-7 py-5 text-left bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-200"
                      >
                        <span className={`font-semibold text-sm leading-snug pr-4 ${isOpen ? "text-[#C6963A]" : "text-white"}`}>
                          {item.q}
                        </span>
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-all duration-200 ${isOpen ? "bg-[#C6963A] text-white" : "bg-white/8 text-gray-400"}`}>
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-7 pb-6 pt-2 border-t border-white/8">
                              <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── STILL HAVE QUESTIONS ─────────────── */}
      <section className="py-20 bg-[#080F18] border-t border-white/8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C6963A]">Still unsure?</span>
              <h2 className="text-3xl font-bold mt-3">Ask us directly.</h2>
              <p className="text-gray-500 mt-4 leading-relaxed max-w-lg">
                Every engagement starts with a conversation. There's no pitch, no obligation,
                and no obligation to disclose more than you're comfortable with. We'll answer
                your questions and tell you honestly whether we're the right firm for the mandate.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <Link
                to="/contact"
                className="bg-[#C6963A] hover:bg-[#b5872f] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-center whitespace-nowrap"
              >
                Get in Touch →
              </Link>
              <Link
                to="/services"
                className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg transition-colors duration-200 text-center whitespace-nowrap text-sm"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}