import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  FileCheck2,
  Handshake,
  Search,
  ShieldCheck,
  Sparkles,
  Timer,
  Wallet,
} from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "A structured, trust-first process for buying and selling secondary apartments in Dhaka.",
};

export default function ProcessPage() {
  return (
    <PageShell
      title="How it works"
      description="Two clear paths. One premium experience. Designed to reduce uncertainty in the resale market."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="py-8">
            <p className="text-sm font-semibold tracking-tight">Buying flow</p>
            <p className="mt-2 text-sm text-muted">
              Verified inventory → guided viewing → clear negotiation → smooth closing.
            </p>
            <div className="mt-6 grid gap-3">
              <Row icon={<Search className="size-4" aria-hidden="true" />} title="Shortlist verified apartments" desc="Browse listings and share requirements for matched options." />
              <Row icon={<ClipboardList className="size-4" aria-hidden="true" />} title="Visit & evaluate" desc="Schedule visits and review details with structured checks." />
              <Row icon={<FileCheck2 className="size-4" aria-hidden="true" />} title="Due diligence" desc="Document checks and clarity-focused steps (future: integrated checklist)." />
              <Row icon={<Handshake className="size-4" aria-hidden="true" />} title="Negotiate & close" desc="We help align expectations and move towards a confident close." />
              <Row icon={<BadgeCheck className="size-4" aria-hidden="true" />} title="Handover" desc="A clear finish line with a premium handover experience." />
            </div>
            <div className="mt-7">
              <Button asChild>
                <Link href="/buy">
                  Browse verified listings
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="py-8">
            <p className="text-sm font-semibold tracking-tight">Selling flow</p>
            <p className="mt-2 text-sm text-muted">
              Valuation → premium marketing → buyer screening → guided closing.
            </p>
            <div className="mt-6 grid gap-3">
              <Row icon={<Wallet className="size-4" aria-hidden="true" />} title="Valuation" desc="Market-aligned pricing based on current demand and comparable sales." />
              <Row icon={<Sparkles className="size-4" aria-hidden="true" />} title="Premium presentation" desc="High-quality listing prep and positioning (dummy assets for now)." />
              <Row icon={<Timer className="size-4" aria-hidden="true" />} title="Faster buyer match" desc="We actively screen buyers to protect your time and pace." />
              <Row icon={<ShieldCheck className="size-4" aria-hidden="true" />} title="Trust-first process" desc="Clear steps designed to reduce uncertainty for both sides." />
              <Row icon={<Handshake className="size-4" aria-hidden="true" />} title="Close & handover" desc="Guidance from offer to handover with calm communication." />
            </div>
            <div className="mt-7 flex gap-2">
              <Button asChild>
                <Link href="/sell">
                  Get a valuation
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/contact">Talk to us</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}

function Row({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3 rounded-2xl border border-border/60 bg-surface/60 p-4">
      <span className="grid size-9 shrink-0 place-items-center rounded-2xl bg-background/70 shadow-soft">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold tracking-tight">{title}</p>
        <p className="mt-1 text-sm text-muted">{desc}</p>
      </div>
    </div>
  );
}

