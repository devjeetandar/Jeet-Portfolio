import React, { useState } from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Trophy, Users, Clapperboard, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const BeyondTheCode: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'National Winner' | 'Leadership' | 'Creative' | 'Certification'>('All');

  const filteredAchievements = filter === 'All'
    ? ACHIEVEMENTS
    : ACHIEVEMENTS.filter(a => a.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'National Winner':
        return <Trophy className="w-4 h-4 text-amber-400" />;
      case 'Leadership':
        return <Users className="w-4 h-4 text-blue-400" />;
      case 'Creative':
        return <Clapperboard className="w-4 h-4 text-purple-400" />;
      case 'Certification':
        return <Award className="w-4 h-4 text-emerald-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="beyond" className="py-28 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3 block">
              06 · Leadership & Accolades
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
              Beyond the Code
            </h2>
            <p className="text-sm font-mono text-neutral-400 mt-2">
              National victories, community founding, collegiate judging, hackathon crews & enterprise accreditations.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900/80 border border-white/10 rounded-lg">
            {(['All', 'National Winner', 'Leadership', 'Creative', 'Certification'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1.5 text-xs font-mono transition-all duration-200 rounded-md whitespace-nowrap ${
                  filter === tab
                    ? 'bg-blue-600 text-white font-medium shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-neutral-950/40 border border-white/5 hover:border-white/15 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header Row: Category & Year (Unboxed text with separators) */}
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-4 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(item.category)}
                    <span className="text-neutral-300 font-medium">{item.category}</span>
                  </div>
                  <span>{item.year}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-1 font-display">
                  {item.title}
                </h3>
                
                <p className="text-xs font-mono text-blue-400/90 mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {item.organization && (
                <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-neutral-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>{item.organization}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
