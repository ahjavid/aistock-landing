import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://aistock-landing.vercel.app'),
  title: {
    default: "Algorithmic Trading Research | RL-Based Trading System",
    template: "%s | Algorithmic Trading Research",
  },
  description: "Educational demonstration of production-ready Reinforcement Learning trading algorithms. Built with Domain-Driven Design, PPO, A2C, SAC. For research purposes only.",
  keywords: ["algorithmic trading", "reinforcement learning", "PPO", "A2C", "SAC", "educational", "research", "domain-driven design"],
  authors: [{ name: "Ahmad Javid" }],
  creator: "Ahmad Javid",
  openGraph: {
    title: "Algorithmic Trading Research",
    description: "Educational RL Trading System - Not Financial Advice",
    type: "website",
    locale: "en_US",
    siteName: "Algorithmic Trading Research",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ahjavid",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <div className="min-h-screen flex flex-col">
          <Header />
          <Disclaimer />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
