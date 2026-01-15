import type { Metadata } from "next";
import { Playfair_Display, Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Superteam Nigeria 2025 Impact Report",
  description: "Summarized ecosystem report and PDF of 2025. Proof of Work: A terminal log of our ecosystem's execution.",
  openGraph: {
    title: "Superteam Nigeria 2025 Impact Report",
    description: "Summarized ecosystem report and PDF of 2025. Proof of Work: A terminal log of our ecosystem's execution.",
    type: "website",
    siteName: "Superteam Nigeria",
  },
  twitter: {
    card: "summary_large_image",
    title: "Superteam Nigeria 2025 Impact Report",
    description: "Summarized ecosystem report and PDF of 2025.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${spaceMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
