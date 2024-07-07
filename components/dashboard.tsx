import Calculator from "@/modules/dashboard/calculator";
import MarketOverview from "@/modules/dashboard/market-overview";
import RecentTransaction from "@/modules/dashboard/recent-transaction";
import TradingView from "@/modules/dashboard/trading-view";
import UserCards from "@/modules/dashboard/user-cards";
import { NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <>
      <TradingView />
      <MarketOverview />
      <Calculator />
      <UserCards />
      <RecentTransaction />
    </>
  );
};

export default Dashboard;
