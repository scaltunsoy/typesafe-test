"use client";

import TypesafeI18n from "@/i18n/i18n-react";
import { Locales } from "@/i18n/i18n-types";
import { loadLocaleAsync } from "@/i18n/i18n-util.async";
import { useEffect, useState } from "react";
import { TypesafeI18nProps } from "typesafe-i18n/react";

export function LocaleProvider({
  children,
  locale,
}: TypesafeI18nProps<Locales>) {
  const [localesLoaded, setLocalesLoaded] = useState(false);

  useEffect(() => {
    loadLocaleAsync(locale).then(() => setLocalesLoaded(true));
  }, [locale]);

  if (!localesLoaded) {
    return null;
  }

  return <TypesafeI18n locale={locale}>{children}</TypesafeI18n>;
}
