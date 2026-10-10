import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionBadgeProps = {
  children: ReactNode;
  className?: string;
};

function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-4 text-body-sm font-medium tracking-[0.08em] text-text-inverse/70 uppercase",
        className,
      )}
    >
      <span aria-hidden="true" className="size-2 bg-brand" />
      <span>{children}</span>
      <span aria-hidden="true" className="size-2 bg-brand" />
    </div>
  );
}

export { SectionBadge };
