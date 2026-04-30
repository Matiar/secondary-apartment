import Link from "next/link";
import { Globe, Link2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Brand } from "@/components/site/brand";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Brand />
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              A premium Dhaka-based real estate trading company focused on verified
              secondary apartments in prime locations. Buy confidently. Sell faster.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold">Navigate</p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>
                  <Link className="hover:text-foreground" href="/buy">
                    Buy
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-foreground" href="/sell">
                    Sell
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-foreground" href="/listings">
                    Verified listings
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-foreground" href="/process">
                    How it works
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold">Company</p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>
                  <Link className="hover:text-foreground" href="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-foreground" href="/locations">
                    Prime locations
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-foreground" href="/valuation">
                    Valuation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold">Social</p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>
                  <a className="inline-flex items-center gap-2 hover:text-foreground" href="#">
                    <Globe className="size-4" aria-hidden="true" />
                    Updates
                  </a>
                </li>
                <li>
                  <a className="inline-flex items-center gap-2 hover:text-foreground" href="#">
                    <MessageCircle className="size-4" aria-hidden="true" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a className="inline-flex items-center gap-2 hover:text-foreground" href="#">
                    <Link2 className="size-4" aria-hidden="true" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-3 space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>Gulshan–Banani–Dhanmondi, Dhaka</span>
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>+880 1X XXXX XXXX</span>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>hello@dhakaprimeflips.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/50 pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dhaka Prime Flips. All rights reserved.</p>
          <p className="max-w-2xl leading-5">
            Disclaimer: This website uses dummy data for demonstration. Listings and
            valuations shown are illustrative only.
          </p>
        </div>
      </Container>
    </footer>
  );
}

