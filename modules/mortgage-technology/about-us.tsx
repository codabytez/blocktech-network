import { NextPage } from "next";
import Image from "next/image";
import courses from "@/public/icons/courses-2.svg";
import esign from "@/public/icons/esign.svg";
import application from "@/public/icons/online-application.svg";
import origination from "@/public/icons/origination.svg";
import rates from "@/public/icons/rates-3.svg";
import resources from "@/public/icons/resources-1.svg";
import settings from "@/public/icons/settings-6.svg";
import trade from "@/public/icons/trade.svg";
import Link from "next/link";

const AboutUs: NextPage = () => {
  return (
    <section className=" py-24 overflow-hidden text-center">
      <div className="container px-8 relative z-10 max-w-[1320px] mx-auto w-full">
        <div className="max-w-[1000px] text-center mx-auto ">
          <h2 className="font-medium text-black mb-4">What sets us apart?</h2>
          <p className="max-w-[900px] mb-12 mx-auto">
            When it comes to mortgage technology, we guide with unmatched
            expertise. We simplify complicated workflows, create efficiencies,
            help to mitigate risk and focus on helping you deliver a better
            customer experience. Our connected network makes unparalleled
            opportunities possible. Between technology and real-time data.
            Between innovation and scale. Between all parts of the ecosystem.
          </p>
          <h3 className="mb-8">
            Explore the ICE Mortgage Technology suite of products
          </h3>
        </div>
        <ul className="flex gap-x-3 justify-between flex-wrap list-none">
          <li className="w-[calc(12.5%-12px)]">
            <button className="bg-none h-[172px] mb-8 w-full border border-[#E3F3FA] text-[#506690] cursor-pointer">
              <div className="bg-[#e3f3fa] border-[#e3f3fa] relative w-full h-full border-2 flex flex-col">
                <div className="flex flex-col h-full items-center">
                  <div className="relative grow-0 p-4 h-full flex-[1_1_auto]">
                    <Image
                      src={origination}
                      alt="origination"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="min-h-[50px] px-4 pb-6 w-full">
                    <span className="font-semibold text-black uppercase text-sm">
                      Real Estate
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </li>
          <li className="w-[calc(12.5%-12px)]">
            <button className="bg-none h-[172px] mb-8 w-full border border-transparent cursor-pointer">
              <div className="relative w-full h-full border-2 border-black flex flex-col">
                <div className="flex flex-col h-full items-center">
                  <div className="relative grow-0 p-4 h-full flex-[1_1_auto]">
                    <Image
                      src={settings}
                      alt="settings"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="min-h-[50px] px-4 pb-6 w-full">
                    <span className="font-semibold text-black uppercase text-sm">
                      Lead Generation
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </li>
          <li className="w-[calc(12.5%-12px)]">
            <button className="bg-none h-[172px] mb-8 w-full border border-transparent cursor-pointer">
              <div className=" relative w-full h-full border-2 border-black flex flex-col">
                <div className="flex flex-col h-full items-center">
                  <div className="relative grow-0 p-4 h-full flex-[1_1_auto]">
                    <Image src={courses} alt="courses" width={64} height={64} />
                  </div>
                  <div className="min-h-[50px] px-4 pb-6 w-full">
                    <span className="font-semibold text-black uppercase text-sm">
                      Loan Application
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </li>
          <li className="w-[calc(12.5%-12px)]">
            <button className="bg-none h-[172px] mb-8 w-full border border-transparent cursor-pointer">
              <div className=" relative w-full h-full border-2 border-black flex flex-col">
                <div className="flex flex-col h-full items-center">
                  <div className="relative grow-0 p-4 h-full flex-[1_1_auto]">
                    <Image
                      src={application}
                      alt="online application"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="min-h-[50px] px-4 pb-6 w-full">
                    <span className="font-semibold text-black uppercase text-sm">
                      Loan Processing
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </li>
          <li className="w-[calc(12.5%-12px)]">
            <button className="bg-none h-[172px] mb-8 w-full border border-transparent cursor-pointer">
              <div className=" relative w-full h-full border-2 border-black flex flex-col">
                <div className="flex flex-col h-full items-center">
                  <div className="relative grow-0 p-4 h-full flex-[1_1_auto]">
                    <Image src={esign} alt="esign" width={64} height={64} />
                  </div>
                  <div className="min-h-[50px] px-4 pb-6 w-full">
                    <span className="font-semibold text-black uppercase text-sm">
                      Closing
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </li>
          <li className="w-[calc(12.5%-12px)]">
            <button className="bg-none h-[172px] mb-8 w-full border border-transparent cursor-pointer">
              <div className=" relative w-full h-full border-2 border-black flex flex-col">
                <div className="flex flex-col h-full items-center">
                  <div className="relative grow-0 p-4 h-full flex-[1_1_auto]">
                    <Image src={trade} alt="trade" width={64} height={64} />
                  </div>
                  <div className="min-h-[50px] px-4 pb-6 w-full">
                    <span className="font-semibold text-black uppercase text-sm">
                      Capital Markets
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </li>
          <li className="w-[calc(12.5%-12px)]">
            <button className="bg-none h-[172px] mb-8 w-full border border-transparent cursor-pointer">
              <div className=" relative w-full h-full border-2 border-black flex flex-col">
                <div className="flex flex-col h-full items-center">
                  <div className="relative grow-0 p-4 h-full flex-[1_1_auto]">
                    <Image src={rates} alt="rates" width={64} height={64} />
                  </div>
                  <div className="min-h-[50px] px-4 pb-6 w-full">
                    <span className="font-semibold text-black uppercase text-sm">
                      Servicing
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </li>
          <li className="w-[calc(12.5%-12px)]">
            <button className="bg-none h-[172px] mb-8 w-full border border-transparent cursor-pointer">
              <div className=" relative w-full h-full border-2 border-black flex flex-col">
                <div className="flex flex-col h-full items-center">
                  <div className="relative grow-0 p-4 h-full flex-[1_1_auto]">
                    <Image
                      src={resources}
                      alt="resources"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="min-h-[50px] px-4 pb-6 w-full">
                    <span className="font-semibold text-black uppercase text-sm">
                      Retention
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </li>
        </ul>
        <div>
          <div>
            <div className="container max-w-[1320px] mx-auto w-full">
              <div className="flex flex-wrap -mx-8 gap-16">
                <div className="relative flex-[0_0_auto] w-[47%] px-8">
                  <div className="relative w-full h-full border-2 border-black flex flex-col text-left">
                    <div className="flex flex-col h-full items-center text-left">
                      <div className="relative h-full flex-[1_1_auto] p-8">
                        <Image
                          src={origination}
                          alt="origination"
                          width={96}
                          height={96}
                        />
                        <h4 className="text-black mb-4 font-medium text-2xl">
                          Real Estate
                        </h4>
                        <p className="mb-4">
                          Easy-to-use, next generation solutions that help real
                          estate professionals, MLSs and title companies
                          generate more business, increase productivity,
                          strengthen relationships and deliver a competitive
                          edge in today’s market.
                        </p>
                      </div>
                      <div className="px-8 pb-8 static w-full">
                        <Link
                          href="#"
                          target="_self"
                          className="font-bold my-2 uppercase"
                        >
                          See all Real Estate products
                        </Link>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-[47%] flex-[0_0_auto] pr-8">
                  <div className="text-left">
                    <h4 className="mb-4 font-medium text-2xl">
                      Featured Real Estate products
                    </h4>
                    <div className="min-h-[96px] bg-gray hover:bg-gray relative w-full h-full mt-4 flex flex-col">
                      <div className="relative p-4 mr-12 h-full flex-[1_1_auto]">
                        <h3 className="font-medium text-lg mb-2">
                          Paragon<sup>®</sup> Connect MLS Platform
                        </h3>
                        <p className="text-xs">
                          A device-agnostic, comprehensive and highly
                          configurable multiple listing service (MLS) platform
                          featuring the most-used components that agents need
                          day-to-day, all in an on-the-go interface.
                        </p>
                      </div>
                      <div className="card-footer p-0 position-static">
                        <Link
                          href="#"
                          target="_self"
                          className="stretch-link fw-bold stretched-link"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="34"
                            viewBox="0 0 19 34"
                            fill="none"
                            style={{
                              position: "absolute",
                              top: "32px",
                              right: "30px",
                            }}
                          >
                            <path
                              d="M1 1L17 17L1 33"
                              stroke="black"
                              strokeWidth="2"
                            ></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="min-h-[96px] bg-gray hover:bg-gray relative w-full h-full mt-4 flex flex-col">
                      <div className="relative p-4 mr-12 h-full flex-[1_1_auto]">
                        <h3 className="font-medium text-lg mb-2">
                          SiteXPro<sup>™</sup>
                        </h3>
                        <p className="text-xs">
                          Web-based access to property reports, automated
                          valuations and our comprehensive property-record
                          database.
                        </p>
                      </div>
                      <div className="card-footer p-0 position-static">
                        <Link
                          href="#"
                          target="_self"
                          className="stretch-link fw-bold stretched-link"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="34"
                            viewBox="0 0 19 34"
                            fill="none"
                            style={{
                              position: "absolute",
                              top: "32px",
                              right: "30px",
                            }}
                          >
                            <path
                              d="M1 1L17 17L1 33"
                              stroke="black"
                              strokeWidth="2"
                            ></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="min-h-[96px] bg-gray hover:bg-gray relative w-full h-full mt-4 flex flex-col">
                      <div className="relative p-4 mr-12 h-full flex-[1_1_auto]">
                        <h3 className="font-medium text-lg mb-2">
                          Property Data
                        </h3>
                        <p className="text-xs">
                          Nationwide coverage of both residential and commercial
                          properties.
                        </p>
                      </div>
                      <div className="card-footer p-0 position-static">
                        <Link
                          href="#"
                          target="_self"
                          className="stretch-link fw-bold stretched-link"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="34"
                            viewBox="0 0 19 34"
                            fill="none"
                            style={{
                              position: "absolute",
                              top: "32px",
                              right: "30px",
                            }}
                          >
                            <path
                              d="M1 1L17 17L1 33"
                              stroke="black"
                              strokeWidth="2"
                            ></path>
                          </svg>
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
    </section>
  );
};

export default AboutUs;
