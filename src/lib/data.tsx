import React from "react";
import { LiaBedSolid, LiaWineGlassSolid, LiaSpaSolid, LiaSwimmingPoolSolid, LiaMusicSolid, LiaCarSolid } from "react-icons/lia";

export const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Rooms", href: "/rooms" },
  { 
    label: "Services", 
    href: "#", 
    subLinks: [
      { label: "Gastrobar", href: "/#services" },
      { label: "Fitness & SPA", href: "/#services" },
      { label: "Meetings", href: "/#services" },
      { label: "Events & groups", href: "/#services" },
    ]
  },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Contacts", href: "/#location" },
  { label: "Reviews", href: "/reviews" },
];

export const newsItems = [
  {
    id: "spring-promo",
    date: "2024-05-01",
    image: "/images/hotel/general/hotel-day.webp",
  },
  {
    id: "new-spa-menu",
    date: "2024-04-15",
    image: "/images/hotel/general/pool.webp",
  },
  {
    id: "award-2024",
    date: "2024-03-20",
    image: "/images/hotel/general/restaurant.webp",
  }
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
    images: ["/images/hotel/rooms/deluxe/king/1.jpg", "/images/hotel/rooms/deluxe/king/2.jpg", "/images/hotel/rooms/deluxe/king/3.jpg"]
  },
  {
    id: "superior-king",
    label: "Superior King Room",
    hopenId: 5036377,
    mainImage: "/images/hotel/rooms/lux/king/1.jpg",
    images: ["/images/hotel/rooms/lux/king/1.jpg", "/images/hotel/rooms/lux/king/2.jpg", "/images/hotel/rooms/lux/king/3.jpg"]
  },
  {
    id: "superior-twin",
    label: "Superior Twin Room",
    hopenId: 5036376,
    bestseller: true,
    mainImage: "/images/hotel/rooms/lux/2-room/2.jpg",
    images: ["/images/hotel/rooms/lux/2-room/2.jpg", "/images/hotel/rooms/lux/2-room/3.jpg"]
  },
  {
    id: "deluxe-twin",
    label: "Deluxe Twin Room",
    hopenId: 5036375,
    mainImage: "/images/hotel/rooms/lux/2-room/1.jpg",
    images: ["/images/hotel/rooms/lux/2-room/1.jpg", "/images/hotel/rooms/lux/2-room/4.jpg"]
  },
  {
    id: "superior-family",
    label: "Superior Family Room",
    hopenId: 5049207,
    mainImage: "/images/hotel/rooms/lux/family/1.jpg",
    images: ["/images/hotel/rooms/lux/family/1.jpg", "/images/hotel/rooms/lux/family/2.jpg"]
  },
  {
    id: "standart",
    label: "Standard Single Room",
    hopenId: 5047553,
    mainImage: "/images/hotel/rooms/standart/1-room/1.jpg",
    images: ["/images/hotel/rooms/standart/1-room/1.jpg", "/images/hotel/rooms/standart/1-room/2.jpg"]
  },
  {
    id: "apartment",
    label: "Apartment",
    hopenId: 5039999
  },
  {
    id: "conference",
    label: "Conference Hall",
    mainImage: "/images/hotel/conference-rooms/32-person/1.jpg",
    images: [
      "/images/hotel/conference-rooms/32-person/1.jpg",
      "/images/hotel/conference-rooms/22-person/1.jpg",
      "/images/hotel/conference-rooms/52-person/1.jpg",
    ]
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
    icon: <LiaBedSolid />,
    title: "Floating Rooms",
    description: "87 meticulously designed rooms and suites with floor-to-ceiling windows, bespoke furnishings, and panoramic sky views that blur the line between inside and the infinite.",
    linkText: "Explore Rooms →",
  },
  {
    icon: <LiaWineGlassSolid />,
    title: "Altitude Dining",
    description: "Four distinctive dining experiences — from our award-winning fine dining restaurant at 40 floors to a casual sky terrace where cocktails meet the sunset.",
    linkText: "View Menus →",
  },
  {
    icon: <LiaSpaSolid />,
    title: "Float Spa",
    description: "A sanctuary of sensory deprivation and deep healing. Float therapy, hot stone massages, and ancient rituals reinterpreted for the modern soul seeking stillness.",
    linkText: "Book Treatment →",
  },
  {
    icon: <LiaSwimmingPoolSolid />,
    title: "Infinity Pool",
    description: "Perched at the hotel's crown, our 25-meter infinity pool seems to pour directly into the city skyline. Available at sunrise for an experience unlike any other.",
    linkText: "Learn More →",
  },
  {
    icon: <LiaMusicSolid />,
    title: "Curated Events",
    description: "From intimate gallery openings to star-lit rooftop dinners, our concierge team crafts bespoke experiences tailored to your desires with exquisite precision.",
    linkText: "See Events →",
  },
  {
    icon: <LiaCarSolid />,
    title: "Seamless Transfers",
    description: "Arrive and depart in style with our fleet of electric luxury vehicles. Private airport transfers, city tours, and helicopter arrivals are available on request.",
    linkText: "Arrange Transfer →",
  },
];
