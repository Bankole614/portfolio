// src/components/Hero.tsx
import React from 'react';
import ParticleBackground from './ParticleBackground';
import Header from './Header';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-dark-bg font-sans text-white">
      <ParticleBackground />

      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      <Header />

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* <h1 className="max-w-3xl text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
          bleed is Discord's premier{' '}
          <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent bg-[length:200%_200%] animate-pulse">
            all-in-one
          </span>{' '}
          app
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
          Meet the leading bot for management and engagement. Built to elevate your community’s experience, streamline server management, and provide you access to premium resources for every necessity.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#invite"
            className="inline-block rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/20 hover:-translate-y-0.5"
          >
            Invite to Discord
          </a>
          <a
            href="#purchase"
            className="inline-block rounded-full bg-btn-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-btn-primary-hover hover:-translate-y-0.5"
          >
            Purchase
          </a>
        </div> */}

        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4">
          Hi, I’m Ayobami Bankole
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
        <a
          href="#projects"
          className="px-6 py-3 bg-gradient-to-r from-gradient-start to-gradient-end text-gray-900 font-medium rounded-md hover:bg-blue-900 transition-all duration-500"
        >
          See My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gradient-start text-gradient-start font-medium rounded-md hover:bg-blue-600 hover:text-white transition"
        >
          Contact Me
        </a>
      </div>

      <div className="flex justify-center space-x-4 mt-6 text-gray-300">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="w-6 h-6 hover:text-black dark:hover:text-white transition-colors" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="w-6 h-6 hover:text-blue-600 transition-colors" />
        </a>
        <a href="mailto:you@example.com" aria-label="Email">
          <Mail className="w-6 h-6 hover:text-red-500 transition-colors" />
        </a>
      </div>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;
