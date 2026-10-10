import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SecondaryCtaProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

function SecondaryCta({ href, children, className }: SecondaryCtaProps) {
  return (
    <Button
      render={<a href={href}>{children}</a>}
      variant="outline"
      className={cn(
        "h-14 rounded-xl border-border bg-transparent px-6 text-body-md font-medium text-text-inverse transition-colors hover:bg-text-inverse/10 hover:text-text-inverse focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
        className,
      )}
    >
      {children}
    </Button>
  );
}

export { SecondaryCta };
