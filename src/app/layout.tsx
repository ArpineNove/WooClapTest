import { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import Header from '@/app/components/Header';
import StyledComponentsRegistry from '@/app/registry/registry';

import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Wooclap',
  description: 'Interactive presentation platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
