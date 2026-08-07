import React, { useState, useEffect } from 'react';
import { ShieldCheck, HeartPulse, ArrowRight, PhoneCall, Sparkles, ExternalLink, Play, Pause, Award, Activity, Users, Eye, EyeOff } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations/i18n';
import { EthiopicPattern } from './EthiopicPattern';
import { localImages, handleImgError } from '../assets/images';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [clearBg, setClearBg] = useState(false);

  const t = (key: string) => translations[currentLang][key] || key;

  // Background slides showcasing actual hospital exterior & modern facilities
  const slides = [
    {
      url: localImages.amboHospitalMain,
      fallbackType: 'main',
      title: 'Ambo General Hospital Main Campus',
      subtitle: 'Modern Healthcare Center in West Shewa'
    },
    {
      url: localImages.amboHospitalBuilding,
      fallbackType: 'building',
      title: 'New Multi-Story Surgical & Inpatient Building',
      subtitle: '350+ Beds & 12 Intensive Care Units'
    },
    {
      url: localImages.ibTechStem,
      fallbackType: 'stem',
      title: 'IB Tech Startup & STEM Center Digital Transformation',
      subtitle: 'Smart Electronic Health Records & Telemedicine'
    },
    {
      url: localImages.amboHospitalBuilding,
      fallbackType: 'building',
      title: '24/7 Advanced Emergency & Surgical Operating Suites',
      subtitle: 'Board-Certified Ethiopian Surgeons & Specialists'
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-6 pb-16">
      {/* Background Slideshow with Parallax Gradient Overlay */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          } transform transition-transform duration-[4000ms]`}
        >
          <img
            src={slide.url}
            alt={slide.title}
            onError={(e) => handleImgError(e, slide.fallbackType)}
            className="w-full h-full object-cover object-center filter brightness-90"
          />
          {/* Multi-layered Frosted Dark Blue & Emerald Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-[#0B2545]/90 via-[#0B2545]/75 to-[#059669]/50 backdrop-blur-[2px] transition-opacity duration-500 ${
              clearBg ? 'opacity-30' : 'opacity-100'
            }`}
          />
          <div
            className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0B2545]/40 to-[#0B2545]/90 transition-opacity duration-500 ${
              clearBg ? 'opacity-20' : 'opacity-100'
            }`}
          />
        </div>
      ))}

      {/* Ethiopic Background Geometric Pattern Overlay */}
      <EthiopicPattern className="absolute inset-0 z-10" variant="light" />

      {/* Floating Decorative Medical Elements */}
      <div className="absolute top-20 left-10 hidden xl:block z-10 animate-float opacity-30">
        <div className="w-20 h-20 rounded-3xl bg-emerald-400/20 backdrop-blur-md border border-emerald-300/30 flex items-center justify-center">
          <HeartPulse className="w-10 h-10 text-emerald-300" />
        </div>
      </div>
      <div className="absolute bottom-24 right-12 hidden xl:block z-10 animate-float opacity-30" style={{ animationDelay: '2s' }}>
        <div className="w-24 h-24 rounded-3xl bg-cyan-400/20 backdrop-blur-md border border-cyan-300/30 flex items-center justify-center">
          <ShieldCheck className="w-12 h-12 text-cyan-300" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Glassmorphism Main Text Card */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs sm:text-sm font-semibold shadow-xl">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>{t('hero.badge')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              {t('hero.title').split('Ambo').map((part, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300">Ambo </span>}
                  {part}
                </React.Fragment>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-base sm:text-lg max-w-2xl font-normal leading-relaxed drop-shadow-sm">
              {t('hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://aghcare.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#059669] via-[#0891B2] to-[#134074] rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-100 transition-all duration-300 border border-emerald-400/30 group"
              >
                <span>{t('hero.ctaPrimary')}</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg"
              >
                <span>{t('hero.ctaSecondary')}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>

              <a
                href="tel:907"
                className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-bold text-amber-900 bg-amber-400 hover:bg-amber-300 rounded-2xl shadow-lg transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-amber-900 animate-bounce" />
                <span>Emergency 907</span>
              </a>
            </div>

            {/* Hospital Trust Badges */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/90 text-xs font-semibold">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>24/7 Trauma Emergency</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Board-Certified Doctors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>STEM Certified Tech</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>IB Tech Partnered</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Glassmorphism Quick Stats & Slideshow Controller Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel-dark rounded-3xl p-6 sm:p-8 space-y-6 text-white border border-white/20 shadow-2xl relative">
              {/* Ethiopic Gold Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-400/20 to-transparent rounded-tr-3xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Live Hospital Impact</span>
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">Ambo General Hospital Statistics</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setClearBg(!clearBg)}
                    className={`p-2 rounded-xl transition-colors flex items-center space-x-1 text-xs font-semibold ${
                      clearBg
                        ? 'bg-amber-400 text-slate-900 font-bold'
                        : 'bg-white/10 hover:bg-white/20 text-slate-200'
                    }`}
                    title={clearBg ? 'Switch to Glass Overlay' : 'View Full Crisp Background Photo'}
                  >
                    {clearBg ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    <span className="hidden sm:inline">{clearBg ? 'Glass Overlay' : 'Clear Photo'}</span>
                  </button>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
                    aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-colors">
                  <div className="text-2xl sm:text-3xl font-black text-amber-300">{t('hero.statPatients')}</div>
                  <div className="text-xs font-medium text-slate-300 mt-1">{t('hero.statPatientsLabel')}</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-colors">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-300">{t('hero.statBeds')}</div>
                  <div className="text-xs font-medium text-slate-300 mt-1">{t('hero.statBedsLabel')}</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-colors">
                  <div className="text-2xl sm:text-3xl font-black text-cyan-300">{t('hero.statDoctors')}</div>
                  <div className="text-xs font-medium text-slate-300 mt-1">{t('hero.statDoctorsLabel')}</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/40 transition-colors">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">{t('hero.statSatisfaction')}</div>
                  <div className="text-xs font-medium text-slate-300 mt-1">{t('hero.statSatisfactionLabel')}</div>
                </div>
              </div>

              {/* Current Slide Caption Indicator */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-300">
                <span className="truncate max-w-[200px] font-medium">{slides[currentSlide].title}</span>
                <div className="flex space-x-1.5">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentSlide ? 'w-6 bg-emerald-400' : 'w-2 bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
        <a
          href="#stem"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('stem')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center text-slate-300 hover:text-white transition-colors"
        >
          <span className="text-[10px] font-bold tracking-widest uppercase mb-1">Scroll Down</span>
          <div className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
            <div className="w-1.5 h-2 bg-emerald-400 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
