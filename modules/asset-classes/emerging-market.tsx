import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import commodities from "@/public/images/Hero-Data_Tech-1920x550-02.jpg";

const EmergingMarket: NextPage = () => {
  return (
    <div className="flex gap-4 flex-col">
      <div className="flex flex-col items-stretch gap-4 sm:flex-row flex-grow">
        <div className="sm:flex-1 relative overflow-hidden">
          <Image
            src={commodities}
            alt="Commodities"
            width={1920}
            height={550}
            className="w-full sm:absolute sm:left-0 sm:top-0 sm:h-full object-cover object-center"
          />
        </div>
        <div className="sm:flex-1 overflow-hidden">
          <div className="pr-5 pb-20">
            <div className="">
              <h3 className="m-0 font-headings border-0 pb-0 mers:border-b-2 mers:border-solid mers:border-secondary mers:pb-2.5 print:orphans-3 print:widows-3 font-medium normal-case leading-none print:break-after-avoid text-xl md:text-3xl">
                Trade more than 60 FX contracts including the world’s most
                heavily traded majors, cross rates and emerging markets currency
                pairs
              </h3>
            </div>
            <div className="h-4"></div>
            <div className="flex gap-x-4 text-left flex-col md:flex-row">
              <div className="flex-1">
                <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                  <Link
                    href="#"
                    className="flex w-full flex-col hover:no-underline text-black"
                  >
                    <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                      <div className="">Cross Rates</div>
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
                      Access the most actively traded crosses derived from the
                      three major non-U.S. dollar currencies; the Euro, the UK
                      pound and the Yen
                    </div>
                  </Link>
                </div>
                <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                  <Link
                    href="#"
                    className="flex w-full flex-col hover:no-underline text-black"
                  >
                    <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                      <div className="">Emerging Markets</div>
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
                      Manage currency exposure across key emerging markets with
                      our broad range of currency futures including the
                      Brazilian real, Colombian peso, Indian rupee, Israeli
                      shekel, Mexican peso, Polish zloty, Russian ruble and
                      Turkish lira
                    </div>
                  </Link>
                </div>
                <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                  <Link
                    href="#"
                    className="flex w-full flex-col hover:no-underline text-black"
                  >
                    <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                      <div className="">Majors</div>
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
                      Access futures contracts on all major currency pairs,
                      including the five most liquid and widely traded pairs in
                      the world: EUR/USD, USD/JPY, GBP/USD, USD/CAN and USD/CHF
                    </div>
                  </Link>
                </div>
                <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                  <Link
                    href="#"
                    className="flex w-full flex-col hover:no-underline text-black"
                  >
                    <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                      <div className="">U.S. Dollar Index</div>
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
                      A leading benchmark for the international value of the
                      U.S. dollar and the world’s most widely-recognized traded
                      currency index
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16"></div>
    </div>
  );
};

export default EmergingMarket;
