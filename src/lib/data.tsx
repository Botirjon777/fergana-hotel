import React from "react";
import { LiaBedSolid, LiaWineGlassSolid, LiaSpaSolid, LiaSwimmingPoolSolid, LiaMusicSolid, LiaCarSolid } from "react-icons/lia";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Location", href: "#location" },
];

export const stats = [
  { num: "87", label: "Rooms & Suites" },
  { num: "4", label: "Dining Venues" },
  { num: "10", label: "Years of Grace" },
  { num: "∞", label: "Sky Views" },
];

export const roomCategories = [
  {
    id: "deluxe",
    label: "Deluxe Suite",
    mainImage: "/images/hotel/rooms/deluxe/2-room/1.jpg",
    images: [
      "/images/hotel/rooms/deluxe/2-room/1.jpg",
      "/images/hotel/rooms/deluxe/2-room/2.jpg",
      "/images/hotel/rooms/deluxe/2-room/3.jpg",
      "/images/hotel/rooms/deluxe/2-room/4.jpg",
      "/images/hotel/rooms/deluxe/2-room/5.jpg",
      "/images/hotel/rooms/deluxe/2-room/6.jpg",
      "/images/hotel/rooms/deluxe/king/1.jpg",
      "/images/hotel/rooms/deluxe/king/2.jpg",
      "/images/hotel/rooms/deluxe/king/3.jpg",
      "/images/hotel/rooms/deluxe/king/4.jpg",
      "/images/hotel/rooms/deluxe/king/5.jpg",
      "/images/hotel/rooms/deluxe/king/6.jpg",
    ]
  },
  {
    id: "lux",
    label: "Lux Room",
    mainImage: "/images/hotel/rooms/lux/king/1.jpg",
    images: [
      "/images/hotel/rooms/lux/king/1.jpg",
      "/images/hotel/rooms/lux/king/2.jpg",
      "/images/hotel/rooms/lux/king/3.jpg",
      "/images/hotel/rooms/lux/king/4.jpg",
      "/images/hotel/rooms/lux/king/5.jpg",
      "/images/hotel/rooms/lux/king/6.jpg",
      "/images/hotel/rooms/lux/2-room/1.jpg",
      "/images/hotel/rooms/lux/2-room/2.jpg",
      "/images/hotel/rooms/lux/2-room/3.jpg",
      "/images/hotel/rooms/lux/2-room/4.jpg",
      "/images/hotel/rooms/lux/2-room/5.jpg",
      "/images/hotel/rooms/lux/2-room/6.jpg",
      "/images/hotel/rooms/lux/2-room/7.jpg",
      "/images/hotel/rooms/lux/family/1.jpg",
      "/images/hotel/rooms/lux/family/2.jpg",
      "/images/hotel/rooms/lux/family/3.jpg",
      "/images/hotel/rooms/lux/family/4.jpg",
      "/images/hotel/rooms/lux/family/5.jpg",
      "/images/hotel/rooms/lux/family/6.jpg",
    ]
  },
  {
    id: "standart",
    label: "Standart Room",
    mainImage: "/images/hotel/rooms/standart/1-room/1.jpg",
    images: [
      "/images/hotel/rooms/standart/1-room/1.jpg",
      "/images/hotel/rooms/standart/1-room/2.jpg",
      "/images/hotel/rooms/standart/1-room/3.jpg",
      "/images/hotel/rooms/standart/1-room/4.jpg",
      "/images/hotel/rooms/standart/1-room/5.jpg",
      "/images/hotel/rooms/standart/1-room/6.jpg",
      "/images/hotel/rooms/standart/1-room/7.jpg",
    ]
  },
  {
    id: "conference",
    label: "Conference Hall",
    mainImage: "/images/hotel/conference-rooms/32-person/1.jpg",
    images: [
      "/images/hotel/conference-rooms/32-person/1.jpg",
      "/images/hotel/conference-rooms/32-person/2.jpg",
      "/images/hotel/conference-rooms/32-person/3.jpg",
      "/images/hotel/conference-rooms/32-person/4.jpg",
      "/images/hotel/conference-rooms/22-person/1.jpg",
      "/images/hotel/conference-rooms/22-person/2.jpg",
      "/images/hotel/conference-rooms/52-person/1.jpg",
      "/images/hotel/conference-rooms/52-person/2.jpg",
      "/images/hotel/conference-rooms/52-person/3.jpg",
    ]
  },
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
