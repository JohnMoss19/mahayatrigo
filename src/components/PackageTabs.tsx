import React, { useState, useEffect } from 'react';
import { DOMESTIC_PACKAGES, INTERNATIONAL_PACKAGES } from '../constants';
import { Link } from 'react-router-dom';
import { TourPackage } from '../types';
import FadeIn from './FadeIn';
import { ArrowRight, MapPin, Star, Clock } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

export default function PackageTabs() {
  const [isLoadingDomestic, setIsLoadingDomestic] = useState(true);
  const [isLoadingInternational, setIsLoadingInternational] = useState(true);
  const [domesticPackages, setDomesticPackages] = useState<typeof DOMESTIC_PACKAGES>([]);
  const [internationalPackages, setInternationalPackages] = useState<typeof INTERNATIONAL_PACKAGES>([]);

  useEffect(() => {
    // Simulate API call for domestic packages
    const timer1 = setTimeout(() => {
      setDomesticPackages(DOMESTIC_PACKAGES);
      setIsLoadingDomestic(false);
    }, 1000);

    // Simulate API call for international packages
    const timer2 = setTimeout(() => {
      setInternationalPackages(INTERNATIONAL_PACKAGES);
      setIsLoadingInternational(false);
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Domestic Section */}
        <div id="domestic" className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <FadeIn direction="right">
              <span className="section-subtitle">India Tours</span>
              <h2 className="section-title mb-0">Our Domestic <span className="text-accent italic">Packages</span></h2>
            </FadeIn>
            <FadeIn direction="left">
              <Link 
                to="/contact" 
                aria-label="View all domestic destinations"
                className="group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-accent hover:text-primary transition-all duration-500"
              >
                View All Destinations 
                <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </FadeIn>
          </div>
          
          {isLoadingDomestic ? (
            <div className="py-20">
              <LoadingSpinner text="Loading domestic packages..." />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {domesticPackages.map((pkg, index) => (
                <FadeIn key={pkg.id} delay={index * 0.1}>
                  <PackageCard pkg={pkg} />
                </FadeIn>
              ))}
            </div>
          )}
        </div>

        {/* International Section */}
        <div id="international">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <FadeIn direction="right">
              <span className="section-subtitle">Global Tours</span>
              <h2 className="section-title mb-0">Our International <span className="text-accent italic">Packages</span></h2>
            </FadeIn>
            <FadeIn direction="left">
              <Link 
                to="/contact" 
                aria-label="Explore all international destinations"
                className="group flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-accent hover:text-primary transition-all duration-500"
              >
                Explore The World 
                <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </FadeIn>
          </div>
          
          {isLoadingInternational ? (
            <div className="py-20">
              <LoadingSpinner text="Loading international packages..." />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {internationalPackages.map((pkg, index) => (
                <FadeIn key={pkg.id} delay={index * 0.1}>
                  <PackageCard pkg={pkg} />
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const PackageCard: React.FC<{ pkg: TourPackage }> = ({ pkg }) => {
  return (
    <div className="group relative bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] transition-all duration-700 hover:-translate-y-3 flex flex-col h-full border border-gray-100/50">
      {/* Image Section */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
        
        {/* Floating Badge */}
        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-xl flex items-center gap-2" aria-label="Top Rated Package">
          <Star size={14} aria-hidden="true" className="text-accent fill-accent" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Top Rated</span>
        </div>

        {/* Location Badge */}
        <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white">
          <MapPin size={16} aria-hidden="true" className="text-accent" />
          <span className="text-sm font-medium tracking-wide">{pkg.name.split(' ')[0]}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif font-bold text-primary mb-6 group-hover:text-accent transition-colors duration-500 line-clamp-2 leading-tight">
          {pkg.name}
        </h3>
        
        <div className="space-y-4 mb-8 flex-grow">
          {pkg.details?.map((detail, idx) => (
            <div key={idx} className="flex justify-between items-center p-4 rounded-2xl bg-gray-50 group-hover:bg-accent/5 transition-colors duration-500 border border-transparent group-hover:border-accent/10">
              <div className="flex items-center gap-3">
                <Clock size={16} aria-hidden="true" className="text-accent" />
                <span className="text-sm font-bold text-gray-600 uppercase tracking-widest">{detail.duration}</span>
              </div>
              <div className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors duration-500">
                Rs. {detail.price}
              </div>
            </div>
          ))}
        </div>

        <Link 
          to="/contact" 
          aria-label={`Enquire about ${pkg.name}`}
          className="w-full py-4 rounded-2xl bg-primary text-white font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:bg-accent transition-all duration-500 shadow-xl shadow-primary/20 hover:shadow-accent/30 active:scale-95 group/btn"
        >
          Enquire Now <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
