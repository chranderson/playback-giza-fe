import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { Header } from '@/components/ui/header';
import { Providers } from './providers';
import { SecretConsoleMessage } from '@/components/ui/secretConsoleMessage';
import Image from 'next/image';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Playback: Giza Hackathon',
  description: 'Connect your data to Giza'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased flex flex-col',
          fontSans.variable
        )}
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            {children}
            <div
              id="hero-footer"
              className="container max-w-screen-2xl flex w-full mb-12"
            >
              <Image
                src="/unevaluated.png"
                alt="this is unevaluated data"
                width={197}
                height={16}
              />
            </div>
          </div>
        </Providers>
        <SecretConsoleMessage />
      </body>
    </html>
  );
}
