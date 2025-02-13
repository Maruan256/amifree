
import GoogleAdsense from "@/components/ui/googleAdSense";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head';
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: 'Is this east Berlin or west Berlin?',
  description: 'Check on which side of the historically divided city you are right now!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" />
      <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7556699808711569`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
      </Head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
