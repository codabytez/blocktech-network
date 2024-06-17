import AssetClassesHero from "@/modules/asset-classes/hero";
import MarketData from "@/modules/asset-classes/market-data";

const AssetClassesPage = () => {
  return (
    <div>
      <AssetClassesHero />
      <div className="px-3 lg:px-24">
        <MarketData />
      </div>
    </div>
  );
};

export default AssetClassesPage;
