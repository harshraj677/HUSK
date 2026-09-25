"use client";

import { motion } from "framer-motion";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-black-main relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-main/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col items-start z-10"
          >
            <motion.span variants={fadeIn} className="text-gold-main tracking-[0.2em] text-xs uppercase font-semibold mb-4 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gold-main"></span>
              About
            </motion.span>
            
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-heading font-bold text-text-white mb-8 leading-tight">
              About <span className="text-gradient-gold">HUSX Group</span>
            </motion.h2>
            
            <motion.p variants={fadeIn} className="text-lg text-text-gray mb-6 font-light leading-relaxed">
              HUSX Group is a diversified, future-focused organization that builds and supports businesses, products, and solutions designed to create long-term impact.
            </motion.p>
            <motion.p variants={fadeIn} className="text-lg text-text-gray mb-12 font-light leading-relaxed">
              Driven by innovation and responsible growth, HUSX Group focuses on creating meaningful solutions, building strong partnerships, and developing opportunities for long-term value.
            </motion.p>
            
            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full mb-12 border-t border-white/10 pt-10">
              <div>
                <h3 className="text-text-white font-medium text-sm uppercase tracking-wider mb-2">Innovation Driven</h3>
                <p className="text-text-gray text-sm leading-relaxed">Turning bold ideas into meaningful solutions.</p>
              </div>
              <div>
                <h3 className="text-text-white font-medium text-sm uppercase tracking-wider mb-2">Future Focused</h3>
                <p className="text-text-gray text-sm leading-relaxed">Building for emerging opportunities and changing markets.</p>
              </div>
              <div>
                <h3 className="text-text-white font-medium text-sm uppercase tracking-wider mb-2">Long-Term Impact</h3>
                <p className="text-text-gray text-sm leading-relaxed">Creating sustainable value through responsible growth.</p>
              </div>
            </motion.div>
            
            <motion.a 
              variants={fadeIn}
              href="#values"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-gold-main border border-gold-main hover:bg-gold-main hover:text-black-main rounded-sm hover:-translate-y-1 transition-all duration-300 gold-glow"
            >
              Learn More About Us <span className="ml-2">→</span>
            </motion.a>
          </motion.div>
          
          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[600px] w-full rounded-sm overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black-main via-transparent to-transparent z-10"></div>
            <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none rounded-sm transition-colors duration-500 group-hover:border-gold-main/30"></div>
            
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")',
              }}
            />
            
            {/* Elegant glass overlay on the image corner */}
            <div className="absolute bottom-6 right-6 z-20 bg-black-main/40 backdrop-blur-md border border-white/10 p-4 rounded-sm">
              <div className="text-3xl font-heading font-bold text-text-white">Est.</div>
              <div className="text-gold-main text-sm font-medium tracking-widest uppercase">Global Vision</div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
