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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand & Values */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <div className="mb-6">
              <img src="/husk.jpg" alt="HUSX Group" className="h-14 md:h-16 w-auto object-contain" />
            </div>
            <h3 className="text-text-white font-heading text-2xl mb-3 tracking-wide">
              Build Beyond <span className="text-gradient-gold">Limits.</span>
            </h3>
            <div className="text-text-gray font-light text-sm tracking-wider uppercase flex flex-col sm:flex-row flex-wrap items-start gap-2 sm:gap-0 mt-2">
              <span>Innovative Businesses</span> 
              <span className="hidden sm:inline mx-3 text-gold-main/50">•</span> 
              <span>Meaningful Partnerships</span> 
              <span className="hidden sm:inline mx-3 text-gold-main/50">•</span> 
              <span>A Better Tomorrow</span>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-text-white font-medium text-sm uppercase tracking-wider mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-gray hover:text-gold-main transition-colors text-sm">Company</a></li>
              <li><a href="#about" className="text-text-gray hover:text-gold-main transition-colors text-sm">About</a></li>
              <li><a href="#values" className="text-text-gray hover:text-gold-main transition-colors text-sm">Our Values</a></li>
              <li><a href="#faq" className="text-text-gray hover:text-gold-main transition-colors text-sm">FAQ</a></li>
              <li><a href="#contact" className="text-text-gray hover:text-gold-main transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Connect (Socials) */}
          <div>
            <h4 className="text-text-white font-medium text-sm uppercase tracking-wider mb-6">Connect</h4>
            <ul className="space-y-3">
              <li><a href="mailto:husxgroup@gmail.com" className="text-text-gray hover:text-gold-main transition-colors text-sm">Email</a></li>
              <li><a href="https://www.instagram.com/husxgroup?stkn=MWdqZ3dpZnlwcjF0aA==" target="_blank" rel="noopener noreferrer" className="text-text-gray hover:text-gold-main transition-colors text-sm">Instagram</a></li>
              <li><a href="https://www.youtube.com/@husxgroup" target="_blank" rel="noopener noreferrer" className="text-text-gray hover:text-gold-main transition-colors text-sm">YouTube</a></li>
            </ul>
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
