import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Impact', href: '#impact' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Beyond Code', href: '#beyond' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#050505]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Clean text wordmark */}
        <a
          href="#top"
          className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors duration-200 whitespace-nowrap font-display"
        >
          JEETANDAR N SILWANI
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-150 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action & mobile trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-all duration-200 active:scale-95 shadow-sm shadow-blue-900/40 whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white rounded-md hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#090a0f]/98 backdrop-blur-xl border-b border-white/10 px-6 py-8 shadow-2xl transition-all">
          <nav className="flex flex-col gap-5 text-sm uppercase tracking-wider font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="py-2 hover:text-blue-400 transition-colors border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3 px-4 flex items-center justify-center gap-2 bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider rounded-md"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
