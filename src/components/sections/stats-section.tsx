import { BriefcaseBusiness, Building2, SearchCheck, Star } from "lucide-react";

import { ActiveJobsCard } from "@/components/ui/active-jobs-card";

const stats = [
  { count: "50K", label: "Active Jobs", icon: SearchCheck },
  { count: "12K", label: "Companies", icon: Building2 },
  { count: "2M", label: "Job Seekers", icon: BriefcaseBusiness },
  { count: "97%", label: "Satisfaction Rate", icon: Star },
];

function StatsSection() {
  return (
    <section className="section-container flex flex-col items-center gap-12">
      <h2 className="max-w-[760px] text-center font-sans text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.3] font-medium tracking-[-0.025em] text-text-inverse/70">
        Assisting over{" "}
        <span className="text-text-inverse">15,000 job seekers</span> find their
        dream positions.
      </h2>
      <div className="grid w-full grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ count, label, icon: Icon }) => (
          <ActiveJobsCard
            key={label}
            count={count}
            label={label}
            className="max-w-none"
            icon={<Icon aria-hidden="true" className="size-6 stroke-[1.7]" />}
          />
        ))}
      </div>
    </section>
  );
}

export { StatsSection };
