import React from 'react';
import { Award, Calendar, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations/i18n';
import { achievementsData } from '../data/hospitalData';
import { EthiopicPattern } from './EthiopicPattern';
import { handleImgError } from '../assets/images';

interface AchievementsProps {
  currentLang: Language;
}

export const AchievementsSection: React.FC<AchievementsProps> = ({ currentLang }) => {
  const t = (key: string) => translations[currentLang][key] || key;

  return (
    <section id="achievements" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <EthiopicPattern className="absolute inset-0 opacity-15" variant="subtle" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold uppercase tracking-widest border border-amber-200">
            <Award className="w-4 h-4 text-amber-600" />
            <span>{t('achieve.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {t('achieve.title')}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t('achieve.subtitle')}
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="mt-16 relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#059669] via-[#0B2545] to-amber-500 hidden md:block rounded-full" />

          <div className="space-y-12">
            {achievementsData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[#0B2545] border-4 border-white text-white shadow-lg">
                    <Calendar className="w-4 h-4 text-amber-400" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 px-0 md:px-8">
                    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-emerald-500/50 transition-all duration-300 relative group overflow-hidden">
                      {item.image && (
                        <div className="h-44 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden relative">
                          <img
                            src={item.image}
                            alt={t(item.titleKey)}
                            onError={(e) => handleImgError(e, 'building')}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                          <span className="absolute bottom-3 left-4 px-3 py-1 bg-amber-400 text-slate-900 text-xs font-black rounded-full shadow">
                            {item.year}
                          </span>
                        </div>
                      )}

                      {!item.image && (
                        <div className="flex items-center space-x-2 text-xs font-extrabold text-amber-600 mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{item.year} Milestone</span>
                        </div>
                      )}

                      <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                        {t(item.titleKey)}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {t(item.descKey)}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center space-x-2 text-xs text-emerald-700 font-bold">
                        <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                        <span>Verified Hospital Milestone</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
