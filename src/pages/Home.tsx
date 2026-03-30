import React from 'react';
import Hero from '../components/Hero';
import DestinationsGrid from '../components/DestinationsGrid';
import AboutSection from '../components/AboutSection';
import PopularTours from '../components/PopularTours';
import HotelPartners from '../components/HotelPartners';
import PackageTabs from '../components/PackageTabs';

export default function Home() {
  return (
    <>
      <Hero />
      <DestinationsGrid />
      <AboutSection />
      <PopularTours />
      <PackageTabs />
      <HotelPartners />
    </>
  );
}
