import React from 'react';
import { Check, Code2, Rocket, Briefcase } from 'lucide-react';

const Pricing = () => {
  const usps = [
    {
      title: "Clean & Scalable Code",
      desc: "I write maintainable, modular, and efficient code that scales with your business needs.",
      icon: Code2,
      features: [
        "Modern Best Practices",
        "Component-Based Architecture",
        "Performance Optimized",
        "Easy to Maintain",
      ]
    },
    {
      title: "Strategic Thinking",
      desc: "I don't just write code; I understand your business goals and build solutions that drive growth.",
      icon: Rocket,
      featured: true,
      features: [
        "Business-First Approach",
        "User-Centric Design",
        "SEO Optimization",
        "Conversion Focused",
        "Analytics Integration"
      ]
    },
    {
      title: "Fast & Reliable Delivery",
      desc: "I respect deadlines. You get regular updates and a polished product delivered on time.",
      icon: Briefcase,
      features: [
        "Agile Methodology",
        "Transparent Communication",
        "Regular Updates",
        "On-Time Delivery",
        "Post-Launch Support"
      ]
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 skewed-bg pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Why Work With Me?</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Delivering exceptional value through technical excellence and strategic insight.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {usps.map((usp, index) => (
            <div key={index} className={`relative group p-8 bg-surface rounded-3xl border ${usp.featured ? 'border-primary/50 bg-surface/80 shadow-xl shadow-primary/10' : 'border-gray-200 dark:border-white/10'} hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col`}>
              
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  <usp.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{usp.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed min-h-[60px]">{usp.desc}</p>
              </div>

              <div className="w-full h-[1px] bg-gray-200 dark:bg-white/5 mb-8"></div>

              <ul className="space-y-4 mb-8 flex-1">
                {usp.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-secondary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 font-bold rounded-xl transition-all ${usp.featured ? 'bg-gradient-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40' : 'bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-foreground'}`}>
                Let's Discuss
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
