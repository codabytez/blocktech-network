import { NextPage } from "next";
import CTA from "@/modules/sustainable-finance/cta";
import RelatedInsights from "@/modules/sustainable-finance/related-insights";
import Resources from "@/modules/sustainable-finance/resources";
import Solutions from "@/modules/sustainable-finance/solutions";
import SustainableFinanceHero from "@/modules/sustainable-finance/hero";

const SustainableFinance: NextPage = () => {
  return (
    <div>
      <SustainableFinanceHero />
      <div className="px-3 lg:px-24">
        <Solutions />
        <Resources />
        <RelatedInsights />
        <CTA />
      </div>
    </div>
  );
};

export default SustainableFinance;
