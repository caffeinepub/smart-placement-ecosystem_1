import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-spe-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-spe-teal/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-spe-cyan/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-spe-teal/10 border border-spe-teal/20 text-spe-teal text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-spe-text mb-4 tracking-tight">
            Let's{' '}
            <span className="bg-gradient-to-r from-spe-teal to-spe-cyan bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-spe-muted text-lg max-w-2xl mx-auto">
            Have questions about the platform? Want to partner with us? We'd love to hear from
            you. Reach out and we'll get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-spe-text mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'hello@smartplacement.ai',
                    href: 'mailto:hello@smartplacement.ai',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+1 (800) SPE-JOBS',
                    href: 'tel:+18007735627',
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'San Francisco, CA — Serving globally',
                    href: null,
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-spe-teal/10 border border-spe-teal/20">
                        <Icon size={20} className="text-spe-teal" />
                      </div>
                      <div>
                        <div className="text-spe-muted text-xs font-medium uppercase tracking-wider mb-0.5">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-spe-text font-medium hover:text-spe-teal transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-spe-text font-medium">{item.value}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tagline card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-spe-teal/10 to-spe-cyan/5 border border-spe-teal/20">
              <p className="text-spe-text font-semibold text-lg mb-2">
                Ready to transform your placement process?
              </p>
              <p className="text-spe-muted text-sm leading-relaxed">
                Join thousands of students and hundreds of companies already using Smart
                Placement Ecosystem to make smarter hiring decisions.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-spe-card border border-spe-teal/10">
            <h3 className="text-xl font-bold text-spe-text mb-6">Send us a Message</h3>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-spe-teal/20 border border-spe-teal/30 flex items-center justify-center mb-4">
                  <Send size={28} className="text-spe-teal" />
                </div>
                <p className="text-spe-text font-semibold text-lg">Message Sent!</p>
                <p className="text-spe-muted text-sm mt-1">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-spe-muted text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-spe-navy border border-spe-teal/20 text-spe-text placeholder-spe-muted/40 focus:outline-none focus:border-spe-teal/50 focus:ring-1 focus:ring-spe-teal/30 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-spe-muted text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-spe-navy border border-spe-teal/20 text-spe-text placeholder-spe-muted/40 focus:outline-none focus:border-spe-teal/50 focus:ring-1 focus:ring-spe-teal/30 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-spe-muted text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 rounded-xl bg-spe-navy border border-spe-teal/20 text-spe-text placeholder-spe-muted/40 focus:outline-none focus:border-spe-teal/50 focus:ring-1 focus:ring-spe-teal/30 transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-spe-navy bg-gradient-to-r from-spe-teal to-spe-cyan rounded-xl hover:opacity-90 transition-all duration-200 shadow-md shadow-spe-teal/20"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
