import { ActiveJobsCard } from "@/components/ui/active-jobs-card";
import { SiteNavbar } from "@/components/ui/site-navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-4 sm:p-6">
      <SiteNavbar />
      <div className="flex min-h-[calc(100vh-7rem)] items-center justify-center">
        <ActiveJobsCard />
      </div>
    </main>
  );
}
