import React from 'react';
import { Handshake, Building, Award } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations/i18n';
import { partnersData } from '../data/hospitalData';

interface PartnersProps {
  currentLang: Language;
}

export const PartnersSection: React.FC<PartnersProps> = ({ currentLang }) => {
  const t = (key: string) => translations[currentLang][key] || key;

  return (
    <section className="py-16 bg-slate-100 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-[#059669] mb-1">
            <Handshake className="w-4 h-4" />
            <span>Collaborative Ecosystem</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">{t('partners.title')}</h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">{t('partners.subtitle')}</p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 items-center">
          {partnersData.map((partner, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-4 text-center border border-slate-200/80 hover:border-emerald-500/40 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center min-h-[90px]"
            >
              <div className="w-8 h-8 rounded-xl bg-slate-200 text-[#0B2545] flex items-center justify-center font-black text-xs mb-1.5">
                {partner.logoText.slice(0, 3)}
              </div>
              <span className="text-[11px] font-bold text-slate-800 leading-tight">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
