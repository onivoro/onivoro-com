import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '@onivoro - Omnivorous TypeScript',
  description: 'Open source npm packages for accelerated software development. Consume everything in TypeScript.',
  keywords: ['npm', 'javascript', 'typescript', 'open source', 'developer tools'],
  authors: [{ name: 'onivoro', url: 'https://github.com/onivoro' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
