"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export function CtaSection() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal as="section">
          <Card className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.brand.300/0.28),transparent_60%)] blur-2xl" />
              <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.sky.300/0.22),transparent_60%)] blur-2xl" />
            </div>
            <CardContent className="grid gap-8 py-10 sm:py-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-foreground shadow-soft backdrop-blur">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  Premium resale apartments • Seller-first support
                </div>
                <h3 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                  Ready to sell or shortlist a verified apartment?
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
                  Get a valuation for your apartment or browse verified resale options
                  in prime Dhaka locations. Dummy data only — built for future scaling.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
                <Button size="lg" asChild>
                  <Link href="/sell">
                    Get a valuation
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/buy">Browse listings</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}

