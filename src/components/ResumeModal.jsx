import React from 'react';
import { X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import resume from '../assets/Mrityunjay-kumar-resume.pdf';

const ResumeModal = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;
  
  return (
    <AnimatePresence>
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-surface w-full max-w-5xl h-[85vh] rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden"
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-white/10 bg-background/50 backdrop-blur-xl">
                    <h3 className="text-xl font-bold text-foreground">Resume Preview</h3>
                    <div className="flex gap-2">
                         <a 
                            href={resume}
                            download="Mrityunjay-kumar-resume.pdf"
                            className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 text-sm font-semibold shadow-lg shadow-primary/25"
                        >
                            <Download className="w-4 h-4" /> 
                            <span className="hidden sm:inline">Download PDF</span>
                        </a>
                        <button 
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                
                {/* Body */}
                <div className="flex-1 bg-gray-100 dark:bg-gray-900 relative">
                    <iframe 
                        src={`${resume}#toolbar=0`} 
                        className="w-full h-full" 
                        title="Resume PDF"
                    />
                </div>
            </motion.div>
        </motion.div>
    </AnimatePresence>
  );
};

export default ResumeModal;
