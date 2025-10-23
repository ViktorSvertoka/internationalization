import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <section className="container mx-auto px-6 py-16 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold">{t('aboutUs')}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            {t('mission')}
          </p>
        </div>

        <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <h3 className="text-2xl font-semibold mb-3">{t('ourStory')}</h3>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            {t('storyDescription')}
          </p>
        </section>

        <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <h3 className="text-2xl font-semibold mb-3">{t('values')}</h3>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            {t('valuesDescription')}
          </p>
        </section>

        <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <h2 className="text-2xl font-semibold mb-2">{t('contact')}</h2>
          <p className="text-gray-700 dark:text-gray-300">{t('contactInfo')}</p>
        </section>
      </div>
    </section>
  );
}
