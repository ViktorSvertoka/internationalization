'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

type LangSwitcherProps = {
  caption: string;
};

export default function LangSwitcher({ caption }: LangSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    router.replace(pathname, { locale: e.target.value as any });
  }

  return (
    <label>
      <span>{caption}</span>
      <select value={locale} onChange={onChange} aria-label="Change language">
        <option value="en">English</option>
        <option value="uk">Українська</option>
      </select>
    </label>
  );
}
