import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Buzzvel Project',
  description: 'Buzzvel 2024 Dev Team Test',
  keywords: 'solar energy, home power, renewable energy, solar panels, soller, sustainable energy',
  openGraph: {
    title: 'Soller - Get the Sun to Power Your Home',
    description: 'Discover Soller’s solutions for sustainable and efficient solar energy to power your home.',
    images: '/Mask masked.svg',
    type: 'website',
    // url: '',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soller - Get the Sun to Power Your Home',
    description: 'Discover Soller’s solutions for sustainable and efficient solar energy.',
    images: '/Mask masked.svg',
  },
  viewport: 'width=device-width, initial-scale=1.0',
  authors: [{ name: 'Soller Team' }],
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
