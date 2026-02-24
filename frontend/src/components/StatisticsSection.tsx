import { GraduationCap, Building2, FileText, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: GraduationCap,
    value: '10,000+',
    label: 'Students Registered',
    description: 'Active students using the platform',
    color: 'text-spe-teal',
    bg: 'bg-spe-teal/10',
    border: 'border-spe-teal/20',
  },
  {
    icon: Building2,
    value: '500+',
    label: 'Partner Companies',
    description: 'Top companies actively recruiting',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
  },
  {
    icon: FileText,
    value: '45,000+',
    label: 'Applications Submitted',
    description: 'Total job applications processed',
    color: 'text-spe-cyan',
    bg: 'bg-spe-cyan/10',
    border: 'border-spe-cyan/20',
  },
  {
    icon: TrendingUp,
    value: '92%',
    label: 'Placement Success Rate',
    description: 'Students placed within 3 months',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
  },
];

export default function StatisticsSection() {
  return (
    <section className="py-24 lg:py-32 bg-spe-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-spe-teal/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-spe-teal/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-spe-teal/10 border border-spe-teal/20 text-spe-teal text-sm font-medium mb-4">
            Platform Statistics
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-spe-text mb-4 tracking-tight">
            Numbers That{' '}
            <span className="bg-gradient-to-r from-spe-teal to-spe-cyan bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h2>
          <p className="text-spe-muted text-lg max-w-2xl mx-auto">
            Our platform has already transformed thousands of careers and helped hundreds of
            companies find their ideal candidates.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl bg-spe-card border ${stat.border} hover:scale-[1.03] transition-transform duration-300 text-center group`}
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl ${stat.bg} border ${stat.border} mb-5`}>
                  <Icon size={24} className={stat.color} />
                </div>

                {/* Value */}
                <div className={`text-4xl lg:text-5xl font-black mb-2 ${stat.color}`}>
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-spe-text font-semibold text-base mb-1">{stat.label}</div>

                {/* Description */}
                <div className="text-spe-muted text-sm">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
