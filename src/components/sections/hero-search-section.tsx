"use client";

import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const searchTags = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

function HeroSearchSection() {
  return (
    <section className="section-container flex flex-col items-center text-center gap-8 lg:gap-10">
      {/* Top Banner Badge */}
      <div className="relative flex w-full items-center justify-center">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-text-inverse/10"
        />
        <div className="relative inline-flex items-center gap-2.5 rounded-full border border-text-inverse/10 bg-nav px-5 py-2.5 text-text-inverse shadow-sm">
          <span aria-hidden="true" className="text-base">
            💼
          </span>
          <span className="font-heading text-body-sm tracking-wide uppercase sm:text-body-md">
            <span className="font-semibold text-text-inverse">50,000+</span>{" "}
            <span className="font-medium text-text-inverse/60">
              NEW JOBS THIS MONTH
            </span>
          </span>
        </div>
      </div>

      {/* Main Title & Description */}
      <div className="flex max-w-4xl flex-col items-center gap-4">
        <h1>Find Your Dream Job Today</h1>
        <p className="max-w-2xl text-body-lg text-text-inverse/70 sm:text-body-xl">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>
      </div>

      {/* Main Dual Search Bar */}
      <div className="w-full max-w-4xl rounded-2xl border border-text-inverse/10 bg-surface-950 p-2.5 shadow-2xl sm:p-3">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-2 sm:flex-row sm:items-center"
        >
          {/* Job title / skill input */}
          <div className="flex flex-1 items-center gap-3 px-3 py-2">
            <Search
              aria-hidden="true"
              className="size-5 shrink-0 text-text-inverse/60"
            />
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent text-text-inverse placeholder:text-text-inverse/40 focus:outline-none"
            />
          </div>

          {/* Divider */}
          <div className="hidden h-8 w-px bg-text-inverse/15 sm:block" />

          {/* Location / Remote input */}
          <div className="flex flex-1 items-center gap-3 px-3 py-2">
            <MapPin
              aria-hidden="true"
              className="size-5 shrink-0 text-text-inverse/60"
            />
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent text-text-inverse placeholder:text-text-inverse/40 focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <Button
            type="submit"
            size="icon"
            className="size-12 shrink-0 rounded-xl bg-brand text-text-inverse hover:bg-brand/90"
            aria-label="Search jobs"
          >
            <Search aria-hidden="true" className="size-5" />
          </Button>
        </form>
      </div>

      {/* Trending Positions Quick Filter */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <span className="text-body-sm font-normal text-text-inverse/60 sm:text-body-md">
          Trending Position
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {searchTags.map((tag) => (
            <button
              key={tag}
              type="button"
              className="rounded-full border border-text-inverse/10 bg-nav px-4 py-1.5 text-body-sm font-medium text-text-inverse transition-colors hover:border-brand/50 hover:bg-surface-800"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export { HeroSearchSection };
