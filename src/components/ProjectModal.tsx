import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, ImageIcon } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const galleryImages = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.image];

  const currentDisplayImage = galleryImages[activeImageIndex] || project.image;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md overflow-y-auto">
      {/* Background click to dismiss */}
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#090a0f] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto">
        
        {/* Sticky Header with Close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090a0f]/95 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="text-blue-400">{project.category}</span>
            <span className="text-neutral-600" aria-hidden="true">·</span>
            <span>{project.year}</span>
            <span className="text-neutral-600" aria-hidden="true">·</span>
            <span>{project.role}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Visual Image Banner */}
          <div className="space-y-3">
            <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-white/10 bg-neutral-900 shadow-inner">
              <img
                src={currentDisplayImage}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('unsplash')) {
                    target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-1">
                  {project.role}
                </span>
                <h2 className="text-xl sm:text-3xl font-bold text-white font-display">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Gallery Thumbnails Strip (if multiple) */}
            {galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1 shrink-0">
                  <ImageIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>Screenshots:</span>
                </span>
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-12 rounded border overflow-hidden shrink-0 transition-all ${
                      activeImageIndex === idx
                        ? 'border-blue-500 ring-2 ring-blue-500/30'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Subtitle & Actions Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <p className="text-base text-neutral-300 font-medium max-w-xl">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold tracking-wide uppercase text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors flex items-center gap-2 shadow-sm shadow-blue-900/40"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Project Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
              Executive Overview
            </h3>
            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Architecture & Features */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
              Key Architecture & Functional Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded bg-white/5 border border-white/5 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Challenges & Solutions (if available) */}
          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                Engineering Challenges Addressed
              </h3>
              <div className="space-y-2.5">
                {project.challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Measurable Outcome Box */}
          <div className="p-4 rounded-lg bg-blue-950/20 border border-blue-500/30">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-1">
              Verified Production Outcome
            </span>
            <p className="text-sm text-neutral-200 font-medium leading-relaxed">
              {project.outcome}
            </p>
          </div>

          {/* Tech Stack Strip (Unboxed metadata with separators) */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
              Technology Stack & Architecture
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-blue-300 font-mono">
              {project.technologies.map((t, idx) => (
                <React.Fragment key={t}>
                  <span>{t}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-neutral-600" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
