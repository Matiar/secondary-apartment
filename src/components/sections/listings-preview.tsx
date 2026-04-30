"use client";

import Image from "next/image";
import Link from "next/link";
import { Bath, Bed, MapPin, MoveRight, Ruler } from "lucide-react";

import { listings } from "@/content/listings";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export function ListingsPreview() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal as="section">
            <SectionHeading
              eyebrow="Verified inventory"
              title="Premium resale apartments in prime Dhaka locations"
              description="Dummy examples of the type of inventory we curate—clear details, high-quality presentation."
            />
          </Reveal>
          <Reveal delay={0.05}>
            <Button variant="secondary" asChild>
              <Link href="/listings">
                View all listings
                <MoveRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {listings.map((l, idx) => (
            <Reveal key={l.id} delay={idx * 0.05}>
              <Link href="/buy" className="group block">
                <Card className="h-full overflow-hidden transition-transform duration-300 group-hover:-translate-y-0.5">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={l.imageSrc}
                      alt={l.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      {l.badges.map((b) => (
                        <Badge key={b} variant="subtle" className="bg-background/60">
                          {b}
                        </Badge>
                      ))}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white">
                          {l.title}
                        </p>
                        <p className="mt-1 inline-flex items-center gap-1 text-xs text-white/85">
                          <MapPin className="size-3.5" aria-hidden="true" />
                          {l.location}
                        </p>
                      </div>
                      <p className="shrink-0 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900">
                        {l.priceBdt}
                      </p>
                    </div>
                  </div>
                  <CardContent className="pt-5">
                    <div className="grid grid-cols-3 gap-2 text-xs text-muted">
                      <Spec icon={<Bed className="size-4" aria-hidden="true" />} value={`${l.beds} beds`} />
                      <Spec icon={<Bath className="size-4" aria-hidden="true" />} value={`${l.baths} baths`} />
                      <Spec icon={<Ruler className="size-4" aria-hidden="true" />} value={`${l.sqft} sqft`} />
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                      Learn more
                      <MoveRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Spec({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-border/60 bg-surface/60 px-3 py-2">
      <span className="text-foreground">{icon}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

