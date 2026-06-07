import Link from "next/link";
import { Building2 } from "lucide-react";

import { cn } from "@/lib/utils";

export function Brand({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Dhaka Prime Flips home"
      className={cn("inline-flex items-center gap-2", className)}
    >
      <span className="grid size-9 place-items-center rounded-2xl bg-foreground text-background shadow-soft">
        <Building2 className="size-4" aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-semibold tracking-tight">
          Dhaka Prime Flips
        </span>
        <span className="block text-xs text-muted">Secondary Apartments • Dhaka</span>
      </span>
    </Link>
  );
}

