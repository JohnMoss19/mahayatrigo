import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface HeaderProps {
  onAuthClick?: () => void;
}

export default function Header({ onAuthClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Domestic Tours', href: '/#domestic' },
    { name: 'International Tours', href: '/#international' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) return false;
    return location.pathname === path;
  };

  const isHomePage = location.pathname === '/';
  const isLightText = !isScrolled && isHomePage;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-white/95 md:bg-white/80 md:backdrop-blur-xl shadow-sm py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="MAHA YatriGo Home">
            <div className="relative">
              <Logo isScrolled={!isLightText} className="h-10 w-10 md:h-12 md:w-12 transition-transform duration-500 group-hover:rotate-[360deg]" />
              <div className="absolute -inset-1 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-serif font-bold tracking-tight leading-none transition-colors duration-500 ${!isLightText ? 'text-primary' : 'text-white'}`}>
                MAHA <span className="text-accent">YatriGo</span>
              </span>
              <span className={`text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold mt-1 transition-colors duration-500 ${!isLightText ? 'text-gray-600' : 'text-gray-300'}`}>
                Journeys of Faith & Wonder
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-2">
                {link.href.startsWith('/#') ? (
                  <a
                    href={link.href}
                    className={`text-xs uppercase tracking-[0.15em] font-bold transition-all duration-500 hover:text-accent ${
                      !isLightText ? 'text-primary/80' : 'text-white/90'
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={`text-xs uppercase tracking-[0.15em] font-bold transition-all duration-500 hover:text-accent ${
                      isActive(link.href) ? 'text-accent' : !isLightText ? 'text-primary/80' : 'text-white/90'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-500 ${
                  isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* <button 
              onClick={onAuthClick}
              aria-label="Sign In"
              className={`hidden sm:block text-xs uppercase tracking-widest font-bold transition-colors hover:text-accent ${
                !isLightText ? 'text-primary' : 'text-white'
              }`}
            >
              Sign In
            </button> */}
            
            <a 
              href="tel:+919876543210" 
              aria-label="Call Now"
              className="hidden md:flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-500 shadow-lg shadow-primary/10 hover:shadow-accent/20 hover:-translate-y-0.5"
            >
              <Phone size={14} aria-hidden="true" />
              <span>Call Now</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className={`lg:hidden p-2.5 rounded-full transition-all duration-500 ${
                !isLightText ? 'bg-primary/5 text-primary' : 'bg-white/10 text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-primary/20 backdrop-blur-md z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-[70] flex flex-col lg:hidden"
            >
              <div className="p-8 flex items-center justify-between border-b border-gray-50">
                <Link to="/" className="flex items-center gap-2" aria-label="MAHA YatriGo Home">
                  <Logo isScrolled={true} className="h-8 w-8" />
                  <span className="text-xl font-serif font-bold text-primary">MAHA <span className="text-accent">YatriGo</span></span>
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close Menu"
                  className="p-2 text-gray-400 hover:text-primary transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-8">
                <div className="space-y-6">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        to={link.href}
                        aria-current={isActive(link.href) ? 'page' : undefined}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-2xl font-serif font-bold transition-colors block ${
                          isActive(link.href) ? 'text-accent' : 'text-primary hover:text-accent'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-8 border-t border-gray-50 space-y-6"
                >
                  {/* <button 
                    onClick={() => { onAuthClick?.(); setIsMenuOpen(false); }}
                    aria-label="Account Sign In"
                    className="flex items-center justify-between w-full text-lg font-bold text-primary group"
                  >
                    Account Sign In
                    <ArrowRight size={20} aria-hidden="true" className="text-accent transition-transform group-hover:translate-x-1" />
                  </button> */}
                  
                  <a 
                    href="tel:+919876543210" 
                    aria-label="Call Us Today"
                    className="flex items-center justify-center gap-3 bg-accent text-white py-4 rounded-2xl font-bold shadow-xl shadow-accent/20 active:scale-95 transition-transform"
                  >
                    <Phone size={20} aria-hidden="true" />
                    Call Us Today
                  </a>
                </motion.div>
              </div>

              <div className="p-8 bg-gray-50/50">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-4">Follow Our Journey</p>
                <div className="flex gap-4">
                  {['Instagram', 'Facebook', 'WhatsApp'].map((social) => (
                    <span key={social} className="text-xs font-bold text-primary/60 hover:text-accent cursor-pointer transition-colors">{social}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
