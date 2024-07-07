import { ROUTES } from "@/constants/routes";
import { NextPage } from "next";
import Link from "next/link";

const Solutions: NextPage = () => {
  return (
    <div className="">
      <div className="">
        <div className="text-center">
          <h2 className="m-0 font-headings border-0 pb-0 mers:border-b-2 mers:border-solid mers:border-secondary mers:pb-2.5 print:orphans-3 print:widows-3 font-medium normal-case leading-none print:break-after-avoid text-3xl md:text-5xl">
            Related Solutions
          </h2>
          <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0"></p>
          <hr className="border-0 border-black border-t-2 w-1/5 border-solid mx-auto my-4" />
        </div>
      </div>
      <div className="h-6"></div>
      <div>
        <div>
          <div className="w-max mx-auto overflow-x-auto">
            <div className="justify-center justify-items-center gap-x-2 gap-y-4 p-2 grid grid-cols-1 md:grid-cols-2 min-[1600px]:grid-cols-3">
              <div className="flex">
                <div className="flex border-black border-2 border-solid w-96 flex-col-reverse">
                  <div className="flex flex-1 justify-between gap-8 p-8 flex-col">
                    <div>
                      <div className="text-center">
                        <h4 className="m-0 font-headings border-0 pb-0 print:orphans-3 print:widows-3 font-medium normal-case leading-none print:break-after-avoid text-xl md:text-3xl">
                          WebBlockTech
                        </h4>
                      </div>
                      <div className="mt-10">
                        <div className="">
                          <div className="text-center">
                            <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                              Access the deep liquidity and transparency of the
                              BlockTech futures markets with our multi-asset
                              trading application. This secure, flexible
                              technology supports a range of trading and risk
                              management tools.
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
                              className="font-medium justify-center items-center no-underline focus-within:outline-none focus:outline-none focus-within:ring focus:ring leading-tight align-middle duration-75  active:translate-y-px max-w-full select-none bg-black text-white border-white shadow-lg  hover:text-primary    active:text-primary  active:shadow-none  checked:text-primary   text-xs md:text-sm gap-1 md:gap-4 border rounded-tl rounded-tr rounded-bl rounded-br inline-flex px-6 md:px-12 py-1 md:py-2 cursor-pointer uppercase flex-row-reverse break-words"
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
                <div className="flex border-black border-2 border-solid w-96 flex-col-reverse">
                  <div className="flex flex-1 justify-between gap-8 p-8 flex-col">
                    <div>
                      <div className="text-center">
                        <h4 className="m-0 font-headings border-0 pb-0 print:orphans-3 print:widows-3 font-medium normal-case leading-none print:break-after-avoid text-xl md:text-3xl">
                          BlockTech Connect
                        </h4>
                      </div>
                      <div className="mt-10">
                        <div className="">
                          <div className="text-center">
                            <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                              Access to BlockTech proprietary data as well as
                              prices from global exchanges, third-party news,
                              advanced charting, and analysis. Manage price and
                              currency risk across global markets and streamline
                              your workflow to focus on your core business
                              objectives.
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
                              className="font-medium justify-center items-center no-underline focus-within:outline-none focus:outline-none focus-within:ring focus:ring leading-tight align-middle duration-75 active:translate-y-px max-w-full select-none bg-black text-white border-white shadow-lg  hover:text-primary    active:text-primary  active:shadow-none  checked:text-primary   text-xs md:text-sm gap-1 md:gap-4 border rounded-tl rounded-tr rounded-bl rounded-br inline-flex px-6 md:px-12 py-1 md:py-2 cursor-pointer uppercase flex-row-reverse break-words"
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
                <div className="flex border-black border-2 border-solid w-96 flex-col-reverse">
                  <div className="flex flex-1 justify-between gap-8 p-8 flex-col">
                    <div>
                      <div className="text-center">
                        <h4 className="m-0 font-headings border-0 pb-0 print:orphans-3 print:widows-3 font-medium normal-case leading-none print:break-after-avoid text-xl md:text-3xl">
                          Product Guide
                        </h4>
                      </div>
                      <div className="mt-10">
                        <div className="">
                          <div className="text-center">
                            <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                              Our global network of regulated futures exchanges,
                              offers derivative trading across energy, fixed
                              income, interest rates, equities, credit,
                              currencies and metals. View contract specs and
                              data for futures, options and OTC products
                              spanning all major asset classNames.
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
                              className="font-medium justify-center items-center no-underline focus-within:outline-none focus:outline-none focus-within:ring focus:ring leading-tight align-middle duration-75 active:translate-y-px max-w-full select-none bg-black text-white border-white shadow-lg  hover:text-primary    active:text-primary  active:shadow-none  checked:text-primary   text-xs md:text-sm gap-1 md:gap-4 border rounded-tl rounded-tr rounded-bl rounded-br inline-flex px-6 md:px-12 py-1 md:py-2 cursor-pointer uppercase flex-row-reverse break-words"
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
                              <span>View all products</span>
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
      <div className="h-16"></div>
    </div>
  );
};

export default Solutions;
