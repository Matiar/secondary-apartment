import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Valuation",
  description:
    "Professional apartment valuation in prime Dhaka locations (placeholder).",
};

export default function ValuationPage() {
  return (
    <PageShell
      title="Valuation"
      description="A placeholder page for future valuation service details and pricing."
    >
      <Card>
        <CardContent className="py-8">
          <p className="text-sm font-semibold tracking-tight">Valuation service</p>
          <p className="mt-2 text-sm text-muted">
            This page will later explain our valuation method, timelines, and the
            information we require.
          </p>
          <div className="mt-5">
            <Button asChild>
              <Link href="/sell">Request a valuation</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}

