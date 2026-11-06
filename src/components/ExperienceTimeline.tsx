import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { ChevronDown, Briefcase, Calendar, MapPin } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-28 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3 block">
              03 · Career Trajectory
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display text-balance">
              Professional Experience
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-sm">
            Proven track record across software engineering, full-stack development, database query optimization, data analytics, and digital marketing campaigns.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className="relative group transition-all duration-200"
              >
                {/* Timeline node marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border transition-all duration-200 ${
                    isExpanded
                      ? 'bg-blue-500 border-blue-400 ring-4 ring-blue-500/20'
                      : 'bg-neutral-900 border-neutral-600 group-hover:border-neutral-400'
                  }`}
                />

                {/* Main Experience Accordion Card */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className={`p-6 sm:p-7 rounded-lg border transition-all duration-200 cursor-pointer ${
                    isExpanded
                      ? 'bg-neutral-900/80 border-blue-500/40 shadow-xl shadow-black/50'
                      : 'bg-neutral-950/40 border-white/5 hover:border-white/15 hover:bg-neutral-900/30'
                  }`}
                >
                  {/* Top Metadata Row (Unboxed metadata with typographic separators) */}
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-400 mb-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-white font-medium">{exp.period}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-neutral-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Company & Role Header */}
                  <div className="flex items-start justify-between gap-4 mt-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-sm font-medium text-neutral-300">
                        <Briefcase className="w-4 h-4 text-neutral-400" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <button
                      className="p-1.5 rounded text-neutral-400 group-hover:text-white hover:bg-white/5 transition-colors shrink-0"
                      aria-label="Toggle details"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-blue-400' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Summary Paragraph */}
                  <p className="text-sm text-neutral-300 mt-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Expanded Content View */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-white/10 space-y-5 animate-in fade-in duration-200">
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                          Key Deliverables & Verified Impact
                        </h4>
                        <ul className="space-y-2.5">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="text-xs sm:text-sm text-neutral-300 flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Applied Technologies (Unboxed text with separators) */}
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                          Domain & Toolchain
                        </h4>
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-blue-300 font-mono">
                          {exp.technologies.map((tech, idx) => (
                            <React.Fragment key={tech}>
                              <span>{tech}</span>
                              {idx < exp.technologies.length - 1 && (
                                <span className="text-neutral-600" aria-hidden="true">·</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
