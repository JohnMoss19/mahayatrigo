import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '../constants';
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax transforms
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(smoothProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next, isAutoPlaying]);

  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image with Slow Zoom and Parallax */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${HERO_SLIDES[current].image})`,
              y: backgroundY
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
          >
            {/* Modern, subtle overlays */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Content Container - Centered Modern Layout with Parallax */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center text-white z-10 pt-20 landscape:pt-12"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl flex flex-col items-center"
          >
            <motion.span 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="inline-block px-6 py-2 rounded-full bg-black/40 backdrop-blur-md border border-accent/30 text-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 md:mb-8"
            >
              Experience the Extraordinary
            </motion.span>

            <motion.h1 
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-[1.1] tracking-tight text-white"
              style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", serif' }}
            >
              {HERO_SLIDES[current].title}
            </motion.h1>

            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
              className="text-base md:text-xl font-light mb-10 text-gray-200 max-w-2xl leading-relaxed"
            >
              {HERO_SLIDES[current].subtitle}
            </motion.p>

            <motion.div 
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
              className="flex flex-col sm:flex-row landscape:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-8 sm:px-0 mt-2"
            >
              <Link 
                to="/contact" 
                className="group relative px-6 py-3 md:px-7 md:py-3.5 bg-accent text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs overflow-hidden transition-all duration-500 hover:bg-orange-600 hover:shadow-lg hover:shadow-accent/40 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>

              <Link 
                to="/about" 
                className="px-6 py-3 md:px-7 md:py-3.5 bg-white/10 border border-white/20 text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 transition-all duration-500 hover:-translate-y-1 active:scale-95 flex items-center justify-center backdrop-blur-md w-full sm:w-auto"
              >
                Discover More
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Bottom Controls Bar */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 landscape:p-4 z-20 flex flex-col md:flex-row landscape:flex-row justify-between items-center gap-8 md:gap-6 landscape:gap-4">
        
        {/* Slide Indicators */}
        <div className="flex items-center gap-3 order-2 md:order-1 landscape:order-1 w-full md:w-auto justify-center md:justify-start">
          <span className="text-xs font-bold text-white/80 tracking-widest">
            {String(current + 1).padStart(2, '0')}
          </span>
          <div className="flex gap-1.5">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i);
                  setIsAutoPlaying(false);
                }}
                className={`h-1 rounded-full transition-all duration-700 ${
                  current === i ? 'bg-white/80 w-8' : 'bg-white/10 w-2 hover:bg-white/30'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <span className="text-xs font-bold text-white/30 tracking-widest">
            {String(HERO_SLIDES.length).padStart(2, '0')}
          </span>
        </div>

        {/* Scroll Arrow - Slow Bounce */}
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="order-1 md:order-2 landscape:hidden flex flex-col items-center gap-2 cursor-pointer hover:text-accent transition-colors"
          onClick={handleScrollDown}
          aria-label="Scroll down"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-white/50">Scroll</span>
          <ChevronDown size={24} className="text-white/50" />
        </motion.div>

        {/* Prev/Next Controls */}
        <div className="flex gap-2 order-3 w-full md:w-auto justify-center md:justify-end hidden md:flex">
          <button 
            onClick={() => { prev(); setIsAutoPlaying(false); }}
            className="p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white/50 hover:bg-black/40 hover:text-white transition-all duration-500 active:scale-90"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={() => { next(); setIsAutoPlaying(false); }}
            className="p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white/50 hover:bg-black/40 hover:text-white transition-all duration-500 active:scale-90"
            aria-label="Next Slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
