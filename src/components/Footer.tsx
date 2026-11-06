import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#030303] text-neutral-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div>
            <span className="text-base font-bold text-white font-display tracking-tight block mb-1">
              JEETANDAR N SILWANI
            </span>
            <p className="text-xs text-neutral-400 font-mono">
              Software Developer · Full Stack · Data Analytics · {PERSONAL_INFO.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-blue-400 transition-colors"
            >
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors ml-2"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400">
          <span>© 2026 Jeetandar N Silwani. All rights reserved.</span>
          <span>Designed & engineered with architectural precision.</span>
        </div>

      </div>
    </footer>
  );
};
