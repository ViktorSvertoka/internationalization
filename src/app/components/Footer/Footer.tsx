'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/60 backdrop-blur-sm transition-colors duration-300">
      <div className="container mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-sm">
        <div className="space-y-3">
          <p className="text-gray-600 dark:text-gray-400">{t('copyright')}</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            {t('backToTop')}
          </button>
        </div>

        <div className="space-y-3">
          <h4 className="text-gray-800 dark:text-gray-100 font-medium">
            Legal
          </h4>
          <ul className="space-y-1">
            <li>
              <Link
                href="/privacy-policy"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {t('privacyPolicy')}
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {t('termsOfService')}
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-gray-800 dark:text-gray-100 font-medium">
            Social
          </h4>
          <ul className="space-y-1">
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {t('socialMedia.twitter')}
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {t('socialMedia.facebook')}
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {t('socialMedia.instagram')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
