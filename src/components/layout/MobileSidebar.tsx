"use client";

import { navLinks } from "@/lib/data";
import { usePopup } from "@/lib/PopupContext";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";

export function MobileSidebar() {
  const { isSidebarOpen, closeSidebar } = usePopup();
  const router = useRouter();
  const t = useTranslations("Navbar");

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-[1999] transition-opacity duration-300 ${isSidebarOpen ? "block" : "hidden"}`}
        onClick={closeSidebar}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 w-[300px] bg-cream z-[2000] px-10 pt-[100px] pb-10 flex flex-col gap-8 shadow-[-4px_0_40px_rgba(0,0,0,0.15)] transition-transform duration-400 ease-[cubic-bezier(.77,0,.18,1)] ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-7 right-7 w-9 h-9 cursor-pointer flex items-center justify-center text-2xl text-gold bg-transparent border-none"
          onClick={closeSidebar}
        >
          ✕
        </button>
        <ul className="list-none flex flex-col gap-6 m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={closeSidebar}
                className="font-cormorant text-3xl font-light text-text-dark no-underline tracking-[1px] transition-colors duration-300 hover:text-gold block"
              >
                {t(link.label.toLowerCase())}
              </Link>
              {link.subLinks && (
                <ul className="list-none flex flex-col gap-3 mt-4 ml-4">
                  {link.subLinks.map((sub) => (
                    <li key={sub.label}>
                      <Link
                        href={sub.href}
                        onClick={closeSidebar}
                        className="font-jost text-sm font-light text-text-mid no-underline tracking-[1px] uppercase transition-colors duration-300 hover:text-gold block"
                      >
                        {t(`subLinks.${sub.label.toLowerCase()}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <button
          className="bg-gold hover:bg-gold-dark hover:-translate-y-[2px] transition-all duration-300 text-white border-none py-4 px-10 font-jost text-xs tracking-[3px] uppercase cursor-pointer"
          onClick={() => {
            closeSidebar();
            router.push("/booking");
          }}
        >
          {t("bookNow")}
        </button>
      </div>
    </>
  );
}
