"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, PhoneCall } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Brand } from "@/components/site/brand";

const nav = [
  { href: "/buy", label: "Buy" },
  { href: "/sell", label: "Sell" },
  { href: "/process", label: "How it works" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/55">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Brand />
          <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium text-muted transition-colors hover:text-foreground",
                    active && "text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            className="hidden md:inline-flex"
            asChild
          >
            <Link href="/contact">
              <PhoneCall className="size-4" aria-hidden="true" />
              Talk to us
            </Link>
          </Button>
          <Button asChild>
            <Link href="/sell">
              Sell fast
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>

          <button
            type="button"
            className="ml-1 inline-flex size-10 items-center justify-center rounded-full border border-border/60 bg-surface/60 text-foreground shadow-soft md:hidden"
            aria-label="Open menu"
            onClick={() => {
              const el = document.getElementById("mobile-nav");
              el?.toggleAttribute("data-open");
            }}
          >
            <Menu className="size-4" aria-hidden="true" />
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className="border-t border-border/50 bg-background/80 backdrop-blur md:hidden data-[open]:block hidden"
      >
        <Container className="py-3">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-2 text-sm font-medium text-foreground hover:bg-surface/70"
                onClick={() => {
                  document.getElementById("mobile-nav")?.removeAttribute("data-open");
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-2xl px-3 py-2 text-sm font-medium text-foreground hover:bg-surface/70"
              onClick={() => {
                document.getElementById("mobile-nav")?.removeAttribute("data-open");
              }}
            >
              Contact
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}

