import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import LoadingSpinner from './components/LoadingSpinner';
import FloatingIcons from './components/FloatingIcons';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/AboutPage'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  // const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      <ScrollToTop />
      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-bg via-accent/5 to-bg md:animate-gradient overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-accent/10 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] left-[20%] w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-[20%] right-[5%] w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
      </div>
      
      <FloatingIcons />
      
      <div className="min-h-screen flex flex-col relative z-0">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><LoadingSpinner text="Loading page..." /></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <BackToTop />
        
        {/* {showAuth && <Auth onClose={() => setShowAuth(false)} />} */}
      </div>
    </>
  );
}
