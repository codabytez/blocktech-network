"use client";
import { NextPage } from "next";
import Link from "next/link";

const WhyBlockTech: NextPage = () => {
  return (
    <>
      <section className="relative max-w-[540px] bg-[#FBFBFB] text-[#202020] sm:max-w-full section-half">
        <div className="container max-w-[1140px] w-full px-2 mx-auto">
          <div className="flex flex-wrap -mx-2">
            <div className="relative w-full mx-2 md:flex-[0_0_50%] md:max-w-1/2">
              <div className="py-16 text-[#202020]">
                <h2 className="mb-10 font-light relative pt-4 text-3xl">
                  Why BlockTech?
                </h2>

                <p className="mb-6 font-light">
                  We bring transparency to financial markets offering portfolio
                  managers access to liquid alpha strategies from around the
                  world via our FCA-regulated (UK) asset manager.
                </p>

                <p className="mb-6 font-light">
                  Our risk management algorithms monitor trades in real time,
                  protecting Stakers.
                </p>

                <p className="mb-6 font-light">
                  Hence, investors know beforehand how much they are risking at
                  any moment of time.
                </p>

                <p className="font-light">
                  <strong>BlockTech = The Hedge Fund of the Future.</strong>
                </p>

                <p className="mt-10 text-center font-light text-sm md:text-base md:min-w-[266px] w-full max-w-[400px] min-w-[240px] my-2 mx-auto uppercase text-[#202020] bg-transparent border border-[#202020] py-2 px-6 rounded-[20px]">
                  <Link href="#" className="text-xs">
                    Check out {"BlockTech's"} performance
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>
        {`
        .section-half:before {
    content: "";
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #fff;
    background-image: url(https://matston.com/en/statics-home/1_21_0/images/bg/bg-laptop-mobile.jpg);
    background-position: 0;
}


        @media (min-width: 576px) {
    .section-half:before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: calc(50% + .25rem);
        border-left: .5rem solid #fff;
    }
}`}
      </style>
    </>
  );
};

export default WhyBlockTech;
