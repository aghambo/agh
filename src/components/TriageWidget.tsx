import React, { useState } from 'react';
import { Activity, ShieldAlert, CheckCircle2, Clock, PhoneCall, ExternalLink, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations/i18n';
import { triageOptions } from '../data/hospitalData';
import { EthiopicPattern } from './EthiopicPattern';

interface TriageWidgetProps {
  currentLang: Language;
}

export const TriageWidget: React.FC<TriageWidgetProps> = ({ currentLang }) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string>(triageOptions[0].id);

  const t = (key: string) => translations[currentLang][key] || key;

  const currentOption = triageOptions.find((o) => o.id === selectedOptionId) || triageOptions[0];

  return (
    <section id="triage" className="relative py-20 bg-gradient-to-br from-slate-900 via-[#0B2545] to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <EthiopicPattern className="absolute inset-0 opacity-15" variant="gold" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest">
            <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>{t('triage.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {t('triage.title')}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t('triage.subtitle')}
          </p>
        </div>

        {/* Triage Selector Card */}
        <div className="mt-10 glass-panel-dark rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl">
          <div className="space-y-6">
            <label className="block text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2">
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>{t('triage.selectSymptom')}</span>
            </label>

            {/* Radio / Option Buttons */}
            <div className="grid grid-cols-1 gap-3">
              {triageOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedOptionId(opt.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                    selectedOptionId === opt.id
                      ? opt.urgency === 'high'
                        ? 'bg-red-500/20 border-red-400 text-white shadow-lg'
                        : opt.urgency === 'medium'
                        ? 'bg-amber-500/20 border-amber-400 text-white shadow-lg'
                        : 'bg-emerald-500/20 border-emerald-400 text-white shadow-lg'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <span className="text-sm font-semibold">{t(opt.labelKey)}</span>
                  <span
                    className={`text-[10px] uppercase font-extrabold px-2.5 py-1 rounded-full ${
                      opt.urgency === 'high'
                        ? 'bg-red-500 text-white'
                        : opt.urgency === 'medium'
                        ? 'bg-amber-500 text-slate-900'
                        : 'bg-emerald-500 text-white'
                    }`}
                  >
                    {opt.urgency}
                  </span>
                </button>
              ))}
            </div>

            {/* Recommendation Display Box */}
            <div
              className={`p-6 rounded-2xl border transition-all duration-300 space-y-4 ${
                currentOption.urgency === 'high'
                  ? 'bg-red-950/60 border-red-500/60 text-red-100'
                  : currentOption.urgency === 'medium'
                  ? 'bg-amber-950/60 border-amber-500/60 text-amber-100'
                  : 'bg-emerald-950/60 border-emerald-500/60 text-emerald-100'
              }`}
            >
              <div className="flex items-center space-x-3">
                {currentOption.urgency === 'high' ? (
                  <ShieldAlert className="w-8 h-8 text-red-400 shrink-0 animate-bounce" />
                ) : currentOption.urgency === 'medium' ? (
                  <Clock className="w-8 h-8 text-amber-400 shrink-0" />
                ) : (
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
                )}

                <div>
                  <h4 className="text-lg font-black tracking-tight">
                    {currentOption.urgency === 'high'
                      ? t('triage.highUrgency')
                      : currentOption.urgency === 'medium'
                      ? t('triage.medUrgency')
                      : t('triage.lowUrgency')}
                  </h4>
                  <p className="text-xs sm:text-sm opacity-90 mt-1 leading-relaxed">
                    {t(currentOption.recommendationKey)}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                {currentOption.urgency === 'high' && (
                  <a
                    href="tel:907"
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg transition-colors"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>{t('triage.actionCallEmergency')}</span>
                  </a>
                )}

                <a
                  href="https://aghcare.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{t('triage.actionBookAppt')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
