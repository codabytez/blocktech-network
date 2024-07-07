import { NextPage } from "next";
import TradeExecution from "@/modules/fixed-income/trade-execution";
import FixedIncomeMarket from "@/modules/fixed-income/fixed-income-market";
import RelatedInsights from "@/modules/fixed-income/related-insights";
import CTA from "@/modules/fixed-income/cta";
import FixedIncomeHero from "@/modules/fixed-income/hero";

const FixedIncome: NextPage = () => {
  return (
    <div>
      <FixedIncomeHero />
      <div className="px-3 lg:px-24">
        <TradeExecution />
        <FixedIncomeMarket />
        <RelatedInsights />
        <CTA />
      </div>
    </div>
  );
};

export default FixedIncome;
