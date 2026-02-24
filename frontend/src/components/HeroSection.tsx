import { ArrowRight, LogIn } from 'lucide-react';

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1440x800.png')" }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-spe-navy/80 via-spe-navy/60 to-spe-navy" />
      <div className="absolute inset-0 bg-gradient-to-r from-spe-navy/70 via-transparent to-spe-navy/70" />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-spe-teal/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-spe-cyan/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-spe-teal/30 bg-spe-teal/10 text-spe-teal text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-spe-teal animate-pulse" />
          AI-Powered Platform
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-spe-text leading-tight tracking-tight mb-6">
          AI-Powered{' '}
          <span className="bg-gradient-to-r from-spe-teal to-spe-cyan bg-clip-text text-transparent">
            Smart Placement
          </span>{' '}
          Platform
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-spe-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Revolutionizing campus recruitment with intelligent AI matching. Connect students with
          their dream careers and help recruiters discover top talent — faster, smarter, and
          more accurately than ever before.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleScroll('#how-it-works')}
            className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-spe-navy bg-gradient-to-r from-spe-teal to-spe-cyan rounded-xl hover:opacity-90 transition-all duration-200 shadow-lg shadow-spe-teal/25 hover:shadow-spe-teal/40 hover:-translate-y-0.5"
          >
            Get Started
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-spe-teal border border-spe-teal/40 rounded-xl hover:bg-spe-teal/10 transition-all duration-200 hover:-translate-y-0.5"
          >
            <LogIn size={18} />
            Login
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-spe-muted/60 text-sm">
          <span className="flex items-center gap-2">
            <span className="text-spe-teal font-bold text-lg">10K+</span> Students
          </span>
          <span className="w-px h-4 bg-spe-muted/20" />
          <span className="flex items-center gap-2">
            <span className="text-spe-teal font-bold text-lg">500+</span> Companies
          </span>
          <span className="w-px h-4 bg-spe-muted/20" />
          <span className="flex items-center gap-2">
            <span className="text-spe-teal font-bold text-lg">92%</span> Success Rate
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-spe-muted/40 text-xs">
        <span>Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-spe-teal/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
