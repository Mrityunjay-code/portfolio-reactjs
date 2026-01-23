import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, User, Globe, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-surface/20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Left Side: Animated Visuals */}
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 p-12 flex flex-col items-center justify-center min-h-[400px] lg:min-h-full overflow-hidden">
                {/* Decorative Circles */}
                <div className="absolute inset-0">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
                  />
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"
                  />
                </div>

                {/* Animated Icons Container */}
                <div className="relative z-10">
                  {/* Central Main Icon */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 bg-surface rounded-2xl shadow-xl flex items-center justify-center border border-white/20 relative"
                  >
                    <Mail className="w-12 h-12 text-primary" />
                    
                    {/* Orbiting Elements */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 w-[200%] h-[200%] -top-[50%] -left-[50%] border border-dashed border-primary/20 rounded-full pointer-events-none"
                    />

                    {/* Satellite Icons */}
                    <motion.div
                      animate={{ 
                        x: [60, 80, 60],
                        y: [-60, -80, -60],
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-8 -right-8 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center"
                    >
                      <MessageSquare className="w-6 h-6 text-secondary" />
                    </motion.div>

                    <motion.div
                      animate={{ 
                        x: [-60, -80, -60],
                        y: [40, 60, 40],
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="absolute -bottom-4 -left-12 w-10 h-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center"
                    >
                      <User className="w-5 h-5 text-accent" />
                    </motion.div>
                    
                    <motion.div
                      animate={{ 
                        x: [50, 70, 50],
                        y: [50, 70, 50],
                      }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute -bottom-8 -right-4 w-10 h-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center"
                    >
                      <Globe className="w-5 h-5 text-green-500" />
                    </motion.div>
                  </motion.div>
                </div>

                <div className="mt-12 text-center relative z-10">
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-primary mb-2">Let's Connect</h3>
                  <p className="text-muted max-w-xs mx-auto">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                  </p>
                </div>
              </div>

              {/* Right Side: Contact Form */}
              <div className="p-8 md:p-12 lg:p-16 bg-surface/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-5 h-5 text-muted hover:text-primary transition-colors" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted/50 text-foreground"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 w-5 h-5 text-muted hover:text-primary transition-colors" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted/50 text-foreground"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-muted hover:text-primary transition-colors" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-muted/50 text-foreground"
                        placeholder="How can I help you?"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-primary text-white font-bold text-lg shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-center font-medium"
                    >
                      Message sent successfully!
                    </motion.div>
                  )}
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
