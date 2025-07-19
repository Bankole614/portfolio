// src/components/Hero.tsx
import React from 'react';
import ParticleBackground from './ParticleBackground';
import Header from './Header';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full sm:pt-24 lg:min-h-screen pt-16 pb-14 min-h-full overflow-hidden bg-dark-bg font-sans text-white">
      <ParticleBackground />
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      <Header />

      {/* Main content */}
      <div className="relative py-14 z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4">
            {t('hero.title', {name: 'Emmanuel Bankole'})}
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6">
            <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent bg-[length:200%_200%] animate-pulse font-bold leading-tight">
              {t('hero.subtitle1')}
            </span>{' '}
            {t('hero.subtitle2')}{' '}
            <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent bg-[length:200%_200%] animate-pulse font-bold leading-tight">
              {t('hero.subtitle3')}
            </span>
          </p>
          
          <p className="text-md md:text-lg text-gray-300 leading-relaxed mb-8">
            {t('hero.description')}
          </p>

          <div className="flex justify-center space-x-4 mb-6">
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 bg-gradient-to-r from-gradient-start to-gradient-end text-gray-900 font-medium rounded-md transition-all duration-300 hover:from-blue-800 hover:to-blue-400 hover:text-white"
            >
              {t('hero.seeWork')}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 border border-gradient-start text-gradient-start font-medium rounded-md hover:text-gray-900 hover:bg-gradient-to-r from-gradient-start to-gradient-end transition"
            >
              {t('hero.contactMe')}
            </button>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-6 text-gray-300">
            <a href="https://github.com/Bankole614" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-6 h-6 hover:text-gradient-start transition-all duration-300" />
            </a>
            <a href="https://linkedin.com/in/emmanuel-bankole-a82362224" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 hover:text-gradient-start transition-all duration-300" />
            </a>
            <a href="mailto:bankoleayobami01@gmail.com" aria-label="Email">
              <Mail className="w-6 h-6 hover:text-gradient-start transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;