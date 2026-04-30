"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardList, Handshake, Search, Sparkles, Wallet } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const buySteps = [
  { icon: Search, title: "Shortlist", description: "Browse verified resale apartments and select your fit." },
  { icon: ClipboardList, title: "Visit & check", description: "Schedule visits and review details with guidance." },
  { icon: Handshake, title: "Negotiate", description: "We help structure negotiation with clarity and pace." },
  { icon: CheckCircle2, title: "Close & handover", description: "Due diligence, paperwork, and a smooth handover." },
];

const sellSteps = [
  { icon: Wallet, title: "Valuation", description: "Get a market-aligned valuation in prime Dhaka areas." },
  { icon: Sparkles, title: "Presentation", description: "Premium listing prep: photos, copy, and positioning." },
  { icon: Search, title: "Buyer screening", description: "We qualify serious buyers to protect your time." },
  { icon: CheckCircle2, title: "Deal & handover", description: "A guided path from offer to final handover." },
];

export function ProcessSection() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <Reveal as="section" className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="How it works"
            title="Two clear paths: buy or sell"
            description="A structured process reduces uncertainty and builds trust in the secondary apartment market."
          />
          <Button variant="secondary" asChild>
            <Link href="/process">
              See full process
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <CardContent className="pt-6">
                <p className="text-sm font-semibold tracking-tight">For buyers</p>
                <p className="mt-2 text-sm text-muted">
                  Find verified resale apartments and close with confidence.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {buySteps.map((s) => (
                    <Step key={s.title} {...s} />
                  ))}
                </div>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="/buy">
                      Browse verified listings
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.05}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <p className="text-sm font-semibold tracking-tight">For sellers</p>
                <p className="mt-2 text-sm text-muted">
                  Sell faster with valuation, premium marketing, and buyer screening.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {sellSteps.map((s) => (
                    <Step key={s.title} {...s} />
                  ))}
                </div>
                <div className="mt-6">
                  <Button asChild>
                    <Link href="/sell">
                      Get a valuation
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Step({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-background/50 p-4 shadow-soft">
      <div className="flex items-start gap-3">
        <span className="grid size-9 place-items-center rounded-2xl bg-surface/70 text-foreground">
          <Icon className="size-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold tracking-tight">{title}</p>
          <p className="mt-1 text-xs leading-5 text-muted">{description}</p>
        </div>
      </div>
    </div>
  );
}

