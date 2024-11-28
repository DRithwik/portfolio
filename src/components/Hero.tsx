import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 animate-ken-burns"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/50 to-gray-900"></div>
      
      <div className="z-10 text-center max-w-4xl mx-auto animate-fade-in">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
          <Sparkles size={16} className="animate-pulse" />
          <span className="text-sm">Welcome to my digital space</span>
        </div>
        
        <div className="relative mb-6">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
            Hi, I'm Rithwik Deshaboina
          </h1>
          <div className="glow absolute -inset-1 blur-2xl opacity-25 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up max-w-2xl mx-auto">
          Turning Ideas into Code & Creativity into Reality
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a href="#projects" className="btn-primary">
            Explore My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          {[
            { icon: Github, href: 'https://github.com/DRithwik', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/rithwik-d-865a6727a/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:rithwikdmail@gmail.com', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="social-icon-link"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>

      <ChevronDown 
        className="absolute bottom-8 animate-bounce text-blue-400 cursor-pointer" 
        size={32}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      />
    </header>
  );
}