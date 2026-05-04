"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/lib/data";
import { usePopup } from "@/lib/PopupContext";
import { useTranslations } from "next-intl";
import LanguageSelector from "@/components/ui/LanguageSelector";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { openSidebar, openPopup, activePopup, isSidebarOpen } = usePopup();
  const t = useTranslations("Navbar");

  useEffect(() => {
    const handleScroll = () => {
      // Don't update if a popup or sidebar is open to prevent state resetting
      if (activePopup || isSidebarOpen) return;
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activePopup, isSidebarOpen]);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 h-[80px] md:h-[80px] max-md:h-[64px] z-1000 flex items-center justify-between px-5 md:px-12 transition-all duration-400 ${scrolled ? "nav-scrolled" : ""}`}
    >
      <Logo />

      <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={`text-[13px] font-normal tracking-[2px] uppercase no-underline transition-colors duration-300 relative group ${scrolled ? "text-text-mid" : "text-cream"}`}
            >
              {t(link.label.toLowerCase())}
              <span className="absolute -bottom-1 left-0 right-0 h-1px bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </li>
        ))}
        <li>
          <LanguageSelector isScrolled={scrolled} />
        </li>
        <li>
          <button
            className="bg-gold hover:bg-gold-dark text-white border-none py-2.5 px-6 font-jost text-xs tracking-[2px] uppercase cursor-pointer transition-colors duration-300 inline-block no-underline"
            onClick={() => openPopup("booking-popup")}
          >
            {t("bookNow")}
          </button>
        </li>
      </ul>

      <div className="flex md:hidden items-center gap-4">
        <LanguageSelector isScrolled={scrolled} />
        <div
          className="flex flex-col gap-[5px] cursor-pointer p-2"
          onClick={openSidebar}
        >
          <span
            className={`block w-6 h-[1.5px] transition-colors duration-300 ${scrolled ? "bg-gold" : "bg-cream"}`}
          ></span>
          <span
            className={`block w-6 h-[1.5px] transition-colors duration-300 ${scrolled ? "bg-gold" : "bg-cream"}`}
          ></span>
          <span
            className={`block w-6 h-[1.5px] transition-colors duration-300 ${scrolled ? "bg-gold" : "bg-cream"}`}
          ></span>
        </div>
      </div>
    </nav>
  );
}
