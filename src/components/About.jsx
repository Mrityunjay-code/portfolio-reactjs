import React from 'react';
import portfolioImage from '../assets/portfolio-main.png';
import resume from '../assets/Mrityunjay-kumar-resume.pdf';
import { Mail, MapPin, Calendar, Globe, Download } from 'lucide-react';

const About = ({ openResume }) => {
  return (
    <section id="about" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image / Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-2xl opacity-20 transform -rotate-6"></div>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 bg-surface">
              {/* Placeholder mostly, nice abstract or person image */}
              <img 
                src={portfolioImage}
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 p-6 bg-background border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="relative w-3 h-3">
                   <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <div>
                   <p className="text-sm font-bold text-foreground">Open to Work</p>
                   <p className="text-xs text-gray-500 dark:text-gray-400">Remote / Hybrid</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Passionate about <span className="text-primary">Clean Code</span> & <span className="text-secondary">User Experience</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              Hi, I'm Mrityunjay. I started my journey as a developer 3 years ago. I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
              I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <div className="p-2 bg-gray-100 dark:bg-white/5 rounded-lg"><MapPin className="w-5 h-5 text-primary" /></div>
                <span>Noida, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                 <div className="p-2 bg-gray-100 dark:bg-white/5 rounded-lg"><Mail className="w-5 h-5 text-secondary" /></div>
                <span>kmrityunjay360@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                 <div className="p-2 bg-gray-100 dark:bg-white/5 rounded-lg"><Calendar className="w-5 h-5 text-purple-500" /></div>
                <span>Full-time / Freelance</span>
              </div>
               <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                 <div className="p-2 bg-gray-100 dark:bg-white/5 rounded-lg"><Globe className="w-5 h-5 text-blue-400" /></div>
                <span>English, Hindi</span>
              </div>
            </div>

            <button 
              onClick={openResume}
              className="px-8 py-4 bg-foreground text-background font-bold rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 inline-flex"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
