import React, { useState } from 'react';
import { ExternalLink, Github, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  { 
    title: "MH Deliveries", 
    desc: "Built a delivery management platform with real-time order tracking, rider assignment, and role-based authentication using the MERN stack. Implemented scalable REST APIs and real-time updates with Socket.io, contributing to a 40% increase in daily completed deliveries.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    link: "#",
    github: "#",
    color: "from-blue-400 to-cyan-400"
  },
  { 
    title: "NIET CGE Website", 
    desc: "Developed an SEO-optimized, high-performance academic website using Next.js with SSR and responsive UI components. Improved page load speed and Core Web Vitals through image optimization, lazy loading, and performance tuning.",
    tech: ["React.js", "Next.js", "Tailwind CSS"],
    link: "#",
    github: "#",
    color: "from-purple-400 to-pink-400"
  },
  { 
    title: "2PointOh", 
    desc: "Maintained and enhanced a live Shopify e-commerce website by implementing product catalog improvements, custom theme updates, and Liquid integrations to improve UX and performance.",
    tech: ["Shopify", "Liquid", "JavaScript"],
    link: "#",
    github: "#",
    color: "from-orange-400 to-red-400"
  },
  { 
    title: "NIET Website", 
    desc: "Maintained and updated a high-traffic institutional website by implementing UI changes, content updates, and performance optimizations to ensure reliability and responsiveness.",
    tech: ["PHP", "SQL"],
    link: "#",
    github: "#",
    color: "from-green-400 to-emerald-400"
  },
  { 
    title: "Pub Hoppers", 
    desc: "Club membership and QR-based entry system. Applied secure JWT login with role-based access, used SSR for faster page loads, and integrated real-time QR scanning for entry validation.",
    tech: ["React.js", "Next.js", "Tailwind CSS"],
    link: "#",
    github: "#",
    color: "from-indigo-400 to-blue-400"
  },
  { 
    title: "Ashiana Housing", 
    desc: "A premium real estate platform showcasing residential properties across 7 cities. Features include advanced property filtering, detailed project showcases, and a seamless user inquiry system for senior living and kid-centric homes.",
    tech: ["Web Development", "UI/UX Design"],
    link: "https://www.ashianahousing.com/",
    github: "#",
    color: "from-teal-400 to-emerald-400"
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - itemsPerPage + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
        visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Featured Projects</h2>
            <p className="text-muted text-lg">
              A selection of projects that showcase my skills in design and development.
            </p>
          </div>
          <div className="flex gap-4">
             <button 
                onClick={prevSlide}
                className="p-3 rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-foreground"
                aria-label="Previous project"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-3 rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-foreground"
                aria-label="Next project"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
          </div>
        </div>

        <div className="w-full">
            <motion.div 
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
               initial={false}
            >
                <AnimatePresence mode='popLayout'>
                    {visibleProjects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="group relative bg-surface border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg dark:shadow-none flex flex-col h-full"
                        >
                            {/* Project Banner */}
                            <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 flex items-center justify-center p-6 group-hover:bg-primary/10 transition-colors duration-500 shrink-0">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                                <h3 className={`text-3xl font-display font-bold text-center text-transparent bg-clip-text bg-gradient-to-r ${project.color} group-hover:scale-105 transition-transform duration-500 relative z-10`}>
                                    {project.title}
                                </h3>
                            </div>
                  
                            {/* Content */}
                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2 shrink-0">
                                        <a href={project.github} className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors text-gray-700 dark:text-white">
                                            <Github className="w-4 h-4" />
                                        </a>
                                        <a href={project.link} className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors text-gray-700 dark:text-white">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-muted text-sm md:text-base mb-6 leading-relaxed line-clamp-3">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.slice(0, 3).map((t, idx) => (
                                        <span key={idx} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                         <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-muted text-xs font-semibold border border-gray-200 dark:border-white/10">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Slider Indicators */}
            <div className="flex justify-center mt-12 gap-2">
                {Array.from({ length: Math.ceil(projects.length / itemsPerPage) }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx * itemsPerPage)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${Math.floor(currentIndex / itemsPerPage) === idx ? 'bg-primary w-8' : 'bg-gray-300 dark:bg-white/20 hover:bg-primary/50'}`}
                        aria-label={`Go to page ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
