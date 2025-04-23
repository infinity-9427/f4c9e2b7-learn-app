import { useTranslations } from "next-intl";

export const Menu = () => {
  const t = useTranslations( "Menu" );

  const options = [
    {
      item: t( "home" ),
      path: "/"
    },
    {
      item: t( "services" ),
      path: "services"
    },
    {
      item: t( "about" ),
      path: "about"
    },
    {
      item: t( "contact" ),
      path: "contact"
    },
    {
      item: t( "blog" ),
      path: "blog"
    }
  ];

  return options;
};


