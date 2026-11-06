import React, { useEffect, useState, useRef } from 'react';
import { IMPACT_METRICS } from '../data/portfolioData';

export const ImpactNumbers: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="impact" ref={containerRef} className="py-24 border-y border-white/10 bg-neutral-950/70 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-16 pb-6 border-b border-white/5 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-2">
              02 · Quantitative Proof
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase font-display">
              The Work, In Numbers
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-400 max-w-sm">
            Empirical metrics from enterprise software, international outreach, data engineering & national competitions.
          </p>
        </div>

        {/* The Animated Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {IMPACT_METRICS.map((metric, idx) => (
            <MetricCard 
              key={idx} 
              metric={metric} 
              shouldAnimate={hasAnimated} 
              index={idx}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

interface MetricCardProps {
  metric: {
    value: number;
    suffix: string;
    label: string;
    subtext: string;
  };
  shouldAnimate: boolean;
  index: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric, shouldAnimate }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let start = 0;
    const end = metric.value;
    const duration = 1400; // ms
    const startTime = performance.now();

    const animateNumber = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(easedProgress * (end - start) + start);
      setCurrentValue(val);

      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      } else {
        setCurrentValue(end);
      }
    };

    const frameId = requestAnimationFrame(animateNumber);
    return () => cancelAnimationFrame(frameId);
  }, [shouldAnimate, metric.value]);

  const formattedDisplay = currentValue >= 1000 
    ? currentValue.toLocaleString() 
    : currentValue;

  return (
    <div className="flex flex-col">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono text-white tracking-tight tabular-nums mb-2 flex items-baseline">
        <span>{shouldAnimate ? formattedDisplay : metric.value}</span>
        <span className="text-blue-400 ml-0.5 text-2xl sm:text-3xl font-normal">{metric.suffix}</span>
      </div>
      <h3 className="text-sm font-semibold text-neutral-200 mb-1 leading-snug">
        {metric.label}
      </h3>
      <p className="text-xs text-neutral-400 font-mono leading-relaxed">
        {metric.subtext}
      </p>
    </div>
  );
};
