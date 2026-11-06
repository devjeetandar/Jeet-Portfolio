import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Terminal, Database, BarChart3, ShieldCheck, Palette, Wrench, Info } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<{
    name: string;
    category: string;
    context: string;
  } | null>({
    name: 'React.js',
    category: 'Software Development & Full Stack',
    context: 'Primary frontend framework across 10+ web and enterprise applications'
  });

  const categoryIcons: Record<string, React.ReactNode> = {
    'Software Development & Full Stack': <Terminal className="w-4 h-4 text-blue-400" />,
    'Systems & Databases': <Database className="w-4 h-4 text-sky-400" />,
    'Data & Analytics': <BarChart3 className="w-4 h-4 text-blue-400" />,
    'Software Engineering & Security': <ShieldCheck className="w-4 h-4 text-cyan-400" />,
    'Social Media, Digital & Creative': <Palette className="w-4 h-4 text-indigo-400" />,
    'Tools & Ecosystem': <Wrench className="w-4 h-4 text-blue-400" />
  };

  return (
    <section id="skills" className="py-28 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3 block">
              05 · Technical Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
              Skills & Engineering Domain
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-sm">
            Categorized competence matrix grounded in production systems, data optimization, and creative media.
          </p>
        </div>

        {/* Live Active Skill Context Inspector Bar */}
        <div className="mb-12 p-4 sm:p-5 rounded-lg bg-neutral-900/60 border border-blue-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="text-neutral-400">Context Inspector:</span>
            <span className="text-white font-semibold">{activeSkill?.name}</span>
            <span className="text-neutral-600 hidden sm:inline" aria-hidden="true">/</span>
            <span className="text-blue-300 hidden sm:inline">{activeSkill?.category}</span>
          </div>
          <div className="text-neutral-300 italic pl-6 sm:pl-0">
            "{activeSkill?.context}"
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-neutral-950/40 border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-2">
                  {categoryIcons[category.title]}
                  <h3 className="text-base font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs text-neutral-400 font-mono mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Interactive List (Unboxed typography, zero pill boxes) */}
                <div className="space-y-2">
                  {category.skills.map((skill) => {
                    const isSelected = activeSkill?.name === skill.name;

                    return (
                      <button
                        key={skill.name}
                        onClick={() =>
                          setActiveSkill({
                            name: skill.name,
                            category: category.title,
                            context: skill.context
                          })
                        }
                        onMouseEnter={() =>
                          setActiveSkill({
                            name: skill.name,
                            category: category.title,
                            context: skill.context
                          })
                        }
                        className={`w-full text-left p-2.5 rounded-md transition-all flex items-center justify-between group ${
                          isSelected
                            ? 'bg-blue-600/15 border border-blue-500/30 text-white'
                            : 'hover:bg-white/5 text-neutral-300'
                        }`}
                      >
                        <span className="text-xs font-mono font-medium group-hover:text-blue-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors">
                          {isSelected ? 'Active' : 'Hover for info'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
