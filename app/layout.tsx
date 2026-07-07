import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = { title: 'New York PTAC Supply NYC', description: 'hvac • manhattan • 5 rating • 5 Google reviews • 65 4th Ave 3rd floor, New York, NY 10003, USA' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
