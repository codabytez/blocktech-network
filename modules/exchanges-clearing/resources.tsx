import { NextPage } from "next";
import Link from "next/link";

const Resources: NextPage = () => {
  return (
    <div className="pb-10 xl:pb-20">
      <div className="-mx-3 lg:-mx-24">
        <div className="bg-[#71C5E8] flex pt-10 pb-10 gap-4 flex-col xl:pt-12 xl:pb-12">
          <div className="px-3 lg:px-24">
            <div className="flex gap-4 flex-col items-start md:flex-row">
              <div className="pr-0 xl:pr-10 w-full xl:w-auto">
                <h2 className="m-0 font-headings font-medium normal-case leading-none text-3xl md:text-5xl shrink-0 w-full xl:w-auto xl:shrink-1">
                  Trading resources
                </h2>
              </div>
              <div className="w-full xl:w-full xl:min-w-3/4">
                <div className="flex gap-x-4 text-left flex-col md:flex-row">
                  <div className="flex-1">
                    <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                      <Link
                        href="#"
                        className="flex w-full flex-col hover:no-underline text-black"
                      >
                        <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                          <div className="">Customer Service</div>
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
                        <div className="text-[0.75rem] font-light md:text-base">
                          Technical support and training
                        </div>
                      </Link>
                    </div>
                    <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                      <Link
                        href="#"
                        className="flex w-full flex-col hover:no-underline text-black"
                      >
                        <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                          <div className="">Email Updates</div>
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
                        <div className="text-[0.75rem] font-light md:text-base">
                          Sign up for newsletters, market news, and more
                        </div>
                      </Link>
                    </div>
                    <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                      <Link
                        href="#"
                        className="flex w-full flex-col hover:no-underline text-black"
                      >
                        <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                          <div className="">Holiday Hours</div>
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
                        <div className="text-[0.75rem] font-light md:text-base">
                          When BlockTech markets are closed
                        </div>
                      </Link>
                    </div>
                    <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                      <Link
                        href="#"
                        className="flex w-full flex-col hover:no-underline text-black"
                      >
                        <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                          <div className="">Hours</div>
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
                        <div className="text-[0.75rem] font-light md:text-base">
                          Regular trading and support hours
                        </div>
                      </Link>
                    </div>
                    <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                      <Link
                        href="#"
                        className="flex w-full flex-col hover:no-underline text-black"
                      >
                        <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                          <div className="">BlockTech APIs</div>
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
                        <div className="text-[0.75rem] font-light md:text-base">
                          Customized algorithmic trading, risk management, STP
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
                          <div className="">BlockTech Block</div>
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
                        <div className="text-[0.75rem] font-light md:text-base">
                          Submit block trades for clearing
                        </div>
                      </Link>
                    </div>
                    <div className="flex py-2 border-t md:first:border-t-0 border-black">
                      <Link
                        href="#"
                        className="flex w-full flex-col hover:no-underline text-black"
                      >
                        <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                          <div className="">BlockTech Education</div>
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
                        <div className="text-[0.75rem] font-light md:text-base">
                          Building skills and capability
                        </div>
                      </Link>
                    </div>
                    <div className="flex py-2 border-t md:first:border-t-0 border-black">
                      <Link
                        href="#"
                        className="flex w-full flex-col hover:no-underline text-black"
                      >
                        <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                          <div className="">BlockTech Expiry Calendar</div>
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
                        <div className="text-[0.75rem] font-light md:text-base">
                          Trade dates for BlockTech Markets
                        </div>
                      </Link>
                    </div>
                    <div className="flex py-2 border-t md:first:border-t-0 border-black">
                      <Link
                        href="#"
                        className="flex w-full flex-col hover:no-underline text-black"
                      >
                        <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                          <div className="">BlockTech Fees</div>
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
                        <div className="text-[0.75rem] font-light md:text-base">
                          Specific fee pricing
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
                          <div className="">BlockTech Margins</div>
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
                        <div className="text-[0.75rem] font-light md:text-base">
                          Rates for BlockTech Futures and Endex
                        </div>
                      </Link>
                    </div>
                    <div className="flex py-2 border-t md:first:border-t-0 border-black">
                      <Link
                        href="#"
                        className="flex w-full flex-col hover:no-underline text-black"
                      >
                        <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                          <div className="">BlockTech Mobile</div>
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
                        <div className="text-[0.75rem] font-light md:text-base">
                          Trade remotely via the BlockTech app
                        </div>
                      </Link>
                    </div>
                    <div className="flex py-2 border-t md:first:border-t-0 border-black">
                      <Link
                        href="#"
                        className="flex w-full flex-col hover:no-underline text-black"
                      >
                        <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                          <div className="">System Alerts</div>
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
                        <div className="text-[0.75rem] font-light md:text-base">
                          The current status of BlockTech systems
                        </div>
                      </Link>
                    </div>
                    <div className="flex py-2 border-t md:first:border-t-0 border-black">
                      <Link
                        href="#"
                        className="flex w-full flex-col hover:no-underline text-black"
                      >
                        <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                          <div className="">WebBlockTech</div>
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
                        <div className="text-[0.75rem] font-light md:text-base">
                          BlockTech Exchange trading platform
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
  );
};

export default Resources;
