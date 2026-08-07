import React, { useState } from 'react';
import { Newspaper, Calendar, User, Clock, ChevronRight, X, Sparkles, Share2 } from 'lucide-react';
import { Language, NewsArticle } from '../types';
import { translations } from '../translations/i18n';
import { newsArticles } from '../data/hospitalData';
import { EthiopicPattern } from './EthiopicPattern';
import { handleImgError } from '../assets/images';

interface BlogProps {
  currentLang: Language;
}

export const BlogSection: React.FC<BlogProps> = ({ currentLang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const t = (key: string) => translations[currentLang][key] || key;

  const categories = [
    { id: 'all', labelKey: 'blog.filterAll' },
    { id: 'Hospital News', labelKey: 'blog.filterNews' },
    { id: 'STEM & Tech', labelKey: 'blog.filterTech' },
    { id: 'Health Tips', labelKey: 'blog.filterHealth' },
  ];

  const filteredArticles = newsArticles.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.categoryKey === activeCategory;
  });

  return (
    <section id="blog" className="relative py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <EthiopicPattern className="absolute inset-0 opacity-10" variant="subtle" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#059669] text-xs font-extrabold uppercase tracking-widest border border-emerald-200">
            <Newspaper className="w-4 h-4" />
            <span>{t('blog.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {t('blog.title')}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#0B2545] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 hover:border-emerald-500/50 flex flex-col group"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.titleKey}
                  onError={(e) => handleImgError(e, 'main')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                <span className="absolute top-4 left-4 px-3 py-1 bg-[#059669] text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow">
                  {article.categoryKey}
                </span>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-200 font-medium">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-300" />
                    <span>{article.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-300" />
                    <span>{article.readTime}</span>
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#059669] transition-colors leading-snug">
                    {article.titleKey}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">
                    {article.summaryKey}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium flex items-center space-x-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>{article.authorKey}</span>
                  </span>

                  <button
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-[#0B2545] hover:text-[#059669] transition-colors"
                  >
                    <span>{t('blog.readFull')}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Article Modal Reader */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel max-w-3xl w-full rounded-3xl overflow-hidden border border-white/60 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="relative h-64 sm:h-80">
              <img
                src={activeArticle.image}
                alt={activeArticle.titleKey}
                onError={(e) => handleImgError(e, 'main')}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/40 to-transparent" />

              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#059669] text-white uppercase tracking-wider">
                  {activeArticle.categoryKey}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug">{activeArticle.titleKey}</h3>
                <div className="flex items-center space-x-4 text-xs text-slate-300 pt-1">
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.authorKey}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-6 bg-white">
              <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p className="font-semibold text-slate-900 text-lg border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-50/50">
                  {activeArticle.summaryKey}
                </p>
                <p>{activeArticle.contentKey}</p>
                <p>
                  Ambo General Hospital remains committed to pioneering clinical quality and digital health transparency. For further inquiries or department consultation, please reach out to our media relations or visit our digital portal.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: activeArticle.titleKey,
                        text: activeArticle.summaryKey,
                        url: window.location.href,
                      });
                    } else {
                      alert('Article link copied to clipboard!');
                    }
                  }}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share Article</span>
                </button>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#0B2545] text-white text-xs font-bold hover:bg-[#134074]"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
