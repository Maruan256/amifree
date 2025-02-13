
import GoogleAdsense from "@/components/ui/googleAdSense";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import { Metadata } from "next";

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
      <body>
        {children}
        <Analytics />
      </body>
      <GoogleAdsense pId="7556699808711569"></GoogleAdsense>
    </html>
  );
}
