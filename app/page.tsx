import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PerformanceHighlights from "@/components/PerformanceHighlights";
import Architecture from "@/components/Architecture";
import APIDemo from "@/components/APIDemo";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Algorithmic Trading Research | RL-Based Trading System",
  description: "Educational demonstration of production-ready Reinforcement Learning trading algorithms. Built with Domain-Driven Design, PPO, A2C, SAC. For research purposes only.",
  openGraph: {
    title: "Algorithmic Trading Research",
    description: "Educational RL Trading System - Not Financial Advice",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Algorithmic Trading Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Algorithmic Trading Research",
    description: "Educational RL Trading System - Not Financial Advice",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <PerformanceHighlights />
      <Architecture />
      <APIDemo />
      <CTA />
    </>
  );
}
