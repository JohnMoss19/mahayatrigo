import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';
import Logo from './Logo';

interface AuthProps {
  onClose: () => void;
}

export default function Auth({ onClose }: AuthProps) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-primary transition-colors"
        >
          <ArrowRight className="rotate-180" size={24} />
        </button>

        {/* Auth Header */}
        <div className="bg-primary p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="flex items-center justify-center gap-2 mb-4 relative z-10">
            <Logo isScrolled={false} className="h-14 w-14" />
            <span className="text-xl font-bold tracking-tight text-gradient-light">MAHA <span className="text-accent">YatriGo</span></span>
          </div>
          <h2 className="text-2xl font-bold mb-2 relative z-10">
            {isLogin ? 'Welcome Back!' : 'Create Account'}
          </h2>
          <p className="text-gray-300 text-sm relative z-10">
            {isLogin ? 'Sign in to access your bookings and travel plans.' : 'Join us for journeys of faith and wonder.'}
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-accent transition-all"
                />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-accent transition-all"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-accent transition-all"
              />
            </div>

            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-xs text-accent font-medium hover:underline">Forgot Password?</a>
              </div>
            )}

            <button className="w-full btn-primary justify-center py-3 text-lg mt-2">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-400">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-2 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium text-gray-600">
              <Chrome size={18} /> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium text-gray-600">
              <Github size={18} /> GitHub
            </button>
          </div>

          <p className="text-center mt-8 text-sm text-gray-500">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-accent font-bold hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
