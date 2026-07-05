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
    <section id="home" className="relative w-full flex flex-col justify-center pt-10 min-h-screen overflow-hidden bg-dark-bg font-sans text-white">
      <ParticleBackground />
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      <Header />
      <div className="relative container py-16 z-20 flex flex-col items-center justify-center h-full px-4 text-center">
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
            <a href="https://www.behance.net/bankoleayobami1" target="_blank" rel="noopener noreferrer" aria-label="Behance">
              <svg className="w-6 h-6 hover:text-gradient-start transition-all duration-300" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"/>
              </svg>
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