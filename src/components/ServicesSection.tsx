import React, { useState } from 'react';
import { Search, Stethoscope, ChevronRight, X, Clock, MapPin, User, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { translations } from '../translations/i18n';
import { servicesData } from '../data/hospitalData';
import { EthiopicPattern } from './EthiopicPattern';
import { handleImgError } from '../assets/images';

interface ServicesSectionProps {
  currentLang: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const t = (key: string) => translations[currentLang][key] || key;

  const categories = [
    { id: 'all', labelKey: 'services.filterAll' },
    { id: 'emergency', labelKey: 'services.filterEmergency' },
    { id: 'surgical', labelKey: 'services.filterSurgical' },
    { id: 'maternal', labelKey: 'services.filterMaternal' },
    { id: 'diagnostics', labelKey: 'services.filterDiagnostics' },
    { id: 'specialized', labelKey: 'services.filterSpecialized' },
  ];

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
    const title = t(service.titleKey).toLowerCase();
    const desc = t(service.shortDescKey).toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesSearch = title.includes(query) || desc.includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <EthiopicPattern className="absolute inset-0 opacity-10" variant="blue" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-100 text-[#134074] text-xs font-extrabold uppercase tracking-widest border border-blue-200">
            <Stethoscope className="w-4 h-4" />
            <span>{t('services.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {t('services.title')}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-10 space-y-6">
          {/* Search Input */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('services.searchPlaceholder')}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#059669] text-sm text-slate-800 shadow-inner transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-[#059669] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {t(cat.labelKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (20 items available) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 hover:border-emerald-500/50 flex flex-col group"
            >
              {/* Image Header with Badge */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={t(service.titleKey)}
                  onError={(e) => handleImgError(e, 'main')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#0B2545] border border-white/60">
                  {service.capacity}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-lg font-bold leading-snug drop-shadow-sm">
                    {t(service.titleKey)}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {t(service.shortDescKey)}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center space-x-1 text-emerald-700 font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.availability}</span>
                  </span>

                  <button
                    onClick={() => setActiveModalService(service)}
                    className="inline-flex items-center space-x-1 font-bold text-[#0B2545] hover:text-[#059669] transition-colors"
                  >
                    <span>{t('services.learnMore')}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 mt-8">
            <p className="text-slate-500 font-medium">No services match your search query "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 px-4 py-2 bg-[#0B2545] text-white text-xs font-bold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel max-w-2xl w-full rounded-3xl overflow-hidden border border-white/60 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Image Header */}
            <div className="relative h-56">
              <img
                src={activeModalService.image}
                alt={t(activeModalService.titleKey)}
                onError={(e) => handleImgError(e, 'main')}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/50 to-transparent" />

              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500 text-white uppercase tracking-wider">
                  {activeModalService.category}
                </span>
                <h3 className="text-2xl font-bold">{t(activeModalService.titleKey)}</h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Description</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{t(activeModalService.fullDescKey)}</p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                  {t('services.keyFeatures')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meta Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200 text-xs">
                {activeModalService.headDoctor && (
                  <div className="flex items-center space-x-2 text-slate-700">
                    <User className="w-4 h-4 text-amber-600" />
                    <span><strong>{t('services.headDoctor')}</strong> {activeModalService.headDoctor}</span>
                  </div>
                )}
                {activeModalService.locationRoom && (
                  <div className="flex items-center space-x-2 text-slate-700">
                    <MapPin className="w-4 h-4 text-cyan-600" />
                    <span><strong>{t('services.roomLocation')}</strong> {activeModalService.locationRoom}</span>
                  </div>
                )}
                <div className="flex items-center space-x-2 text-slate-700">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span><strong>{t('services.availability')}</strong> {activeModalService.availability}</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200">
                <a
                  href="https://aghcare.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#059669] to-[#0B2545] text-white font-bold text-xs shadow-lg hover:shadow-xl transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 mr-2 text-amber-300" />
                  <span>Access Patient Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-2" />
                </a>

                <button
                  onClick={() => setActiveModalService(null)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
