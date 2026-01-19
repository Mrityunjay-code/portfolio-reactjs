import React from 'react';
import { Check, Code2, Rocket, Briefcase } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Hourly",
      price: "$40",
      period: "/hour",
      desc: "Perfect for maintenance, consulting, or small fixes.",
      icon: Code2,
      features: [
        "Bug fixes & small features",
        "Code review & consultation",
        "Pay as you go",
        "Direct communication",
      ]
    },
    {
      name: "Project Based",
      price: "Custom",
      period: "",
      desc: "For full website builds, apps, or defined project scopes.",
      icon: Rocket,
      featured: true,
      features: [
        "Fixed price & timeline",
        "Complete project management",
        "UI/UX Design included",
        "Post-launch support",
        "SEO Optimization"
      ]
    },
    {
      name: "Retainer",
      price: "$2500",
      period: "/month",
      desc: "Dedicated hours per month for ongoing development.",
      icon: Briefcase,
      features: [
        "80 hours guaranteed",
        "Priority support",
        "Regular strategy calls",
        "Cancel anytime",
        "Scale team if needed"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 skewed-bg pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Services & Pricing</h2>
          <p className="text-gray-400">Transparent pricing for world-class development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative group p-8 bg-surface rounded-3xl border ${plan.featured ? 'border-primary/50 bg-surface/80' : 'border-white/10'} hover:border-primary/30 transition-all duration-300 flex flex-col`}>
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-primary">
                  <plan.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm h-10">{plan.desc}</p>
              </div>

              <div className="flex items-baseline gap-1 mb-8 border-b border-white/5 pb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400 text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-secondary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 font-bold rounded-xl transition-colors ${plan.featured ? 'bg-gradient-primary text-white' : 'bg-white/5 hover:bg-white/10 text-white'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
