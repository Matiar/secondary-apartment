import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium tracking-tight",
  {
    variants: {
      variant: {
        subtle:
          "bg-surface/70 text-foreground border border-border/60 backdrop-blur",
        solid: "bg-foreground text-background",
      },
    },
    defaultVariants: { variant: "subtle" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, className }))} {...props} />;
}

