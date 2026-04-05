import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import LoadingSpinner from './components/LoadingSpinner';
import FloatingIcons from './components/FloatingIcons';

import Home from './pages/Home';
const About = lazy(() => import('./pages/AboutPage'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  // Preload other pages after Home is mounted
  React.useEffect(() => {
    const preloadPages = () => {
      import('./pages/AboutPage');
      import('./pages/Contact');
    };
    // Delay preloading to prioritize Home page resources
    const timer = setTimeout(preloadPages, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollToTop />
      {/* Dynamic Animated Background - Optimized for performance */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-bg via-accent/5 to-bg overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        {/* Floating Orbs - Optimized with radial gradients instead of blur */}
        <div className="hidden md:block absolute top-[15%] left-[5%] w-64 h-64 bg-[radial-gradient(circle,var(--color-primary)_0%,transparent_70%)] opacity-15 transform-gpu"></div>
        <div className="hidden md:block absolute top-[25%] right-[10%] w-72 h-72 bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_70%)] opacity-15 transform-gpu"></div>
        <div className="hidden md:block absolute bottom-[15%] right-[5%] w-64 h-64 bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_70%)] opacity-15 transform-gpu"></div>
      </div>
      
      <FloatingIcons />
      
      <div className="min-h-screen flex flex-col relative">
        <Header />
        <main className="flex-grow relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/about" 
              element={
                <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><LoadingSpinner text="Loading About..." /></div>}>
                  <About />
                </Suspense>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><LoadingSpinner text="Loading Contact..." /></div>}>
                  <Contact />
                </Suspense>
              } 
            />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
        
        {/* {showAuth && <Auth onClose={() => setShowAuth(false)} />} */}
      </div>
    </>
  );
}
