import { ROUTES } from "@/constants/routes";
import { NextPage } from "next";
import Link from "next/link";

const Business: NextPage = () => {
  return (
    <div className="pb-10 xl:pb-20">
      <div className="pb-0 xl:pb-5">
        <div className="">
          <div className="text-center">
            <h2 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none text-3xl imt:mb-6 md:text-5xl">
              Our business
            </h2>
            <hr className="border-0 border-black border-t-2 w-1/5 border-solid mx-auto my-4" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="w-max mx-auto overflow-x-auto">
            <div className="justify-center justify-items-center gap-x-2 gap-y-4 p-2 grid grid-cols-1 md:grid-cols-2 min-[1600px]:grid-cols-3">
              <div className="flex">
                <div className="flex text-black border-gray border-2 border-solid w-96 flex-col-reverse">
                  <div className="flex flex-1 justify-between gap-8 p-8 flex-col">
                    <div>
                      <div className="text-center">
                        <h4 className="m-0 font-headings border-0 pb-0 print:orphans-3 print:widows-3 font-medium normal-case leading-none print:break-after-avoid text-xl imt:mb-6 md:text-3xl">
                          Transforming what’s possible
                        </h4>
                      </div>
                      <div className="mt-10">
                        <div className="">
                          <div className="text-center">
                            <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                              We were the first to digitize exchanges, and
                              continue to be a leader on price discovery,
                              capital raising, indexing and more.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="">
                        <div className="text-center">
                          <div>
                            <Link
                              href={ROUTES.EXCHANGES_CLEARING}
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
                              <span>LEARN MORE</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex text-black border-gray border-2 border-solid w-96 flex-col-reverse">
                  <div className="flex flex-1 justify-between gap-8 p-8 flex-col">
                    <div>
                      <div className="text-center">
                        <h4 className="m-0 font-headings border-0 pb-0 print:orphans-3 print:widows-3 font-medium normal-case leading-none print:break-after-avoid text-xl imt:mb-6 md:text-3xl">
                          Streamlining the system
                        </h4>
                      </div>
                      <div className="mt-10">
                        <div className="">
                          <div className="text-center">
                            <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                              Extensive, high quality and market-leading data.
                              Our end-to-end solutions help deliver the insights
                              that drive decision-making.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="">
                        <div className="text-center">
                          <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                            <Link
                              href={ROUTES.EXCHANGES_CLEARING}
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
                              <span>LEARN MORE</span>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex text-black border-gray border-2 border-solid w-96 flex-col-reverse">
                  <div className="flex flex-1 justify-between gap-8 p-8 flex-col">
                    <div>
                      <div className="text-center">
                        <h4 className="m-0 font-headings border-0 pb-0 print:orphans-3 print:widows-3 font-medium normal-case leading-none print:break-after-avoid text-xl imt:mb-6 md:text-3xl">
                          Automating the industry
                        </h4>
                      </div>
                      <div className="mt-10">
                        <div className="">
                          <div className="text-center">
                            <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                              We’re digitizing the entire mortgage process to
                              reduce costs and increase efficiencies.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="">
                        <div className="text-center">
                          <div>
                            <Link
                              href={ROUTES.EXCHANGES_CLEARING}
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
                              <span>LEARN MORE</span>
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

export default Business;
