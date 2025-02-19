
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head';
import { Metadata } from "next";
import { PostHogProvider } from "./providers";

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
      </Head>
      <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7556699808711569`}
      crossOrigin="anonymous"
      
    />
      <body>
        <PostHogProvider>
          {children}
        <Analytics />
        </PostHogProvider>
        
      </body>
    </html>
  );
}
