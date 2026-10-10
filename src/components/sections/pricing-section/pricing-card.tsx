import { cn } from "cn";
import type { LucideIcon } from "lucide-react";
import { ArrowRightIcon, CrownIcon, PlusIcon } from "lucide-react";
import { PrimaryCta } from "@/components/shared/primary-cta";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type PricingCardType = {
  className?: string;
  isHighlighted?: boolean;
  Icon: LucideIcon;
  cardTitle: string;
  cardPrice: string;
  cardPriceDuration: string;
  cardFeatures: string[];
  ctaLink: string;
};

const demoFeatures = ["Demo Feature", "Demo Feature"];

export default function PricingCard({
  className,
  isHighlighted = false,
  Icon = CrownIcon,
  cardTitle = "Starter",
  cardPrice = "$0",
  cardPriceDuration = "/month",
  cardFeatures = [...demoFeatures],
  ctaLink = "/",
}: PricingCardType) {
  return (
    <Card
      className={cn(
        `w-full max-w-120 p-6 border border-border rounded-3xl ${isHighlighted ? "bg-[linear-gradient(180deg,#1d1d1d_0%,#151515_100%)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35),0_16px_32px_rgba(0,0,0,0.18)]" : ""}`,
        className,
      )}
    >
      <CardHeader className="p-0 flex items-center justify-between">
        <CardTitle className="flex items-center justify-center gap-1.5">
          <div className="p-2 rounded-md border border-border">
            <Icon size={16} color="#F7C2FF" />
          </div>
          <h6 className="">{cardTitle}</h6>
        </CardTitle>
        <CardAction className="flex items-end justify-center">
          <h3 className="">{cardPrice}</h3>
          <p className="text-body-sm font-normal">{cardPriceDuration}</p>
        </CardAction>
      </CardHeader>
      <CardContent className="mt-8 p-0 flex flex-col gap-4">
        <p className="text-body-lg font-semibold text-text-inverse">
          Start building your insights hub:
        </p>

        <ul className="w-full space-y-2">
          {cardFeatures.map((feature) => (
            <li key={feature} className="w-full flex items-center gap-2">
              <div className="p-1.5 rounded-md border border-border">
                <PlusIcon size={14} color="#F7C2FF" />
              </div>
              {feature}
            </li>
          ))}
        </ul>
        <PrimaryCta
          href={ctaLink}
          className="w-full mt-16 flex items-center justify-between"
        >
          Choose This Plan
          <ArrowRightIcon size={16} />
        </PrimaryCta>
      </CardContent>
    </Card>
  );
}
