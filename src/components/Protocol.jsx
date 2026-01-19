import React from 'react';
import { Search, PenTool, Code, Layout, Smartphone, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "I immerse myself in your world to understand the core problem and user needs."
  },
  {
    icon: Layout,
    title: "Wireframing",
    description: "Structuring the layout to ensure intuition and user flow before any high-fidelity design."
  },
  {
    icon: PenTool,
    title: "UI Design",
    description: "Designing pixel-perfect mockups with modern aesthetics and accessibility in mind."
  },
  {
    icon: Code,
    title: "Development",
    description: "Writing clean, scalable code using the latest frameworks like React and Next.js."
  },
  {
    icon: Smartphone,
    title: "Responsiveness",
    description: "Ensuring the application looks and works perfectly on every device size."
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Launching your product to the world with proper SEO and performance optimization."
  }
];

const Protocol = () => {
  return (
    <section id="process" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase">How I Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">My Development Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
             From a vague idea to a polished product, I follow a refined workflow to deliver excellence.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:w-1/2 p-6 bg-surface border border-white/5 rounded-2xl hover:border-primary/50 transition-colors">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                      <span className="md:hidden w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                        {index + 1}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-12 h-12 -translate-x-1/2 bg-background border-4 border-surface rounded-full flex items-center justify-center z-10 transition-all duration-500 group-hover:scale-110 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                     <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protocol;
