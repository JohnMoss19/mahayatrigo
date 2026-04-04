import React, { useState, useEffect } from 'react';
import { EXOTIC_DESTINATIONS } from '../constants';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'motion/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function DestinationsGrid() {
  const [isLoading, setIsLoading] = useState(true);
  const [destinations, setDestinations] = useState<typeof EXOTIC_DESTINATIONS>([]);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      // For a truly seamless loop with Swiper, especially with coverflow and fractional slides,
      // we need more slides than the view can show. We'll duplicate the array to ensure smoothness.
      setDestinations([...EXOTIC_DESTINATIONS, ...EXOTIC_DESTINATIONS]);
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-16">
          <span className="font-cursive text-4xl md:text-5xl text-accent mb-2 block" aria-hidden="true">Discover the World</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Exotic Destinations</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Explore our handpicked selection of breathtaking locations for your next unforgettable journey.</p>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-6 rounded-full" aria-hidden="true" />
        </FadeIn>
      </div>

      <div className="relative z-10 w-full">
        {isLoading ? (
          <div className="container mx-auto px-4 py-20">
            <LoadingSpinner text="Loading exotic destinations..." />
          </div>
        ) : (
          <div className="relative group/swiper w-full">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              spaceBetween={0}
              slidesPerView={1.2}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              coverflowEffect={{
                rotate: 35,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              pagination={{ 
                clickable: true, 
                el: '.swiper-pagination-custom',
                renderBullet: (index, className) => {
                  return `<span class="${className} !w-3 !h-3 !bg-primary/20 hover:!bg-accent/50 transition-all duration-300"></span>`;
                }
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2.5,
                },
                1280: {
                  slidesPerView: 3,
                },
                1536: {
                  slidesPerView: 4,
                }
              }}
              className="pb-24 pt-24 !overflow-visible"
            >
              {destinations.map((dest, index) => (
                <SwiperSlide key={`${dest.id}-${index}`} className="h-auto px-4">
                  {({ isActive }) => (
                    <div 
                      className={`h-full transition-all duration-700 transform-gpu ${isActive ? 'scale-110 z-20' : 'scale-90 blur-[6px]'}`}
                    >
                      <div className="relative h-[400px] sm:h-[450px] md:h-[550px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group/card border border-white/20">
                        {/* Background Image */}
                        <img 
                          src={dest.image} 
                          alt={dest.name} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        
                        {/* Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" />
                        
                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                          <div className="translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-2 drop-shadow-lg">{dest.name}</h3>
                            
                            <div className="flex items-center gap-2 mb-6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100">
                              <span className="text-sm font-light text-white/80 uppercase tracking-widest">Starting from</span>
                              <span className="text-2xl font-bold text-accent">Rs. {dest.price}</span>
                            </div>

                            <Link 
                              to="/contact" 
                              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-bold uppercase tracking-widest text-xs hover:bg-accent hover:border-accent transition-all duration-300 group/btn"
                            >
                              Enquire Now 
                              <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                            </Link>
                          </div>
                        </div>

                        {/* Premium Badge */}
                        <div className="absolute top-6 right-6 px-4 py-1 bg-accent/90 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-[0.2em] shadow-lg">
                          Exclusive
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center px-4 md:px-10 pointer-events-none z-30">
              <button className="swiper-button-prev-custom pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-500 shadow-2xl -translate-x-2 md:-translate-x-4 opacity-0 group-hover/swiper:opacity-100 group-hover/swiper:translate-x-0">
                <ChevronLeft size={24} />
              </button>
              <button className="swiper-button-next-custom pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-500 shadow-2xl translate-x-2 md:translate-x-4 opacity-0 group-hover/swiper:opacity-100 group-hover/swiper:translate-x-0">
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Custom Pagination */}
            <div className="swiper-pagination-custom flex justify-center gap-3 mt-8" />
          </div>
        )}
      </div>
    </section>
  );
}
