import React, { useState, useEffect } from 'react';
import { POPULAR_TOURS } from '../constants';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';
import { ArrowRight } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

export default function PopularTours() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState<typeof POPULAR_TOURS>([]);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setTours(POPULAR_TOURS);
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-16">
          <span className="font-cursive text-4xl md:text-5xl text-accent mb-2 block" aria-hidden="true">Best Place For You</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Most Popular Tour</h2>
        </FadeIn>

        {isLoading ? (
          <div className="py-20">
            <LoadingSpinner text="Loading popular tours..." />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {tours.map((tour, index) => (
              <FadeIn key={tour.id} delay={index * 0.1}>
                <div className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl hover:border-accent/30 transition-all duration-500 group h-full flex flex-col hover:-translate-y-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col relative z-10">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">{tour.name}</h3>
                    
                    <div className="mb-6">
                      <span className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">Rs. {tour.price}</span>
                      <span className="text-sm text-gray-600">/Person</span>
                    </div>
                    
                    <div className="mt-auto">
                      <Link 
                        to="/contact" 
                        aria-label={`Enquire about ${tour.name} tour`}
                        className="w-full py-4 rounded-2xl bg-primary text-white font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:bg-accent transition-all duration-500 shadow-xl shadow-primary/20 hover:shadow-accent/30 active:scale-95 group/btn"
                      >
                        Enquire Now <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
