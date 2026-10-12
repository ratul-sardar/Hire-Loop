"use client";

import { ChartNoAxesCombined, CrownIcon, Zap } from "lucide-react";
import { useState } from "react";
import type { PricingCardType } from "@/components/sections/pricing-section/pricing-card";
import PricingCard from "@/components/sections/pricing-section/pricing-card";
import { SectionBadge } from "@/components/shared/section-badge";
import { SiteNavbar } from "@/components/ui/site-navbar";

export default function Pricing() {
  const [renewCycle, setRenewCycle] = useState<"/month" | "/year">("/month");
  const activeButtonStyle = "bg-white text-black";

  const pricingData: PricingCardType[] = [
    {
      isHighlighted: false,
      Icon: CrownIcon,
      cardTitle: "Starter",
      cardPrice: "$0",
      cardPriceDuration: renewCycle,
      cardFeatures: ["Basic profile", "email alerts"],
      ctaLink: "/",
    },
    {
      isHighlighted: true,
      Icon: ChartNoAxesCombined,
      cardTitle: "Growth",
      cardPrice: renewCycle === "/month" ? "$19" : "$171",
      cardPriceDuration: renewCycle,
      cardFeatures: [
        "Everything from Starter Plan",
        "Application tracking",
        "Salary insights",
      ],
      ctaLink: "/",
    },
    {
      isHighlighted: false,
      Icon: Zap,
      cardTitle: "Premium",
      cardPrice: renewCycle === "/month" ? "$39" : "$351",
      cardPriceDuration: renewCycle,
      cardFeatures: [
        "Everything from Starter and Growth Plan",
        "Profile boost",
        "Early access to new jobs",
        "Priority support",
      ],
      ctaLink: "/",
    },
  ];

  const RecrutesPricingData: PricingCardType[] = [
    {
      isHighlighted: false,
      Icon: CrownIcon,
      cardTitle: "Starter",
      cardPrice: "$0",
      cardPriceDuration: renewCycle,
      cardFeatures: ["Basic applicant management", "Standard visibility"],
      ctaLink: "/",
    },
    {
      isHighlighted: true,
      Icon: ChartNoAxesCombined,
      cardTitle: "Growth",
      cardPrice: renewCycle === "/month" ? "$19" : "$171",
      cardPriceDuration: renewCycle,
      cardFeatures: [
        "Everything from Starter Plan",
        "Applicant tracking",
        "Email support",
      ],
      ctaLink: "/",
    },
    {
      isHighlighted: false,
      Icon: Zap,
      cardTitle: "Premium",
      cardPrice: renewCycle === "/month" ? "$39" : "$351",
      cardPriceDuration: renewCycle,
      cardFeatures: [
        "Everything from Starter and Growth Plan",
        "Featured listings",
        "Team collaboration",
        "Custom branding",
        "Priority support",
      ],
      ctaLink: "/",
    },
  ];

  return (
    <>
      <SiteNavbar />
      <main className="">
        <section className="mt-15">
          {/*Seekers Pricing*/}
          <div className="section-container flex flex-col items-center">
            <div className="flex max-w-2xl flex-col items-center text-center">
              <SectionBadge>Pricing</SectionBadge>

              <h2 className="mt-5 max-w-xl text-text-inverse">
                Pay for the leverage,
                <br className="hidden sm:block" /> not the listings
              </h2>
            </div>

            <div className="mt-16 w-full flex flex-col items-center gap-6">
              <div className="w-fit h-fit flex gap-2 items-center justify-center rounded-full bg-white/10 border border-black/10 p-2">
                <button
                  type="button"
                  className={`${renewCycle === "/month" && activeButtonStyle} rounded-full border border-black/10 px-3 py-2 cursor-pointer transition-all ease-in-out duration-650`}
                  onClick={() => setRenewCycle("/month")}
                >
                  <p className="text-body-lg font-semibold">Monthly</p>
                </button>
                <button
                  type="button"
                  className={`${renewCycle === "/year" && activeButtonStyle} flex items-center justify-center gap-2 px-3 py-2 rounded-full cursor-pointer transition-all ease-in-out duration-650`}
                  onClick={() => setRenewCycle("/year")}
                >
                  <p className="text-body-lg font-semibold">Yearly</p>
                  <div className="bg-purple-600 px-2 py-1 rounded-full">
                    <p className="text-body-xs font-semibold text-white">25%</p>
                  </div>
                </button>
              </div>

              <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {pricingData.map(
                  ({
                    isHighlighted,
                    Icon,
                    cardTitle,
                    cardPrice,
                    cardPriceDuration,
                    cardFeatures,
                    ctaLink,
                  }) => (
                    <PricingCard
                      className="h-fit"
                      key={cardTitle}
                      isHighlighted={isHighlighted}
                      Icon={Icon}
                      cardTitle={cardTitle}
                      cardPrice={cardPrice}
                      cardPriceDuration={cardPriceDuration}
                      cardFeatures={cardFeatures}
                      ctaLink={ctaLink}
                    />
                  ),
                )}
              </div>
            </div>
          </div>

          {/*Recruters Pricing*/}
          <div className="section-container flex flex-col items-center">
            <div className="flex max-w-2xl flex-col items-center text-center">
              <h2 className="mt-5 max-w-xl text-text-inverse">
                Lookgin to hire?
                <br className="hidden sm:block" /> we got deals for you!
              </h2>
            </div>

            <div className="mt-16 w-full flex flex-col items-center gap-6">
              <div className="w-fit h-fit flex gap-2 items-center justify-center rounded-full bg-white/10 border border-black/10 p-2">
                <button
                  type="button"
                  className={`${renewCycle === "/month" && activeButtonStyle} rounded-full border border-black/10 px-3 py-2 cursor-pointer transition-all ease-in-out duration-650`}
                  onClick={() => setRenewCycle("/month")}
                >
                  <p className="text-body-lg font-semibold">Monthly</p>
                </button>
                <button
                  type="button"
                  className={`${renewCycle === "/year" && activeButtonStyle} flex items-center justify-center gap-2 px-3 py-2 rounded-full cursor-pointer transition-all ease-in-out duration-650`}
                  onClick={() => setRenewCycle("/year")}
                >
                  <p className="text-body-lg font-semibold">Yearly</p>
                  <div className="bg-purple-600 px-2 py-1 rounded-full">
                    <p className="text-body-xs font-semibold text-white">25%</p>
                  </div>
                </button>
              </div>

              <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {RecrutesPricingData.map(
                  ({
                    isHighlighted,
                    Icon,
                    cardTitle,
                    cardPrice,
                    cardPriceDuration,
                    cardFeatures,
                    ctaLink,
                  }) => (
                    <PricingCard
                      className="h-fit"
                      key={cardTitle}
                      isHighlighted={isHighlighted}
                      Icon={Icon}
                      cardTitle={cardTitle}
                      cardPrice={cardPrice}
                      cardPriceDuration={cardPriceDuration}
                      cardFeatures={cardFeatures}
                      ctaLink={ctaLink}
                    />
                  ),
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
