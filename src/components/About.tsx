import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, Database, BarChart3, Palette, Share2 } from 'lucide-react';

export const About: React.FC = () => {
  const coreCompetencies = [
    {
      icon: Terminal,
      title: 'Software Development',
      tagline: 'Clean Code, Algorithms & Problem Solving',
      description: 'Strong foundation in Java, Python, C++, and JavaScript with deep mastery of Object-Oriented Programming, Data Structures, Algorithms, SDLC, and rigorous automated testing & debugging.'
    },
    {
      icon: Database,
      title: 'Full Stack Engineering',
      tagline: 'MERN Stack, REST APIs & Cloud Gateways',
      description: 'End-to-end full-stack development across React, Node.js, Express, and MongoDB/SQL. Delivered 30% API response performance gains at EY Edunet and 45% query acceleration at St Pauls College.'
    },
    {
      icon: BarChart3,
      title: 'Data & Operational Analytics',
      tagline: 'Power BI, DAX & Business Intelligence',
      description: 'Modeled 10,000+ transactional business records using Power BI, custom DAX metrics, and star-schema architectures to reveal operational bottlenecks and guide data-backed decisions.'
    },
    {
      icon: Palette,
      title: 'Creative & Visual Direction',
      tagline: 'Cinematography, UI/UX & Storytelling',
      description: 'Director of Photography for narrative short film productions and digital brand storyteller. Blends technical product architecture with high-contrast, emotive design aesthetics.'
    },
    {
      icon: Share2,
      title: 'Social Media & Digital Executive',
      tagline: 'Global Campaigns & Conversion Growth',
      description: 'Orchestrated international campaigns across 15+ countries at Global Study Pro, creating 100+ high-engagement digital assets and achieving ~90% conversion rates on targeted cohorts.'
    }
  ];

  return (
    <section id="about" className="py-28 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Lead */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
              01 · Profile Narrative
            </span>
            <span className="w-12 h-px bg-blue-500/40" />
            <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
              About Jeetandar N Silwani
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display text-balance leading-tight max-w-2xl">
              Building things that connect technology with people.
            </h2>

            {/* Repositioned professional statement banner */}
            <div className="lg:max-w-md w-full bg-neutral-900/70 border border-white/10 rounded-xl p-4 sm:p-5 backdrop-blur-sm self-start lg:self-end shadow-lg shadow-black/40">
              <div className="flex items-center gap-2 mb-1.5 text-[11px] font-mono uppercase tracking-wider text-blue-400">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span>Executive Summary</span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-neutral-300 leading-relaxed">
                Software Developer, Full Stack Engineer, Data Analyst, and Digital Executive delivering measurable product impact.
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
          
          {/* Portrait Column: Clean Placeholder for local image or GitHub sync */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
            <div className="relative group w-full max-w-[360px] lg:max-w-none">
              {/* Subtle ambient backdrop highlight */}
              <div 
                className="absolute -inset-2 bg-gradient-to-tr from-blue-600/20 via-sky-500/10 to-indigo-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" 
                aria-hidden="true" 
              />
              
              {/* Photo Frame Container / Blank Placeholder */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-2xl shadow-black/80 flex flex-col items-center justify-between p-6">
                
                {/* Tech grid mesh in background */}
                <div 
                  className="absolute inset-0 opacity-[0.07] pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Top Badge */}
                <div className="w-full flex items-center justify-between relative z-10">
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                    Profile
                  </span>
                  <div className="bg-emerald-500/20 border border-emerald-500/40 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[10px] font-mono text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active 2026</span>
                  </div>
                </div>

                {/* Center Portrait */}
                <div className="relative z-10 flex flex-col items-center text-center my-auto py-8">
                  <div className="w-full max-w-[240px] aspect-square rounded-2xl overflow-hidden border border-white/15 shadow-xl shadow-black/60 group-hover:border-blue-400/50 transition-colors bg-neutral-900">
                    <img
                      src="/images/profile.jpg"
                      alt="Jeetandar N Silwani"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h4 className="text-white font-semibold text-base font-display mt-4">
                    Jeetandar N Silwani
                  </h4>
                  <p className="text-xs font-mono text-blue-400 mt-1">
                    Software Developer · Full Stack
                  </p>
                </div>

                {/* Bottom Status bar */}
                <div className="w-full pt-3 border-t border-white/10 flex items-center justify-between relative z-10 text-[11px] font-mono text-neutral-400">
                  <span>Bengaluru, IN</span>
                  <span className="text-neutral-400">Photo Loaded</span>
                </div>
              </div>

              {/* Caption pill */}
              <div className="mt-3.5 flex items-center justify-between text-xs font-mono text-neutral-400 px-1">
                <span className="text-blue-400 font-medium">Full Stack & Software Dev</span>
                <span>Bengaluru, IN</span>
              </div>
            </div>
          </div>

          {/* Main Story Column */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5 text-neutral-300 font-normal leading-relaxed text-base sm:text-lg">
              <p>
                I’m <span className="text-white font-semibold">Jeetandar N Silwani</span>, a <span className="text-blue-400 font-medium">Full Stack Developer</span>, <span className="text-blue-400 font-medium">Software Developer</span>, <span className="text-blue-400 font-medium">App Developer</span>, and <span className="text-blue-400 font-medium">Digital Creative</span> passionate about building modern, scalable, and user-focused digital experiences. I enjoy working across the entire development process — from transforming an idea into a concept and designing the interface to developing the frontend, backend, APIs, databases, and deploying the final product.
              </p>
              <p>
                My experience spans <span className="text-white font-medium">web development, mobile application development, UI/UX, digital marketing, content creation, and creative design</span>. I work with technologies such as <span className="text-white font-medium font-mono text-sm bg-white/5 px-1.5 py-0.5 rounded border border-white/10">React</span>, <span className="text-white font-medium font-mono text-sm bg-white/5 px-1.5 py-0.5 rounded border border-white/10">JavaScript</span>, <span className="text-white font-medium font-mono text-sm bg-white/5 px-1.5 py-0.5 rounded border border-white/10">TypeScript</span>, <span className="text-white font-medium font-mono text-sm bg-white/5 px-1.5 py-0.5 rounded border border-white/10">Node.js</span>, <span className="text-white font-medium font-mono text-sm bg-white/5 px-1.5 py-0.5 rounded border border-white/10">Express</span>, <span className="text-white font-medium font-mono text-sm bg-white/5 px-1.5 py-0.5 rounded border border-white/10">MongoDB</span>, and <span className="text-white font-medium font-mono text-sm bg-white/5 px-1.5 py-0.5 rounded border border-white/10">Firebase</span>, while continuously exploring new technologies and better ways to build. I particularly enjoy creating products that are not only technically functional but also visually polished and intuitive to use.
              </p>
              <p>
                Beyond coding, I’ve worked on <span className="text-white font-medium">real-world projects, digital campaigns, student platforms, career-tech applications, event experiences, and interactive systems</span> while taking on leadership and creative responsibilities. I bring a combination of technical thinking, creativity, problem-solving, and execution to my work, and I’m always looking for opportunities to build meaningful products, learn new things, and turn ambitious ideas into reality.
              </p>
            </div>
          </div>

        </div>

        {/* Academic Foundation & Qualifications - Dedicated Full-Width Showcase */}
        <div className="mb-20 bg-neutral-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
          {/* Subtle accent corner glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-semibold block mb-1">
                Verified Credentials
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                Academic Foundation & Degrees
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Bangalore University Affiliated</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {PERSONAL_INFO.education.map((edu, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-xl bg-neutral-950/60 border border-white/5 hover:border-blue-500/30 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-blue-400 font-semibold bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
                      {edu.period}
                    </span>
                    <span className="text-emerald-300 font-mono font-medium bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      {edu.grade}
                    </span>
                  </div>
                  
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors mt-2 mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 font-mono">
                    {edu.institution}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-mono block mb-1">
                    Field of Study
                  </span>
                  <p className="text-xs text-neutral-200 font-mono leading-relaxed">
                    {edu.specialization}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-400">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Location: Bengaluru, Karnataka, India
            </span>
            <span className="text-emerald-400 font-medium flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Full Stack & Software Roles
            </span>
          </div>
        </div>

        {/* 5 Core Competency Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {coreCompetencies.map((comp, idx) => {
            const IconComponent = comp.icon;
            return (
              <div
                key={idx}
                className="p-5 bg-neutral-900/40 border border-white/5 hover:border-blue-500/30 rounded-lg transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-colors">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {comp.title}
                  </h4>
                  <p className="text-[11px] font-mono text-blue-300/80 mb-2.5">
                    {comp.tagline}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
