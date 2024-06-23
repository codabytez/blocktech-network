import { NextPage } from "next";
import CTA from "@/modules/exchanges-clearing/cta";
import ExchangesClearingHero from "@/modules/exchanges-clearing/hero";
import Infrastructure from "@/modules/exchanges-clearing/infrastructure";
import Resources from "@/modules/exchanges-clearing/resources";
import Services from "@/modules/exchanges-clearing/services";
import Solution from "@/modules/exchanges-clearing/solution";

const ExchangesClearing: NextPage = () => {
  return (
    <div>
      <ExchangesClearingHero />
      <div className="px-3 lg:px-24">
        <Infrastructure />
        <Services />
        <Resources />
        <Solution />
        <CTA />
      </div>
    </div>
  );
};

export default ExchangesClearing;
