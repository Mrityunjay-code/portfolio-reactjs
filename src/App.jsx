import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Protocol from './components/Protocol';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [showResume, setShowResume] = useState(false);

  const openResume = () => setShowResume(true);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero openResume={openResume} />
        <Skills />
        <Stats />
        <About openResume={openResume} />
        <Projects />
        <Protocol />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </div>
  );
}

export default App;
