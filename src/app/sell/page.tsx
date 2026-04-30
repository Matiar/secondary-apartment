import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Scale, Timer } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Sell",
  description:
    "Sell your apartment faster in Dhaka with professional valuation and a guided, premium process. Dummy forms only.",
};

export default function SellPage() {
  return (
    <PageShell
      title="Sell your apartment faster"
      description="Get a professional valuation and a clear selling plan—built for prime Dhaka resale apartments."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Card>
            <CardContent className="py-8">
              <p className="text-sm font-semibold tracking-tight">
                Request a valuation (dummy form)
              </p>
              <p className="mt-2 text-sm text-muted">
                This is static UI only. Later we can wire it to a backend/CRM.
              </p>

              <form className="mt-6 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name">
                    <Input placeholder="Your name" />
                  </Field>
                  <Field label="Phone">
                    <Input placeholder="+880 1X XXXX XXXX" inputMode="tel" />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Area / neighborhood">
                    <Input placeholder="Gulshan / Banani / Dhanmondi..." />
                  </Field>
                  <Field label="Approx. size (sqft)">
                    <Input placeholder="e.g. 1650" inputMode="numeric" />
                  </Field>
                </div>
                <Field label="Notes (optional)">
                  <Textarea placeholder="Lift, parking, facing, floor, docs status..." />
                </Field>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button size="lg" type="button" className="sm:w-auto">
                    Submit request
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Talk to an advisor</Link>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-5">
          <div className="grid gap-4">
            <Mini
              icon={<Scale className="size-4" aria-hidden="true" />}
              title="Market-aligned valuation"
              desc="A pricing range based on current demand in your area."
            />
            <Mini
              icon={<Timer className="size-4" aria-hidden="true" />}
              title="Faster buyer match"
              desc="Positioning + screening helps reduce back-and-forth."
            />
            <Mini
              icon={<BadgeCheck className="size-4" aria-hidden="true" />}
              title="Trust-first process"
              desc="Clear steps to help buyers and sellers feel confident."
            />

            <Card>
              <CardContent className="py-7">
                <p className="text-sm font-semibold tracking-tight">
                  Prefer to browse demand first?
                </p>
                <p className="mt-2 text-sm text-muted">
                  See the type of verified inventory we curate.
                </p>
                <div className="mt-4">
                  <Button variant="secondary" asChild>
                    <Link href="/buy">Browse listings</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-muted">{label}</span>
      {children}
    </label>
  );
}

function Mini({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Card>
      <CardContent className="py-6">
        <div className="flex items-start gap-3">
          <span className="grid size-9 place-items-center rounded-2xl bg-background/70 shadow-soft">
            {icon}
          </span>
          <div>
            <p className="text-sm font-semibold tracking-tight">{title}</p>
            <p className="mt-1 text-sm text-muted">{desc}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

