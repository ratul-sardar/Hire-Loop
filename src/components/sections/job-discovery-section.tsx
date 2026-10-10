import { JobCard } from "@/components/shared/job-card";
import { PrimaryCta } from "@/components/shared/primary-cta";
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

      <PrimaryCta href="#jobs" className="mt-10">
        View all job openings
      </PrimaryCta>
    </section>
  );
}

export { JobDiscoverySection };
