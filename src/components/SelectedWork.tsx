import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, ArrowRight, ExternalLink, Github, Search, Filter, Sparkles } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const SelectedWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Full-Stack Engineering',
    'Mobile & AI',
    'Data & Analytics',
    'Event & Web Platforms',
    'Interactive Apps'
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="work" className="py-28 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3 block">
              04 · Production Portfolio ({PROJECTS.length} Systems)
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
              Selected Work
            </h2>
            <p className="text-sm font-mono text-neutral-400 mt-2 max-w-xl">
              Production web applications, AI mobile tools, analytical dashboards, event platforms, and interactive digital experiences.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by tech or name..."
                className="w-full sm:w-60 pl-8 pr-3 py-1.5 bg-neutral-900/90 border border-white/10 rounded-lg text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1 p-1 bg-neutral-900/80 border border-white/10 rounded-lg overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 text-[11px] font-mono transition-all duration-200 rounded whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white font-medium shadow-sm'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Results Counter */}
        {searchQuery && (
          <div className="text-xs font-mono text-neutral-400 mb-8 flex items-center gap-2">
            <Filter className="w-3 h-3 text-blue-400" />
            <span>Showing {filteredProjects.length} matching {filteredProjects.length === 1 ? 'project' : 'projects'} for "{searchQuery}"</span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-blue-400 hover:underline ml-2"
            >
              Reset
            </button>
          </div>
        )}

        {/* Projects Grid / Editorial Showcase */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center rounded-xl border border-white/5 bg-neutral-950/40">
            <p className="text-sm font-mono text-neutral-400 mb-3">No projects matching your search criteria.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 text-xs font-mono text-blue-400 hover:text-white bg-blue-600/20 border border-blue-500/30 rounded"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            
            {/* Top 3 Featured Flagship Editorial Showcases (if All or relevant category) */}
            {selectedCategory === 'All' && !searchQuery && (
              <div className="space-y-16 pb-12 border-b border-white/10">
                {PROJECTS.filter(p => p.featured).slice(0, 3).map((project, index) => {
                  const isReversed = index % 2 === 1;

                  return (
                    <article
                      key={project.id}
                      onClick={() => setActiveProject(project)}
                      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-2xl bg-neutral-950/60 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer ${
                        isReversed ? 'lg:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Visual Image Showcase Container */}
                      <div
                        className={`lg:col-span-7 relative aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-white/10 ${
                          isReversed ? 'lg:order-2' : 'lg:order-1'
                        }`}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.src.includes('unsplash')) {
                              target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop';
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                        {/* Top corner badge */}
                        <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-white font-semibold flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Flagship</span>
                        </div>

                        {/* Hover Overlay Prompt */}
                        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-[11px] font-mono text-neutral-300 border border-white/10 flex items-center gap-1.5 opacity-90 group-hover:text-blue-400 group-hover:border-blue-500/40 transition-all">
                          <span>View Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      {/* Editorial Content Column */}
                      <div
                        className={`lg:col-span-5 flex flex-col justify-between ${
                          isReversed ? 'lg:order-1' : 'lg:order-2'
                        }`}
                      >
                        <div>
                          {/* Metadata Header */}
                          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
                            <span className="text-blue-400">{project.category}</span>
                            <span className="text-neutral-600" aria-hidden="true">·</span>
                            <span>{project.year}</span>
                            <span className="text-neutral-600" aria-hidden="true">·</span>
                            <span>{project.role}</span>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors font-display mb-3">
                            {project.title}
                          </h3>

                          {/* Short Description */}
                          <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                            {project.shortDescription}
                          </p>

                          {/* Key Outcome Highlight */}
                          <div className="p-3.5 rounded bg-white/5 border border-white/5 mb-6 text-xs text-neutral-300">
                            <span className="text-blue-400 font-mono font-medium block mb-1">
                              Measurable Outcome
                            </span>
                            {project.outcome}
                          </div>

                          {/* Tech Stack Strip */}
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-400 font-mono mb-8">
                            {project.technologies.slice(0, 5).map((tech, i) => (
                              <React.Fragment key={tech}>
                                <span className="text-neutral-300">{tech}</span>
                                {i < Math.min(project.technologies.length, 5) - 1 && (
                                  <span className="text-neutral-600" aria-hidden="true">·</span>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>

                        {/* Actions Strip */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                            <span>Explore Architecture</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>

                          <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 rounded border border-white/5 transition-colors"
                                title="GitHub Repository"
                              >
                                <Github className="w-4 h-4" />
                              </a>
                            )}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-blue-400 hover:text-white bg-blue-600/10 hover:bg-blue-600 rounded border border-blue-500/20 transition-colors"
                                title="Live Website"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                    </article>
                  );
                })}
              </div>
            )}

            {/* Comprehensive Modular Grid for All Projects */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  {selectedCategory === 'All' && !searchQuery ? 'Complete Project Archive' : 'Filtered Projects Catalog'} ({filteredProjects.length})
                </h3>
                <span className="text-xs font-mono text-neutral-500">Click any card for full case study</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    className="p-5 rounded-xl bg-neutral-950/40 border border-white/10 hover:border-blue-500/30 transition-all duration-200 group cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      {/* Project Image */}
                      <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-neutral-900 border border-white/5 mb-4">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.src.includes('unsplash')) {
                              target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop';
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-blue-400 border border-white/10">
                          {project.category}
                        </div>
                      </div>

                      {/* Header Row */}
                      <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-2">
                        <span>{project.year}</span>
                        <span className="text-neutral-400">{project.role}</span>
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors font-display mb-1.5 line-clamp-1">
                        {project.title}
                      </h4>

                      {/* Subtitle */}
                      <p className="text-xs font-mono text-blue-400/90 mb-3 line-clamp-1">
                        {project.subtitle}
                      </p>

                      {/* Short Description */}
                      <p className="text-xs text-neutral-400 leading-relaxed mb-4 line-clamp-3">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div>
                      {/* Tech Chips */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-4 text-[11px] font-mono text-neutral-400">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-neutral-300">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-neutral-500 text-[10px]">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Bottom Footer Actions */}
                      <div className="pt-3 border-t border-white/5 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => setActiveProject(project)}
                          className="text-xs font-mono uppercase tracking-wider text-blue-400 group-hover:text-blue-300 flex items-center gap-1 font-semibold"
                        >
                          <span>Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                              title="GitHub Code"
                            >
                              <Github className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 text-blue-400 hover:text-white hover:bg-blue-600 rounded transition-colors"
                              title="Live Website"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Full Detailed Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
