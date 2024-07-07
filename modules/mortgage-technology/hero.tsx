import { ROUTES } from "@/constants/routes";
import { NextPage } from "next";
import Link from "next/link";

const MortgageTechnologyHero: NextPage = () => {
  return (
    <section className="py-11 relative">
      <div
        className="opacity-50 xl:opacity-100 bg-cover bg-center h-full w-full absolute top-0"
        style={{
          backgroundImage:
            "url(https://static.icemortgagetechnology.com/icemt/assets/hero.jpg)",
        }}
      ></div>
      <div className="container px-8 relative z-10 mx-auto w-full">
        <div className="min-h-[400px] max-w-[800px] items-center flex flex-wrap -mx-8">
          <div className="relative flex-[1_0_0%] w-full px-8">
            <h1 className="max-w-[700px] leading-tight tracking-normal font-medium text-6xl">
              ICE is modernizing the housing finance process to help the dream
              of home ownership become a reality
            </h1>
            <p className="pb-8 leading-normal mb-4 text-xl ">
              ICE is digitizing and automating the entire real estate and
              housing finance lifecycle so critical data can flow seamlessly
              from one process to the next creating a better experience for the
              homeowner, lender and servicer.
            </p>
            <Link
              href={ROUTES.EXCHANGES_CLEARING}
              className="border-transparent text-lg uppercase whitespace-nowrap font-bold p-6 bg-black text-white border-2 text-center"
            >
              View our solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageTechnologyHero;
