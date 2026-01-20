import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "Software Development Associate",
            company: "Spoxtale Digitech Pvt Ltd",
            period: "Oct 2023 – Present",
            location: "Noida, Uttar Pradesh, India",
            desc: "Developed and deployed 3+ mobile and web applications using React Native, Next.js, and PHP for client-facing products, reducing feature delivery time by 30% and deployment errors by 20% through improved CI/CD workflows, pre-release testing, and faster time-to-market across multiple release cycles."
        }
    ];

    const education = [
        {
            degree: "Bachelor of Science in Computer Science",
            school: "Sunder Deep Engineering College",
            period: "Aug 2019 – Jul 2023",
            location: "Ghaziabad, Uttar Pradesh, India",
            desc: "Focused on core computer science fundamentals, software engineering principles, and full-stack development."
        }
    ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Experience & <span className="text-gradient">Education</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            My professional journey and academic background that have shaped my skills.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Experience Column */}
            <div className="space-y-8">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-8"
                >
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        <Briefcase className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Work Experience</h3>
                </motion.div>

                <div className="relative border-l-2 border-gray-200 dark:border-white/10 ml-3 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12 group"
                        >
                            {/* Dot */}
                            <div className="absolute top-2 -left-[9px] w-4 h-4 rounded-full bg-background border-4 border-primary group-hover:scale-125 transition-transform duration-300" />
                            
                            <div className="p-6 bg-surface border border-white/5 rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
                                    {exp.period}
                                </span>
                                <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                                <p className="text-foreground/80 font-medium mb-2">{exp.company}</p>
                                <p className="text-sm text-muted mb-4 flex items-center gap-1">
                                    <MapPin className="w-3 h-3" /> {exp.location}
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    {exp.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Education Column */}
            <div className="space-y-8">
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-8"
                >
                    <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                        <GraduationCap className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Education</h3>
                </motion.div>

                <div className="relative border-l-2 border-gray-200 dark:border-white/10 ml-3 space-y-12">
                    {education.map((edu, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12 group"
                        >
                             {/* Dot */}
                             <div className="absolute top-2 -left-[9px] w-4 h-4 rounded-full bg-background border-4 border-secondary group-hover:scale-125 transition-transform duration-300" />
                            
                            <div className="p-6 bg-surface border border-white/5 rounded-2xl hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5">
                                <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold mb-4">
                                    {edu.period}
                                </span>
                                <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                                <p className="text-foreground/80 font-medium mb-2">{edu.school}</p>
                                <p className="text-sm text-muted mb-4 flex items-center gap-1">
                                    <MapPin className="w-3 h-3" /> {edu.location}
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                    {edu.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
