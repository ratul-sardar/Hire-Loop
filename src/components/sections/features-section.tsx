import {
  BarChart3,
  Bookmark,
  Building2,
  FileText,
  MousePointerClick,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { SectionBadge } from "@/components/shared/section-badge";

const features = [
  {
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
    icon: Search,
  },
  {
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
    icon: TrendingUp,
  },
  {
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
    icon: Building2,
  },
  {
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
    icon: Bookmark,
  },
  {
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
    icon: MousePointerClick,
  },
  {
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
    icon: FileText,
  },
  {
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
    icon: Sparkles,
  },
  {
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
    icon: BarChart3,
  },
];

function FeaturesSection() {
  return (
    <section className="bg-background">
      <div className="section-container flex flex-col items-center">
        <div className="flex max-w-2xl flex-col items-center text-center">
          <SectionBadge>Features Job</SectionBadge>

          <h2 className="mt-5 max-w-xl text-text-inverse">
            Everything you need
            <br className="hidden sm:block" /> to succeed
          </h2>
        </div>

        <div className="mt-16 grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <article key={title} className="flex items-start gap-6">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-lg border border-text-inverse/10 bg-surface-950 text-brand-soft shadow-[inset_0_0_12px_rgba(255,255,255,0.04)]">
                <Icon aria-hidden="true" className="size-7 stroke-[1.5]" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-body-lg font-medium text-text-inverse">
                  {title}
                </h3>
                <p className="text-body-md text-text-inverse/60">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { FeaturesSection };
