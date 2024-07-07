import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import corporateRooftop from "@/public/images/Hero-ESG-1920x550-14.jpg";

const SustainableFinanceHero: NextPage = () => {
  return (
    <div className="pb-10 xl:pb-20">
      <div>
        <Image
          src={corporateRooftop}
          alt="Corporate rooftop"
          width={1920}
          height={550}
          className="w-full max-h-screen select-none object-cover object-center h-[550px]"
        />
        <div className="-mt-20 md:-mt-32 lg:-mt-40">
          <div className="px-3 lg:px-24">
            <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:gap-8">
              <div className="flex-2 p-8 bg-black text-white">
                <div>
                  <div className="pb-5"></div>
                  <div>
                    <h1 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none print:break-after-avoid text-4xl md:text-6xl">
                      Sustainable Finance
                    </h1>
                    <div className="mb-6"></div>
                  </div>
                  <div>
                    <h3 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none print:break-after-avoid text-2xl md:text-4xl">
                      Navigate the transition to a more sustainable future
                    </h3>
                    <div className="mb-6"></div>
                  </div>
                  <div>
                    <div>
                      Environmental, Social and Governance (ESG) issues such as
                      climate change, diversity and data privacy have growing
                      influence across the investment cycle - from assessing
                      risk exposure to allocating capital and achieving
                      sustainability goals. Access to high quality data is
                      essential for investors to understand the impact their
                      decisions have on the planet, people in their communities
                      and their portfolios. At ICE, we provide customers with
                      sophisticated data and analytics to help measure
                      performance, manage risk, and connect people to new
                      opportunities.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch p-8 text-black bg-gray lg:self-end shrink-0">
                <div className="contents">
                  <div>
                    <div>
                      <div>
                        <span className="font-bold">
                          Fixed Income &amp; Data Services
                        </span>
                      </div>
                      <hr className="border-0 border-black border-t-2 border-solid mx-0 my-4" />
                    </div>
                    <div>
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

export default SustainableFinanceHero;
