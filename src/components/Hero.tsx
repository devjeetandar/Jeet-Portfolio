import React from 'react';
import { ArrowDown, ArrowUpRight, Code, Sparkles, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Hero3DCanvas } from './Hero3DCanvas';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden">
      {/* Subtle ambient background glow */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-[420px] h-[420px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Status & Location Indicator (Unboxed, quiet metadata) */}
            <div className="flex items-center gap-2.5 text-xs text-neutral-400 mb-6 font-mono tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.availability}</span>
              <span className="text-neutral-600" aria-hidden="true">·</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>

            {/* Main Name / Brand Header */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white uppercase font-display leading-[1.05] text-balance mb-4">
              Jeetandar N<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-blue-300">
                Silwani
              </span>
            </h1>

            {/* Positioning Statement */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-medium text-blue-400 tracking-wider uppercase mb-6 font-mono">
              <span>Software Developer</span>
              <span className="text-neutral-600" aria-hidden="true">•</span>
              <span>Full Stack Engineer</span>
              <span className="text-neutral-600" aria-hidden="true">•</span>
              <span>Data Analytics</span>
              <span className="text-neutral-600" aria-hidden="true">•</span>
              <span>Creative</span>
              <span className="text-neutral-600" aria-hidden="true">•</span>
              <span>Social Media & Digital</span>
            </div>

            {/* Crisp narrative manifesto */}
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-xl mb-9 text-balance">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Value Pillars Quick Strip */}
            <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-4 w-full max-w-lg mb-9">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 mb-1">
                  <Code className="w-3.5 h-3.5 text-blue-400" />
                  <span>Full-Stack</span>
                </div>
                <p className="text-xs text-neutral-300 font-medium">MERN & Native</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 mb-1">
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  <span>Data Analytics</span>
                </div>
                <p className="text-xs text-neutral-300 font-medium">BI & Modeling</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Digital & Creative</span>
                </div>
                <p className="text-xs text-neutral-300 font-medium">Social & Growth</p>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-all duration-200 active:scale-95 shadow-md shadow-blue-900/30 flex items-center gap-2 whitespace-nowrap"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-neutral-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/60 rounded-md transition-all duration-200 active:scale-95 flex items-center gap-2 whitespace-nowrap backdrop-blur-sm"
              >
                <span>Download Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </button>
            </div>

          </div>

          {/* Right Column: Subtle 3D Geometric Interactive Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[440px] flex items-center justify-center">
              
              {/* Outer decorative halo */}
              <div 
                className="absolute inset-0 rounded-full border border-blue-500/10 pointer-events-none"
                aria-hidden="true"
              />
              
              {/* The Three.js Canvas */}
              <Hero3DCanvas />

              {/* Minimal caption badge */}
              <div className="absolute bottom-2 right-4 text-[11px] font-mono text-neutral-400 bg-neutral-900/80 px-2.5 py-1 rounded border border-white/5 pointer-events-none">
                Interactive Canvas · Drag to Orbit
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full flex items-center justify-between text-neutral-400 text-xs font-mono tracking-widest uppercase">
        <a 
          href="#about" 
          className="flex items-center gap-2 hover:text-white transition-colors duration-200 py-2 group"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-200 text-blue-400" />
        </a>

        <div className="hidden sm:flex items-center gap-6">
          <span>St Pauls College '26</span>
          <span className="text-neutral-700" aria-hidden="true">/</span>
          <span>Dept President</span>
          <span className="text-neutral-700" aria-hidden="true">/</span>
          <span>National Winner</span>
        </div>
      </div>
    </section>
  );
};
