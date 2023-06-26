'use client';
import StyledComponentsRegistry from '@/lib/registry';
import { Playfair_Display } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import { THEME } from '@/styles/themes';

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfair.className}>
      <head>
        <title>Filmita</title>
      </head>
      <body>
        <ThemeProvider theme={THEME}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}