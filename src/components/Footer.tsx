export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-main pt-24 pb-8 relative overflow-hidden border-t border-white/5">
      {/* Subtle gold flowing wave graphic at the bottom of footer */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] opacity-20 pointer-events-none z-0">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gold-main"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 mb-20">
          
          {/* Left: Brand */}
          <div className="flex-shrink-0">
            <div className="flex items-center text-4xl font-heading font-bold mb-2">
              <span className="text-text-white">HUSX</span>
              <span className="text-gold-main ml-2 text-sm uppercase tracking-widest mt-2">Group</span>
            </div>
            <div className="h-[1px] w-12 bg-gold-main mt-4"></div>
          </div>
          
          {/* Middle: Tagline & Values */}
          <div className="flex-grow flex flex-col items-start lg:items-center text-left lg:text-center w-full lg:w-auto mt-8 lg:mt-0">
            <h3 className="text-text-white font-heading text-2xl mb-3 tracking-wide">
              Build Beyond <span className="text-gradient-gold">Limits.</span>
            </h3>
            <div className="text-text-gray font-light text-sm tracking-wider uppercase flex flex-col sm:flex-row items-start lg:items-center gap-2 sm:gap-0">
              <span>Innovative Businesses</span> 
              <span className="hidden sm:inline mx-3 text-gold-main/50">|</span> 
              <span>Meaningful Partnerships</span> 
              <span className="hidden sm:inline mx-3 text-gold-main/50">|</span> 
              <span>A Better Tomorrow</span>
            </div>
          </div>
          
          {/* Right: Connect (Socials) */}
          <div className="flex items-center gap-5 flex-shrink-0">
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-gray hover:text-gold-main hover:border-gold-main/50 hover:bg-gold-main/5 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-gray hover:text-gold-main hover:border-gold-main/50 hover:bg-gold-main/5 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" aria-label="X (Twitter)" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-gray hover:text-gold-main hover:border-gold-main/50 hover:bg-gold-main/5 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-gray hover:text-gold-main hover:border-gold-main/50 hover:bg-gold-main/5 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
          
        </div>
        
        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <p className="text-text-gray/50 text-xs font-light text-center md:text-left">
            © {currentYear} HUSX Group. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 sm:gap-8">
            <a href="#" className="text-text-gray/60 hover:text-gold-main transition-colors text-xs uppercase tracking-widest font-medium">Privacy Policy</a>
            <a href="#" className="text-text-gray/60 hover:text-gold-main transition-colors text-xs uppercase tracking-widest font-medium">Terms of Use</a>
            <a href="#contact" className="text-text-gray/60 hover:text-gold-main transition-colors text-xs uppercase tracking-widest font-medium">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
