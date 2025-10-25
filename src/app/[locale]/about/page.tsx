import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <div>
      <h2>{t('aboutUs')}</h2>
      <p>{t('mission')}</p>
      <h3>{t('ourStory')}</h3>
      <p>{t('storyDescription')}</p>
      <h3>{t('values')}</h3>
      <p>{t('valuesDescription')}</p>
      <h2>{t('contact')}</h2>
      <p>{t('contactInfo')}</p>
    </div>
  );
}
