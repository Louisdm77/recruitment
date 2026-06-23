import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
      .then(
        () => { setStatus("success"); setSending(false); form.current.reset(); },
        () => { setStatus("error"); setSending(false); }
      );
  };

  const offices = [
    { city: "London", address: "One Canada Square, Canary Wharf", note: "Primary Office" },
    { city: "New York", address: "World Trade Center, Lower Manhattan", note: "North America" },
    { city: "Dubai", address: "DIFC, Gate District", note: "Middle East & Africa" },
  ];

  const consultants = [
    { name: "Marcus Elliot", focus: "Financial Services · PE", email: "m.elliot@apexrecruiters.com" },
    { name: "Serena Okafor", focus: "Healthcare · Life Sciences", email: "s.okafor@apexrecruiters.com" },
    { name: "James Whitfield", focus: "Technology · SaaS", email: "j.whitfield@apexrecruiters.com" },
    { name: "Adaeze Nwosu", focus: "Consumer · Retail", email: "a.nwosu@apexrecruiters.com" },
  ];

  return (
    <div className="bg-[#06121E] text-white font-sans">

      {/* ── HERO ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#080F18] pt-32 pb-24">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#C6963A 1px, transparent 1px), linear-gradient(90deg, #C6963A 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6963A] to-transparent opacity-50" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-3 text-[#C6963A] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="w-6 h-px bg-[#C6963A]" />Get In Touch<span className="w-6 h-px bg-[#C6963A]" />
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mt-4">
              Start a confidential
              <br />
              <span className="text-[#C6963A]">conversation.</span>
            </h1>
            <p className="text-gray-400 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
              Tell us about the mandate. We'll respond within one business day with an
              honest assessment of how we'd approach the search.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTACT FORM + INFO ──────────── */}
      <section className="py-28 bg-[#06121E]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">

          {/* Form */}
          <motion.div {...fadeUpView()}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C6963A] mb-6">Submit a Brief</p>
            <div className="bg-white/[0.03] border border-white/8 rounded-3xl p-8">
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Your Name</label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      className="w-full bg-white/5 border border-white/10 focus:border-[#C6963A]/50 outline-none rounded-xl px-5 py-4 text-white text-sm placeholder:text-gray-600 transition-colors duration-200"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email</label>
                    <input
                      type="email"
                      name="reply_to"
                      required
                      className="w-full bg-white/5 border border-white/10 focus:border-[#C6963A]/50 outline-none rounded-xl px-5 py-4 text-white text-sm placeholder:text-gray-600 transition-colors duration-200"
                      placeholder="Work email"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Organisation</label>
                    <input
                      type="text"
                      name="organisation"
                      className="w-full bg-white/5 border border-white/10 focus:border-[#C6963A]/50 outline-none rounded-xl px-5 py-4 text-white text-sm placeholder:text-gray-600 transition-colors duration-200"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Role Title</label>
                    <input
                      type="text"
                      name="role_title"
                      className="w-full bg-white/5 border border-white/10 focus:border-[#C6963A]/50 outline-none rounded-xl px-5 py-4 text-white text-sm placeholder:text-gray-600 transition-colors duration-200"
                      placeholder="e.g. Chief Financial Officer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Sector</label>
                  <select
                    name="sector"
                    className="w-full bg-white/5 border border-white/10 focus:border-[#C6963A]/50 outline-none rounded-xl px-5 py-4 text-gray-400 text-sm transition-colors duration-200 appearance-none"
                  >
                    <option value="" className="bg-[#06121E]">Select sector</option>
                    {["Financial Services", "Healthcare & Life Sciences", "Technology & SaaS", "Energy & Infrastructure", "Consumer & Retail", "Professional Services", "Government & Public Sector", "Private Equity & VC", "Other"].map((s) => (
                      <option key={s} value={s} className="bg-[#06121E]">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Search Type</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Retained Search", "Confidential Campaign", "Interim Leadership"].map((type) => (
                      <label key={type} className="cursor-pointer">
                        <input type="radio" name="search_type" value={type} className="sr-only peer" />
                        <div className="border border-white/10 peer-checked:border-[#C6963A]/50 peer-checked:bg-[#C6963A]/10 rounded-xl px-3 py-3 text-center text-xs text-gray-500 peer-checked:text-[#C6963A] transition-all duration-200 hover:border-white/20">
                          {type}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Brief / Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    required
                    className="w-full bg-white/5 border border-white/10 focus:border-[#C6963A]/50 outline-none rounded-xl px-5 py-4 text-white text-sm placeholder:text-gray-600 transition-colors duration-200 resize-none"
                    placeholder="Tell us about the role, the organisation, and what you're looking for. Everything is confidential."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-[#C6963A] hover:bg-[#b5872f] disabled:opacity-60 text-white py-4 rounded-xl font-semibold transition-colors duration-200 text-sm tracking-wide mt-2"
                >
                  {sending ? "Sending..." : "Submit Confidential Brief →"}
                </button>
              </form>

              {status === "success" && (
                <div className="mt-5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm px-5 py-4 rounded-xl text-center">
                  ✓ Brief received. A consultant will be in touch within one business day.
                </div>
              )}
              {status === "error" && (
                <div className="mt-5 bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-5 py-4 rounded-xl text-center">
                  Something went wrong. Please email us directly at info@apexrecruiters.com
                </div>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <div className="space-y-8">
            <motion.div {...fadeUpView(0.1)}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C6963A] mb-6">Offices</p>
              <div className="space-y-4">
                {offices.map((o) => (
                  <div key={o.city} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 flex items-start gap-5">
                    <div className="w-10 h-10 rounded-xl bg-[#C6963A]/10 border border-[#C6963A]/20 flex items-center justify-center text-[#C6963A] text-sm shrink-0">
                      📍
                    </div>
                    <div>
                      <p className="text-white font-semibold">{o.city}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{o.address}</p>
                      <p className="text-[#C6963A] text-xs mt-1 font-medium">{o.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUpView(0.2)}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C6963A] mb-6">Contact a Consultant Directly</p>
              <div className="space-y-3">
                {consultants.map((c) => (
                  <div key={c.name} className="bg-white/[0.03] border border-white/8 rounded-2xl p-5 flex items-center justify-between gap-4 hover:border-[#C6963A]/30 transition-all duration-200">
                    <div>
                      <p className="text-white font-semibold text-sm">{c.name}</p>
                      <p className="text-gray-600 text-xs mt-0.5">{c.focus}</p>
                    </div>
                    <a
                      href={`mailto:${c.email}`}
                      className="text-[#C6963A] text-xs font-semibold hover:underline shrink-0"
                    >
                      Email →
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUpView(0.3)}>
              <div className="bg-[#C6963A]/8 border border-[#C6963A]/20 rounded-2xl p-6">
                <p className="text-[#C6963A] text-xs font-bold tracking-wider uppercase mb-3">🔒 Confidentiality Promise</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Everything shared in this form is treated as strictly confidential. We do not use
                  brief information for any purpose other than responding to your enquiry. We will
                  not contact any candidate or share any details without your explicit written consent.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
}