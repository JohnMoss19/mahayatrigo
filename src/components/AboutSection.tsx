import React from 'react';
import { Link } from 'react-router-dom';
import { TRUST_STATS } from '../constants';
import FadeIn from './FadeIn';
import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-transparent overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Left: Artistic Image Composition */}
          <div className="lg:w-[32%] relative">
            <div className="relative z-10">
              <FadeIn direction="right" className="rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=75&fm=webp" 
                  alt="Taj Mahal" 
                  className="w-full max-w-full aspect-[4/5] object-cover md:hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </FadeIn>
              
              <FadeIn direction="up" delay={0.4} className="absolute -bottom-8 -right-6 w-3/5 rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)] border-8 border-white z-20">
                <img 
                  src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=75&fm=webp" 
                  alt="Goa Beach" 
                  className="w-full max-w-full aspect-square object-cover md:hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </FadeIn>

              {/* Floating Badge */}
              <FadeIn delay={0.8} className="absolute -top-6 -left-6 z-30" aria-label="12 plus years of excellence">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-accent flex flex-col items-center justify-center text-white shadow-2xl shadow-accent/40 animate-pulse">
                  <span className="text-lg md:text-xl font-serif font-bold">12+</span>
                  <span className="text-[6px] md:text-[7px] uppercase tracking-widest font-bold">Years of</span>
                  <span className="text-[6px] md:text-[7px] uppercase tracking-widest font-bold">Excellence</span>
                </div>
              </FadeIn>
            </div>
            
            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 -left-20 w-64 h-64 bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_70%)] opacity-20 -z-10" />
            <div className="absolute -bottom-20 right-0 w-80 h-80 bg-[radial-gradient(circle,var(--color-primary)_0%,transparent_70%)] opacity-20 -z-10" />
          </div>

          {/* Right: Content */}
          <div className="lg:w-[64%]">
            <FadeIn direction="left">
              <span className="section-subtitle">Our Story</span>
              <h2 className="section-title">
                Your Gateway to <span className="text-accent italic">Extraordinary</span> Journeys
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg mb-10">
                <p>
                  At <span className="text-primary font-bold">MAHA YatriGo</span>, we believe that travel is not just about visiting new places, but about discovering new perspectives. We specialize in crafting bespoke journeys that blend luxury, culture, and adventure.
                </p>
                <p className="text-base">
                  In strategic partnership with <strong className="text-primary">MAP TRIP</strong>, we provide a seamless bridge between traditional heritage and modern comfort, ensuring every moment of your trip resonates with your soul.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  'Bespoke Itineraries',
                  'Curated Local Experiences',
                  'Elite Concierge Support',
                  'Exclusive Heritage Access'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                      <CheckCircle2 size={20} aria-hidden="true" />
                    </div>
                    <span className="text-gray-800 font-bold text-sm uppercase tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-10">
                <Link to="/about" className="btn-primary group" aria-label="Discover our vision about MAHA YatriGo">
                  Discover Our Vision
                  <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </Link>
                
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                    <Phone size={24} aria-hidden="true" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Expert Advice</span>
                    <a href="tel:+919876543210" aria-label="Call for expert travel advice" className="text-lg font-bold text-primary hover:text-accent transition-colors">+91 98765 43210</a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats Grid - Refined */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16 md:gap-16 mt-24 md:mt-56">
          {TRUST_STATS.map((stat, index) => (
            <FadeIn
              key={stat.label}
              delay={index * 0.1}
              className="relative group"
            >
                <div className="flex flex-col items-center text-center">
                <div className="text-7xl md:text-[11rem] font-serif font-bold text-primary/10 md:group-hover:text-accent/20 transition-colors duration-700 absolute -top-6 md:-top-20 left-1/2 -translate-x-1/2 select-none">
                  0{index + 1}
                </div>
                <div className="relative z-10 pt-8 md:pt-10">
                  <div className="text-5xl sm:text-6xl md:text-8xl font-serif font-bold text-primary mb-3 md:mb-5 flex items-baseline justify-center gap-1">
                    {stat.value}
                    <span className="text-accent text-3xl md:text-5xl">{stat.suffix}</span>
                  </div>
                  <div className="h-1.5 md:h-2.5 w-16 md:w-24 bg-accent/30 rounded-full mb-6 md:mb-10 mx-auto md:group-hover:w-40 transition-all duration-700" />
                  <div className="text-xs sm:text-sm md:text-base uppercase tracking-[0.15em] md:tracking-[0.4em] font-bold text-gray-400 px-2">
                    {stat.label}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
