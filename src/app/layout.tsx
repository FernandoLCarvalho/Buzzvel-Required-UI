import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Buzzvel Project',
  description: 'Buzzvel 2024 Dev Team Test',
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
