import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

export function PageShell({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("bg-background", className)}>
      <Container className="py-10 sm:py-14">
        <div className="max-w-3xl">
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-3 text-pretty text-sm leading-6 text-muted sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
      </Container>
      <Container className="pb-14 sm:pb-20">{children}</Container>
    </div>
  );
}

