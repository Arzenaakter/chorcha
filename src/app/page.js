import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import ReportSection from "@/components/ReportSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ReportSection />
      <FeatureSection />
    </div>
  );
}
