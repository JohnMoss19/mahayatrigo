import React from 'react';
import { Instagram, Facebook, MessageCircle, Mail, MapPin, Phone, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PARTNERS } from '../constants';
import Logo from './Logo';
import FadeIn from './FadeIn';

export default function Footer() {
  const strategicPartner = PARTNERS.find(p => p.isStrategic);

  return (
    <footer className="bg-primary text-white pt-32 pb-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-24">
          {/* About */}
          <FadeIn delay={0.1} className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <Logo isScrolled={false} className="h-14 w-14" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold tracking-tight leading-none text-gradient-light">
                  MAHA <span className="text-accent italic">YatriGo</span>
                </span>
                <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-gray-500 mt-2">
                  Journeys of Faith & Wonder
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 font-medium">
              MAHA YatriGo is committed to providing world-class travel experiences. We specialize in curated domestic and international tours that blend spiritual significance with modern leisure.
            </p>
            <div className="flex gap-5">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: MessageCircle, href: '#', label: 'WhatsApp' }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  aria-label={`Follow us on ${social.label}`}
                  className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center md:hover:bg-accent md:hover:text-white md:hover:-translate-y-2 transition-all duration-500 border border-white/10"
                >
                  <social.icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.2}>
            <h4 className="text-lg font-serif font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-accent"></span> Navigation
            </h4>
            <ul className="space-y-5">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/#about' },
                { name: 'Domestic Tours', href: '/#domestic' },
                { name: 'International Tours', href: '/#international' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/') && !link.href.includes('#') ? (
                    <Link 
                      to={link.href}
                      className="text-gray-400 hover:text-accent flex items-center gap-2 transition-all duration-500 group text-sm font-bold uppercase tracking-widest"
                    >
                      <ChevronRight size={14} className="transition-transform md:group-hover:translate-x-1 text-accent/50" /> {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-accent flex items-center gap-2 transition-all duration-500 group text-sm font-bold uppercase tracking-widest"
                    >
                      <ChevronRight size={14} className="transition-transform md:group-hover:translate-x-1 text-accent/50" /> {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={0.3}>
            <h4 className="text-lg font-serif font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-accent"></span> Get In Touch
            </h4>
            <ul className="space-y-8">
              <li className="flex gap-5 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 border border-white/10">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed font-medium">
                  Office No. 102, Silver Plaza, Mira Road (East), Mumbai, Maharashtra 401107
                </span>
              </li>
              <li className="flex gap-5 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 border border-white/10">
                  <Phone size={18} aria-hidden="true" />
                </div>
                <div className="text-gray-300 text-sm space-y-2 font-bold">
                  <a href="tel:+919876543210" className="block hover:text-accent transition-colors">+91 98765 43210</a>
                  <a href="tel:+919123456789" className="block hover:text-accent transition-colors">+91 91234 56789</a>
                </div>
              </li>
              <li className="flex gap-5 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 border border-white/10">
                  <Mail size={18} aria-hidden="true" />
                </div>
                <div className="text-gray-300 text-sm space-y-2 font-bold">
                  <a href="mailto:bookings@mahayatrigo.com" className="block hover:text-accent transition-colors">bookings@mahayatrigo.com</a>
                </div>
              </li>
            </ul>
          </FadeIn>

          {/* Strategic Partner */}
          <FadeIn delay={0.4}>
            <h4 className="text-lg font-serif font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-accent"></span> Partnership
            </h4>
            {strategicPartner && (
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 md:hover:border-accent/30 transition-all duration-700 group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20 md:group-hover:opacity-100 transition-opacity duration-700">
                  <ArrowUpRight size={20} className="text-accent" />
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-8 font-medium">
                  In strategic partnership with <strong className="text-white">{strategicPartner.name}</strong>, we provide world-class travel experiences.
                </p>
                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-2xl bg-white/10 md:group-hover:bg-white transition-all duration-1000">
                    <img 
                      src={strategicPartner.logo} 
                      alt={strategicPartner.name}
                      className="h-8 object-contain grayscale md:group-hover:grayscale-0 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] leading-tight">
                      Official<br/>Partner
                    </span>
                  </div>
                </div>
              </div>
            )}
          </FadeIn>
        </div>

        <FadeIn delay={0.5} className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} MAHA YatriGo. All Rights Reserved.
          </p>
          <div className="flex items-center gap-10">
            <Link to="/privacy" className="text-gray-400 hover:text-accent text-xs font-bold uppercase tracking-[0.2em] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-accent text-xs font-bold uppercase tracking-[0.2em] transition-colors">Terms of Service</Link>
          </div>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3">
            Crafted for <span className="text-accent">Faith & Wonder</span>
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
