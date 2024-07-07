import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import commodities from "@/public/images/Hero-NYSE-1920x550-13.jpg";

const StockExchange: NextPage = () => {
  return (
    <div className="flex gap-4 flex-col">
      <div className="flex flex-col items-stretch gap-4 flex-grow sm:flex-row-reverse">
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
          <div className="pb-48 pl-5">
            <div className="">
              <h3 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none print:break-after-avoid text-xl md:text-3xl">
                Connect to the world’s largest stock exchange and manage
                exposure to equities
              </h3>
              <div className="mb-6"></div>
            </div>
            <div className="flex gap-x-4 text-left flex-col md:flex-row">
              <div className="flex-1">
                <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                  <Link
                    href="#"
                    className="flex w-full flex-col hover:no-underline text-black"
                  >
                    <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                      <div className="">Cash Equities</div>
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
                      The world’s largest and most trusted equities exchange,
                      The New York Stock Exchange.
                    </div>
                  </Link>
                </div>
                <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                  <Link
                    href="#"
                    className="flex w-full flex-col hover:no-underline text-black"
                  >
                    <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                      <div className="">Equity Derivatives</div>
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
                      From emerging to developed markets, gain exposure to
                      global equities with BlockTech’s derivatives offering.
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

export default StockExchange;
