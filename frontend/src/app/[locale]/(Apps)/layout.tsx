import {Montserrat} from 'next/font/google';
import {routing} from '@/i18n/routing';
import { createTranslator, hasLocale, Locale, NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import '../../global.css';
import Navbar from '@/components/Navbar';
import {Toaster} from 'react-hot-toast';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{locale: Locale}>;
};

// Dynamic metadata
export async function generateMetadata(props: Omit<LocaleLayoutProps, 'children'>) {
  const {locale} = await props.params;

  const imageUrl = '/courses-logo.webp';
  const siteUrl = 'https://somosnoa.com';

  const messages = await getMessages();
  const t = createTranslator({locale, messages});

  return {
    metadataBase: new URL(siteUrl),
    authors: [{name: 'Jorge Tarifa', url: siteUrl}],
    creator: 'Jorge Tarifa',
    icons: {
      icon: '/favicon.ico'
    },
    openGraph: {
      type: 'website',
      locale: locale || 'es_CO',
      url: siteUrl,
      description: t('Metadata.openGraph.description'),
      siteName: 'Somos Noa',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: t('Metadata.openGraph.altImage')
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@SomosNoa',
      creator: '@JorgeTarifa',
      description: t('Metadata.openGraph.twitterDescription'),
      images: [imageUrl]
    }
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<LocaleLayoutProps>) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const t = createTranslator({locale, messages});


  const keywordKeys = [
    '1',
    '2'
  ];
  const keywordsArray = keywordKeys.map((key) => t(`Metadata.keywords.${key}`));
  const keywordsString = keywordsArray.join(', ');

  const siteUrl = 'https://somosnoa.com';
  const imageUrl = '/courses-logo.webp';

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <title>{t('Metadata.title')}</title>
        <meta
          property="og:description"
          name="description"
          content={t('Metadata.description')}
        />
        <meta name="keywords" content={keywordsString} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:locale" content={locale} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={imageUrl} />
        <link rel="canonical" href="https://somosnoa.com" />
        <meta
          property="og:image"
          content="https://somosnoa.com/favicon.png"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="robots" content="index, follow" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
      </head>
      <body
        className={`${montserrat.className} bg-gradient-to-b from-[#111827] via-[#0B111F] to-black antialiased`}
      >
        <NextIntlClientProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <Toaster position="top-right" />
            <main className="flex-grow min-h-[calc(100vh-160px)]">
              {children}
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
