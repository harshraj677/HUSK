import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HUSX Group | Building the Future Through Innovation",
  description: "HUSX Group is a future-focused organization building and supporting innovative businesses, products, and solutions designed to create long-term impact.",
  keywords: ["HUSX Group", "HUSX", "innovation", "business solutions", "future-focused organization", "Karnataka", "India"],
  openGraph: {
    title: "HUSX Group | Building the Future Through Innovation",
    description: "HUSX Group is a future-focused organization building and supporting innovative businesses, products, and solutions designed to create long-term impact.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-black-main text-text-warm`}
      >
        {children}
      </body>
    </html>
  );
}
