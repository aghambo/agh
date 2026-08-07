import React from 'react';
import { Quote, Star, User } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations/i18n';
import { testimonialsData } from '../data/hospitalData';
import { EthiopicPattern } from './EthiopicPattern';

interface TestimonialsProps {
  currentLang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const t = (key: string) => translations[currentLang][key] || key;

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <EthiopicPattern className="absolute inset-0 opacity-10" variant="subtle" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#059669] text-xs font-extrabold uppercase tracking-widest border border-emerald-200">
            <Quote className="w-4 h-4" />
            <span>{t('test.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {t('test.title')}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t('test.subtitle')}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-3xl p-8 border border-slate-200/80 hover:border-emerald-500/50 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{t(item.quoteKey)}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500">{t(item.roleKey)} • {t(item.locationKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
