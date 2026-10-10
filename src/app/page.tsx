import { FeaturesSection } from "@/components/sections/features-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSearchSection } from "@/components/sections/hero-search-section";
import { JobDiscoverySection } from "@/components/sections/job-discovery-section";
import PricingSection from "@/components/sections/pricing-section/pricing-section";
import { StatsSection } from "@/components/sections/stats-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div
        className="pt-16 flex flex-col items-center justify-center gap-15 lg:gap-30 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-background.png')" }}
      >
        <HeroSearchSection />
        <StatsSection />
      </div>
      <JobDiscoverySection />
      <FeaturesSection />
      <PricingSection />
      <FooterSection />
    </main>
  );
}
