import React from 'react';
import Hero from '../components/Hero';
import DestinationsCarousel from '../components/DestinationsCarousel';
import AboutSection from '../components/AboutSection';
import PopularTours from '../components/PopularTours';
import HotelPartners from '../components/HotelPartners';
import PackageTabs from '../components/PackageTabs';

export default function Home() {
  return (
    <>
      <Hero />
      <DestinationsCarousel />
      <AboutSection />
      <PopularTours />
      <PackageTabs />
      <HotelPartners />
    </>
  );
}
