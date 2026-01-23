import React from 'react';
import { ArrowRight, Code, Terminal, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ openResume }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-20 dark:opacity-100 animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-20 dark:opacity-100 animate-pulse-slow delay-1000" />

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-8 backdrop-blur-md hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">Available for Freelance Projects</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-foreground">
            Building digital <br className="hidden md:block" />
            <span className="text-gradient">experiences that matter.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm <span className="text-foreground font-semibold">Mrityunjay Kumar</span>, a Full Stack Developer specializing in building exceptional digital products with modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-primary rounded-full text-white font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/25">
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={openResume}
              className="w-full sm:w-auto px-8 py-4 bg-surface dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-foreground font-bold text-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm shadow-sm dark:shadow-none"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>

       
        </motion.div>
      </div>
      
      {/* Decorative Grid or Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
