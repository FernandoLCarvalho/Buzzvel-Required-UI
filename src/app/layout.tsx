import type { Metadata } from 'next';
import './globals.css';
import { Viewport } from 'next/dist/lib/metadata/types/extra-types';

export const metadata: Metadata = {
  metadataBase: new URL('https://buzzvel-ui-reproduction-83cyyo8d2.vercel.app/'),
  title: 'Buzzvel Project',
  description: 'Buzzvel 2024 Dev Team Test',
  keywords: 'solar energy, home power, renewable energy, solar panels, soller, sustainable energy',
  openGraph: {
    title: 'Soller - Get the Sun to Power Your Home',
    description: 'Discover Soller’s solutions for sustainable and efficient solar energy to power your home.',
    images: '/Mask masked.svg',
    type: 'website',
    url: 'https://buzzvel-ui-reproduction-83cyyo8d2.vercel.app/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soller - Get the Sun to Power Your Home',
    description: 'Discover Soller’s solutions for sustainable and efficient solar energy.',
    images: '/Mask masked.svg',
  },
  authors: [{ name: 'Soller Team' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
      </body>
    </html>
  );
}
