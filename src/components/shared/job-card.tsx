import {
  ArrowRight,
  BriefcaseBusiness,
  CircleDollarSign,
  MapPin,
} from "lucide-react";

import { cn } from "@/lib/utils";

type JobCardProps = {
  title: string;
  description: string;
  location: string;
  workType: string;
  salary: string;
  className?: string;
};

function JobCard({
  title,
  description,
  location,
  workType,
  salary,
  className,
}: JobCardProps) {
  return (
    <article
      className={cn(
        "group flex min-h-90.75 flex-col rounded-3xl bg-surface-card p-6 transition-[background-color,box-shadow,transform] duration-300 hover:bg-[linear-gradient(180deg,#1d1d1d_0%,#151515_100%)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35),0_16px_32px_rgba(0,0,0,0.18)]",
        className,
      )}
    >
      <div>
        <h3 className="font-sans text-body-xl font-medium tracking-[-0.02em] text-text-inverse">
          {title}
        </h3>
        <p className="mt-3 max-w-100 text-body-md leading-[1.7] text-text-inverse/60">
          {description}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2.5">
        <span className="inline-flex items-center gap-2 rounded-full bg-surface-chip px-3.5 py-2 text-body-sm font-medium text-text-inverse">
          <MapPin aria-hidden="true" className="size-4 text-brand-soft" />
          {location}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-surface-chip px-3.5 py-2 text-body-sm font-medium text-text-inverse">
          <BriefcaseBusiness
            aria-hidden="true"
            className="size-4 text-brand-soft"
          />
          {workType}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-surface-chip px-3.5 py-2 text-body-sm font-medium text-text-inverse">
          <CircleDollarSign
            aria-hidden="true"
            className="size-4 text-brand-soft"
          />
          {salary}
        </span>
      </div>

      <a
        href="#apply"
        className="mt-auto inline-flex w-fit items-center gap-3 pt-10 text-body-lg font-medium text-text-inverse transition-colors hover:text-brand-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        Apply Now
        <ArrowRight
          aria-hidden="true"
          className="size-5 transition-transform group-hover:translate-x-1"
        />
      </a>
    </article>
  );
}

export { JobCard };
