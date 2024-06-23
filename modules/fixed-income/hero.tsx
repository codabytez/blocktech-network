import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import cityOfficeBuilding from "@/public/images/Hero-Data_Tech-1920x550-20.jpg";

const FixedIncomeHero: NextPage = () => {
  return (
    <div className="pb-10 xl:pb-20">
      <div>
        <Image
          src={cityOfficeBuilding}
          alt="City office building"
          width={1920}
          height={550}
          className="w-full max-h-screen select-none object-cover object-center h-[550px]"
        />
        <div className="-mt-20 md:-mt-32 lg:-mt-40">
          <div className="px-3 lg:px-24">
            <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:gap-8">
              <div className="p-8 bg-black text-white">
                <div className="">
                  <div className="pb-5"></div>
                  <div className="">
                    <h1 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none print:break-after-avoid text-4xl md:text-6xl">
                      Fixed Income
                    </h1>
                    <div className="mb-6"></div>
                  </div>
                  <div className="">
                    <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                      Manage risk, uncover opportunities, and make informed
                      decisions in real-time with BlockTech’s end-to-end fixed
                      income solutions. Reimagine your fixed income workflow
                      from price transparency &amp; discovery and efficient
                      execution through to performance analysis. Make informed
                      decisions at the point of decision with actionable
                      insight. Efficient trading technology with multiple
                      protocols and solutions to meet your trading and risk
                      management needs.
                    </p>
                    <div>
                      <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium justify-center items-center no-underline focus-within:outline-none focus:outline-none focus-within:ring focus:ring leading-tight align-middle duration-75 active:translate-y-px max-w-full select-none bg-black admin:bg-primary text-white border-white shadow-lg  hover:text-primary admin:hover:text-white    active:text-primary admin:hover:text-white  active:shadow-none  checked:text-primary   text-xs md:text-sm gap-1 md:gap-4 border rounded-tl rounded-tr rounded-bl rounded-br inline-flex px-6 md:px-12 py-1 md:py-2 cursor-pointer uppercase flex-row-reverse break-words"
                      >
                        <span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
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
                        </span>
                        <span>BlockTech Fixed Income monthly report</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full self-stretch p-8 text-black bg-[#E2E2E2] shrink-0 lg:w-max lg:self-end">
                <div className="contents">
                  <div className="">
                    <div className="">
                      <div>
                        <span className="font-bold">
                          Fixed Income &amp; Data Services
                        </span>
                      </div>
                      <hr className="border-0 border-black border-t-2 border-solid mx-0 my-4" />
                    </div>
                    <div className="">
                      <div className="flex gap-x-4 text-left flex-col md:flex-row">
                        <div className="flex-1">
                          <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                            <Link
                              href="#"
                              className="flex w-full flex-col hover:no-underline text-black"
                            >
                              <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                                <div className="flex flex-1">
                                  Data &amp; Analytics
                                </div>
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
                                <div className="flex flex-1">
                                  Access &amp; Delivery
                                </div>
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
                                <div className="flex flex-1">Fixed Income</div>
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
                                <div className="flex flex-1">
                                  Index Solutions
                                </div>
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
                        <div className="flex-1">
                          <div className="flex py-2 border-t md:first:border-t-0 border-black">
                            <Link
                              href="#"
                              className="flex w-full flex-col hover:no-underline text-black"
                            >
                              <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                                <div className="flex flex-1">
                                  Sustainable Finance
                                </div>
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
                          <div className="flex py-2 border-t md:first:border-t-0 border-black">
                            <Link
                              href="#"
                              className="flex w-full flex-col hover:no-underline text-black"
                            >
                              <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                                <div className="flex flex-1">
                                  Regulation Compliance
                                </div>
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
                          <div className="flex py-2 border-t md:first:border-t-0 border-black">
                            <Link
                              href="#"
                              className="flex w-full flex-col hover:no-underline text-black"
                            >
                              <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                                <div className="flex flex-1">
                                  Strategic Alliances
                                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedIncomeHero;
