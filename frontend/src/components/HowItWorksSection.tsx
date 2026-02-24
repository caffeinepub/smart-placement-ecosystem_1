import { Upload, Brain, Target, UserCheck } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Upload,
    title: 'Upload Your Resume',
    description:
      'Students create a profile and upload their resume. Our system parses and extracts key skills, experience, and academic achievements automatically.',
    color: 'text-spe-teal',
    glow: 'shadow-spe-teal/20',
    border: 'border-spe-teal/20',
    bg: 'bg-spe-teal/10',
  },
  {
    step: '02',
    icon: Brain,
    title: 'AI Analyzes Skills',
    description:
      'Our AI engine deeply analyzes the resume, identifies skill sets, predicts competency levels, and builds a comprehensive candidate profile for matching.',
    color: 'text-violet-400',
    glow: 'shadow-violet-400/20',
    border: 'border-violet-400/20',
    bg: 'bg-violet-400/10',
  },
  {
    step: '03',
    icon: Target,
    title: 'System Matches Jobs',
    description:
      'The platform cross-references candidate profiles with live job listings, computing fit scores and ranking the most relevant opportunities for each student.',
    color: 'text-spe-cyan',
    glow: 'shadow-spe-cyan/20',
    border: 'border-spe-cyan/20',
    bg: 'bg-spe-cyan/10',
  },
  {
    step: '04',
    icon: UserCheck,
    title: 'Recruiter Shortlists',
    description:
      'Recruiters receive AI-ranked candidate shortlists, review profiles, and connect directly with the best-fit candidates — streamlining the entire hiring process.',
    color: 'text-emerald-400',
    glow: 'shadow-emerald-400/20',
    border: 'border-emerald-400/20',
    bg: 'bg-emerald-400/10',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-spe-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-spe-teal/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-spe-teal/10 border border-spe-teal/20 text-spe-teal text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-spe-text mb-4 tracking-tight">
            Four Simple{' '}
            <span className="bg-gradient-to-r from-spe-teal to-spe-cyan bg-clip-text text-transparent">
              Steps to Success
            </span>
          </h2>
          <p className="text-spe-muted text-lg max-w-2xl mx-auto">
            From resume upload to job offer — our streamlined process makes placement effortless
            for both students and recruiters.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connector line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-0px)] w-full h-px bg-gradient-to-r from-spe-teal/30 to-transparent z-10 translate-x-6" />
                )}

                <div
                  className={`relative p-6 rounded-2xl bg-spe-card border ${step.border} hover:shadow-xl ${step.glow} transition-all duration-300 hover:-translate-y-1 h-full flex flex-col`}
                >
                  {/* Step number badge */}
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${step.bg} border ${step.border} mb-5`}>
                    <span className={`text-sm font-black ${step.color}`}>{step.step}</span>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl ${step.bg} mb-5 w-fit`}>
                    <Icon size={22} className={step.color} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-spe-text mb-3">{step.title}</h3>
                  <p className="text-spe-muted text-sm leading-relaxed flex-1">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
