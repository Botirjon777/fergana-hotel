"use client";
import Logo from "@/components/ui/Logo";
import { FaInstagram, FaTelegram } from "react-icons/fa6";
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
    <footer className="bg-[#1a1108] text-cream px-5 pt-10 pb-8 md:px-12 md:pt-16 md:pb-10">
      <div className="max-w-[1200px] mx-auto">

        {/* ── Desktop top row: Logo + Social Icons ── */}
        <div className="hidden md:flex items-center justify-between mb-14 pb-8 border-b border-cream/10">
          <Logo className="brightness-0 invert opacity-90 w-[140px]" />

          <div className="flex items-center gap-4">
            <a
              className="w-12 h-12 border border-cream/20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 text-cream/60 hover:border-gold hover:text-gold hover:bg-gold/10"
              href="https://www.instagram.com/safir_hotell/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              className="w-12 h-12 border border-cream/20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 text-cream/60 hover:border-gold hover:text-gold hover:bg-gold/10"
              href="https://t.me/safir_hotel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FaTelegram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* ── Desktop nav columns ── */}
        <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr] gap-14 pb-14">
          {/* Brand blurb */}
          <div>
            <p className="text-cream/45 text-sm font-light leading-relaxed max-w-[260px]">
              Safir Hotel — premium hospitality in the heart of Fergana. Experience comfort, elegance, and tradition.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-jost text-[10px] tracking-[4px] uppercase text-gold mb-6 font-normal">
              {t("explore")}
            </h4>
            <ul className="list-none flex flex-col gap-3 m-0 p-0">
              <li><Link className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="/about">{t("links.about")}</Link></li>
              <li><Link className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="/rooms">{t("links.rooms")}</Link></li>
              <li><Link className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="/gallery">{t("links.gallery")}</Link></li>
              <li><Link className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="/services">{t("links.services")}</Link></li>
              <li><Link className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="/#location">{t("links.location")}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-jost text-[10px] tracking-[4px] uppercase text-gold mb-6 font-normal">
              {t("services")}
            </h4>
            <ul className="list-none flex flex-col gap-3 m-0 p-0">
              <li><Link className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="/services/gastrobar">{t("links.gastrobar")}</Link></li>
              <li><Link className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="/services/spa">{t("links.spa")}</Link></li>
              <li><Link className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="/services/meetings">{t("links.meetings")}</Link></li>
              <li><Link className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="/services">{t("links.amenities")}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-jost text-[10px] tracking-[4px] uppercase text-gold mb-6 font-normal">
              {t("legal")}
            </h4>
            <ul className="list-none flex flex-col gap-3 m-0 p-0">
              <li><Link className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="/privacy">{t("links.privacy")}</Link></li>
              <li><Link className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="/terms">{t("links.terms")}</Link></li>
              <li><Link className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="/cookies">{t("links.cookies")}</Link></li>
              <li><Link className="text-sm text-cream/55 no-underline font-light transition-colors duration-300 hover:text-gold" href="/cancellation">{t("links.cancellation")}</Link></li>
            </ul>
          </div>
        </div>

        {/* ── Mobile layout: Logo row + accordion sections ── */}
        <div className="md:hidden">
          {/* Mobile top: logo + socials */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-cream/10">
            <Logo className="brightness-0 invert opacity-90 w-[100px]" />
            <div className="flex gap-3">
              <a
                className="w-9 h-9 border border-cream/20 rounded-full flex items-center justify-center transition-all duration-300 text-cream/50 hover:border-gold hover:text-gold"
                href="https://www.instagram.com/safir_hotell/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                className="w-9 h-9 border border-cream/20 rounded-full flex items-center justify-center transition-all duration-300 text-cream/50 hover:border-gold hover:text-gold"
                href="https://t.me/safir_hotel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <FaTelegram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile accordion sections */}
          {[
            {
              key: "explore",
              label: t("explore"),
              links: [
                { href: "/about", label: t("links.about") },
                { href: "/rooms", label: t("links.rooms") },
                { href: "/gallery", label: t("links.gallery") },
                { href: "/services", label: t("links.services") },
                { href: "/#location", label: t("links.location") },
              ],
            },
            {
              key: "services",
              label: t("services"),
              links: [
                { href: "/services/gastrobar", label: t("links.gastrobar") },
                { href: "/services/spa", label: t("links.spa") },
                { href: "/services/meetings", label: t("links.meetings") },
                { href: "/services", label: t("links.amenities") },
              ],
            },
            {
              key: "legal",
              label: t("legal"),
              links: [
                { href: "/privacy", label: t("links.privacy") },
                { href: "/terms", label: t("links.terms") },
                { href: "/cookies", label: t("links.cookies") },
                { href: "/cancellation", label: t("links.cancellation") },
              ],
            },
          ].map((section) => (
            <div key={section.key} className="border-b border-cream/5">
              <button
                onClick={() => toggleSection(section.key)}
                className="flex items-center justify-between w-full py-4"
              >
                <h4 className="font-jost text-base tracking-[2px] uppercase text-gold font-normal">
                  {section.label}
                </h4>
                <FiChevronDown
                  className={`text-gold transition-transform duration-300 ${openSections[section.key] ? "rotate-180" : ""}`}
                />
              </button>
              <ul
                className={`list-none flex flex-col gap-4 m-0 p-0 overflow-hidden transition-all duration-500 ${
                  openSections[section.key] ? "max-h-[300px] pb-5" : "max-h-0"
                }`}
              >
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="text-base text-cream/60 no-underline font-light transition-colors duration-300 hover:text-gold"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="max-w-[1200px] mx-auto mt-8 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-xs text-cream/35 tracking-[1px]">
          &copy; {new Date().getFullYear()} Safir Hotel. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
