import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatItem = ({ end, label, suffix = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="text-center p-8 bg-surface/50 rounded-3xl border border-white/5 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 group">
      <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">
        {/* Glow behind */}
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all" />
        
        {/* Circle SVG */}
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="56"
            className="stroke-gray-800"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx="64"
            cy="64"
            r="56"
            className="stroke-primary"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray="351"
            strokeDashoffset={inView ? "0" : "351"}
            style={{ transition: "stroke-dashoffset 2s ease-out" }}
            strokeLinecap="round"
          />
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-3xl font-bold text-white">
            {inView ? <CountUp end={end} duration={2.5} separator="," /> : 0}
            {suffix}
          </span>
        </div>
      </div>
      <h3 className="text-lg font-medium text-gray-300">{label}</h3>
    </div>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="py-20 relative border-t border-white/5 bg-surface/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <StatItem end={3} suffix="+" label="Years Experience" />
          <StatItem end={25} suffix="+" label="Projects Completed" />
          <StatItem end={10} suffix="+" label="Happy Clients" />
          <StatItem end={500} suffix="h+" label="Hours of Coding" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
