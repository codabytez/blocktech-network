import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import sunrise from "@/public/images/Hero-ESG-1920x550-01.jpg";

const Solutions: NextPage = () => {
  return (
    <div className="pb-10 xl:pb-20">
      <div className="pb-0 xl:pb-5">
        <div>
          <div className="text-center">
            <h2 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none text-3xl md:text-5xl">
              Solutions
            </h2>
            <hr className="border-0 border-black border-t-2 w-1/5 border-solid mx-auto my-4" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch gap-4 flex-grow sm:flex-row-reverse">
        <div className="sm:flex-1 relative overflow-hidden">
          <Image
            src={sunrise}
            alt="Sunrise through forest"
            width={1920}
            height={550}
            className="w-full sm:absolute sm:left-0 sm:top-0 sm:h-full object-cover object-center"
          />
        </div>
        <div className="sm:flex-1 overflow-hidden">
          <div className="flex gap-x-4 text-left flex-col md:flex-row">
            <div className="flex-1">
              <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                <Link
                  href="#"
                  className="flex w-full flex-col hover:no-underline text-black"
                >
                  <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                    <p>Environmental Markets </p>
                    <div className="flex flex-1 justify-start pl-4">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        className="shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-[0.75rem] font-light md:text-xs">
                    Sustainable markets to price climate risk. Where there is
                    risk, there is opportunity. Climate risk mitigation is
                    impacting the evolution of the energy landscape. The energy
                    transition is a long-term phenomenon, underpinned by a
                    market-based economy that can deliver cost-effective and
                    scalable solutions. ICE has been a leader in environmental
                    markets for nearly two decades. Today, our environmental
                    markets span Europe and North America — the world’s most
                    liquid environmental markets.
                  </div>
                </Link>
              </div>
              <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                <Link
                  href="#"
                  className="flex w-full flex-col hover:no-underline text-black"
                >
                  <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                    <p>Sustainable Finance Data</p>
                    <div className="flex flex-1 justify-start pl-4">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        className="shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-[0.75rem] font-light md:text-xs">
                    A sharper focus on sustainability means institutions and
                    finance professionals are looking beyond traditional
                    analysis to assess risks and opportunities, and are
                    factoring in environmental, social and governance (ESG)
                    issues into their decision-making. ICE offers a range of
                    cross asset sustainable finance data and tools that provide
                    a comprehensive view of ESG issues across the market to help
                    you uncover opportunities, manage risk, and provide
                    transparency to your client.
                  </div>
                </Link>
              </div>
              <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                <Link
                  href="#"
                  className="flex w-full flex-col hover:no-underline text-black"
                >
                  <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                    <p>ESG Equity Derivatives </p>
                    <div className="flex flex-1 justify-start pl-4">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        className="shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-[0.75rem] font-light md:text-xs">
                    A range of highly liquid futures that include climate and
                    ESG strategies for investors seeking to access and hedge ESG
                    exposure.
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
