import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-spe-navy/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-spe-teal/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 group"
          >
            <img
              src="/assets/generated/spe-logo.dim_128x128.png"
              alt="Smart Placement Ecosystem Logo"
              className="w-9 h-9 rounded-lg object-contain"
            />
            <span className="font-bold text-lg text-spe-text leading-tight hidden sm:block">
              Smart <span className="text-spe-teal">Placement</span> Ecosystem
            </span>
            <span className="font-bold text-base text-spe-text leading-tight sm:hidden">
              <span className="text-spe-teal">SPE</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-4 py-2 text-sm font-medium text-spe-muted hover:text-spe-teal transition-colors duration-200 rounded-lg hover:bg-spe-teal/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-5 py-2 text-sm font-semibold text-spe-teal border border-spe-teal/40 rounded-lg hover:bg-spe-teal/10 transition-all duration-200">
              Login
            </button>
            <button className="px-5 py-2 text-sm font-semibold text-spe-navy bg-gradient-to-r from-spe-teal to-spe-cyan rounded-lg hover:opacity-90 transition-all duration-200 shadow-md shadow-spe-teal/20">
              Register
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-spe-muted hover:text-spe-teal hover:bg-spe-teal/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 pt-2 border-t border-spe-teal/10 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="block px-4 py-3 text-sm font-medium text-spe-muted hover:text-spe-teal hover:bg-spe-teal/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 px-4 pt-3">
              <button className="flex-1 py-2.5 text-sm font-semibold text-spe-teal border border-spe-teal/40 rounded-lg hover:bg-spe-teal/10 transition-all">
                Login
              </button>
              <button className="flex-1 py-2.5 text-sm font-semibold text-spe-navy bg-gradient-to-r from-spe-teal to-spe-cyan rounded-lg hover:opacity-90 transition-all">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
