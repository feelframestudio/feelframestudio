import type { Metadata } from "next";
import "./globals.css";

import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Feelframestudio",
  description: "Ads",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.className}>
      <body className="bg-[#0A0A0C] antialiased"
      >
        <div className="max-w-[1440px] m-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
