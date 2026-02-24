import { AlertTriangle, Cpu, Users } from 'lucide-react';

const points = [
  {
    icon: AlertTriangle,
    title: 'The Problem with Traditional Placement',
    description:
      'Conventional placement systems rely on manual resume screening, subjective shortlisting, and time-consuming processes. Students miss opportunities due to poor visibility, while recruiters struggle to identify the right candidates from hundreds of applications — leading to mismatches, delays, and frustration on both sides.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
  },
  {
    icon: Cpu,
    title: 'How AI Transforms Job Matching',
    description:
      'Our platform leverages advanced machine learning algorithms to analyze student profiles, skills, and academic performance against real-time job requirements. The AI engine intelligently ranks candidates, predicts job fit scores, and continuously learns from placement outcomes — delivering precision matching that traditional systems simply cannot achieve.',
    color: 'text-spe-teal',
    bg: 'bg-spe-teal/10',
    border: 'border-spe-teal/20',
  },
  {
    icon: Users,
    title: 'Benefits for Students & Recruiters',
    description:
      'Students gain personalized job recommendations, skill gap insights, and direct visibility to top companies. Recruiters receive pre-ranked, AI-verified candidate shortlists, saving hours of manual screening. The result is a faster, fairer, and more efficient placement ecosystem that benefits everyone in the hiring pipeline.',
    color: 'text-spe-cyan',
    bg: 'bg-spe-cyan/10',
    border: 'border-spe-cyan/20',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-spe-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-spe-teal/10 border border-spe-teal/20 text-spe-teal text-sm font-medium mb-4">
            About the Platform
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-spe-text mb-4 tracking-tight">
            Why Smart Placement{' '}
            <span className="bg-gradient-to-r from-spe-teal to-spe-cyan bg-clip-text text-transparent">
              Ecosystem?
            </span>
          </h2>
          <p className="text-spe-muted text-lg max-w-2xl mx-auto">
            We're reimagining how students find jobs and how companies discover talent — powered
            by artificial intelligence.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border ${point.border} ${point.bg} backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300 group`}
              >
                {/* Step number */}
                <div className="absolute top-6 right-6 text-5xl font-black text-spe-text/5 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl ${point.bg} border ${point.border} mb-6`}>
                  <Icon size={24} className={point.color} />
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-3 ${point.color}`}>{point.title}</h3>
                <p className="text-spe-muted leading-relaxed text-sm">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
