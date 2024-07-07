import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import noFees from "@/public/icons/icon-no-fees.svg";
import university from "@/public/icons/icon-university.svg";
import chess from "@/public/icons/icon-chess.svg";
import wallet from "@/public/icons/icon-wallet2.svg";
import { ROUTES } from "@/constants/routes";

const PortfolioManager: NextPage = () => {
  return (
    <section className="relative">
      <div className="py-24">
        <div className="container max-w-[1140px] w-full px-2 mx-auto">
          <h2 className="mb-10 font-light relative pt-4 text-[#202020] text-center text-3xl">
            Our promise to Matston portfolio managers
          </h2>
          <p className="text-center mb-12 font-light">
            Matston was born to rebalance the forces of the market and for that
            reason we want to create an aligned incentive system fair to all.
          </p>
          <div className="my-4 mx-auto sm:flex items-start flex-wrap justify-center lg:justify-between">
            <div className="text-center p-4 mb-4 sm:basis-1/2 sm:mb-0 lg:flex-1">
              <div className="w-full flex justify-center">
                <Image
                  src={noFees}
                  alt="no fees"
                  className="w-auto h-12 mb-4 xl:h-16"
                />
              </div>
              <div className="max-w-full">
                <h3 className="font-medium text-lg mb-3 text-[#202020]">
                  No hidden commissions
                </h3>
                <p className="font-light sm:px-3">
                  You pay Matston 1.2% per annum on invested equity and 20%
                  performance fee if you make money with a Matston. Matston
                  providers earn 15% and Matston 5% of the 20% performance fees.
                  The {"provider's"} only incentive is to make money
                  consistently.
                </p>
              </div>
            </div>
            <div className="text-center p-4 mb-4 sm:basis-1/2 sm:mb-0 lg:flex-1">
              <div className="w-full flex justify-center">
                <Image
                  src={university}
                  alt="university"
                  className="w-auto h-12 mb-4 xl:h-16"
                />
              </div>
              <div className="max-w-full">
                <h3 className="font-medium text-lg mb-3 text-[#202020]">
                  Matston API
                </h3>
                <p className="font-light sm:px-3">
                  Find winning strategies leveraging {"traders'"} trading
                  information in aggregate or individually.
                </p>
              </div>
            </div>
            <div className="text-center p-4 mb-4 sm:basis-1/2 sm:mb-0 lg:flex-1">
              <div className="w-full flex justify-center">
                <Image
                  src={chess}
                  alt="chess"
                  className="w-auto h-12 mb-4 xl:h-16"
                />
              </div>
              <div className="max-w-full">
                <h3 className="font-medium text-lg mb-3 text-[#202020]">
                  Use our demo account on an unlimited basis
                </h3>
                <p className="font-light sm:px-3">
                  Get comfortable with the new asset and our platform before
                  committing.
                </p>
              </div>
            </div>
            <div className="text-center p-4 mb-4 sm:basis-1/2 sm:mb-0 lg:flex-1">
              <div className="w-full flex justify-center">
                <Image
                  src={wallet}
                  alt="wallet"
                  className="w-auto h-12 mb-4 xl:h-16"
                />
              </div>
              <div className="max-w-full">
                <h3 className="font-medium text-lg mb-3 text-[#202020]">
                  We invest our own money in Matston
                </h3>
                <p className="font-light sm:px-3">
                  We assign up to € 7.5M notional to 120 Matston every month. We
                  maintain the allocation during 6 consecutive months.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href={ROUTES.SIGNUP}
              className="rounded-[20px] py-2 px-6 border font-medium text-center border-[#202020] text-[#202020] bg-transparent uppercase md:min-w-[266px]"
            >
              Open an Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioManager;
