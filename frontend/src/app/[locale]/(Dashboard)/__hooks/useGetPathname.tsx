'use client';
import { usePathname } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';

export const useSectionTitle = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('Dashboard');
  const pathWithoutLocale = pathname.replace(`/${locale}`, '');
  const sectionTitle = t(`Section.${pathWithoutLocale}`);

  return sectionTitle;
};
