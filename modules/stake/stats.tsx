"use client";
import { NextPage } from "next";
import React from "react";

const StakeStats: NextPage = () => {
  return (
    <>
      <section className="text-white relative bg-[#202020]">
        <div className="py-6">
          <div className="container max-w-[1140px] w-full px-2 mx-auto">
            <ul className="flex md:items-stretch text-center justify-between -mx-2">
              <li className="py-4 md:px-8 md:justify-start relative flex-col justify-center md:flex-[0_0_25%] md:max-w-[25%] flex-[0_0_50%] max-w-[50%] w-full stats__item">
                <strong className="text-2xl font-bold">1,200+</strong>
                <p className="mt-2 font-medium">Investment Professionals</p>
              </li>
              <li className="py-4 md:px-8 md:justify-start relative flex-col justify-center md:flex-[0_0_25%] md:max-w-[25%] flex-[0_0_50%] max-w-[50%] w-full stats__item">
                <strong className="text-3xl font-bold">~5000</strong>
                <p className="mt-2 font-medium">Operating Employees</p>
              </li>
              <li className="py-4 md:px-8 md:justify-start relative flex-col justify-center md:flex-[0_0_25%] md:max-w-[25%] flex-[0_0_50%] max-w-[50%] w-full stats__item">
                <strong className="text-2xl font-bold">30+</strong>
                <p className="mt-2 font-medium">
                  Countries across five continents
                </p>
              </li>
              <li className="py-4 md:px-8 md:justify-start relative flex-col justify-center md:flex-[0_0_25%] md:max-w-[25%] flex-[0_0_50%] max-w-[50%] w-full stats__item">
                <strong className="text-2xl font-bold">2,000+</strong>
                <p className="mt-2 font-medium">Investments Globally</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <style>{`
        .stats__item:not(:last-child):before {
        content: "";
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        height: 3.5rem;
        right: 0;
        width: 1px;
        background-color: #fff;}
    `}</style>
    </>
  );
};

export default StakeStats;
