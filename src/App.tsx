import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StemInterventionBanner } from './components/StemInterventionBanner';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TriageWidget } from './components/TriageWidget';
import { AchievementsSection } from './components/AchievementsSection';
import { StatsCounterSection } from './components/StatsCounterSection';
import { BlogSection } from './components/BlogSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PartnersSection } from './components/PartnersSection';
import { LocationMapSection } from './components/LocationMapSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('agh_lang');
    return (saved as Language) || 'en';
  });

  const [activeSection, setActiveSection] = useState<string>('home');

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('agh_lang', lang);
  };

  useEffect(() => {
    const sections = ['home', 'about', 'stem', 'services', 'achievements', 'triage', 'blog', 'gallery', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero currentLang={currentLang} />
        <StemInterventionBanner currentLang={currentLang} />
        <AboutSection currentLang={currentLang} />
        <ServicesSection currentLang={currentLang} />
        <TriageWidget currentLang={currentLang} />
        <AchievementsSection currentLang={currentLang} />
        <StatsCounterSection currentLang={currentLang} />
        <BlogSection currentLang={currentLang} />
        <GallerySection currentLang={currentLang} />
        <TestimonialsSection currentLang={currentLang} />
        <PartnersSection currentLang={currentLang} />
        <LocationMapSection currentLang={currentLang} />
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}

export default App;
