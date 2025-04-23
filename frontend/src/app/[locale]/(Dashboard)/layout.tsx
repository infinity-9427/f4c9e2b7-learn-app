
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../../global.css";
import {Toaster} from 'react-hot-toast';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

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
          <div className="flex h-screen bg-gray-950 text-[#FFF] overflow-hidden">


            <Sidebar />

            <div className="flex-1 overflow-auto relative z-10">
              {/* Header uses the 'title' from context */}
              <Header />
              {children}
            </div>
          </div>
          </NextIntlClientProvider>
      </body>
    </html>
  );
}

// app/dashboard/DashboardLayout.tsx


// // app/dashboard/layout.tsx (Server Component)
// import { NextIntlClientProvider } from 'next-intl';
// import { getMessages } from 'next-intl/server';
// import DashboardLayout from './DashboardProvider';

// export default async function RootDashboardLayout({
//   children,
//   params: { locale },
// }: {
//   children: React.ReactNode;
//   params: { locale: string };
// }) {
//   const messages = await getMessages(locale);

//   return (
//     <html lang={locale}>
//       <body>
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           <DashboardLayout>{children}</DashboardLayout>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }
