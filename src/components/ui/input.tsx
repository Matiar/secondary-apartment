import * as React from "react";

import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "h-11 w-full rounded-2xl border border-border/60 bg-background/60 px-4 text-sm text-foreground shadow-soft outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-ring/25",
        className,
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";

