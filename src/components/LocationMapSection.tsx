import React from 'react';
import { MapPin, Navigation, Compass, ShieldAlert, Clock, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations/i18n';
import { EthiopicPattern } from './EthiopicPattern';

interface MapProps {
  currentLang: Language;
}

export const LocationMapSection: React.FC<MapProps> = ({ currentLang }) => {
  const t = (key: string) => translations[currentLang][key] || key;

  return (
    <section id="map-section" className="relative py-24 bg-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <EthiopicPattern className="absolute inset-0 opacity-15" variant="gold" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold uppercase tracking-widest">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>{t('map.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {t('map.title')}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {t('map.subtitle')}
          </p>
        </div>

        {/* Map Container & Info Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Preview / Embedded Frame */}
          <div className="lg:col-span-8 glass-panel-dark rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative min-h-[380px] flex flex-col justify-between">
            <iframe
              title="Ambo General Hospital Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15761.503387877568!2d37.848833!3d8.983333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b3ef86d999999%3A0x123456789abcdef!2sAmbo%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
              className="w-full h-full min-h-[380px] border-0 filter contrast-105 brightness-95"
              loading="lazy"
              allowFullScreen
            />

            {/* Overlaid Location Badge */}
            <div className="absolute bottom-4 left-4 right-4 glass-panel-dark p-4 rounded-2xl border border-white/20 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Navigation className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Ambo General Hospital Main Campus</h4>
                  <p className="text-xs text-slate-300">Ambo Town, West Shewa Zone, Oromia, Ethiopia</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Ambo+General+Hospital+Ambo+Ethiopia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#059669] hover:bg-emerald-500 text-white font-bold text-xs shadow"
              >
                <Compass className="w-4 h-4" />
                <span>{t('map.getDirections')}</span>
              </a>
            </div>
          </div>

          {/* Right Info Box */}
          <div className="lg:col-span-4 glass-panel-dark rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>Hospital Campus Access</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-bold text-emerald-400">Primary Highway Location</div>
                  <p>{t('map.address')}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-bold text-cyan-400">Distance from Capital</div>
                  <p>{t('map.distanceAddis')}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-red-950/40 border border-red-500/30 text-red-200 space-y-1">
                  <div className="font-bold text-red-400 flex items-center space-x-1">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Emergency Ambulance Route</span>
                  </div>
                  <p>{t('map.emergencyRoute')}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2">
              <a
                href="tel:907"
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-amber-400 text-slate-900 font-bold text-xs shadow hover:bg-amber-300 transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Emergency Dispatch: 907</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
