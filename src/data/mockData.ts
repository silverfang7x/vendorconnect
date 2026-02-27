export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  image?: string;
  available: boolean;
}

export interface Vendor {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  distance: string;
  isOpen: boolean;
  isFeatured: boolean;
  phone: string;
  address: string;
  lat: number;
  lng: number;
  products: Product[];
  openTime: string;
  closeTime: string;
}

export interface Deal {
  id: string;
  title: string;
  description: string;
  vendorId: string;
  vendorName: string;
  category: string;
  badge?: string;
  discountLabel: string;
  validTill: string;
}

export interface UserProfile {
  id: string;
  name: string;
  phone: string;
  city: string;
  defaultAddress: string;
  memberSince: string;
  favoritesVendorIds: string[];
  recentVendorIds: string[];
}

export const categories = [
  { id: "all", name: "All", icon: "🏪" },
  { id: "food", name: "Food", icon: "🍛" },
  { id: "fruits", name: "Fruits", icon: "🍎" },
  { id: "vegetables", name: "Vegetables", icon: "🥬" },
  { id: "grocery", name: "Grocery", icon: "🛒" },
  { id: "supplements", name: "Supplements", icon: "💪" },
  { id: "services", name: "Services", icon: "🔧" },
  { id: "snacks", name: "Snacks", icon: "🍿" },
];

export const vendors: Vendor[] = [
  {
    id: "1",
    name: "Ramu's Fresh Fruits",
    category: "fruits",
    description: "Fresh seasonal fruits directly from the mandi. Best quality mangoes and bananas in the area.",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 128,
    distance: "0.3 km",
    isOpen: true,
    isFeatured: true,
    phone: "+91 98765 43210",
    address: "Near Shiv Mandir, Sector 15, Noida",
    lat: 28.5855,
    lng: 77.3100,
    openTime: "6:00 AM",
    closeTime: "9:00 PM",
    products: [
      { id: "p1", name: "Alphonso Mango", price: 120, unit: "kg", available: true },
      { id: "p2", name: "Banana (Dozen)", price: 40, unit: "dozen", available: true },
      { id: "p3", name: "Apple (Shimla)", price: 180, unit: "kg", available: true },
      { id: "p4", name: "Papaya", price: 60, unit: "kg", available: false },
      { id: "p5", name: "Watermelon", price: 30, unit: "kg", available: true },
    ],
  },
  {
    id: "2",
    name: "Sharma Ji Ki Dukaan",
    category: "grocery",
    description: "One-stop shop for all daily grocery needs. Running since 1995.",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=300&fit=crop",
    rating: 4.2,
    reviews: 256,
    distance: "0.5 km",
    isOpen: true,
    isFeatured: false,
    phone: "+91 98765 43211",
    address: "Main Market, Block C, Sector 12",
    lat: 28.5870,
    lng: 77.3120,
    openTime: "7:00 AM",
    closeTime: "10:00 PM",
    products: [
      { id: "p6", name: "Toor Dal", price: 160, unit: "kg", available: true },
      { id: "p7", name: "Basmati Rice", price: 90, unit: "kg", available: true },
      { id: "p8", name: "Mustard Oil", price: 180, unit: "ltr", available: true },
      { id: "p9", name: "Sugar", price: 45, unit: "kg", available: true },
      { id: "p10", name: "Eggs (Tray)", price: 85, unit: "tray", available: true },
    ],
  },
  {
    id: "3",
    name: "FitFuel Supplements",
    category: "supplements",
    description: "Authentic gym supplements and protein powders at best prices. 100% genuine products.",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2c619?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 89,
    distance: "0.8 km",
    isOpen: true,
    isFeatured: true,
    phone: "+91 98765 43212",
    address: "GMS Road, Near Gold Gym",
    lat: 28.5840,
    lng: 77.3080,
    openTime: "9:00 AM",
    closeTime: "9:00 PM",
    products: [
      { id: "p11", name: "Whey Protein (1kg)", price: 2200, unit: "pack", available: true },
      { id: "p12", name: "BCAA Powder", price: 850, unit: "pack", available: true },
      { id: "p13", name: "Creatine Monohydrate", price: 650, unit: "pack", available: false },
      { id: "p14", name: "Peanut Butter (1kg)", price: 350, unit: "jar", available: true },
    ],
  },
  {
    id: "4",
    name: "Guddu Bhai Chaat Corner",
    category: "food",
    description: "Famous for golgappe, tikki, and chaat. Best street food in the locality!",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 512,
    distance: "0.2 km",
    isOpen: false,
    isFeatured: true,
    phone: "+91 98765 43213",
    address: "Opposite Metro Station Gate 2",
    lat: 28.5860,
    lng: 77.3095,
    openTime: "4:00 PM",
    closeTime: "10:00 PM",
    products: [
      { id: "p15", name: "Golgappe (Plate)", price: 30, unit: "plate", available: true },
      { id: "p16", name: "Aloo Tikki", price: 25, unit: "plate", available: true },
      { id: "p17", name: "Dahi Bhalla", price: 40, unit: "plate", available: true },
      { id: "p18", name: "Chole Bhature", price: 60, unit: "plate", available: true },
    ],
  },
  {
    id: "5",
    name: "Sabzi Mandi Express",
    category: "vegetables",
    description: "Farm-fresh vegetables delivered daily. Wholesale and retail available.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
    rating: 4.3,
    reviews: 178,
    distance: "0.6 km",
    isOpen: true,
    isFeatured: false,
    phone: "+91 98765 43214",
    address: "Sabzi Mandi, Near Bus Stand",
    lat: 28.5850,
    lng: 77.3110,
    openTime: "5:00 AM",
    closeTime: "8:00 PM",
    products: [
      { id: "p19", name: "Tomato", price: 40, unit: "kg", available: true },
      { id: "p20", name: "Onion", price: 35, unit: "kg", available: true },
      { id: "p21", name: "Potato", price: 25, unit: "kg", available: true },
      { id: "p22", name: "Green Chilli", price: 80, unit: "kg", available: true },
      { id: "p23", name: "Coriander", price: 20, unit: "bunch", available: true },
    ],
  },
  {
    id: "6",
    name: "Quick Fix Repairs",
    category: "services",
    description: "Mobile repair, electrical work, and plumbing. Fast and reliable service at your doorstep.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop",
    rating: 4.1,
    reviews: 67,
    distance: "1.2 km",
    isOpen: true,
    isFeatured: false,
    phone: "+91 98765 43215",
    address: "Shop 14, Market Complex",
    lat: 28.5830,
    lng: 77.3060,
    openTime: "10:00 AM",
    closeTime: "7:00 PM",
    products: [
      { id: "p24", name: "Screen Repair", price: 500, unit: "service", available: true },
      { id: "p25", name: "Battery Replace", price: 300, unit: "service", available: true },
      { id: "p26", name: "Electrical Wiring", price: 200, unit: "hr", available: true },
    ],
  },
  {
    id: "7",
    name: "Sharma Ji Chaat Bhandar",
    category: "snacks",
    description: "Crispy samosas, kachori, and spicy chutneys. Evening snacks that hit the spot.",
    image: "https://images.unsplash.com/photo-1604908554097-955f41a65133?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 342,
    distance: "1.0 km",
    isOpen: true,
    isFeatured: true,
    phone: "+91 98765 43216",
    address: "Near Raja Mandi, Agra",
    lat: 27.1950,
    lng: 78.0110,
    openTime: "3:00 PM",
    closeTime: "10:30 PM",
    products: [
      { id: "p27", name: "Samosa", price: 15, unit: "piece", available: true },
      { id: "p28", name: "Kachori", price: 20, unit: "piece", available: true },
      { id: "p29", name: "Chai", price: 10, unit: "cup", available: true },
    ],
  },
  {
    id: "8",
    name: "Raju Auto Repairs",
    category: "services",
    description: "Two-wheeler servicing, puncture, brake tuning, and on-road assistance.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 121,
    distance: "2.1 km",
    isOpen: true,
    isFeatured: false,
    phone: "+91 98765 43217",
    address: "Khandari Crossing, Agra",
    lat: 27.2108,
    lng: 78.0042,
    openTime: "9:30 AM",
    closeTime: "8:30 PM",
    products: [
      { id: "p30", name: "Puncture Repair", price: 50, unit: "service", available: true },
      { id: "p31", name: "Chain Lube", price: 80, unit: "service", available: true },
      { id: "p32", name: "Basic Service", price: 299, unit: "service", available: true },
    ],
  },
  {
    id: "9",
    name: "Fresh Farm Veggies",
    category: "vegetables",
    description: "Clean, sorted veggies and seasonal greens. Delivery in under 45 minutes.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 204,
    distance: "1.7 km",
    isOpen: true,
    isFeatured: false,
    phone: "+91 98765 43218",
    address: "Sikandra, Agra",
    lat: 27.2266,
    lng: 77.9763,
    openTime: "6:30 AM",
    closeTime: "9:00 PM",
    products: [
      { id: "p33", name: "Bhindi", price: 60, unit: "kg", available: true },
      { id: "p34", name: "Palak", price: 20, unit: "bunch", available: true },
      { id: "p35", name: "Cauliflower", price: 45, unit: "piece", available: true },
    ],
  },
  {
    id: "10",
    name: "Gupta Mobile Repairs",
    category: "services",
    description: "Phone screen, battery, charging port repairs with same-day pickup & drop.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 410,
    distance: "2.8 km",
    isOpen: true,
    isFeatured: true,
    phone: "+91 98765 43219",
    address: "Sadar Bazaar, Agra Cantt",
    lat: 27.1607,
    lng: 78.0117,
    openTime: "11:00 AM",
    closeTime: "9:00 PM",
    products: [
      { id: "p36", name: "Screen Guard", price: 99, unit: "piece", available: true },
      { id: "p37", name: "Charging Port Fix", price: 399, unit: "service", available: true },
      { id: "p38", name: "Battery Replacement", price: 899, unit: "service", available: true },
    ],
  },
];

export const deals: Deal[] = [
  {
    id: "d1",
    title: "10% off on Fresh Mangoes",
    description: "Buy 2kg+ Alphonso and get 10% off. Limited stock today.",
    vendorId: "1",
    vendorName: "Ramu's Fresh Fruits",
    category: "fruits",
    badge: "Today",
    discountLabel: "10% OFF",
    validTill: "Tonight 9:00 PM",
  },
  {
    id: "d2",
    title: "Combo: Golgappe + Tikki",
    description: "Combo plate at a special price. Perfect for evening cravings.",
    vendorId: "4",
    vendorName: "Guddu Bhai Chaat Corner",
    category: "food",
    badge: "Popular",
    discountLabel: "₹69 COMBO",
    validTill: "This week",
  },
  {
    id: "d3",
    title: "Free Delivery on Grocery",
    description: "Free delivery within 1km on orders above ₹299.",
    vendorId: "2",
    vendorName: "Sharma Ji Ki Dukaan",
    category: "grocery",
    discountLabel: "FREE DELIVERY",
    validTill: "Next 3 days",
  },
  {
    id: "d4",
    title: "Bike Puncture Fix (Agra Special)",
    description: "Quick puncture fix at your doorstep in Agra Cantt & nearby areas.",
    vendorId: "6",
    vendorName: "Quick Fix Repairs",
    category: "services",
    badge: "Agra",
    discountLabel: "₹99 START",
    validTill: "This month",
  },
];

export const userProfile: UserProfile = {
  id: "u1",
  name: "Aarav Sharma",
  phone: "+91 98765 40001",
  city: "Agra",
  defaultAddress: "Near Sadar Bazaar, Agra Cantt",
  memberSince: "Jan 2025",
  favoritesVendorIds: ["4", "1"],
  recentVendorIds: ["2", "6", "4"],
};
