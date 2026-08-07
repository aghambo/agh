import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Globe, Menu, X, ChevronDown, ExternalLink, ShieldAlert, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations/i18n';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = (key: string) => translations[currentLang][key] || key;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', labelKey: 'nav.home' },
    { id: 'about', labelKey: 'nav.about' },
    { id: 'stem', labelKey: 'nav.stem' },
    { id: 'services', labelKey: 'nav.services' },
    { id: 'achievements', labelKey: 'nav.achievements' },
    { id: 'triage', labelKey: 'nav.triage' },
    { id: 'blog', labelKey: 'nav.blog' },
    { id: 'gallery', labelKey: 'nav.gallery' },
    { id: 'contact', labelKey: 'nav.contact' },
  ];

  const languages = [
    { code: 'en' as Language, label: 'English', flag: '🇬🇧' },
    { code: 'am' as Language, label: 'አማርኛ', flag: '🇪🇹' },
    { code: 'om' as Language, label: 'Afaan Oromoo', flag: '🌍' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Editorial Ethiopic Flag Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#008F4C] via-[#D4AF37] to-[#DA291C]" />

      {/* Top Announcement Bar */}
      <div className="bg-[#0B2545] text-white py-1.5 px-4 text-xs sm:text-sm font-medium border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4 flex-wrap">
            <a
              href="tel:907"
              className="flex items-center space-x-1.5 text-amber-400 hover:text-amber-300 transition-colors font-bold bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/30"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              <span>{t('topbar.emergency')} <strong className="underline">907</strong></span>
            </a>
            <div className="hidden md:flex items-center space-x-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t('topbar.hours')}</span>
            </div>
            <div className="hidden lg:flex items-center space-x-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t('topbar.address')}</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <span className="hidden sm:inline text-slate-300">
              STEM & IB Tech Certified Health Platform
            </span>
            <div className="flex items-center space-x-1 bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Hospital Open 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2.5 border-b border-slate-200/90'
            : 'bg-white/90 backdrop-blur-md py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Hospital Title */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#0B2545] via-[#134074] to-[#059669] p-0.5 shadow-md group-hover:shadow-emerald-500/30 transition-all duration-300">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center relative overflow-hidden">
                {/* Ethiopian Flag Accent Ring */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-red-500"></div>
                <div className="text-[#0B2545] font-black text-xl tracking-tighter">AGH</div>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight group-hover:text-[#059669] transition-colors">
                  Ambo General Hospital
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium flex items-center space-x-1">
                <span>አምቦ አጠቃላይ ሆስፒታል</span>
                <span className="text-amber-500">•</span>
                <span className="text-emerald-600 font-semibold">IB Tech STEM Project</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1 bg-slate-100/70 p-1.5 rounded-2xl border border-slate-200/60 shadow-inner">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-[#0B2545] text-white shadow-md shadow-blue-900/20'
                    : 'text-slate-700 hover:text-[#0B2545] hover:bg-white/80'
                }`}
              >
                {t(item.labelKey)}
              </button>
            ))}
          </div>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors border border-slate-200"
              >
                <Globe className="w-3.5 h-3.5 text-[#059669]" />
                <span>
                  {languages.find((l) => l.code === currentLang)?.flag}{' '}
                  {languages.find((l) => l.code === currentLang)?.label}
                </span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 glass-panel rounded-2xl shadow-xl py-1.5 z-50 border border-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs font-semibold flex items-center space-x-2 transition-colors ${
                        currentLang === lang.code
                          ? 'bg-[#0B2545] text-white'
                          : 'text-slate-700 hover:bg-emerald-50 hover:text-[#059669]'
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Get Started / Patient Portal Link CTA */}
            <a
              href="https://aghcare.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#059669] via-[#0891B2] to-[#0B2545] rounded-xl shadow-md hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-300 animate-spin-slow" />
              <span>{t('nav.portal')}</span>
              <ExternalLink className="w-3 h-3 ml-1 opacity-80 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="sm:hidden px-2.5 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 rounded-lg border border-slate-200"
            >
              {languages.find((l) => l.code === currentLang)?.flag}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#0B2545] hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden glass-panel border-t border-slate-200 px-4 py-5 space-y-3 mt-2 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                    activeSection === item.id
                      ? 'bg-[#0B2545] text-white shadow-md'
                      : 'text-slate-700 hover:bg-emerald-50 hover:text-[#059669]'
                  }`}
                >
                  {t(item.labelKey)}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200/80 space-y-2">
              <div className="text-xs font-semibold text-slate-500 uppercase px-1">Select Language</div>
              <div className="grid grid-cols-3 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                    }}
                    className={`px-3 py-2 text-xs font-bold rounded-xl border flex items-center justify-center space-x-1 ${
                      currentLang === lang.code
                        ? 'bg-[#059669] text-white border-emerald-600'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>

              <a
                href="https://aghcare.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 text-sm font-bold text-white bg-gradient-to-r from-[#059669] to-[#0B2545] rounded-xl shadow-md text-center"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>{t('nav.portal')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="tel:907"
                className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 text-sm font-bold text-amber-900 bg-amber-400 rounded-xl shadow-sm text-center"
              >
                <ShieldAlert className="w-4 h-4" />
                <span>Emergency Hotline: 907</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
