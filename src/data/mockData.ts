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
];
