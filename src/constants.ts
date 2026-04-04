import { Destination, TourPackage, Stat, Partner } from './types';

export const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=60&w=1920&auto=format&fit=crop',
    title: 'Discover the Soul of India',
    subtitle: 'Experience Timeless Heritage & Culture',
  },
  {
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=60&w=1920&auto=format&fit=crop',
    title: 'Explore Global Wonders',
    subtitle: 'Unforgettable International Escapes',
  },
  {
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=60&w=1920&auto=format&fit=crop',
    title: 'Journeys of Faith & Devotion',
    subtitle: 'Curated Spiritual Pilgrimages',
  },
  {
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=60&w=1920&auto=format&fit=crop',
    title: 'Exotic Tropical Paradises',
    subtitle: 'Relax, Rejuvenate, and Explore',
  },
  {
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=60&w=1920&auto=format&fit=crop',
    title: 'Royal Heritage & Grandeur',
    subtitle: 'Step into the Land of Kings',
  },
];

export const EXOTIC_DESTINATIONS: Destination[] = [
  { id: '1', name: 'Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop', price: '69,999' },
  { id: '2', name: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop', price: '45,999' },
  { id: '3', name: 'Thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&auto=format&fit=crop', price: '35,999' },
  { id: '5', name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop', price: '55,999' },
];

export const POPULAR_TOURS: TourPackage[] = [
  { id: '1', name: 'Char Dham Yatra', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&auto=format&fit=crop', price: '35,999' },
  { id: '2', name: 'Varanasi Spiritual Tour', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&auto=format&fit=crop', price: '15,999' },
  { id: '3', name: 'Goa Beach Holiday', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop', price: '12,999' },
  { id: '4', name: 'Kerala Backwaters', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&auto=format&fit=crop', price: '18,999' },
  { id: '5', name: 'Dubai City Lights', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop', price: '42,999' },
  { id: '6', name: 'European Wonders', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&auto=format&fit=crop', price: '1,25,999' },
];

export const DOMESTIC_PACKAGES: TourPackage[] = [
  { 
    id: 'd1', 
    name: 'Himachal Pradesh', 
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&auto=format&fit=crop', 
    price: '13,500',
    tag: 'New Arrival',
    details: [
      { duration: '6 nights', price: '13,500' },
      { duration: '9 nights', price: '18,999' }
    ]
  },
  { 
    id: 'd2', 
    name: 'Rajasthan Royal Heritage', 
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&auto=format&fit=crop', 
    price: '15,000',
    tag: 'Limited Offer',
    details: [
      { duration: '5 nights', price: '15,000' },
      { duration: '8 nights', price: '22,500' }
    ]
  },
  { 
    id: 'd3', 
    name: 'Uttarakhand Dev Bhoomi', 
    image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?q=80&w=800&auto=format&fit=crop', 
    price: '12,000',
    details: [
      { duration: '4 nights', price: '12,000' },
      { duration: '7 nights', price: '19,000' }
    ]
  },
];

export const INTERNATIONAL_PACKAGES: TourPackage[] = [
  { 
    id: 'i1', 
    name: 'Singapore & Malaysia', 
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&auto=format&fit=crop', 
    price: '55,000',
    tag: 'Best Seller',
    details: [
      { duration: '5 nights', price: '55,000' },
      { duration: '7 nights', price: '72,000' }
    ]
  },
  { 
    id: 'i2', 
    name: 'Vietnam & Cambodia', 
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=400&auto=format&fit=crop', 
    price: '48,000',
    tag: 'New Arrival',
    details: [
      { duration: '6 nights', price: '48,000' },
      { duration: '9 nights', price: '65,000' }
    ]
  },
  { 
    id: 'i3', 
    name: 'Switzerland Special', 
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400&auto=format&fit=crop', 
    price: '1,10,000',
    details: [
      { duration: '7 nights', price: '1,10,000' },
      { duration: '10 nights', price: '1,45,000' }
    ]
  },
];

export const TRUST_STATS: Stat[] = [
  { label: 'Years Experience', value: '10', suffix: '+' },
  { label: 'Retention Rate', value: '98', suffix: '%' },
  { label: 'Happy Travellers', value: '5000', suffix: '+' },
  { label: 'Tours Completed', value: '2500', suffix: '+' },
];

export const PARTNERS: Partner[] = [
  { name: 'MAP TRIP', logo: 'https://www.maptrip.co.in/assets/img/Logo/logo2.png', isStrategic: true },
];
