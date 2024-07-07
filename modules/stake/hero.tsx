import { ROUTES } from "@/constants/routes";
import { NextPage } from "next";
import Link from "next/link";

const StakeHero: NextPage = () => {
  return (
    <section
      className="h-[400px] lg:h-[550px] flex items-center justify-center text-white pt-14 bg-cover relative"
      style={{
        backgroundImage:
          "url(https://matston.com/en/statics-home/1_21_0/images/bg/bg-skyscrappers.jpg)",
      }}
    >
      <div className="py-24 text-center">
        <div className="container max-w-[960px] w-full px-2 mx-auto">
          <h1 className="text-3xl lg:text-5xl mb-2 font-medium">
            BlockTech Growth
          </h1>
          <h2 className="mb-10 font-light text-xl lg:text-2xl">
            Growth Equity Reimagined®: Through revenue acceleration
            opportunities, operational support and access to BlockTech’s
            unparalleled resources, we’re redefining growth equity.
          </h2>
          <Link
            href={ROUTES.STAKING}
            className="min-w-[266px] uppercase text-white bg-primary border border-primary font-medium text-center py-2 px-6 rounded-[20px]"
          >
            Stake Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StakeHero;
