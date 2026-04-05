import React, { useState } from 'react';
import { Instagram, Facebook, MessageCircle, Mail, MapPin, Phone, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PARTNERS } from '../constants';
import Logo from './Logo';
import FadeIn from './FadeIn';

export default function Footer() {
  const strategicPartner = PARTNERS.find(p => p.isStrategic);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const hash = href.replace('/', '');
      if (window.location.pathname === '/') {
        e.preventDefault();
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', hash);
        }
      }
    }
  };

  return (
    <footer className="bg-primary text-white pt-32 pb-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_70%)] opacity-10 -translate-y-1/2 translate-x-1/3 animate-blob" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,transparent_70%)] opacity-5 translate-y-1/2 -translate-x-1/3 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Newsletter Section */}
        <FadeIn delay={0.05} className="mb-24 pb-20 border-b border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="text-fluid-h3 font-serif font-bold mb-4">
                Subscribe to our <span className="text-accent italic">Newsletter</span>
              </h3>
              <p className="text-gray-300 font-light text-fluid-p">
                Get the latest travel updates, exclusive deals, and spiritual journey insights delivered straight to your inbox.
              </p>
            </div>
            <div className="w-full max-w-md">
              {isSubscribed ? (
                <div className="bg-accent/10 border border-accent/20 rounded-3xl p-6 text-center animate-in fade-in zoom-in duration-500">
                  <p className="text-accent font-bold">Thank you for subscribing!</p>
                  <p className="text-gray-300 text-sm mt-1">You'll receive our next update soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-grow">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email Address" 
                      className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-14 pr-6 text-white placeholder:text-gray-400 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all duration-300"
                      required
                    />
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-accent pointer-events-none" size={18} />
                  </div>
                  <button 
                    type="submit"
                    className="bg-accent text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-all duration-500 shadow-lg shadow-accent/20 whitespace-nowrap active:scale-95"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-24">
          {/* About */}
          <FadeIn delay={0.1} className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <Logo isScrolled={false} className="h-14 w-14" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold tracking-tight leading-none text-white">
                  MAHA <span className="text-accent italic">YatriGo</span>
                </span>
                <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-gray-400 mt-2">
                  Journeys of Faith & Wonder
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-10 font-light">
              MAHA YatriGo is committed to providing world-class travel experiences. We specialize in curated domestic and international tours that blend spiritual significance with modern leisure.
            </p>
            <div className="flex gap-5">
              {[
                { icon: Instagram, href: 'https://instagram.com/mahayatrigo', label: 'Instagram' },
                { icon: Facebook, href: 'https://facebook.com/mahayatrigo', label: 'Facebook' },
                { icon: MessageCircle, href: 'https://wa.me/919876543210', label: 'WhatsApp' }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center md:hover:bg-accent md:hover:text-white md:hover:-translate-y-2 transition-all duration-500 border border-white/10 group/social"
                >
                  <social.icon size={20} aria-hidden="true" className="transition-transform duration-500 group-hover/social:scale-110" />
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
                  {link.href.startsWith('/#') ? (
                    <a 
                      href={link.href} 
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-gray-300 hover:text-accent flex items-center gap-2 transition-all duration-500 group text-sm font-medium uppercase tracking-widest"
                    >
                      <ChevronRight size={14} className="transition-transform md:group-hover:translate-x-1 text-accent/50" /> {link.name}
                    </a>
                  ) : link.href.startsWith('/') ? (
                    <Link 
                      to={link.href}
                      className="text-gray-300 hover:text-accent flex items-center gap-2 transition-all duration-500 group text-sm font-medium uppercase tracking-widest"
                    >
                      <ChevronRight size={14} className="transition-transform md:group-hover:translate-x-1 text-accent/50" /> {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-accent flex items-center gap-2 transition-all duration-500 group text-sm font-medium uppercase tracking-widest"
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
              <li className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 border border-white/10">
                  <MapPin size={18} />
                </div>
                <div className="text-gray-300 text-sm leading-relaxed font-medium">
                  Office No. 102, Silver Plaza, Mira Road (East), Mumbai, Maharashtra 401107
                </div>
              </li>
              <li className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 border border-white/10">
                  <Phone size={18} aria-hidden="true" />
                </div>
                <div className="text-gray-300 text-sm space-y-2 font-medium">
                  <a href="tel:+919876543210" className="block hover:text-accent transition-colors">+91 98765 43210</a>
                  <a href="tel:+919123456789" className="block hover:text-accent transition-colors">+91 91234 56789</a>
                </div>
              </li>
              <li className="flex items-start gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 border border-white/10">
                  <Mail size={18} aria-hidden="true" />
                </div>
                <div className="text-gray-300 text-sm space-y-2 font-medium">
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
                <p className="text-gray-300 text-sm leading-relaxed mb-8 font-light">
                  In strategic partnership with <strong className="text-white font-medium">{strategicPartner.name}</strong>, we provide world-class travel experiences.
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
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] leading-tight">
                      Official<br/>Partner
                    </span>
                  </div>
                </div>
              </div>
            )}
          </FadeIn>
        </div>

        <FadeIn delay={0.45} className="mb-12 flex flex-col md:flex-row items-center justify-center gap-6 py-6 border-t border-white/10">
          <div className="flex flex-col items-center md:items-start gap-0">
            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">WE ACCEPT</span>
            <span className="text-white/90 text-sm font-serif italic">Secure Checkout</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { name: 'Visa', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Visa_Inc._logo_%282021%E2%80%93present%29.svg' },
              { name: 'Mastercard', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' },
              { name: 'PayPal', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
              { name: 'Apple Pay', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg' },
              { name: 'UPI', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg' },
              { name: 'RuPay', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/RuPay.svg' }
            ].map((payment) => (
              <div 
                key={payment.name} 
                className="bg-white px-2.5 py-1 rounded-lg h-8 flex items-center justify-center shadow-md shadow-black/10 md:hover:-translate-y-0.5 transition-all duration-500 group cursor-default"
                title={payment.name}
              >
                <img 
                  src={payment.logo} 
                  alt={payment.name} 
                  className="h-3.5 w-auto object-contain transition-all duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.5} className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
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
