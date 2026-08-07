import React from 'react';
import { Users, Bed, Stethoscope, Award, HeartPulse, Laptop, Clock } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations/i18n';
import { EthiopicPattern } from './EthiopicPattern';

interface StatsProps {
  currentLang: Language;
}

export const StatsCounterSection: React.FC<StatsProps> = ({ currentLang }) => {
  const t = (key: string) => translations[currentLang][key] || key;

  const stats = [
    {
      value: '500,000+',
      label: 'Patients Treated',
      subtext: 'Across West Shewa & Oromia',
      icon: Users,
      color: 'text-amber-400',
    },
    {
      value: '350+',
      label: 'Inpatient Beds',
      subtext: 'Including 12 ICU & NICU',
      icon: Bed,
      color: 'text-emerald-400',
    },
    {
      value: '85+',
      label: 'Specialist Doctors',
      subtext: 'Surgeons, Obstetricians, Pediatricians',
      icon: Stethoscope,
      color: 'text-cyan-400',
    },
    {
      value: '150+',
      label: 'STEM Certified Staff',
      subtext: 'Trained by IB Tech Startup',
      icon: Laptop,
      color: 'text-[#10B981]',
    },
    {
      value: '24/7',
      label: 'Emergency Trauma',
      subtext: 'Continuous Immediate Response',
      icon: Clock,
      color: 'text-amber-300',
    },
    {
      value: '98.6%',
      label: 'Patient Satisfaction',
      subtext: 'Community Verified Quality',
      icon: HeartPulse,
      color: 'text-emerald-300',
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-[#0B2545] via-[#134074] to-[#059669] text-white overflow-hidden shadow-2xl">
      {/* Background Pattern */}
      <EthiopicPattern className="absolute inset-0 opacity-20" variant="light" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {t('stats.title')}
          </h2>
          <p className="text-slate-200 text-sm sm:text-base">
            {t('stats.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel-dark rounded-3xl p-5 border border-white/15 text-center flex flex-col items-center justify-between hover:scale-105 transition-transform duration-300"
            >
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center mb-3">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-200 mt-1">{stat.label}</div>
                <div className="text-[10px] text-slate-300 mt-0.5">{stat.subtext}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
