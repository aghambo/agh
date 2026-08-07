import React from 'react';
import { Cpu, GraduationCap, ShieldCheck, Zap, Laptop, Award, ExternalLink } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations/i18n';
import { EthiopicPattern } from './EthiopicPattern';

interface StemInterventionBannerProps {
  currentLang: Language;
}

export const StemInterventionBanner: React.FC<StemInterventionBannerProps> = ({ currentLang }) => {
  const t = (key: string) => translations[currentLang][key] || key;

  return (
    <section id="stem" className="relative py-20 bg-gradient-to-b from-slate-900 via-[#0B2545] to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <EthiopicPattern className="absolute inset-0 z-0 opacity-20" variant="gold" />

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-emerald-500/20 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-cyan-500/15 filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>{t('stem.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            {t('stem.title')}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            {t('stem.subtitle')}
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="glass-panel-dark rounded-3xl p-6 border border-white/10 hover:border-emerald-400/40 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
              {t('stem.feature1.title')}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {t('stem.feature1.desc')}
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel-dark rounded-3xl p-6 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
              {t('stem.feature2.title')}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {t('stem.feature2.desc')}
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel-dark rounded-3xl p-6 border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
              {t('stem.feature3.title')}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {t('stem.feature3.desc')}
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass-panel-dark rounded-3xl p-6 border border-white/10 hover:border-emerald-400/40 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
              {t('stem.feature4.title')}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {t('stem.feature4.desc')}
            </p>
          </div>
        </div>

        {/* IB Tech Developer Spotlight Card */}
        <div className="mt-12 glass-panel-dark rounded-3xl p-8 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Photo Preview */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-2xl group">
                <img
                  src="/images/ib_tech_stem.jpg"
                  alt="IB Tech & STEM Innovation Lab at Ambo General Hospital"
                  referrerPolicy="no-referrer"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-bold bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full inline-block mb-1">
                    IB Tech & STEM Innovation
                  </span>
                  <p className="text-xs text-slate-200 font-medium">Digital Medical Engineering Lab at Ambo General Hospital</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>IB Tech Startup Capacity Intervention</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Empowering Public Healthcare Through Ethiopian Youth Tech Innovation
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                This official web application and digital system architecture was developed for Ambo General Hospital by <strong className="text-white underline">IB Tech startup</strong> through the <strong className="text-emerald-300">STEM Center intervention</strong> program. Providing specialized training, hardware calibration, and software deployment to guarantee long-term operational sustainability.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://iyobtech.github.io/IB.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-bold text-sm shadow-xl hover:shadow-emerald-500/30 hover:scale-105 transition-all"
                >
                  <span>Visit IB Tech Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <span className="text-xs text-slate-400 font-medium">
                  Official Developer Link: iyobtech.github.io/IB.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
