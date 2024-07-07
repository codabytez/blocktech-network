import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import connection from "@/public/images/Make_the_Connection_Tagline_blk_rgb.png";
import exchanges from "@/public/images/Tile-General-512x250-03.jpg";
import trading from "@/public/images/Tile-Data_Tech-512x250-02.jpg";
import fixedIncome from "@/public/images/Tile-Data_Tech-512x250-05.jpg";
import staking from "@/public/images/Hero-Data_Tech-1920x550-15.jpg";
import { ROUTES } from "@/constants/routes";

const About: NextPage = () => {
  return (
    <div className="mt-6">
      <div className="flex pr-4 pl-4 gap-4 flex-col items-start sm:flex sm:flex-row sm:justify-center sm:items-center md:pl-0 md:flex-row lg:flex lg:justify-center lg:items-center">
        <Image
          src={connection}
          alt="Make the Connection"
          width={400}
          height={100}
          className="object-contain object-center"
        />
      </div>
      <div className="flex gap-4 flex-col items-start sm:flex sm:flex-row sm:justify-center sm:items-center md:pl-0 mb-10 md:flex-row lg:flex lg:justify-center lg:items-center">
        <div className="w-1/4"></div>
        <div className="pr-2 pl-2 w-full md:w-2/4">
          <div className="">
            <div className="text-center">
              <h3 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none text-xl md:text-3xl">
                Data, technology and expertise that inspire innovation and
                create opportunity.
              </h3>
            </div>
          </div>
        </div>
        <div className="w-1/4"></div>
      </div>

      <div className="pb-10 xl:pb-20">
        <div>
          <div>
            <div className="w-max mx-auto overflow-x-auto">
              <div className="justify-center justify-items-center gap-x-2 gap-y-4 p-2 grid grid-cols-1 md:grid-cols-2 min-[1600px]:grid-cols-4">
                <div className="flex">
                  <div className="flex text-black bg-[#e3e7e6] w-96 flex-col-reverse">
                    <div className="flex flex-1 justify-between gap-8 p-8 flex-col">
                      <div>
                        <div className="mt-10">
                          <div className="flex flex-col items-center relative w-max mx-auto">
                            <h4 className="font-semibold text-4xl">
                              EXCHANGES
                            </h4>
                            <div className="w-6 h-6 border-t-[6px] border-r-[6px] border-primary absolute -top-3 -right-3" />
                          </div>
                          <div className="h-6"></div>
                          <div className="">
                            <div className="text-center">
                              <div>
                                <span className="font-bold">
                                  Transforming what’s possible
                                </span>
                              </div>
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
                                <span>Learn More</span>
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Image
                      src={exchanges}
                      alt="Exchanges"
                      width={512}
                      height={250}
                      className="object-cover object-center h-[200px]"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex text-black bg-[#e3e7e6] w-96 flex-col-reverse">
                    <div className="flex flex-1 justify-between gap-8 p-8 flex-col">
                      <div>
                        <div className="mt-10">
                          <div className="flex flex-col items-center relative w-max mx-auto">
                            <h4 className="font-semibold text-3xl">
                              FIXED INCOME & <br /> DATA SERVICES
                            </h4>
                            <div className="w-6 h-6 border-t-[6px] border-r-[6px] border-primary absolute -top-3 -right-3" />
                          </div>
                          <div className="h-6"></div>
                          <div className="">
                            <div className="text-center">
                              <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                                <span className="font-bold">
                                  Streamlining the system
                                </span>
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                                Extensive, high quality and market-leading data.
                                Our end-to-end solutions help deliver the
                                insights that drive decision-making.
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
                                href={ROUTES.FIXED_INCOME}
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
                                <span>Learn More</span>
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Image
                      src={fixedIncome}
                      alt="Fixed Income"
                      width={512}
                      height={250}
                      className="object-cover object-center h-[200px]"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex text-black bg-[#e3e7e6] w-96 flex-col-reverse">
                    <div className="flex flex-1 justify-between gap-8 p-8 flex-col">
                      <div>
                        <div className="mt-10">
                          <div className="flex flex-col items-center relative w-max mx-auto">
                            <h4 className="font-semibold text-4xl text-right">
                              TRADING
                            </h4>
                            <div className="w-6 h-6 border-t-[6px] border-r-[6px] border-primary absolute -top-3 -right-3" />
                          </div>
                          <div className="h-6"></div>
                          <div className="">
                            <div className="text-center">
                              <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                                <span className="font-bold">
                                  Trade Top Cryptocurrencies
                                </span>
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                                Bitcoin, Ethereum, Ripple and other crypto
                                assets at your disposal.
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
                                href={ROUTES.DASHBOARD}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium justify-center items-center no-underline focus-within:outline-none focus:outline-none focus-within:ring focus:ring leading-tight align-middle duration-75  active:translate-y-px max-w-full select-none bg-black admin:bg-primary text-white border-white shadow-lg hover:text-primary admin:hover:text-white active:text-primary admin:hover:text-white  active:shadow-none  checked:text-primary   text-xs md:text-sm gap-1 md:gap-4 border rounded-tl rounded-tr rounded-bl rounded-br inline-flex px-6 md:px-12 py-1 md:py-2 cursor-pointer uppercase flex-row-reverse break-words"
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
                                <span>Trade Now</span>
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Image
                      src={trading}
                      alt="Trading Technology"
                      width={512}
                      height={250}
                      className="object-cover object-center h-[200px]"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex text-black bg-[#e3e7e6] w-96 flex-col-reverse">
                    <div className="flex flex-1 justify-between gap-8 p-8 flex-col">
                      <div>
                        <div className="mt-10">
                          <div className="flex flex-col items-center relative w-max mx-auto">
                            <h4 className="font-semibold text-4xl">STAKING</h4>
                            <div className="w-6 h-6 border-t-[6px] border-r-[6px] border-primary absolute -top-3 -right-3" />
                          </div>
                          <div className="h-6"></div>
                          <div className="">
                            <div className="text-center">
                              <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                                <span className="font-bold">
                                  Automating private pools
                                </span>
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                                Putting up coins on a proof of stake blockchain.
                                Proof of stake blockchain are really different
                                from the first Gen type of blockchain which
                                is proof of work.
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
                                href={ROUTES.STAKE}
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
                                <span>Stake Now</span>
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Image
                      src={staking}
                      alt="Staking"
                      width={512}
                      height={250}
                      className="object-cover object-center h-[200px]"
                    />
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

export default About;
