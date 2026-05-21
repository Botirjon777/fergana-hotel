"use client";

import { NextIntlClientProvider } from "next-intl";
import { useLanguageStore } from "@/store/useLanguageStore";
import { useEffect, useState } from "react";
import en from "../../../new-translations/en.json";
import ru from "../../../new-translations/ru.json";
import uz from "../../../new-translations/uz.json";

const messages: Record<string, any> = { en, ru, uz };

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale } = useLanguageStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use 'en' as fallback during hydration to avoid mismatch
  const currentLocale = mounted ? locale : "en";

  return (
    <NextIntlClientProvider
      locale={currentLocale}
      messages={messages[currentLocale]}
      timeZone="Asia/Tashkent"
    >
      {children}
    </NextIntlClientProvider>
  );
}
