import React, { useState } from 'react';
import { Image as ImageIcon, Video, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language, GalleryItem } from '../types';
import { translations } from '../translations/i18n';
import { galleryData } from '../data/hospitalData';
import { EthiopicPattern } from './EthiopicPattern';
import { handleImgError } from '../assets/images';

interface GalleryProps {
  currentLang: Language;
}

export const GallerySection: React.FC<GalleryProps> = ({ currentLang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const t = (key: string) => translations[currentLang][key] || key;

  const categories = [
    { id: 'all', labelKey: 'gallery.all' },
    { id: 'campus', labelKey: 'gallery.campus' },
    { id: 'facilities', labelKey: 'gallery.facilities' },
    { id: 'stem', labelKey: 'gallery.stem' },
    { id: 'community', labelKey: 'gallery.community' },
  ];

  const filteredItems = galleryData.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <EthiopicPattern className="absolute inset-0 opacity-15" variant="subtle" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-800 text-xs font-extrabold uppercase tracking-widest border border-cyan-200">
            <ImageIcon className="w-4 h-4 text-cyan-600" />
            <span>{t('gallery.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {t('gallery.title')}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#0B2545] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 group cursor-pointer relative h-72 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.url}
                alt={t(item.titleKey)}
                onError={(e) => handleImgError(e, 'main')}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-emerald-500 transition-colors">
                {item.type === 'video' ? <Video className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-400/30">
                  {item.category}
                </span>
                <h3 className="text-base font-bold leading-snug">{t(item.titleKey)}</h3>
                <p className="text-xs text-slate-300 line-clamp-1">{t(item.captionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-200">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevLightbox}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightbox}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-4">
            <div className="relative rounded-2xl overflow-hidden max-h-[70vh] border border-white/20 shadow-2xl">
              <img
                src={filteredItems[lightboxIndex].url}
                alt={t(filteredItems[lightboxIndex].titleKey)}
                onError={(e) => handleImgError(e, 'main')}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="text-center text-white space-y-1 max-w-xl">
              <h3 className="text-xl font-bold">{t(filteredItems[lightboxIndex].titleKey)}</h3>
              <p className="text-sm text-slate-300">{t(filteredItems[lightboxIndex].captionKey)}</p>
              <span className="text-xs text-amber-400 font-medium">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
