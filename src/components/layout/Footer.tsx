"use client";
import Logo from "@/components/ui/Logo";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    explore: false,
    services: false,
    legal: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="bg-[#1a1108] text-cream px-5 py-10 pb-10 md:px-12 md:py-20 md:pb-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-14 pb-10 md:pb-10">
        {/* Logo & Socials */}
        <div className="footer-brand col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between">
            <Logo className="mb-0 md:mb-5 brightness-0 invert opacity-90 shrink-0 w-[120px] md:w-auto" />
            <div className="flex gap-2.5">
              <a
                className="w-9 h-9 md:w-10 md:h-10 border border-cream/10 rounded-full flex items-center justify-center text-lg cursor-pointer transition-all duration-300 text-cream/40 hover:border-gold hover:text-gold hover:bg-gold/5"
                href="#"
              >
                <FaXTwitter className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </a>
              <a
                className="w-9 h-9 md:w-10 md:h-10 border border-cream/10 rounded-full flex items-center justify-center text-lg cursor-pointer transition-all duration-300 text-cream/40 hover:border-gold hover:text-gold hover:bg-gold/5"
                href="https://www.instagram.com/safir_hotell/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </a>
              <a
                className="w-9 h-9 md:w-10 md:h-10 border border-cream/10 rounded-full flex items-center justify-center text-lg cursor-pointer transition-all duration-300 text-cream/40 hover:border-gold hover:text-gold hover:bg-gold/5"
                href="#"
              >
                <FaLinkedinIn className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </a>
              <a
                className="w-9 h-9 md:w-10 md:h-10 border border-cream/10 rounded-full flex items-center justify-center text-lg cursor-pointer transition-all duration-300 text-cream/40 hover:border-gold hover:text-gold hover:bg-gold/5"
                href="#"
              >
                <FaYoutube className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Explore Section */}
        <div className="flex flex-col border-b border-cream/5 md:border-none">
          <button
            onClick={() => toggleSection("explore")}
            className="flex items-center justify-between w-full md:cursor-default md:pointer-events-none group"
          >
            <h4 className="font-jost text-[10px] tracking-[4px] uppercase text-gold mb-5 md:mb-6 font-normal py-2.5 md:py-0">
              {t("explore")}
            </h4>
            <FiChevronDown
              className={`md:hidden transition-transform duration-300 ${openSections.explore ? "rotate-180" : ""}`}
            />
          </button>
          <ul
            className={`list-none flex flex-col gap-3 m-0 p-0 overflow-hidden transition-all duration-500 md:max-h-none ${openSections.explore ? "max-h-[300px] pb-6" : "max-h-0 md:max-h-none"}`}
          >
            <li>
              <Link
                className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold"
                href="/about"
              >
                {t("links.about")}
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold"
                href="/rooms"
              >
                {t("links.rooms")}
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold"
                href="/gallery"
              >
                {t("links.gallery")}
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold"
                href="/services"
              >
                {t("links.services")}
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold"
                href="/#location"
              >
                {t("links.location")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="flex flex-col border-b border-cream/5 md:border-none">
          <button
            onClick={() => toggleSection("services")}
            className="flex items-center justify-between w-full md:cursor-default md:pointer-events-none group"
          >
            <h4 className="font-jost text-[10px] tracking-[4px] uppercase text-gold mb-5 md:mb-6 font-normal py-2.5 md:py-0">
              {t("services")}
            </h4>
            <FiChevronDown
              className={`md:hidden transition-transform duration-300 ${openSections.services ? "rotate-180" : ""}`}
            />
          </button>
          <ul
            className={`list-none flex flex-col gap-3 m-0 p-0 overflow-hidden transition-all duration-500 md:max-h-none ${openSections.services ? "max-h-[300px] pb-6" : "max-h-0 md:max-h-none"}`}
          >
            <li>
              <Link
                className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold"
                href="/services/gastrobar"
              >
                {t("links.gastrobar")}
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold"
                href="/services/spa"
              >
                {t("links.spa")}
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold"
                href="/services/meetings"
              >
                {t("links.meetings")}
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold"
                href="/services"
              >
                {t("links.amenities")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="flex flex-col border-b border-cream/5 md:border-none">
          <button
            onClick={() => toggleSection("legal")}
            className="flex items-center justify-between w-full md:cursor-default md:pointer-events-none group"
          >
            <h4 className="font-jost text-[10px] tracking-[4px] uppercase text-gold mb-5 md:mb-6 font-normal py-2.5 md:py-0">
              {t("legal")}
            </h4>
            <FiChevronDown
              className={`md:hidden transition-transform duration-300 ${openSections.legal ? "rotate-180" : ""}`}
            />
          </button>
          <ul
            className={`list-none flex flex-col gap-3 m-0 p-0 overflow-hidden transition-all duration-500 md:max-h-none ${openSections.legal ? "max-h-[300px] pb-6" : "max-h-0 md:max-h-none"}`}
          >
            <li>
              <Link
                className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold"
                href="/privacy"
              >
                {t("links.privacy")}
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold"
                href="/terms"
              >
                {t("links.terms")}
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold"
                href="/cookies"
              >
                {t("links.cookies")}
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold"
                href="/cancellation"
              >
                {t("links.cancellation")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-xs text-cream/35 tracking-[1px]">
          &copy; {new Date().getFullYear()} Safir Hotel. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
