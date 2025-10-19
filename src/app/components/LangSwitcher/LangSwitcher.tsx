'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { ChangeEvent } from 'react';

type LangSwitcherProps = {
  caption: string;
};

export default function LangSwitcher({ caption }: LangSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = e.target.value;
    router.replace({ pathname }, { locale: nextLocale });
  }

  return (
    <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
      <span
        className="hidden sm:inline text-gray-300 hover:text-white dark:text-gray-300 
                   dark:hover:text-white transition-colors duration-200 cursor-default"
      >
        {caption}
      </span>
      <select
        value={locale}
        onChange={handleChange}
        aria-label="Change language"
        className="rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900
                   text-gray-900 dark:text-gray-100 px-3 py-2 text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-500
                   hover:border-blue-400 transition-colors duration-200"
      >
        <option value="en">English</option>
        <option value="uk">Українська</option>
      </select>
    </label>
  );
}
