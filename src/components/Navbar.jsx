import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "FAQ", to: "/faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#06121E]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded bg-[#C6963A] flex items-center justify-center">
            <span className="text-white font-black text-sm tracking-tighter">A</span>
          </div>
          <span className="text-white font-bold tracking-tight text-lg">
            Apex <span className="text-[#C6963A]">Recruiters</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === l.to ? "text-[#C6963A]" : "text-gray-300 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-[#C6963A] hover:bg-[#b5872f] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            Partner With Us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-[#06121E]/98 backdrop-blur-md border-t border-white/10 px-6 py-6 space-y-4"
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`block text-sm font-medium py-2 ${pathname === l.to ? "text-[#C6963A]" : "text-gray-300"}`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block bg-[#C6963A] text-white text-sm font-semibold px-5 py-3 rounded-lg text-center mt-4"
            >
              Partner With Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}