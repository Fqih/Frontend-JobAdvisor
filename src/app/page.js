"use client"
import HeroSection from "./components/heroSection";
import Services from "@/app/components/Services";
import TrendChart from "@/app/components/Trend";
import FAQ from "@/app/components/faq";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <TrendChart />
      <FAQ />
    </div>
  );
}