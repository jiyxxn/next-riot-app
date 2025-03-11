import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { notoSans } from '@/styles/fonts/Noto-Sans';
import Header from '@/components/Header';
import Providers from './providers';

const Beaufort = localFont({
  src: [
    {
      path: '../styles/fonts/BeaufortforLOL-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../styles/fonts/BeaufortforLOL-Medium.woff',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-beaufort-serif',
});

export const metadata: Metadata = {
  title: 'Doran.gg',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${Beaufort.variable} ${notoSans.variable} antialiased`}>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
