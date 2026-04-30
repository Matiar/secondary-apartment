import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bath, Bed, MapPin, Ruler } from "lucide-react";

import { listings } from "@/content/listings";
import { PageShell } from "@/components/site/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Buy",
  description:
    "Browse verified secondary apartments in prime Dhaka locations. Dummy listings for now—production-ready structure.",
};

export default function BuyPage() {
  return (
    <PageShell
      title="Buy verified secondary apartments"
      description="Premium resale inventory, presented clearly. Shortlist, visit, and close with confidence."
    >
      <div className="flex flex-col gap-10">
        <div className="grid gap-4 lg:grid-cols-3">
          {listings.map((l) => (
            <Card key={l.id} className="overflow-hidden">
              <div className="relative aspect-[16/10] w-full">
                <Image src={l.imageSrc} alt={l.title} fill className="object-cover" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {l.badges.map((b) => (
                    <Badge key={b} className="bg-background/60">
                      {b}
                    </Badge>
                  ))}
                </div>
              </div>
              <CardContent className="pt-5">
                <p className="text-sm font-semibold tracking-tight">{l.title}</p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {l.location}
                </p>
                <p className="mt-3 text-sm font-semibold">{l.priceBdt}</p>
                <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-muted">
                  <Spec icon={<Bed className="size-4" aria-hidden="true" />} value={`${l.beds}`} />
                  <Spec icon={<Bath className="size-4" aria-hidden="true" />} value={`${l.baths}`} />
                  <Spec icon={<Ruler className="size-4" aria-hidden="true" />} value={`${l.sqft}`} />
                </div>
                <div className="mt-5 flex gap-2">
                  <Button className="flex-1" asChild>
                    <Link href="/contact">Request viewing</Link>
                  </Button>
                  <Button variant="secondary" className="flex-1" asChild>
                    <Link href="/contact">Ask a question</Link>
                  </Button>
                </div>
                <p className="mt-3 text-xs text-muted">
                  Dummy data only. Replace with your real listing pipeline later.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardContent className="py-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold tracking-tight">
                  Want help shortlisting?
                </p>
                <p className="mt-1 text-sm text-muted">
                  Tell us your location and budget. We’ll share verified matches.
                </p>
              </div>
              <Button size="lg" asChild>
                <Link href="/contact">Share requirements</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
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

