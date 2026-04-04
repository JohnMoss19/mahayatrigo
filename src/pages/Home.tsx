import React from 'react';
import Hero from '../components/Hero';
import DestinationsGrid from '../components/DestinationsGrid';
import AboutSection from '../components/AboutSection';
import PopularTours from '../components/PopularTours';
import HotelPartners from '../components/HotelPartners';
import PackageTabs from '../components/PackageTabs';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <DestinationsGrid />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-10" />
      <AboutSection />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent my-10" />
      <PopularTours />
      <PackageTabs />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-10" />
      <HotelPartners />
    </div>
  );
}
