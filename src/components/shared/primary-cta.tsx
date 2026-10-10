import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PrimaryCtaProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

function PrimaryCta({ href, children, className }: PrimaryCtaProps) {
  return (
    <Button
      render={<a href={href}>{children}</a>}
      variant="outline"
      className={cn(
        "h-14 rounded-xl border-border bg-text-inverse! px-6 text-body-md font-semibold text-background transition-colors hover:bg-text-inverse/80! hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
        className,
      )}
    >
      {children}
    </Button>
  );
}

export { PrimaryCta };
