import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#06121E] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded bg-[#C6963A] flex items-center justify-center">
                <span className="text-white font-black text-sm">A</span>
              </div>
              <span className="text-white font-bold tracking-tight text-lg">
                Apex <span className="text-[#C6963A]">Recruiters</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              A confidential executive search and talent acquisition firm. We connect
              organisations with exceptional leaders — discreetly, strategically, and with precision.
            </p>
            <p className="text-gray-600 text-xs mt-6">info@apexrecruiters.com</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Navigation</p>
            <ul className="space-y-3">
              {[["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Testimonials", "/testimonials"], ["FAQ", "/faq"], ["Contact", "/contact"]].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-gray-500 hover:text-[#C6963A] text-sm transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-white text-xs font-semibold tracking-[0.15em] uppercase mb-5">Services</p>
            <ul className="space-y-3">
              {["Executive Search", "Confidential Recruitment", "Talent Strategy", "Retained Search", "Leadership Advisory", "Succession Planning"].map((s) => (
                <li key={s}>
                  <span className="text-gray-500 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-14 pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Apex Recruiters. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Confidential Search · Executive Talent · Global Reach</p>
        </div>
      </div>
    </footer>
  );
}