import { Pin } from "lucide-react";
import Image from "next/image";

import { PrimaryCta } from "@/components/shared/primary-cta";
import { SecondaryCta } from "@/components/shared/secondary-cta";

const footerGroups = [
  {
    title: "Product",
    links: ["Job discovery", "Worker AI", "Companies", "Salary data"],
  },
  {
    title: "Navigations",
    links: ["Help center", "Career library", "Contact"],
  },
  {
    title: "Resources",
    links: ["Brand Guideline", "Newsroom"],
  },
];

function FooterSection() {
  return (
    <footer
      className="overflow-hidden bg-surface-950 bg-top bg-no-repeat text-text-inverse"
      style={{
        backgroundImage: "url('/images/footer-bg.png')",
        backgroundSize: "100% auto",
      }}
    >
      <div className="relative flex min-h-100 flex-col items-center justify-center px-6 py-20 text-center sm:px-10 lg:min-h-116 lg:py-24">
        <div className="relative z-10 flex max-w-2xl flex-col items-center">
          <h2 className="max-w-2xl text-text-inverse">
            Your next role is
            <br />
            already looking for you
          </h2>
          <p className="mt-5 text-body-md text-text-inverse/90 sm:text-body-lg">
            Build a profile in three minutes. The matches start arriving
            tomorrow morning.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <PrimaryCta href="/sign-up">Create a free account</PrimaryCta>
            <SecondaryCta href="/pricing">View pricing</SecondaryCta>
          </div>
        </div>
      </div>

      <div className="section-container pt-12! pb-8! sm:pt-16! sm:pb-10!">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(3,1fr)] lg:gap-8">
          <div className="max-w-xs">
            <Image
              src="/images/hireloop-logo-7e5f40.png"
              alt="HireLoop"
              width={154}
              height={44}
              className="h-9 w-auto object-contain object-left"
            />
            <p className="mt-5 text-body-sm leading-[1.7] text-text-inverse/50">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-body-sm font-semibold text-text-inverse">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#footer"
                      className="text-body-sm text-text-inverse/50 transition-colors hover:text-text-inverse focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-6 border-t border-text-inverse/10 pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <a
              href="#facebook"
              aria-label="Facebook"
              className="flex size-7 items-center justify-center rounded bg-text-inverse/10 text-text-inverse/70 hover:bg-text-inverse/20 hover:text-text-inverse"
            >
              <span className="text-sm font-bold">f</span>
            </a>
            <a
              href="#pinterest"
              aria-label="Pinterest"
              className="flex size-7 items-center justify-center rounded bg-brand text-text-inverse"
            >
              <Pin aria-hidden="true" className="size-4 fill-current" />
            </a>
            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="flex size-7 items-center justify-center rounded bg-text-inverse/10 text-text-inverse/70 hover:bg-text-inverse/20 hover:text-text-inverse"
            >
              <span className="text-xs font-bold">in</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-body-xs text-text-inverse/40">
            <span>Copyright 2024 — ProgrammingHero</span>
            <a href="#terms" className="hover:text-text-inverse">
              Terms &amp; Policy
            </a>
            <a href="#privacy" className="hover:text-text-inverse">
              Privacy Guideline
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { FooterSection };
