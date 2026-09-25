"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black-main/80 via-black-main/70 to-black-main z-0"></div>
      </div>

      {/* Subtle animated gold lines */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: '100vh', opacity: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute left-[20%] w-[1px] h-32 bg-gradient-to-b from-transparent via-gold-main to-transparent"
        />
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: '100vh', opacity: [0, 1, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute left-[80%] w-[1px] h-48 bg-gradient-to-b from-transparent via-gold-main to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-start w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block text-gold-main font-semibold tracking-[0.2em] text-xs uppercase mb-6 border border-gold-main/30 px-3 py-1 rounded-sm">
            Building Beyond Limits
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-text-white leading-tight mb-4 drop-shadow-lg">
            HUSX <span className="text-gradient-gold">GROUP</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-heading text-text-warm leading-snug mb-6">
            Building the Future <br className="hidden md:block"/>
            <span className="italic text-text-muted">Through Innovation</span>
          </h2>
          
          <p className="text-base md:text-lg text-text-gray max-w-xl mb-10 leading-relaxed font-light">
            HUSX embodies a vision, ambition, and commitment to building beyond limits—transforming bold ideas into innovative businesses, products, and solutions for the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-black-main bg-gradient-to-r from-gold-light via-gold-main to-gold-dark rounded-sm hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(217,169,79,0.4)] transition-all duration-300"
            >
              Learn More About Us <span className="ml-2">→</span>
            </a>
            <a 
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-text-warm border border-white/20 hover:border-gold-main hover:text-gold-main rounded-sm hover:-translate-y-1 transition-all duration-300 bg-black-main/40 backdrop-blur-sm"
            >
              Get in Touch <span className="ml-2">→</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-text-gray text-[10px] uppercase tracking-widest font-semibold">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold-main"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
