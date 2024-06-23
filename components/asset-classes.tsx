import { NextPage } from "next";
import AssetMarket from "@/modules/asset-classes/asset-market";
import CTA from "@/modules/asset-classes/cta";
import EmergingMarket from "@/modules/asset-classes/emerging-market";
import GlobalMarket from "@/modules/asset-classes/global-market";
import GlobalTrading from "@/modules/asset-classes/global-trading";
import AssetClassesHero from "@/modules/asset-classes/hero";
import IncomeMarket from "@/modules/asset-classes/income-market";
import MarketData from "@/modules/asset-classes/market-data";
import MetalMarket from "@/modules/asset-classes/metal-market";
import Solutions from "@/modules/asset-classes/solutions";
import StockExchange from "@/modules/asset-classes/stock-exchange";

const AssetClasses: NextPage = () => {
  return (
    <div>
      <AssetClassesHero />
      <div className="px-3 lg:px-24">
        <MarketData />
        <GlobalMarket />
        <GlobalTrading />
        <IncomeMarket />
        <EmergingMarket />
        <AssetMarket />
        <MetalMarket />
        <StockExchange />
        <Solutions />
        <CTA />
      </div>
    </div>
  );
};

export default AssetClasses;
