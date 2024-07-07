import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import commodity from "@/public/images/Hero-Commodities-1920x550-10.jpg";

const GlobalMarket: NextPage = () => {
  return (
    <div className="flex gap-4 flex-col">
      <div className="flex flex-col items-stretch gap-4 flex-grow sm:flex-row-reverse">
        <div className="sm:flex-1 relative overflow-hidden">
          <Image
            src={commodity}
            alt="Commodities"
            width={1920}
            height={550}
            className="w-full sm:absolute sm:left-0 sm:top-0 sm:h-full object-cover object-center"
          />
        </div>
        <div className="sm:flex-1 overflow-hidden">
          <div className="pr-5">
            <div className="">
              <h3 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none print:break-after-avoid text-2xl md:text-4xl">
                BlockTech powers the energy markets with a global market complex
              </h3>
              <div className="mb-4"></div>
            </div>
            <div className="flex gap-x-4 text-left flex-col md:flex-row">
              <div className="flex-1">
                <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                  <Link
                    href="#"
                    className="flex w-full flex-col hover:no-underline text-black"
                  >
                    <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                      <div className="">Oil</div>
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
                      Brent crude is the cornerstone of our complex, which
                      includes benchmarks Gasoil, WTI and (Platts) Dubai. Our
                      broad Asian offering sets the standard for Asia-bound
                      Mideast crude, while BlockTech Murban Futures will bring
                      transparent pricing to a fuel that helps meet regional
                      demand
                    </div>
                  </Link>
                </div>
                <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                  <Link
                    href="#"
                    className="flex w-full flex-col hover:no-underline text-black"
                  >
                    <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                      <div className="">Natural Gas</div>
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
                      Liquid, global energy markets, including the broadest
                      range of natural gas benchmarks from the US and Canada, to
                      Europe and Asia. As the only global energy exchange and
                      home to Brent- the global barometer for crude - we have a
                      depth of liquidity, tools and data for your risk
                      management needs
                    </div>
                  </Link>
                </div>
                <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                  <Link
                    href="#"
                    className="flex w-full flex-col hover:no-underline text-black"
                  >
                    <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                      <div className="">Environmental</div>
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
                      BlockTech has been a leader in environmental markets for
                      nearly two decades. Today, our environmental markets span
                      Europe and North America — the world’s most liquid
                      environmental markets
                    </div>
                  </Link>
                </div>
                <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                  <Link
                    href="#"
                    className="flex w-full flex-col hover:no-underline text-black"
                  >
                    <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                      <div className="">Power</div>
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
                      Hundreds of financially-settled U.S. electric power
                      futures contracts as well as UK and continental European
                      power contracts, which bring all the benefits of exchange
                      transparency and clearing
                    </div>
                  </Link>
                </div>
                <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                  <Link
                    href="#"
                    className="flex w-full flex-col hover:no-underline text-black"
                  >
                    <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                      <div className="">Coal</div>
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
                      Futures and options based on the {"world's"} most
                      important international coal hubs, including Rotterdam
                      (Europe), Newcastle (Australia), and Richards Bay (South
                      Africa) as well as the emerging markets of South China and
                      Indonesia
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

export default GlobalMarket;
