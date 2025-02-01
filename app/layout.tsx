import React from 'react';
import './globals.css';
import { Lexend } from 'next/font/google';

const lexend = Lexend({ subsets: ['latin'] });

export const metadata = {
  title: 'Sui Agent Kit',
  description: 'The AI Agent Framework on Sui for DeFAI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./pelagos.ico" />
      </head>
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
