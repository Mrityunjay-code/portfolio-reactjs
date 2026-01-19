import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });
  
  // Theme Color State
  const [showColorPicker, setShowColorPicker] = useState(false);
  const colors = [
    { name: 'Blue', value: '59 130 246', class: 'bg-blue-500' },
    { name: 'Green', value: '34 197 94', class: 'bg-green-500' },
    { name: 'Purple', value: '168 85 247', class: 'bg-purple-500' },
    { name: 'Red', value: '239 68 68', class: 'bg-red-500' },
    { name: 'Orange', value: '249 115 22', class: 'bg-orange-500' },
    { name: 'Pink', value: '236 72 153', class: 'bg-pink-500' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Initialize color from local storage
    const savedColor = localStorage.getItem('primaryColor');
    if (savedColor) {
      document.documentElement.style.setProperty('--primary', savedColor);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const changeColor = (colorValue) => {
    document.documentElement.style.setProperty('--primary', colorValue);
    localStorage.setItem('primaryColor', colorValue);
    setShowColorPicker(false);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-lg py-4 border-b border-gray-200 dark:border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-display tracking-tighter text-foreground">
          MRITYUNJAY<span className="text-primary">.DEV</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <div className="h-4 w-[1px] bg-gray-300 dark:bg-white/10 mx-2"></div>
          
          {/* Color Picker */}
          <div className="relative">
            <button 
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-foreground transition-colors"
              aria-label="Change Theme Color"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-primary to-secondary" />
            </button>
            
            <AnimatePresence>
              {showColorPicker && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 p-3 bg-white dark:bg-surface border border-gray-200 dark:border-white/10 rounded-xl shadow-xl grid grid-cols-3 gap-2 w-[140px]"
                >
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => changeColor(c.value)}
                      className={`w-8 h-8 rounded-full ${c.class} hover:scale-110 transition-transform ring-2 ring-transparent hover:ring-gray-300 dark:hover:ring-white/20`}
                      title={c.name}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-foreground transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>

          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
          <button className="bg-gradient-primary px-6 py-2.5 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity ml-4 shadow-lg shadow-primary/25">
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
           {/* Color Picker Mobile Trigger */}
           <button 
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-foreground transition-colors"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-primary to-secondary" />
            </button>
            {/* Color Picker Drawer for Mobile could be here, or just reuse the logic in the menu. For now adding a simple palette row in mobile menu */}

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-foreground transition-colors"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          <button className="text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 p-6 flex flex-col space-y-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Color Picker */}
            <div className="py-4 border-t border-gray-200 dark:border-white/10">
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">Theme Color</p>
              <div className="flex gap-4">
                 {colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => changeColor(c.value)}
                      className={`w-8 h-8 rounded-full ${c.class} ring-2 ring-transparent hover:ring-gray-300 dark:hover:ring-white/20`}
                    />
                  ))}
              </div>
            </div>

            <div className="flex gap-6 pt-4 border-t border-gray-200 dark:border-white/10">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-foreground dark:hover:text-white"><Github className="w-6 h-6" /></a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-foreground dark:hover:text-white"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-foreground dark:hover:text-white"><Mail className="w-6 h-6" /></a>
            </div>
            <button className="w-full bg-gradient-primary py-3 rounded-xl text-white font-bold mt-2 shadow-lg shadow-primary/25">
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
