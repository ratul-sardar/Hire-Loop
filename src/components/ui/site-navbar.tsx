import { Menu } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "#jobs", label: "Browse Jobs" },
  { href: "#company", label: "Company" },
  { href: "#pricing", label: "Pricing" },
];

const actionClassName =
  "inline-flex min-h-13 items-center justify-center rounded-xl px-6 text-body-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

function SiteNavbar() {
  return (
    <header className="fixed inset-x-0 top-5 z-10 mx-auto w-11/12 max-w-360 rounded-2xl bg-nav px-4 py-3 text-text-inverse sm:px-6.5">
      <div className="flex items-center justify-between gap-4">
        <a href="/" aria-label="HireLoop home" className="shrink-0">
          <Image
            src="/images/hireloop-logo-7e5f40.png"
            alt="HireLoop"
            width={154}
            height={44}
            priority
          />
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex"
        >
          <div className="flex items-center gap-10 text-base leading-[1.8] tracking-[-0.0125em]">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-text-inverse/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="h-6 border-l border-text-inverse/40"
          />
          <div className="flex items-center gap-4">
            <a
              href="/sign-in"
              className={`${actionClassName} text-brand hover:bg-text-inverse/10`}
            >
              Sign In
            </a>
            <a
              href="/get-started"
              className={`${actionClassName} border border-text-inverse/10 bg-brand text-primary-foreground shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] hover:bg-brand/90`}
            >
              Get Started
            </a>
          </div>
        </nav>

        <details className="group relative lg:hidden">
          <summary
            aria-label="Toggle navigation menu"
            className="flex size-11 cursor-pointer list-none items-center justify-center rounded-xl border border-text-inverse/15 text-text-inverse focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden"
          >
            <Menu aria-hidden="true" className="size-5" />
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-[calc(100%+0.75rem)] flex w-[min(20rem,calc(100vw-2rem))] flex-col gap-4 rounded-2xl border border-text-inverse/10 bg-nav p-4 shadow-xl"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-base hover:bg-text-inverse/10 focus-visible:outline-2 focus-visible:outline-ring"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2 border-t border-text-inverse/15 pt-4">
              <a
                href="/sign-in"
                className={`${actionClassName} text-brand hover:bg-text-inverse/10`}
              >
                Sign In
              </a>
              <a
                href="/get-started"
                className={`${actionClassName} border border-text-inverse/10 bg-brand text-primary-foreground shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] hover:bg-brand/90`}
              >
                Get Started
              </a>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}

export { SiteNavbar };
