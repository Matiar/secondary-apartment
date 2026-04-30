"use client";

import { FileCheck2, ShieldCheck, Sparkles, Timer } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const items = [
  {
    icon: ShieldCheck,
    title: "Verified listings",
    description:
      "We focus on resale apartments with clearer documentation and quality checks.",
  },
  {
    icon: FileCheck2,
    title: "Guided due diligence",
    description:
      "A structured process to reduce surprises in a market where trust matters most.",
  },
  {
    icon: Timer,
    title: "Faster selling support",
    description:
      "For owners: valuation, positioning, and buyer screening to speed up timelines.",
  },
  {
    icon: Sparkles,
    title: "Premium experience",
    description:
      "Modern communication, polished listings, and a calm, professional journey.",
  },
];

export function Trust() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal as="section">
          <SectionHeading
            eyebrow="Why Dhaka Prime Flips"
            title="A modern way to buy and sell secondary apartments"
            description="Built for buyers who want confidence and sellers who want speed—without the noise."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.04}>
              <Card className="h-full">
                <CardHeader>
                  <div className="grid size-11 place-items-center rounded-2xl bg-background/70 shadow-soft">
                    <item.icon className="size-5" aria-hidden="true" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold tracking-tight">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

