'use client';
import { useSectionTitle } from '../__hooks/useGetPathname'; 
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('Dashboard');
  const sectionTitle = useSectionTitle();

  return (
    <header className="bg-gray-950 sticky top-0 shadow-xm border-b border-[#858383]">
      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold">
          {t('beInSection')} {sectionTitle}
        </h1>
      </div>
    </header>
  );
};

export default Header;
