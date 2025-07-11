// src/components/Hero.tsx
import React from 'react';
import ParticleBackground from './ParticleBackground';
import Header from './Header';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {

  const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId.replace('#', ''));
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <section className="relative w-full h-screen overflow-hidden bg-dark-bg font-sans text-white">
      <ParticleBackground />

      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      <Header />

      {/* Main content */}
      <div className="relative py-14 z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        

        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4">
          Hi, I’m Emmanuel Bankole
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl  text-gray-300 mb-6">
          <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent bg-[length:200%_200%] animate-pulse font-bold leading-tight">
            Frontend Developer
          </span>{' '} turning clean code into delightful <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent bg-[length:200%_200%] animate-pulse font-bold leading-tight">
            user experiences.
          </span>
        </p>
        <p className="text-md md:text-lg text-gray-300 leading-relaxed mb-8">
          I specialize in building responsive, accessible, and visually polished web and mobile apps using <span className="text-blue-500 font-semibold">React</span>, <span className="text-green-600 font-semibold">Vue</span>, <span className="text-cyan-400 font-semibold">Flutter</span>, <span className="text-yellow-500 font-semibold">Supabase</span>, and <span className="text-blue-500 font-semibold">Hi-send</span>. From wireframes to pixel-perfect UIs, I bridge the gap between design and functional beauty.
        </p>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          type="button"
          onClick={() => scrollToSection('projects')}
          className="px-6 py-3 bg-gradient-to-r from-gradient-start to-gradient-end text-gray-900 font-medium rounded-md transition-all duration-300 hover:from-blue-800 hover:to-blue-400 hover:text-white"
        >
          See My Work
        </button>
        <button
          type="button"
          onClick={() => scrollToSection('contact')}
          className="px-6 py-3 border border-gradient-start text-gradient-start font-medium rounded-md hover:text-gray-900 hover:bg-gradient-to-r from-gradient-start to-gradient-end transition"
        >
          Contact Me
        </button>
      </div>

      <div className="flex justify-center space-x-4 mt-6 text-gray-300">
        <a href="https://github.com/Bankole614" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="w-6 h-6 hover:text-gradient-start transition-all duration-300" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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

export default Hero;
