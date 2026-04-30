"use client";

import { MapPinned } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const locations = [
  { name: "Gulshan", note: "Corporate & premium family living" },
  { name: "Banani", note: "High-demand, lifestyle-centric blocks" },
  { name: "Dhanmondi", note: "Schools, parks, and established neighborhoods" },
  { name: "Uttara (Select sectors)", note: "Planned areas with strong buyer interest" },
  { name: "Bashundhara R/A", note: "Modern developments and growing demand" },
  { name: "Baridhara (Select)", note: "Quiet, premium pockets" },
];

export function LocationsSection() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal as="section">
          <SectionHeading
            eyebrow="Prime Dhaka focus"
            title="We specialize in high-trust neighborhoods"
            description="Our processes and network are built around Dhaka’s prime resale apartment corridors."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc, idx) => (
            <Reveal key={loc.name} delay={idx * 0.03}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <span className="grid size-10 place-items-center rounded-2xl bg-background/70 shadow-soft">
                      <MapPinned className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold tracking-tight">{loc.name}</p>
                      <p className="mt-1 text-sm text-muted">{loc.note}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

