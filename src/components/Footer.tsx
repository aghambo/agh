import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Heart, ShieldCheck, Sparkles, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations/i18n';
import { EthiopicPattern } from './EthiopicPattern';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = (key: string) => translations[currentLang][key] || key;

  return (
    <footer className="relative bg-[#07172B] text-slate-300 pt-16 pb-12 border-t border-slate-800 overflow-hidden">
      {/* Background Ethiopic Pattern */}
      <EthiopicPattern className="absolute inset-0 opacity-10" variant="gold" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#059669] to-[#134074] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#0B2545] rounded-[10px] flex items-center justify-center font-black text-white text-lg">
                  AGH
                </div>
              </div>
              <div>
                <h3 className="text-lg font-black text-white tracking-tight">Ambo General Hospital</h3>
                <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                  አምቦ አጠቃላይ ሆስፒታል • Ospitaala Waliigala Amboo
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              {t('footer.desc')}
            </p>

            <div className="flex items-center space-x-3 text-xs text-slate-400 pt-2">
              <span className="flex items-center space-x-1 bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Government & STEM Accredited</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">{t('nav.home')}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">{t('nav.about')}</a>
              </li>
              <li>
                <a href="#stem" className="hover:text-emerald-400 transition-colors">{t('nav.stem')}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">{t('nav.services')}</a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-emerald-400 transition-colors">{t('nav.achievements')}</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-emerald-400 transition-colors">{t('nav.blog')}</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t('footer.servicesHead')}</h4>
            <ul className="space-y-2 text-xs">
              <li>24/7 Emergency & Trauma</li>
              <li>General & Pediatric Surgery</li>
              <li>64-Slice CT & Digital X-Ray</li>
              <li>Maternal & Labor Ward</li>
              <li>Dialysis & ICU Units</li>
              <li>Ophthalmic & Dental Care</li>
            </ul>
          </div>

          {/* Col 4: Digital Portals & Emergency */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Digital Access</h4>
            <div className="space-y-2">
              <a
                href="https://aghcare.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold transition-all"
              >
                <span className="flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>{t('nav.portal')}</span>
                </span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href="https://iyobtech.github.io/IB.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition-all"
              >
                <span className="flex items-center space-x-1.5">
                  <Globe className="w-3.5 h-3.5 text-cyan-300" />
                  <span>IB Tech Developer</span>
                </span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs">
                <div className="font-bold">Emergency Hotline:</div>
                <div className="text-base font-black underline">907 / +251 11 236 2028</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Credit Banner */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <div>
            © {new Date().getFullYear()} Ambo General Hospital. All rights reserved.
          </div>

          <div className="flex items-center space-x-1 text-slate-300">
            <span>Developed by</span>
            <a
              href="https://iyobtech.github.io/IB.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 font-bold hover:underline underline-offset-4"
            >
              IB Tech startup
            </a>
            <span>via</span>
            <span className="text-amber-400 font-bold">STEM center intervention</span>
          </div>

          <div className="flex items-center space-x-4 text-slate-400">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
