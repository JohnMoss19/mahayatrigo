import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, ArrowRight, Clock, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (formData.email === 'error@example.com') {
            reject(new Error('Failed to send message. Please try again later.'));
          } else {
            resolve({ success: true });
          }
        }, 800);
      });
      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message || 'An unexpected error occurred.');
    }
  };

  return (
    <div className="pt-32 pb-24 bg-transparent min-h-screen relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,var(--color-accent)_0%,transparent_70%)] opacity-10 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--color-primary)_0%,transparent_70%)] opacity-10 translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <FadeIn className="text-center mb-24">
          <span className="section-subtitle">Get in Touch</span>
          <h1 className="section-title">Contact <span className="text-accent italic">Us</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-fluid-p leading-relaxed font-light">
            Have questions about our tours or need help planning your next adventure? Our team of travel experts is here to assist you every step of the way.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-12">
            <FadeIn direction="right" delay={0.2}>
              <div className="space-y-12">
                <div>
                  <h3 className="text-fluid-h3 font-serif font-bold text-primary mb-8 flex items-center gap-3">
                    <span className="w-8 h-px bg-accent"></span> Information
                  </h3>
                  
                  <div className="space-y-10">
                    <div className="flex items-start gap-6 group">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 border border-accent/10 shadow-sm">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Office Address</h4>
                        <p className="text-primary font-medium leading-relaxed">
                          Office No. 102, Silver Plaza,<br />
                          Mira Road (East), Mumbai,<br />
                          Maharashtra 401107
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-primary/10 shadow-sm">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Phone Number</h4>
                        <div className="text-primary font-medium space-y-1">
                          <p className="hover:text-accent transition-colors cursor-pointer">+91 98765 43210</p>
                          <p className="hover:text-accent transition-colors cursor-pointer">+91 91234 56789</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 border border-accent/10 shadow-sm">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</h4>
                        <div className="text-primary font-medium space-y-1">
                          <p className="hover:text-accent transition-colors cursor-pointer">bookings@mahayatrigo.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-10 rounded-[2.5rem] bg-primary text-white relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                    <Clock size={40} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-serif font-bold mb-6">Working Hours</h4>
                  <ul className="space-y-4 text-sm font-light text-gray-300">
                    <li className="flex justify-between items-center border-b border-white/10 pb-3"><span>Mon - Fri:</span> <span className="text-white font-medium">09:00 AM - 06:00 PM</span></li>
                    <li className="flex justify-between items-center border-b border-white/10 pb-3"><span>Saturday:</span> <span className="text-white font-medium">10:00 AM - 04:00 PM</span></li>
                    <li className="flex justify-between items-center"><span>Sunday:</span> <span className="text-accent font-bold">Closed</span></li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <FadeIn direction="left" delay={0.4}>
              <div className="glass-card p-6 md:p-10 relative overflow-hidden rounded-3xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-bl-full -z-10" />
                
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-4">
                  <span className="w-10 h-px bg-accent"></span> Send us a Message
                </h3>
                
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest ml-1">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-gray-50/50 focus:bg-white font-medium text-primary placeholder:text-gray-400 text-sm"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest ml-1">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-gray-50/50 focus:bg-white font-medium text-primary placeholder:text-gray-400 text-sm"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-gray-50/50 focus:bg-white font-medium text-primary placeholder:text-gray-400 text-sm"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-gray-50/50 focus:bg-white font-medium text-primary placeholder:text-gray-400 text-sm"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest ml-1">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-gray-50/50 focus:bg-white font-medium text-primary placeholder:text-gray-400 text-sm"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-600 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all resize-none bg-gray-50/50 focus:bg-white font-medium text-primary placeholder:text-gray-400 text-sm"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>

                  {status === 'success' && (
                    <div className="flex items-center gap-3 text-green-600 bg-green-50 p-4 rounded-xl font-bold">
                      <CheckCircle size={20} />
                      <span>Message sent successfully!</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="flex items-center gap-3 text-red-600 bg-red-50 p-4 rounded-xl font-bold">
                      <AlertCircle size={20} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="btn-primary group w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
