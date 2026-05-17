import {
  LiaBedSolid,
  LiaWineGlassSolid,
  LiaSpaSolid,
  LiaSwimmingPoolSolid,
  LiaUsersSolid,
  LiaConciergeBellSolid,
} from "react-icons/lia";

export const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Rooms", href: "/rooms" },
  {
    label: "Services",
    href: "/services",
    subLinks: [
      { label: "Gastrobar", href: "/gastrobar" },
      { label: "Fitness & SPA", href: "/spa" },
      { label: "Meetings & Events", href: "/meetings" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Contacts", href: "/#location" },
  { label: "Reviews", href: "/reviews" },
];

export const newsItems = [
  {
    id: "smart-in-room-service",
    date: "2025-01-01",
    image: "/news/safir-news-3.png",
  },
  {
    id: "quality-management-cert",
    date: "2015-01-01",
    image: "/images/hotel/general/reception.webp",
    pdfUrl: "/news/safir-news-2.pdf",
  },
  {
    id: "food-safety-cert",
    date: "2019-01-01",
    image: "/images/hotel/general/restaurant-2.webp",
    pdfUrl: "/news/safir-news-1.pdf",
  },
];

export const stats = [
  { num: "63", label: "Rooms & Suites" },
  { num: "4", label: "Dining Venues" },
  { num: "10", label: "Years of Grace" },
  { num: "∞", label: "Sky Views" },
];

export const roomCategories = [
  {
    id: "deluxe-king",
    label: "Deluxe King Room",
    hopenId: 5051545,
    mainImage: "/images/hotel/rooms/deluxe/king/1.jpg",
    images: [
      "/images/hotel/rooms/deluxe/king/1.jpg",
      "/images/hotel/rooms/deluxe/king/2.jpg",
      "/images/hotel/rooms/deluxe/king/3.jpg",
    ],
  },
  {
    id: "superior-king",
    label: "Superior King Room",
    hopenId: 5036377,
    mainImage: "/images/hotel/rooms/lux/king/1.jpg",
    images: [
      "/images/hotel/rooms/lux/king/1.jpg",
      "/images/hotel/rooms/lux/king/2.jpg",
      "/images/hotel/rooms/lux/king/3.jpg",
    ],
  },
  {
    id: "superior-twin",
    label: "Superior Twin Room",
    hopenId: 5036376,
    bestseller: true,
    mainImage: "/images/hotel/rooms/lux/2-room/2.jpg",
    images: [
      "/images/hotel/rooms/lux/2-room/2.jpg",
      "/images/hotel/rooms/lux/2-room/3.jpg",
    ],
  },
  {
    id: "deluxe-twin",
    label: "Deluxe Twin Room",
    hopenId: 5036375,
    mainImage: "/images/hotel/rooms/lux/2-room/1.jpg",
    images: [
      "/images/hotel/rooms/lux/2-room/1.jpg",
      "/images/hotel/rooms/lux/2-room/4.jpg",
    ],
  },
  {
    id: "superior-family",
    label: "Superior Family Room",
    hopenId: 5049207,
    mainImage: "/images/hotel/rooms/lux/family/1.jpg",
    images: [
      "/images/hotel/rooms/lux/family/1.jpg",
      "/images/hotel/rooms/lux/family/2.jpg",
    ],
  },
  {
    id: "standart",
    label: "Standard Single Room",
    hopenId: 5047553,
    mainImage: "/images/hotel/rooms/standart/1-room/1.jpg",
    images: [
      "/images/hotel/rooms/standart/1-room/1.jpg",
      "/images/hotel/rooms/standart/1-room/2.jpg",
    ],
  },
  {
    id: "apartment",
    label: "Apartment",
    hopenId: 5039999,
    mainImage: "/images/hotel/rooms/lux/king/4.jpg",
    images: [
      "/images/hotel/rooms/lux/king/4.jpg",
      "/images/hotel/rooms/lux/king/5.jpg",
    ],
  },
  {
    id: "conference",
    label: "Conference Hall",
    mainImage: "/images/hotel/conference-rooms/32-person/1.jpg",
    images: [
      "/images/hotel/conference-rooms/32-person/1.jpg",
      "/images/hotel/conference-rooms/22-person/1.jpg",
      "/images/hotel/conference-rooms/52-person/1.jpg",
    ],
  },
];

export const generalGallery = [
  "/images/hotel/general/hotel-day.webp",
  "/images/hotel/general/hotel-night.webp",
  "/images/hotel/general/reception.webp",
  "/images/hotel/general/reception-2.webp",
  "/images/hotel/general/reception-3.webp",
  "/images/hotel/general/restaurant.webp",
  "/images/hotel/general/restaurant-2.webp",
  "/images/hotel/general/pool.webp",
  "/images/hotel/general/breakfast.webp",
  "/images/hotel/general/billiard.webp",
];

export const servicesItems = [
  {
    icon: <LiaWineGlassSolid />,
    title: "Gastrobar",
    description:
      "Experience exquisite flavors at our Gastrobar. From artisanal cocktails to a rich buffet breakfast, every bite is a journey of taste.",
    linkText: "Explore Gastrobar →",
    href: "/gastrobar",
  },
  {
    icon: <LiaSpaSolid />,
    title: "Fitness & SPA",
    description:
      "A sanctuary of wellness featuring our modern fitness room and a serene indoor swimming pool for complete physical and mental rejuvenation.",
    linkText: "Relax & Recharge →",
    href: "/spa",
  },
  {
    icon: <LiaUsersSolid />,
    title: "Meetings & Events",
    description:
      "Elegant venues for any occasion. Our versatile conference rooms and expert planning services ensure your meetings and events are truly extraordinary.",
    linkText: "Plan Your Event →",
    href: "/meetings",
  },
  {
    icon: <LiaBedSolid />,
    title: "Amenities",
    description:
      "Thoughtfully curated details for your ultimate comfort. From smart home systems to premium toiletries, we provide everything you need for a seamless stay.",
    linkText: "View Amenities →",
    href: "/services",
  },
  {
    icon: <LiaConciergeBellSolid />,
    title: "Guest Services",
    description:
      "Enjoy effortless hospitality with our inclusive services: laundry, 24/7 housekeeping, and a 10% discount at our main restaurant for direct bookings.",
    linkText: "Our Services →",
    href: "/services",
  },
  {
    icon: <LiaSwimmingPoolSolid />,
    title: "Infinity Pool",
    description:
      "Immerse yourself in the tranquility of our indoor pool. Controlled temperature and a cozy atmosphere provide the perfect escape year-round.",
    linkText: "Dive In →",
    href: "/spa",
  },
];
