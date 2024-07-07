import StakeHero from "@/modules/stake/hero";
import HowItWorks from "@/modules/stake/how-it-works";
import PortfolioManager from "@/modules/stake/portfolio-manager";
import StakeStats from "@/modules/stake/stats";
import WhyBlockTech from "@/modules/stake/why-blocktech";
import { NextPage } from "next";

const Stake: NextPage = () => {
  return (
    <div>
      <StakeHero />
      <StakeStats />
      <WhyBlockTech />
      <HowItWorks />
      <PortfolioManager />
    </div>
  );
};

export default Stake;
