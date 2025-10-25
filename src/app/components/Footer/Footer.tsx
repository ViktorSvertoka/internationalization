'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer>
      <div>
        <p>{t('copyright')}</p>

        <div>
          <a href="/privacy-policy">{t('privacyPolicy')}</a>
          <a href="/terms-of-service">{t('termsOfService')}</a>
        </div>

        <div>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('socialMedia.twitter')}
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('socialMedia.facebook')}
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('socialMedia.instagram')}
          </a>
        </div>

        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {t('backToTop')}
        </button>
      </div>
    </footer>
  );
}
