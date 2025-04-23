import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {Toaster} from 'react-hot-toast';
import "../../global.css";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Await the params object
  const {locale} = await Promise.resolve(params);
  const messages = await getMessages({locale});

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Toaster position="top-right" />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
