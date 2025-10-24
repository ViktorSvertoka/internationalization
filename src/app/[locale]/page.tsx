import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <section className="container mx-auto px-6 py-20 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          {t('title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
        <div className="pt-10 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            {t('welcomeHeader')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            {t('welcomeText')}
          </p>
        </div>
      </div>
    </section>
  );
}
