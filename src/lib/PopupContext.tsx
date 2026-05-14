"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type PopupType = "booking-popup" | "confirm-popup" | "service-popup" | "welcome-popup" | "gallery-popup" | "availability-popup" | null;

interface PopupContextType {
  activePopup: PopupType;
  openPopup: (id: PopupType) => void;
  closePopup: () => void;
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  galleryImages: string[];
  setGalleryImages: React.Dispatch<React.SetStateAction<string[]>>;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export function PopupProvider({ children }: { children: ReactNode }) {
  const [activePopup, setActivePopup] = useState<PopupType>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  const openPopup = (id: PopupType) => setActivePopup(id);
  const closePopup = () => setActivePopup(null);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Sync scroll locking
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      if (activePopup || isSidebarOpen) {
        const scrollY = window.scrollY;
        document.body.style.top = `-${scrollY}px`;
        document.body.classList.add('no-scroll');
        document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
      } else {
        const scrollY = document.body.style.top;
        document.body.classList.remove('no-scroll');
        document.body.style.top = '';
        document.body.style.paddingRight = '';
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
      }
    }
  }, [activePopup, isSidebarOpen]);

  return (
    <PopupContext.Provider value={{ activePopup, openPopup, closePopup, isSidebarOpen, openSidebar, closeSidebar, galleryImages, setGalleryImages }}>
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const context = useContext(PopupContext);
  if (!context) throw new Error("usePopup must be used within a PopupProvider");
  return context;
}
