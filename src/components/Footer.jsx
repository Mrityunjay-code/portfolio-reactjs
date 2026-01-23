import React from 'react';
import { Instagram, Linkedin, Twitter, Mail, Phone, MessageCircle, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-gray-200 dark:border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="text-3xl font-bold font-display tracking-tighter text-foreground mb-6 block">
              Mrityunjay<span className="text-secondary">.dev</span>
            </a>
            <p className="text-muted max-w-sm mb-8">
              We help founders and creators build 7-figure personal brands through strategic content.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Github, href: "https://github.com/mrityunjay-code", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/mrityunjay-kumar-/", label: "LinkedIn" },
              
              ].map(({ Icon, href, label }, i) => (
                <a key={i} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface border border-gray-200 dark:border-white/10 flex items-center justify-center text-muted hover:text-primary hover:bg-primary/20 hover:border-primary/50 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Company</h4>
            <ul className="space-y-4 text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
              {/* <li><a href="#careers" className="hover:text-primary transition-colors flex items-center gap-2">Careers <span className="bg-green-500/20 text-green-400 text-[10px] px-1.5 py-0.5 rounded">Hiring</span></a></li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Contact</h4>
            <ul className="space-y-4 text-muted">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                kmrityunjay360@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                +91 9135082891
              </li>
            </ul>
         
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">© 2026 Mrityunjay kumar. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-muted">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
