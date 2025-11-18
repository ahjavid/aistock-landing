import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PerformanceHighlights from "@/components/PerformanceHighlights";
import Architecture from "@/components/Architecture";
import APIDemo from "@/components/APIDemo";
import CTA from "@/components/CTA";

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
