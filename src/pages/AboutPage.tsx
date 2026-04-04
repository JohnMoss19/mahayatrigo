import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import FadeIn from '../components/FadeIn';
import { ChevronRight, ArrowRight, Globe, Shield, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Main Content Section */}
      <div className="py-16 lg:py-32 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0" aria-hidden="true">
          <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/2 blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/2 blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32">
            
            {/* Left: Artistic Image Composition */}
            <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[600px] lg:h-[800px]">
              {/* Top Left Image */}
              <FadeIn direction="right" className="absolute top-0 left-0 w-[55%] lg:w-[60%] z-10">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{ willChange: 'transform' }}
                  className="rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
                    alt="Mountain Lake" 
                    className="w-full max-w-full aspect-[3/4] object-cover hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                    fetchPriority="high"
                  />
                </motion.div>
              </FadeIn>
              {/* Middle Right Image */}
              <FadeIn direction="up" delay={0.3} className="absolute top-[15%] lg:top-[20%] right-0 w-[55%] lg:w-[60%] z-20">
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  style={{ willChange: 'transform' }}
                  className="rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                    alt="Group Hiking" 
                    className="w-full max-w-full aspect-[3/4] object-cover hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                    fetchPriority="high"
                  />
                </motion.div>
              </FadeIn>
              {/* Bottom Left Image */}
              <FadeIn direction="down" delay={0.6} className="absolute bottom-0 left-[10%] w-[60%] lg:w-[65%] z-30">
                <motion.div
                  animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  style={{ willChange: 'transform' }}
                  className="rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" 
                    alt="Tropical Beach" 
                    className="w-full max-w-full aspect-[16/9] object-cover hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                    fetchPriority="high"
                  />
                </motion.div>
              </FadeIn>
            </div>

            {/* Right: Content */}
            <div className="lg:w-1/2">
              <FadeIn direction="left">
                <span className="section-subtitle" aria-hidden="true">Our Legacy</span>
                <h1 className="section-title">
                  Crafting <span className="text-accent italic">Extraordinary</span> Travel Experiences
                </h1>
                
                <div className="space-y-6 lg:space-y-8 text-gray-600 leading-relaxed text-base lg:text-lg mb-10 lg:mb-12">
                  <p>
                    At <span className="text-primary font-bold">MAHA YatriGo</span>, we believe that travel is the ultimate form of storytelling. With over 12 years of expertise, we have dedicated ourselves to curating journeys that transcend the ordinary.
                  </p>
                  <p className="text-sm lg:text-base">
                    Our team of passionate explorers and local experts work tirelessly to design bespoke itineraries that blend luxury, culture, and adventure. We don't just plan trips; we create lifelong memories.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 pt-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                        <Globe size={24} aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-primary mb-1">Global Reach</h4>
                        <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Trusted Network</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                        <Shield size={24} aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-primary mb-1">Elite Safety</h4>
                        <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Secure Journeys</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-10">
                  <Link to="/contact" className="btn-primary group" aria-label="Begin your journey with MAHA YatriGo">
                    Begin Your Journey
                    <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-4" aria-hidden="true">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" loading="lazy" decoding="async" />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1" aria-hidden="true">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Heart key={i} size={10} className="text-accent fill-accent" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">5k+ Happy Travelers</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <span className="section-subtitle">Our Vision</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6 lg:mb-8 leading-tight">
              Redefining the Future of <span className="text-accent italic">Spiritual & Global</span> Travel
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 lg:mb-12">
              To be the world's most trusted and innovative travel companion, seamlessly connecting seekers with sacred destinations and breathtaking wonders across the globe, while fostering sustainable and culturally enriching experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">Global Accessibility</h3>
                <p className="text-gray-600 leading-relaxed">Making transformative travel experiences accessible to everyone, anywhere in the world.</p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">Cultural Connection</h3>
                <p className="text-gray-600 leading-relaxed">Fostering deep, meaningful connections between travelers and the diverse cultures they visit.</p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">Sustainable Journeys</h3>
                <p className="text-gray-600 leading-relaxed">Promoting eco-friendly practices to preserve the beauty and sanctity of our destinations for future generations.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
