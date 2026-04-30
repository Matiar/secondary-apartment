import * as React from "react";

import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "min-h-[120px] w-full resize-none rounded-2xl border border-border/60 bg-background/60 px-4 py-3 text-sm text-foreground shadow-soft outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-ring/25",
        className,
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

