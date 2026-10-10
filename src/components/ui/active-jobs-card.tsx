import { SearchCheck } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ActiveJobsCardProps = {
  className?: string;
  count?: string;
  label?: string;
  icon?: ReactNode;
};

function ActiveJobsCard({
  className,
  count = "50K",
  label = "Active Jobs",
  icon,
}: ActiveJobsCardProps) {
  return (
    <article
      data-slot="card"
      aria-label={`${count} ${label}`}
      className={cn(
        "flex w-full max-w-88 flex-col gap-18 rounded-2xl border border-text-inverse/10 bg-(image:--card-gradient) p-6 text-text-inverse shadow-sm",
        className,
      )}
    >
      {icon ?? (
        <SearchCheck aria-hidden="true" className="size-6 stroke-[1.7]" />
      )}
      <div className="flex flex-col gap-4">
        <p className="font-heading text-[56px] leading-[1.15] font-semibold tracking-[-0.02em]">
          {count}
        </p>
        <p className="text-body-lg font-normal">{label}</p>
      </div>
    </article>
  );
}

export { ActiveJobsCard };
