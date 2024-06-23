import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import roadNetwork from "@/public/images/Hero-ESG-1920x550-26.jpg";

const TradeExecution: NextPage = () => {
  return (
    <div className="pb-10 xl:pb-20">
      <div className="pb-0 xl:pb-5">
        <p>
          <div className="text-center">
            <h2 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none print:break-after-avoid text-3xl md:text-5xl">
              Trade Execution
            </h2>
            <hr className="border-0 border-black border-t-2 w-1/5 border-solid mx-auto my-4" />
          </div>
        </p>
      </div>
      <div className="flex flex-col items-stretch gap-4 flex-grow sm:flex-row-reverse">
        <div className="sm:flex-1 relative overflow-hidden">
          <Image
            src={roadNetwork}
            alt="Road network"
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
                    <p>BlockTech Bonds</p>
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
                    Offering deep liquidity pools that support multiple trading
                    protocols.
                  </div>
                </Link>
              </div>
              <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                <Link
                  href="#"
                  className="flex w-full flex-col hover:no-underline text-black"
                >
                  <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                    <p>BlockTech Credit Trade</p>
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
                    Auction-style trading for investment grade, high yield
                    corporate and emerging market bonds.
                  </div>
                </Link>
              </div>
              <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                <Link
                  href="#"
                  className="flex w-full flex-col hover:no-underline text-black"
                >
                  <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                    <p>BlockTech Bond Curves</p>
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
                  <p className="text-[0.75rem] font-light md:text-xs">
                    Gain more insight into financial markets with our
                    comprehensive curve offerings.
                  </p>
                </Link>
              </div>
              <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                <Link
                  href="#"
                  className="flex w-full flex-col hover:no-underline text-black"
                >
                  <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                    <p>Fixed Income Trading Analytics</p>
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
                    Increase transparency and help modernize your fixed income
                    order flow.
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

export default TradeExecution;
