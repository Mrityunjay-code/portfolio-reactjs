import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
const Services = React.lazy(() => import('./components/Services'));
const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Protocol = React.lazy(() => import('./components/Protocol'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Footer = React.lazy(() => import('./components/Footer'));
const ResumeModal = React.lazy(() => import('./components/ResumeModal'));
const Contact = React.lazy(() => import('./components/Contact'));
const WhatsAppBtn = React.lazy(() => import('./components/WhatsAppBtn'));

import { SmoothScroll, ScrollProgress } from './components/ScrollUtils';

const SectionWrapper = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [showResume, setShowResume] = useState(false);

  const openResume = () => setShowResume(true);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white font-sans">
        <ScrollProgress />
        <Navbar />
        <main>
        <Hero openResume={openResume} />
        
        <React.Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
          <SectionWrapper>
            <Skills />
          </SectionWrapper>
          <SectionWrapper>
            <Services />
          </SectionWrapper>
          <SectionWrapper>
            <About openResume={openResume} />
          </SectionWrapper>
          <SectionWrapper>
            <Experience />
          </SectionWrapper>
          <SectionWrapper>
            <Projects />
          </SectionWrapper>
          <SectionWrapper>
            <Protocol />
          </SectionWrapper>
          <SectionWrapper>
            <Pricing />
          </SectionWrapper>
          <SectionWrapper>
            <FAQ />
          </SectionWrapper>
          <SectionWrapper>
            <Contact />
          </SectionWrapper>
          <Footer />
          <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
          <WhatsAppBtn />
        </React.Suspense>
      </main>
      </div>
    </SmoothScroll>
  );
}

export default App;
