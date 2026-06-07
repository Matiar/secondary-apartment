"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building, Scale, ShieldCheck } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.brand.300/0.35),transparent_55%)] blur-2xl" />
        <div className="absolute right-[-120px] top-[120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,theme(colors.sky.300/0.25),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-[-240px] left-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,theme(colors.emerald.300/0.18),transparent_60%)] blur-2xl" />
      </div>

      <Container className="pb-14 pt-12 sm:pb-20 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <Badge className="w-fit">
                <ShieldCheck className="size-3.5" aria-hidden="true" />
                Verified resale apartments in prime Dhaka
              </Badge>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Buy confidently.
                <span className="text-gradient"> Sell faster.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg">
                Dhaka Prime Flips helps buyers find verified secondary apartments —
                and helps owners sell quickly with professional valuation and a
                guided transaction process.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" asChild>
                  <Link href="/sell">
                    Get a valuation
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/buy">Browse verified listings</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <MiniStat
                  icon={<BadgeCheck className="size-4" aria-hidden="true" />}
                  label="Verified listings"
                  value="Clear docs + checks"
                />
                <MiniStat
                  icon={<Scale className="size-4" aria-hidden="true" />}
                  label="Fair valuation"
                  value="Market-aligned pricing"
                />
                <MiniStat
                  icon={<Building className="size-4" aria-hidden="true" />}
                  label="Prime areas"
                  value="Gulshan, Banani, Dhanmondi"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="lg:justify-self-end">
            <Card className="relative overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[5/4] w-full">
                  <Image
                    src="/images/hero.jpg"
                    alt="Premium modern apartment living room with natural light"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/60 bg-background/50 p-4 shadow-soft">
                    <p className="text-xs font-medium text-muted">For sellers</p>
                    <p className="mt-1 text-sm font-semibold">
                      Sell with a guided process
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      Valuation → Marketing → Buyer screening → Handover
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-background/50 p-4 shadow-soft">
                    <p className="text-xs font-medium text-muted">For buyers</p>
                    <p className="mt-1 text-sm font-semibold">
                      Verified resale apartments
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      Shortlist → Visit → Due diligence → Negotiation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function MiniStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-surface/60 px-4 py-3 shadow-soft backdrop-blur">
      <div className="flex items-center gap-2 text-foreground">
        <span className="grid size-8 place-items-center rounded-2xl bg-background/60">
          {icon}
        </span>
        <div>
          <p className="text-xs font-medium text-muted">{label}</p>
          <p className="text-sm font-semibold tracking-tight">{value}</p>
        </div>
      </div>
    </div>
  );
}

