import React from 'react';
import { PARTNERS } from '../constants';
import FadeIn from './FadeIn';

export default function HotelPartners() {
  const strategicPartner = PARTNERS.find(p => p.isStrategic);
  
  if (!strategicPartner) return null;

  return (
    <section className="py-24 bg-white border-y border-gray-100 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/2 blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <FadeIn direction="right" className="text-center lg:text-left max-w-xl">
            <span className="section-subtitle" aria-hidden="true">Strategic Partnership</span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 leading-tight">
              Empowering <span className="text-accent italic">Extraordinary</span> Journeys Together
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
              Our collaboration with {strategicPartner.name} allows us to provide exclusive access and unparalleled service to our valued travelers.
            </p>
          </FadeIn>
          
          <FadeIn direction="left" className="flex flex-col items-center lg:items-end group">
            <div className="relative p-10 md:p-16 rounded-[3rem] bg-gray-50 border border-gray-100 group-hover:bg-white group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700">
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-accent/30 rounded-tl-2xl" aria-hidden="true" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-accent/30 rounded-br-2xl" aria-hidden="true" />
              
              <img 
                src={strategicPartner.logo} 
                alt={strategicPartner.name}
                className="h-16 md:h-24 object-contain grayscale md:group-hover:grayscale-0 transition-all duration-1000 scale-95 md:group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              
              <div className="mt-6 flex flex-col items-center">
                <div className="h-px w-12 bg-accent/30 mb-4 md:group-hover:w-20 transition-all duration-700" aria-hidden="true" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] md:group-hover:text-primary transition-colors duration-500">
                  Official Partner: {strategicPartner.name}
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
