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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const hash = href.replace('/', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', hash);
        }
      }
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Domestic Tours', href: '/#domestic' },
    { name: 'International Tours', href: '/#international' },
    { name: 'About Us', href: '/about' },
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex justify-center ${
          isScrolled ? 'pt-1 md:pt-2' : 'pt-4 md:pt-6'
        } px-2 md:px-4`}
      >
        <div className={`flex items-center justify-between transition-all duration-300 rounded-full px-4 md:px-6 transform-gpu ${
          isScrolled 
            ? 'bg-white/95 shadow-xl border border-white/30 w-full max-w-6xl py-1.5 md:py-2' 
            : 'bg-transparent w-full max-w-7xl py-2 md:py-3'
        }`}>
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group shrink-0" aria-label="MAHA YatriGo Home">
            <div className="relative flex-shrink-0">
              <Logo isScrolled={!isLightText} className={`transition-all duration-500 group-hover:rotate-[360deg] ${
                isScrolled ? 'h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10' : 'h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14'
              }`} />
              <div className="absolute -inset-1 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col justify-center">
              <span className={`font-serif font-bold tracking-tight leading-none transition-all duration-500 ${
                isScrolled ? 'text-base sm:text-lg md:text-2xl' : 'text-lg sm:text-xl md:text-3xl'
              } ${!isLightText ? 'text-primary' : 'text-white'}`}>
                MAHA <span className="text-accent">YatriGo</span>
              </span>
              <span className={`uppercase tracking-[0.2em] font-bold mt-0.5 transition-all duration-500 ${
                isScrolled ? 'text-[6px] sm:text-[7px] md:text-[8px]' : 'text-[7px] sm:text-[8px] md:text-[10px]'
              } ${!isLightText ? 'text-gray-600' : 'text-gray-300'}`}>
                Journeys of Faith & Wonder
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-2">
                {link.href.startsWith('/#') ? (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-xs uppercase tracking-[0.15em] font-bold transition-all duration-500 hover:text-accent ${
                      !isLightText ? 'text-primary/80' : 'text-white/90'
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
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
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <a 
              href="tel:+919876543210" 
              aria-label="Call Now"
              className="hidden md:flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all duration-500 shadow-lg shadow-primary/10 hover:shadow-accent/20 hover:-translate-y-0.5"
            >
              <Phone size={14} aria-hidden="true" />
              <span>Call Now</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className={`lg:hidden p-2 md:p-2.5 rounded-full transition-all duration-500 flex items-center justify-center ${
                !isLightText ? 'bg-primary/5 text-primary' : 'bg-white/10 text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <motion.div animate={{ rotate: isMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }} className="flex items-center justify-center">
                {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] lg:hidden bg-[#0a0a0a] flex flex-col transform-gpu"
          >
            {/* Background Accents */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-luminosity" />
              <div className="absolute top-[-15%] right-[-15%] w-[80%] h-[80%] bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_70%)] opacity-15" />
              <div className="absolute bottom-[-15%] left-[-15%] w-[80%] h-[80%] bg-[radial-gradient(circle,var(--color-primary)_0%,transparent_70%)] opacity-15" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 relative z-10">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3" aria-label="MAHA YatriGo Home">
                <Logo isScrolled={true} className="h-10 w-10 text-white" />
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-bold text-white leading-none">MAHA <span className="text-accent">YatriGo</span></span>
                  <span className="text-[8px] uppercase tracking-[0.2em] font-bold mt-1 text-gray-400">Journeys of Faith & Wonder</span>
                </div>
              </Link>
              <button 
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
                className="p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 active:scale-95"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center px-8 relative z-10">
              <div className="space-y-8">
                {navLinks.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    {link.href.startsWith('/#') ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`flex items-center gap-4 text-3xl sm:text-4xl font-serif font-bold transition-all duration-300 active:scale-95 origin-left ${active ? 'text-accent' : 'text-white/70 active:text-white'}`}
                      >
                        <span className={`h-[2px] transition-all duration-500 ease-out ${active ? 'w-8 bg-accent' : 'w-0 bg-transparent'}`} />
                        <span>{link.name}</span>
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`flex items-center gap-4 text-3xl sm:text-4xl font-serif font-bold transition-all duration-300 active:scale-95 origin-left ${active ? 'text-accent' : 'text-white/70 active:text-white'}`}
                      >
                        <span className={`h-[2px] transition-all duration-500 ease-out ${active ? 'w-8 bg-accent' : 'w-0 bg-transparent'}`} />
                        <span>{link.name}</span>
                      </Link>
                    )}
                  </motion.div>
                )})}
              </div>
            </div>

            {/* Footer Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="px-8 pb-12 relative z-10"
            >
              <div className="w-full h-px bg-white/10 mb-8" />
              <div className="flex flex-col gap-6">
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center justify-center gap-3 w-full bg-accent hover:bg-orange-600 text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors"
                >
                  <Phone size={18} />
                  Call Us Today
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Follow Us</span>
                  <div className="flex gap-6">
                    {['Instagram', 'Facebook', 'WhatsApp'].map((social) => (
                      <span key={social} className="text-xs font-bold text-white/60 hover:text-accent cursor-pointer transition-colors">{social}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
