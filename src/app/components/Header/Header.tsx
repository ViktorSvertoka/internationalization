'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80 transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 md:py-4 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white hover:text-blue-400 transition"
        >
          {t('home')}
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-gray-300">
          <Link
            href="/about"
            className="hover:text-white transition-colors duration-200"
          >
            {t('about')}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitcher caption={t('changeLanguage')} />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
