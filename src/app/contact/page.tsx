import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dhaka Prime Flips to buy or sell secondary apartments in prime Dhaka locations.",
};

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Dhaka Prime Flips"
      description="Tell us what you need. We’ll respond with next steps. (Dummy/static form.)"
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Card>
            <CardContent className="py-8">
              <p className="text-sm font-semibold tracking-tight">Send a message</p>
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
                  <Field label="Email (optional)">
                    <Input placeholder="hello@example.com" inputMode="email" />
                  </Field>
                  <Field label="I am a">
                    <Input placeholder="Buyer / Seller" />
                  </Field>
                </div>
                <Field label="Message">
                  <Textarea placeholder="Share your budget / area or your apartment details..." />
                </Field>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button size="lg" type="button">
                    Submit
                  </Button>
                  <p className="text-xs text-muted">
                    No backend connected yet—this is production-ready UI structure.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-5">
          <div className="grid gap-4">
            <Info
              icon={<MapPin className="size-4" aria-hidden="true" />}
              title="Service area"
              value="Gulshan–Banani–Dhanmondi, Dhaka"
            />
            <Info
              icon={<Phone className="size-4" aria-hidden="true" />}
              title="Phone"
              value="+880 1X XXXX XXXX"
            />
            <Info
              icon={<Mail className="size-4" aria-hidden="true" />}
              title="Email"
              value="hello@dhakaprimeflips.com"
            />
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

function Info({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
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
            <p className="mt-1 text-sm text-muted">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

