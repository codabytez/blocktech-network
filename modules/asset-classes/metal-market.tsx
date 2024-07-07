import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import commodities from "@/public/images/Hero-General-1920x550-05.jpg";

const MetalMarket: NextPage = () => {
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
          <div className="pb-48 pl-5">
            <div className="">
              <h3 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none print:break-after-avoid text-xl md:text-3xl">
                We operate precious metals markets that were developed based on
                customer feedback, including the most liquid U.S. market for
                mini gold and silver futures and options
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
                      <div className="flex flex-1">Precious Metals</div>
                      <div className="flex justify-end pr-2">
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
                  </Link>
                </div>
                <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                  <Link
                    href="#"
                    className="flex w-full flex-col hover:no-underline text-black"
                  >
                    <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                      <div className="flex flex-1">View All</div>
                      <div className="flex justify-end pr-2">
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

export default MetalMarket;
