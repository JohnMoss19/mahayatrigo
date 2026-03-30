import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import LoadingSpinner from './components/LoadingSpinner';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/AboutPage'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  // const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      <ScrollToTop />
      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-bg via-accent/10 to-bg animate-gradient">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>
      </div>
      
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
