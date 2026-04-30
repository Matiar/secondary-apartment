import type { Metadata } from "next";

import { listings } from "@/content/listings";
import { PageShell } from "@/components/site/page-shell";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Verified listings",
  description:
    "A preview of verified resale apartments (dummy data). Designed for future integration with a real inventory pipeline.",
};

export default function ListingsPage() {
  return (
    <PageShell
      title="Verified listings (dummy)"
      description="This is a static inventory preview. The homepage remains focused on buyer + seller conversion."
    >
      <div className="grid gap-4">
        {listings.map((l) => (
          <Card key={l.id}>
            <CardContent className="py-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold tracking-tight">{l.title}</p>
                  <p className="mt-1 text-sm text-muted">
                    {l.location} • {l.sqft} sqft • {l.beds} bed • {l.baths} bath
                  </p>
                </div>
                <p className="text-sm font-semibold">{l.priceBdt}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}

