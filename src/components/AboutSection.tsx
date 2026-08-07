import React, { useState } from 'react';
import { Target, Eye, HeartHandshake, History, Award, CheckCircle2, Quote, Building2, Users } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations/i18n';
import { EthiopicPattern } from './EthiopicPattern';
import { localImages, handleImgError } from '../assets/images';

interface AboutProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values' | 'history'>('mission');

  const t = (key: string) => translations[currentLang][key] || key;

  const reasonsToChoose = [
    {
      title: '24/7 Multi-Specialty Care',
      desc: 'Round-the-clock availability of general surgeons, pediatricians, obstetricians, and radiographers.',
      icon: CheckCircle2,
    },
    {
      title: 'STEM & IB Tech Digitized System',
      desc: 'Streamlined electronic records, fast diagnostic reporting, and online patient appointment management.',
      icon: CheckCircle2,
    },
    {
      title: 'State-of-the-Art Facilities',
      desc: '64-Slice CT Scan, 350+ beds, 5 major operating theaters, 12 ICU beds, and specialized NICU.',
      icon: CheckCircle2,
    },
    {
      title: 'Community & Equitable Access',
      desc: 'Committed to affordable, high-quality public healthcare for all families across West Shewa Zone.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <EthiopicPattern className="absolute inset-0 opacity-15" variant="subtle" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#059669] text-xs font-extrabold uppercase tracking-widest border border-emerald-200">
            <Building2 className="w-4 h-4" />
            <span>{t('about.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {t('about.title')}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {t('about.desc')}
          </p>
        </div>

        {/* Mission, Vision, Values Interactive Tabs */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-200/80 rounded-2xl border border-slate-300">
            <button
              onClick={() => setActiveTab('mission')}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'mission'
                  ? 'bg-[#0B2545] text-white shadow-lg'
                  : 'text-slate-700 hover:text-[#0B2545] hover:bg-white/60'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>{t('about.mission.title')}</span>
            </button>

            <button
              onClick={() => setActiveTab('vision')}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'vision'
                  ? 'bg-[#0B2545] text-white shadow-lg'
                  : 'text-slate-700 hover:text-[#0B2545] hover:bg-white/60'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>{t('about.vision.title')}</span>
            </button>

            <button
              onClick={() => setActiveTab('values')}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'values'
                  ? 'bg-[#0B2545] text-white shadow-lg'
                  : 'text-slate-700 hover:text-[#0B2545] hover:bg-white/60'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span>{t('about.values.title')}</span>
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'history'
                  ? 'bg-[#0B2545] text-white shadow-lg'
                  : 'text-slate-700 hover:text-[#0B2545] hover:bg-white/60'
              }`}
            >
              <History className="w-4 h-4" />
              <span>Hospital History</span>
            </button>
          </div>

          {/* Tab Content Cards */}
          <div className="mt-6 glass-card rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none" />

            {activeTab === 'mission' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#059669] flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{t('about.mission.title')}</h3>
                <p className="text-slate-700 text-base leading-relaxed">{t('about.mission.desc')}</p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#134074] flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{t('about.vision.title')}</h3>
                <p className="text-slate-700 text-base leading-relaxed">{t('about.vision.desc')}</p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{t('about.values.title')}</h3>
                <p className="text-slate-700 text-base leading-relaxed">{t('about.values.desc')}</p>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                  <History className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Over Decades of Dedicated Service</h3>
                <p className="text-slate-700 text-base leading-relaxed">
                  Established as a cornerstone healthcare facility in Ambo Town, West Shewa Zone, Ambo General Hospital has continuously expanded from a local clinic into a comprehensive 350-bed referral hospital. Supported by regional health authorities, university partnerships, and recent digital interventions by IB Tech and the STEM Center, we stand at the forefront of modern Ethiopian public medicine.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Leadership Message Card */}
        <div className="mt-16 glass-panel rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-4 border-white shadow-2xl group">
                <img
                  src={localImages.directorTokumaBayisa}
                  alt={t('about.directorName')}
                  onError={(e) => handleImgError(e, 'director')}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-center">
                  <span className="text-xs font-bold bg-emerald-500 px-2.5 py-0.5 rounded-full">Medical Director</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-2 text-amber-600 font-bold text-xs uppercase tracking-wider">
                <Quote className="w-5 h-5 text-amber-500" />
                <span>{t('about.directorTitle')}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {t('about.directorName')}
              </h3>
              <p className="text-xs font-semibold text-emerald-700">{t('about.directorRole')}</p>

              <blockquote className="text-slate-700 italic text-base sm:text-lg leading-relaxed border-l-4 border-[#059669] pl-4 py-1">
                {t('about.directorMessage')}
              </blockquote>

              <div className="pt-2 flex items-center space-x-6 text-xs text-slate-500 font-semibold">
                <div className="flex items-center space-x-1">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>MPH, Specialist Surgeon</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-cyan-600" />
                  <span>Ambo General Hospital Board</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Grid */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Why Choose Ambo General Hospital?</h3>
            <p className="text-slate-600 text-sm mt-1">Committed to clinical excellence, patient comfort, and digital efficiency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasonsToChoose.map((reason, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-200/80 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center mb-4">
                  <reason.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{reason.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
