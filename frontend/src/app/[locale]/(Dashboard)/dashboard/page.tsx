"use client";

import Cookies from "js-cookie";
import {redirect} from '@/i18n/navigation';
import {useLocale} from 'next-intl';
import HomeSectionForm from "@/components/HomeForm";
import { useSectionTitle } from '../__hooks/useGetPathname'; 

export default function WelcomePage() {
  const sectionTitle = useSectionTitle();

  const locale = useLocale();

  const isAuthenticated = Cookies.get("isAuthenticated") === "true";
  if(!isAuthenticated) {
    redirect({href: '/login', locale});
}

  return (
    <div className="p-4">
      <HomeSectionForm title={sectionTitle} />
    </div>
  );
}
