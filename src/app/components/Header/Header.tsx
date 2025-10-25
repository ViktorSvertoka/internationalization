'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LangSwitcher from '../LangSwitcher/LangSwitcher';

export default function Header() {
  const t = useTranslations('Header');

  return (
    <header>
      <nav>
        <Link href="/">{t('home')}</Link>
        <Link href="/about">{t('about')}</Link>
        <LangSwitcher caption={'to translate: changeLanguage'} />
      </nav>
    </header>
  );
}
