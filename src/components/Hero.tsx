import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '../constants';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 8000);
    
    // Pre-fetch next image
    const nextIndex = (current + 1) % HERO_SLIDES.length;
    const img = new Image();
    img.src = HERO_SLIDES[nextIndex].image;
    
    return () => clearInterval(timer);
  }, [next, isAutoPlaying, current]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050505]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image with Zoom Effect */}
          <motion.div 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${HERO_SLIDES[current].image})`, willChange: 'transform' }}
          >
            {/* Layered Overlays for Depth */}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          </motion.div>
          
          {/* Content Container */}
          <div className="relative h-full container mx-auto px-6 md:px-12 flex flex-col justify-center items-start text-white z-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-md border border-accent/30 text-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6">
                  Experience the Extraordinary
                </span>
              </motion.div>

              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
                className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold mb-8 leading-[0.9] tracking-tight"
              >
                {HERO_SLIDES[current].title.split(' ').map((word, i) => (
                  <span key={i} className="inline-block mr-4 last:mr-0">
                    {word}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                className="text-lg md:text-2xl font-light mb-12 text-gray-200/80 max-w-2xl leading-relaxed"
              >
                {HERO_SLIDES[current].subtitle}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Link 
                  to="/contact" 
                  className="group relative px-10 py-4 bg-accent text-white rounded-full font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:shadow-2xl hover:shadow-accent/40 active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start Your Journey
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Link>

                <Link 
                  to="/about" 
                  className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/20 transition-all active:scale-95"
                >
                  Discover More
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 right-12 flex items-center gap-6 z-20">
        <div className="flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrent(i);
                setIsAutoPlaying(false);
              }}
              className={`h-1 rounded-full transition-all duration-700 ${
                current === i ? 'bg-accent w-12' : 'bg-white/20 w-4 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        
        <div className="flex gap-2 ml-4">
          <button 
            onClick={() => { prev(); setIsAutoPlaying(false); }}
            className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-accent hover:border-accent transition-all active:scale-90"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => { next(); setIsAutoPlaying(false); }}
            className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-accent hover:border-accent transition-all active:scale-90"
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 opacity-50"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold text-white">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
