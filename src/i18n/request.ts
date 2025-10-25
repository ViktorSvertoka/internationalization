import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) as
    | (typeof routing.locales)[number]
    | undefined;

  if (!locale || !routing.locales.includes(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../../translations/${locale}.json`)).default,
  };
});
