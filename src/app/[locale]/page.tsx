import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
      <div>
        <h2>{t('welcomeHeader')}</h2>
        <p>{t('welcomeText')}</p>
      </div>
    </div>
  );
}
