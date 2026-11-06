import React from 'react';
import { WORK_PHILOSOPHY } from '../data/portfolioData';
import { Search, Compass, Cpu, Gauge } from 'lucide-react';

export const HowIWork: React.FC = () => {
  const stepIcons = [Search, Compass, Cpu, Gauge];

  return (
    <section className="py-28 border-t border-white/5 relative bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3 block">
              07 · Engineering Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
              From Idea → Impact
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-sm">
            How I approach complex technical challenges: systematic diagnosis, rigorous modeling, and clean delivery.
          </p>
        </div>

        {/* 4 Stages Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {WORK_PHILOSOPHY.map((stage, idx) => {
            const Icon = stepIcons[idx] || Search;

            return (
              <div
                key={stage.step}
                className="relative p-6 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold font-mono text-neutral-500 group-hover:text-blue-400 transition-colors">
                      {stage.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Stage Title */}
                  <h3 className="text-xl font-bold text-white font-display mb-1">
                    {stage.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs font-mono text-blue-300 mb-4">
                    {stage.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Subdued footer divider */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>Phase {stage.step} of 04</span>
                  <span className="text-blue-400/60 font-semibold group-hover:text-blue-400 transition-colors">
                    Intentional
                  </span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
