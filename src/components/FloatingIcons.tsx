import React from 'react';
import { Compass, Map, Plane, Sun, MapPin, Camera } from 'lucide-react';

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-40]" aria-hidden="true">
      <Compass className="absolute top-[15%] left-[10%] text-primary/5 w-24 h-24 animate-blob" />
      <Plane className="absolute top-[25%] right-[15%] text-accent/5 w-32 h-32 animate-blob animation-delay-2000" />
      <Sun className="absolute bottom-[20%] left-[15%] text-accent/5 w-40 h-40 animate-blob animation-delay-4000" />
      <MapPin className="absolute bottom-[30%] right-[10%] text-primary/5 w-20 h-20 animate-blob" />
      <Camera className="absolute top-[50%] left-[5%] text-primary/5 w-16 h-16 animate-blob animation-delay-2000" />
      <Map className="absolute top-[60%] right-[5%] text-accent/5 w-28 h-28 animate-blob animation-delay-4000" />
    </div>
  );
}
