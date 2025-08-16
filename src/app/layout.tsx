import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UWE African Caribbean Society | Celebrating Culture & Community",
  description: "Join the UWE African Caribbean Society - celebrating African and Caribbean culture through events, community, and networking at the University of the West of England, Bristol.",
  keywords: "UWE, African Caribbean Society, ACS, Bristol, university, culture, community, events, networking, Africa, Caribbean",
  authors: [{ name: "UWE African Caribbean Society" }],
  openGraph: {
    title: "UWE African Caribbean Society",
    description: "Celebrating African and Caribbean culture at UWE Bristol",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "UWE African Caribbean Society",
    description: "Celebrating African and Caribbean culture at UWE Bristol",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
