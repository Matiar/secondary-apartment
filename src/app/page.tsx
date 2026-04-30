import { CtaSection } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { ListingsPreview } from "@/components/sections/listings-preview";
import { LocationsSection } from "@/components/sections/locations";
import { ProcessSection } from "@/components/sections/process";
import { Trust } from "@/components/sections/trust";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <Trust />
      <ListingsPreview />
      <ProcessSection />
      <LocationsSection />
      <CtaSection />
    </div>
  );
}
