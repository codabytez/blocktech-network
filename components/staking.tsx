import StakingOffer from "@/modules/staking/staking-offer";
import TradingViewSlider from "@/modules/staking/trading-view-slider";
import { NextPage } from "next";

const Staking: NextPage = () => {
  return (
    <div className="gap-6 flex flex-wrap -mx-3">
      <div className="w-full max-w-full px-3 xl:flex-[0_0_auto]">
        <div className="mb-8 shadow bg-white rounded">
          <TradingViewSlider />
          <StakingOffer />
        </div>
      </div>
    </div>
  );
};

export default Staking;
