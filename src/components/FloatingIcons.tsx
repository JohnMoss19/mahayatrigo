import React from 'react';
import { Compass, Map, Plane, Sun, MapPin, Camera } from 'lucide-react';

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-40] transform-gpu" aria-hidden="true">
      <Compass className="absolute top-[15%] left-[10%] text-primary/5 w-24 h-24 transform-gpu" />
      <Plane className="absolute top-[25%] right-[15%] text-accent/5 w-32 h-32 transform-gpu" />
      <Sun className="hidden md:block absolute bottom-[20%] left-[15%] text-accent/5 w-40 h-40 transform-gpu" />
      <MapPin className="absolute bottom-[30%] right-[10%] text-primary/5 w-20 h-20 transform-gpu" />
      <Camera className="hidden md:block absolute top-[50%] left-[5%] text-primary/5 w-16 h-16 transform-gpu" />
      <Map className="hidden md:block absolute top-[60%] right-[5%] text-accent/5 w-28 h-28 transform-gpu" />
    </div>
  );
}
