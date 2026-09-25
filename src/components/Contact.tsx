"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }
    
    setStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", company: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const inputClasses = "w-full bg-black-main/50 border border-white/10 rounded-sm px-4 py-3 text-text-white placeholder-white/30 focus:outline-none focus:border-gold-main focus:ring-1 focus:ring-gold-main/50 transition-all duration-300 backdrop-blur-sm";

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-black-main overflow-hidden border-t border-white/5 border-b">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-screen"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black-main via-black-main/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black-main via-transparent to-black-main"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <span className="text-gold-main tracking-[0.2em] text-xs uppercase font-semibold mb-4 block">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-white mb-6 leading-tight">
              Let’s Build the <span className="text-gradient-gold">Future</span> Together.
            </h2>
            <p className="text-lg text-text-gray font-light mb-12 max-w-md leading-relaxed">
              Have an idea, partnership opportunity, or business conversation in mind? Connect with HUSX Group.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black-main group-hover:border-gold-main/50 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-gold-main" />
                </div>
                <div>
                  <h3 className="text-text-white font-medium text-sm uppercase tracking-wider mb-1">Email</h3>
                  <a href="mailto:info@husxgroup.com" className="text-text-gray hover:text-gold-main transition-colors duration-300 text-lg">
                    info@husxgroup.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black-main group-hover:border-gold-main/50 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-gold-main" />
                </div>
                <div>
                  <h3 className="text-text-white font-medium text-sm uppercase tracking-wider mb-1">Location</h3>
                  <p className="text-text-gray text-lg">
                    Karnataka, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-black-light/60 backdrop-blur-md border border-white/10 rounded-sm p-8 md:p-10 relative overflow-hidden shadow-2xl">
              {/* Subtle top border gradient */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-main to-transparent"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-text-gray uppercase tracking-widest mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formState.name}
                      onChange={handleChange}
                      className={inputClasses}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-text-gray uppercase tracking-widest mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formState.email}
                      onChange={handleChange}
                      className={inputClasses}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-text-gray uppercase tracking-widest mb-2">Company / Organization</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formState.company}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-text-gray uppercase tracking-widest mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formState.subject}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-text-gray uppercase tracking-widest mb-2">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                    required
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-black-main bg-gradient-to-r from-gold-light via-gold-main to-gold-dark rounded-sm hover:shadow-[0_0_20px_rgba(217,169,79,0.3)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      {status === "submitting" ? "Sending..." : "Send Message"} 
                      {status !== "submitting" && <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>}
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                  </button>
                </div>
                
                {/* Form Status Messages */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-green-400 bg-green-400/10 border border-green-400/20 p-3 rounded-sm mt-4 text-center"
                    >
                      Thank you. Your message has been received.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 p-3 rounded-sm mt-4 text-center"
                    >
                      Please check the required fields and try again.
                    </motion.div>
                  )}
                </AnimatePresence>
                
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
