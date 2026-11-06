import React from 'react';
import { FileText, Download, ArrowUpRight } from 'lucide-react';

interface ResumeCTAProps {
  onOpenResume: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onOpenResume }) => {
  return (
    <section className="py-24 border-t border-white/5 relative bg-gradient-to-b from-neutral-950 via-neutral-900/50 to-neutral-950">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        
        <span className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3 block">
          08 · Curriculum Vitae
        </span>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display mb-4">
          Want the complete story?
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 max-w-xl mx-auto mb-9 font-normal leading-relaxed text-balance">
          Explore the comprehensive chronicle of technical internships, national competition podiums, system architectures, and academic rigor.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenResume}
            className="px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-all duration-200 active:scale-95 shadow-lg shadow-blue-900/40 flex items-center gap-2.5"
          >
            <FileText className="w-4 h-4" />
            <span>View Interactive Resume</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </button>

          <button
            onClick={onOpenResume}
            className="px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-md transition-all duration-200 active:scale-95 flex items-center gap-2.5"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF / Print</span>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 text-xs font-mono text-neutral-400">
          <span>St Pauls College '26</span>
          <span className="text-neutral-700">·</span>
          <span>Verified Credentials</span>
          <span className="text-neutral-700">·</span>
          <span>Available for 2026 Roles</span>
        </div>

      </div>
    </section>
  );
};
