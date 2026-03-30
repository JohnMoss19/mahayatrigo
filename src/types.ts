export interface Destination {
  id: string;
  name: string;
  image: string;
  images?: string[];
  price: string;
}

export interface TourPackage {
  id: string;
  name: string;
  image: string;
  images?: string[];
  price: string;
  duration?: string;
  details?: { duration: string; price: string }[];
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Partner {
  name: string;
  logo: string;
  isStrategic?: boolean;
}
