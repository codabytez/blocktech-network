import { NextPage } from "next";
import Link from "next/link";

const Resources: NextPage = () => {
  return (
    <div className="pb-10 xl:pb-20">
      <div className="bg-primary flex pt-10 pr-10 pb-10 pl-10 gap-4 flex-col text-center w-full xl:pt-16 xl:pr-0 xl:pb-16 xl:pl-0 xl:w-full">
        <div className="px-3 lg:px-24">
          <div className="flex gap-4 flex-col items-start md:flex-row">
            <div className="text-center w-full xl:text-left xl:w-full">
              <div className="">
                <h2 className="m-0 font-headings border-0 pb-0 mers:border-b-2 mers:border-solid mers:border-secondary mers:pb-2.5 print:orphans-3 print:widows-3 font-medium normal-case leading-none print:break-after-avoid text-3xl md:text-5xl">
                  Resources
                </h2>
              </div>
            </div>
            <div className="w-full xl:w-full xl:min-w-2/3">
              <div className="flex gap-x-4 text-left flex-col md:flex-row">
                <div className="flex-1">
                  <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                    <Link
                      href="#"
                      className="flex w-full flex-col hover:no-underline text-black"
                    >
                      <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                        <div className="">Sustainability at ICE</div>
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
                        Through our annual sustainability report and associated
                        reporting standards, we provide data and narrative
                        context on our approach to managing the sustainability
                        risks and opportunities that we face as a company.
                      </div>
                    </Link>
                  </div>
                  <div className="flex py-2 border-t first:border-t-0 md:first:border-t-0 border-black">
                    <Link
                      href="#"
                      className="flex w-full flex-col hover:no-underline text-black"
                    >
                      <div className="flex flex-1 flex-row items-center justify-between text-[0.95rem] md:text-base">
                        <div className="">Energy Transition</div>
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
                        Assess sustainability risks and opportunities with data
                        from the leading provider of environmental markets with
                        access to global &amp; voluntary carbon data, ICE’s
                        sustainable finance data &amp; indices, global
                        renewables and fuels data, and more.
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
  );
};

export default Resources;
