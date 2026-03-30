import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
  text?: string;
}

export default function LoadingSpinner({ size = 40, className = '', text = 'Loading...' }: LoadingSpinnerProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <Loader2 size={size} className="animate-spin text-accent mb-4" />
      {text && <p className="text-gray-500 font-medium animate-pulse">{text}</p>}
    </div>
  );
}
