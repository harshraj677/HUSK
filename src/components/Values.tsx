"use client";

import { motion } from "framer-motion";
import { Lightbulb, Leaf, Users, ShieldCheck } from "lucide-react";

export default function Values() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const values = [
    {
      id: "01",
      title: "Innovation",
      description: "We challenge conventional thinking and turn bold ideas into innovative products, businesses, and solutions for the future.",
      icon: <Lightbulb className="w-8 h-8 text-gold-main" strokeWidth={1.5} />
    },
    {
      id: "02",
      title: "Sustainability",
      description: "We grow responsibly while caring for people, society, and the world around us.",
      icon: <Leaf className="w-8 h-8 text-gold-main" strokeWidth={1.5} />
    },
    {
      id: "03",
      title: "Collaboration",
      description: "We believe in the power of teamwork and in building strong, lasting partnerships.",
      icon: <Users className="w-8 h-8 text-gold-main" strokeWidth={1.5} />
    },
    {
      id: "04",
      title: "Trust",
      description: "We earn trust through transparency, commitment, integrity, and a focus on long-term value.",
      icon: <ShieldCheck className="w-8 h-8 text-gold-main" strokeWidth={1.5} />
    }
  ];

  return (
    <section id="values" className="py-24 md:py-32 bg-black-light relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-gold-main tracking-[0.2em] text-xs uppercase font-semibold mb-4 block">
            Our Values
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-white mb-6">
            What We Stand For.
          </h2>
          <p className="text-lg text-text-gray font-light">
            Our values guide everything we do — from the way we build businesses to the impact we create in the world.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-black-main border border-white/5 rounded-sm p-8 group hover:-translate-y-2 transition-all duration-300 hover:border-gold-main/50 hover:shadow-[0_0_25px_rgba(217,169,79,0.15)] relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-gold-main/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8 group-hover:border-gold-main/30 group-hover:bg-gold-main/5 transition-colors duration-300">
                  {value.icon}
                </div>
                
                <h3 className="text-xl font-heading font-bold text-text-white mb-4 group-hover:text-gold-main transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-sm text-text-gray leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
              
              {/* Top border highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-main/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
