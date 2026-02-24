import { Heart } from 'lucide-react';
import { SiLinkedin, SiGithub, SiX } from 'react-icons/si';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: SiX, href: '#', label: 'X (Twitter)' },
  { icon: SiGithub, href: '#', label: 'GitHub' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'smart-placement-ecosystem');

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-spe-surface border-t border-spe-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/spe-logo.dim_128x128.png"
                alt="SPE Logo"
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="font-bold text-spe-text">
                Smart <span className="text-spe-teal">Placement</span> Ecosystem
              </span>
            </div>
            <p className="text-spe-muted text-sm leading-relaxed max-w-xs mb-6">
              AI-powered campus recruitment platform connecting students with their dream careers
              and helping companies discover top talent.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2.5 rounded-lg bg-spe-card border border-spe-teal/10 text-spe-muted hover:text-spe-teal hover:border-spe-teal/30 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-spe-text font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-spe-muted text-sm hover:text-spe-teal transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-spe-text font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-spe-muted text-sm">
              <li>
                <a
                  href="mailto:hello@smartplacement.ai"
                  className="hover:text-spe-teal transition-colors"
                >
                  hello@smartplacement.ai
                </a>
              </li>
              <li>+1 (800) SPE-JOBS</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-spe-teal/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-spe-muted text-xs">
          <p>© {currentYear} Smart Placement Ecosystem. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with{' '}
            <Heart size={12} className="text-spe-teal fill-spe-teal" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-spe-teal hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
