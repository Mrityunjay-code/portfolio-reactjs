import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

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
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              A selection of projects that showcase my skills in design and development.
            </p>
          </div>
          <button className="text-primary hover:text-cyan-600 dark:hover:text-white transition-colors flex items-center gap-2 font-semibold">
            View All Projects <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group relative bg-surface border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-sm dark:shadow-none">
              {/* Project Banner (Text Placeholder) */}
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 flex items-center justify-center p-6 group-hover:bg-primary/10 transition-colors duration-500">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <h3 className={`text-3xl md:text-4xl font-display font-bold text-center text-transparent bg-clip-text bg-gradient-to-r ${project.color} group-hover:scale-105 transition-transform duration-500 relative z-10`}>
                  {project.title}
                </h3>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex gap-3">
                    <a href={project.github} className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors text-gray-700 dark:text-white">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.link} className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors text-gray-700 dark:text-white">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
