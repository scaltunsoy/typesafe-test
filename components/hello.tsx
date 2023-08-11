"use client";

import { useI18nContext } from "@/i18n/i18n-react";
import { loadNamespaceAsync } from "@/i18n/i18n-util.async";
import { useEffect } from "react";

export default function Hello() {
  const { LL, locale, setLocale } = useI18nContext();

  useEffect(() => {
    setTimeout(() => {
      loadNamespaceAsync(locale, "demo").then(() => {
        setLocale(locale);
      });
    }, 1000);
  }, [locale, setLocale]);

  return <div>{LL.demo.HI({ name: "typesafe" })}</div>;
}
