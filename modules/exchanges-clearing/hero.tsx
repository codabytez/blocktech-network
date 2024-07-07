import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import dam from "@/public/images/Hero-Economics-1920x550-14.jpg";
import { ROUTES } from "@/constants/routes";

const ExchangesClearingHero: NextPage = () => {
  return (
    <div>
      <div className="bg-black text-white pt-2 pb-2 xl:pt-4 xl:pb-4">
        <div className="px-3 lg:px-24">
          <div className="">
            <div className="text-center">
              <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                Price and physical supply risk management. Guaranteed
                deliveries.{" "}
                <Link
                  href={ROUTES.EXCHANGES_CLEARING}
                  className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#71C5E8] hover:text-[#71C5E8] font-bold"
                >
                  <span>Learn more</span>
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
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-10 xl:pb-20 relative">
        <div>
          <Image
            src={dam}
            alt="Dam holding water"
            width={1920}
            height={550}
            className="w-full h-[550px] max-h-screen select-none object-cover object-right"
          />
          <div className="-mt-20 md:-mt-32 lg:-mt-40 relative z-10">
            <div className="px-3 lg:px-24">
              <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:gap-8">
                <div className="flex-2 p-8 bg-black text-white">
                  <div className="">
                    <h1 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none print:break-after-avoid text-4xl md:text-6xl">
                      Connect to global markets
                    </h1>
                    <div className="mb-6"></div>
                  </div>
                  <div className="">
                    <h3 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none print:break-after-avoid text-2xl md:text-4xl">
                      Uncover opportunities. Transact with precision.
                    </h3>
                    <div className="mb-6"></div>
                  </div>
                  <div className="">
                    <div>
                      BlockTech provides transparent markets to invest, manage
                      risk and raise capital across major asset classes. Our
                      markets are supported by advanced data and analytics and
                      built on sophisticated execution technology. Market
                      participants worldwide rely on BlockTech’s exchanges and
                      clearing services to assess price risk, find market
                      opportunities and transact with confidence.
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full self-stretch p-8 text-black bg-[#71C5E8] shrink-0 lg:w-max lg:self-end">
                  <div className="pt-0 pb-0 xl:pt-5 xl:pb-5">
                    <div className="text-center">
                      <h4 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none print:break-after-avoid text-xl md:text-3xl xl:shrink-0 xl:w-max">
                        Get personalized support
                      </h4>
                      <div className="mb-6"></div>
                      <div>
                        <Link
                          href="#"
                          className="font-medium justify-center items-center no-underline focus-within:outline-none focus:outline-none focus-within:ring focus:ring leading-tight align-middle duration-75 active:shadow-none active:translate-y-px max-w-full select-none bg-black admin:bg-primary text-white border-white shadow-lg  hover:text-primary admin:hover:text-white active:text-primary checked:text-primary text-xs md:text-sm gap-1 md:gap-4 border rounded-tl rounded-tr rounded-bl rounded-br inline-flex px-6 md:px-12 py-1 md:py-2 cursor-pointer uppercase flex-row-reverse break-words"
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
                          <span>Contact us</span>
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
  );
};

export default ExchangesClearingHero;
