"use client";

import { motion } from "framer-motion";

export default function Vision() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section className="relative py-32 bg-black-main overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black-main via-black-main/90 to-black-main/70 z-0"></div>
        {/* Gold tint overlay */}
        <div className="absolute inset-0 bg-gold-main/5 mix-blend-color z-0"></div>
      </div>

      {/* Animated glowing lines */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold-main/40 to-transparent"
        />
        <motion.div 
          animate={{ x: ['200%', '-100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-3/4 right-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold-main/40 to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-heading font-bold text-text-white mb-8 leading-tight">
              Building What <br className="hidden md:block"/>
              <span className="text-gradient-gold">Comes Next.</span>
            </motion.h2>
            
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-text-gray font-light mb-16 leading-relaxed max-w-2xl">
              HUSX Group is driven by a simple belief: meaningful progress begins with bold ideas, responsible execution, and the courage to build beyond limits.
            </motion.p>
            
            {/* Visual Blocks */}
            <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="border-l border-gold-main/30 pl-6 py-2 hover:border-gold-main transition-colors duration-300">
                <div className="text-gold-main text-3xl font-heading font-light mb-2">01</div>
                <div className="text-text-white font-medium uppercase tracking-wide text-sm">Innovation</div>
              </div>
              
              <div className="border-l border-gold-main/30 pl-6 py-2 hover:border-gold-main transition-colors duration-300">
                <div className="text-gold-main text-3xl font-heading font-light mb-2">02</div>
                <div className="text-text-white font-medium uppercase tracking-wide text-sm">Long-Term Value</div>
              </div>
              
              <div className="border-l border-gold-main/30 pl-6 py-2 hover:border-gold-main transition-colors duration-300">
                <div className="text-gold-main text-3xl font-heading font-light mb-2">03</div>
                <div className="text-text-white font-medium uppercase tracking-wide text-sm">Global Possibilities</div>
              </div>
            </motion.div>
            
            <motion.a 
              variants={fadeIn}
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-black-main bg-gradient-to-r from-gold-light via-gold-main to-gold-dark rounded-sm hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(217,169,79,0.4)] transition-all duration-300"
            >
              Discover HUSX Group <span className="ml-2">→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
