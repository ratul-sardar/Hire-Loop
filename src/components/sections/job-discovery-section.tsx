import { JobCard } from "@/components/shared/job-card";
import { SectionBadge } from "@/components/shared/section-badge";

const jobs = [
  {
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workType: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workType: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workType: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workType: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workType: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workType: "Hybrid",
    salary: "€25–€40/hour",
  },
];

function JobDiscoverySection() {
  return (
    <section className="section-container flex flex-col items-center">
      <div className="flex flex-col items-center text-center">
        <SectionBadge>Smart Job Discovery</SectionBadge>
        <h2 className="mt-5 max-w-2xl text-text-inverse">
          The roles you&apos;d never
          <br className="hidden sm:block" /> find by searching
        </h2>
      </div>

      <div className="mt-16 grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {jobs.map((job, index) => (
          <JobCard key={`${job.title}-${index}`} {...job} />
        ))}
      </div>

      <a
        href="#jobs"
        className="mt-10 inline-flex h-14 items-center justify-center rounded-xl border border-border bg-text-inverse px-6 text-body-md font-medium text-background transition-colors hover:bg-text-inverse/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        View all job openings
      </a>
    </section>
  );
}

export { JobDiscoverySection };
