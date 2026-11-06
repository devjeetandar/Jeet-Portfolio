import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isProjectHover, setIsProjectHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports fine mouse pointer (not touch)
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, input, textarea, select, [role="button"]');
      setIsPointer(!!interactive);

      const projectCard = target.closest('article, [data-project-card="true"]');
      setIsProjectHover(!!projectCard);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out will-change-transform"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`
      }}
    >
      {isProjectHover ? (
        <div className="-translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-600/90 text-white text-[10px] font-mono font-bold uppercase tracking-wider flex items-center justify-center backdrop-blur-sm shadow-lg shadow-blue-900/40 border border-white/20 animate-in zoom-in-75 duration-150">
          VIEW
        </div>
      ) : isPointer ? (
        <div className="-translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-blue-400 bg-blue-500/15 backdrop-blur-[1px] transition-all duration-150" />
      ) : (
        <div className="-translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-sm shadow-blue-400/80 transition-all duration-150" />
      )}
    </div>
  );
};
