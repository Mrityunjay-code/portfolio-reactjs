import React from 'react';
import { Code, Rocket, Monitor, Cloud, Terminal, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    desc: "Building blazing fast, responsive, and scalable web applications using modern technologies like React, Next.js, and Node.js.",
    gradient: "from-blue-400 to-cyan-400"
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    desc: "Architecting and building scalable Software-as-a-Service platforms with multi-tenancy, subscription billing, and secure authentication.",
    gradient: "from-purple-400 to-pink-400"
  },
  {
    icon: Terminal,
    title: "Software Development",
    desc: "Developing robust and efficient software solutions tailored to meet complex business requirements and optimize operational workflows.",
    gradient: "from-orange-400 to-red-400"
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Creating intuitive and high-performance mobile applications for iOS and Android using cross-platform technologies.",
    gradient: "from-green-400 to-emerald-400"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -right-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            What I <span className="text-gradient">Bring to the Table</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            I don't just write code; I build digital solutions that solve real-world problems and delight users.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-surface border border-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Hover Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-surface rounded-[0.9rem] flex items-center justify-center">
                    <Icon className="w-7 h-7 text-foreground" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
