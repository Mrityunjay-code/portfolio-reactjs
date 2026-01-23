import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is your tech stack?",
    answer: "I specialize in the MERN stack (MongoDB, Express, React, Node.js) and Next.js. For styling, I prefer Tailwind CSS. I'm also comfortable with PostgreSQL, TypeScript, and AWS."
  },
  {
    question: "Do you design efficiently?",
    answer: "While I am primarily a developer, I have a strong grasp of UI/UX principles and can create clean, modern designs using tools like Figma before implementation."
  },
  {
    question: "Are you available for full-time roles?",
    answer: "Yes, I am currently open to full-time opportunities (remote or hybrid) as well as freelance projects."
  },
  {
    question: "What is your typical turnaround time?",
    answer: "It depends on the scope. A simple landing page can take 3-5 days, while a full-stack application might take 4-8 weeks. We will define a timeline before starting."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-surface/20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-surface border transition-all duration-300 rounded-2xl overflow-hidden ${openIndex === index ? 'border-primary/50 bg-surface/80' : 'border-white/5 hover:border-white/10'}`}
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              >
                <span className="font-bold text-lg md:text-xl text-gray-400">{faq.question}</span>
                {openIndex === index ? 
                  <Minus className="text-primary w-6 h-6" /> : 
                  <Plus className="text-gray-400 w-6 h-6" />
                }
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="p-6 pt-0 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
