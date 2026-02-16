import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond, Montserrat } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import {NextIntlClientProvider} from "next-intl";
import {notFound} from "next/navigation";
import {locales} from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FVNIX - Premium Natural Ingredients from Yunnan",
  description: "High-quality essential oils and natural ingredients from Yunnan's Shangri-La. Trusted by global industry leaders with complete traceability and international certifications.",
  keywords: "essential oils, natural ingredients, Yunnan, Shangri-La, eucalyptus oil, tea tree oil, cinnamon oil, aromatherapy, B2B supplier",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) notFound();

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${montserrat.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          <div className="pt-16">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
