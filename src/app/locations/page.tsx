import type { Metadata } from "next";

import { PageShell } from "@/components/site/page-shell";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Prime locations",
  description:
    "Dhaka Prime Flips focuses on prime Dhaka neighborhoods for secondary apartments.",
};

export default function LocationsPage() {
  return (
    <PageShell
      title="Prime locations"
      description="A lightweight internal page placeholder for future expansion."
    >
      <Card>
        <CardContent className="py-8">
          <p className="text-sm font-semibold tracking-tight">
            Coming soon
          </p>
          <p className="mt-2 text-sm text-muted">
            We’ll expand this page with neighborhood guides, demand insights, and
            inventory filters.
          </p>
        </CardContent>
      </Card>
    </PageShell>
  );
}

