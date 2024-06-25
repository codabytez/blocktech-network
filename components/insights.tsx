import { NextPage } from "next";
import Image from "next/image";
import investorCapital from "@/public/images/investor-capital.png";
import Link from "next/link";

const Insights: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Image
        src={investorCapital}
        width={500}
        height={200}
        alt="investor capital"
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">
            Trade Multiple Asset Classes
          </h3>
          <p className="text-gray-700">
            Stake in any Crypto, US Stock, 60+ Futures, FX, CFDs and Matson
            Assets (
            <Link href="#" className="text-blue-500">
              learn more
            </Link>
            ). Take advantage of our competitive Stake strategic and exceptional
            execution quality.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">
            Our Tech Supports Your Success
          </h3>
          <p className="text-gray-700">
            With multiple platforms & APIs, proprietary strategy analytics, a
            €90M/year and seamless track record migration, Matson supports you
            every step of the way.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">
            Kickstart a long-term impact
          </h3>
          <p className="text-gray-700">
            We are invested in long-life, high-quality assets and businesses
            around the world that form the backbone of the global economy.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">
            Stake in Top-Tier Strategies
          </h3>
          <p className="text-gray-700">
            Build new or diversify existing investment portfolios with 3,000+
            listed trading strategies, uncorrelated to any other asset class.
            Our{" "}
            <Link href="#" className="text-blue-500">
              Risk Engine
            </Link>{" "}
            protects your investments in real-time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Insights;
