"use client";

import Logo from "@/components/ui/Logo";
import { navLinks } from "@/lib/data";
import { usePopup } from "@/lib/PopupContext";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSelector from "@/components/ui/LanguageSelector";
import { useRouter } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const { openSidebar } = usePopup();
  const t = useTranslations("Navbar");
  const router = useRouter();

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 h-[80px] md:h-[80px] max-md:h-[64px] z-1000 flex items-center justify-between px-5 md:px-12 transition-all duration-400 bg-cream/96 backdrop-blur-md shadow-[0_2px_30px_rgba(176,113,55,0.10)]"
    >
      <Logo />

      <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.label} className="relative group">
            <Link
              href={link.href}
              className="text-[13px] font-normal tracking-[2px] uppercase no-underline transition-colors duration-300 flex items-center gap-1 text-text-mid group-hover:text-gold"
            >
              {t(link.label.toLowerCase())}
              {link.subLinks && (
                <FiChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
              )}
              <span className="absolute -bottom-1 left-0 right-0 h-1px bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            {link.subLinks && (
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                <ul className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] py-4 min-w-[220px] border border-sand/10">
                  {link.subLinks.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        href={sub.href}
                        className="block px-6 py-3 text-[12px] tracking-[1px] text-text-mid hover:text-gold hover:bg-cream/30 transition-colors uppercase no-underline"
                      >
                        {t(`subLinks.${sub.label.toLowerCase()}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
        <li>
          <LanguageSelector isScrolled={true} />
        </li>
        <li>
          <Button size="sm" onClick={() => router.push("/booking")}>
            {t("bookNow")}
          </Button>
        </li>
      </ul>

      <div className="flex md:hidden items-center gap-4">
        <LanguageSelector isScrolled={true} />
        <div
          className="flex flex-col gap-[5px] cursor-pointer p-2"
          onClick={openSidebar}
        >
          <span className="block w-6 h-[1.5px] transition-colors duration-300 bg-gold"></span>
          <span className="block w-6 h-[1.5px] transition-colors duration-300 bg-gold"></span>
          <span className="block w-6 h-[1.5px] transition-colors duration-300 bg-gold"></span>
        </div>
      </div>
    </nav>
  );
}
