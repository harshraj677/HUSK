"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is HUSX Group?",
    answer: "HUSX Group is a diversified, future-focused organization that builds and supports businesses, products, and solutions designed to create long-term impact."
  },
  {
    question: "What are HUSX Group’s core values?",
    answer: "Our core values are Innovation, Sustainability, Collaboration, and Trust."
  },
  {
    question: "Does HUSX Group work with partners?",
    answer: "Yes. We believe collaboration and strong partnerships are essential to creating long-term value and building a better future."
  },
  {
    question: "What does HUSX Group focus on?",
    answer: "HUSX Group focuses on building and supporting innovative businesses, products, and solutions with a long-term perspective."
  },
  {
    question: "Where is HUSX Group based?",
    answer: "HUSX Group is based in Karnataka, India."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-black-light relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-gold-main tracking-[0.2em] text-xs uppercase font-semibold mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-white mb-6">
            Frequently Asked Questions.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`border rounded-sm overflow-hidden transition-colors duration-300 ${
                  isOpen ? "border-gold-main/50 bg-black-main/50" : "border-white/10 bg-black-main hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base md:text-lg font-medium pr-8 transition-colors duration-300 ${isOpen ? "text-gold-main" : "text-text-white"}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full border transition-colors duration-300 ${isOpen ? "border-gold-main text-gold-main" : "border-white/20 text-white/50"}`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-text-gray font-light text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
