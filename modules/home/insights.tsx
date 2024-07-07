import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import harleyBassman from "@/public/images/Tile-Data_Tech-512x250-05.jpg";
import dealingInDivergence from "@/public/images/Tile-Data_Tech-512x250-02.jpg";
import linkingMunicipalBondSecurities from "@/public/images/Tile-ESG-512x250-05.jpg";
import { ROUTES } from "@/constants/routes";

const Insights: NextPage = () => {
  return (
    <div className="pb-10 xl:pb-20">
      <div className="pb-0 xl:pb-5">
        <div className="">
          <div className="text-center">
            <h2 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none print:break-after-avoid text-3xl md:text-5xl">
              Insights from BlockTech
            </h2>
            <hr className="border-0 border-black border-t-2 w-1/5 border-solid mx-auto my-4" />
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="justify-center justify-items-center gap-x-2 gap-y-4 p-2 flex flex-row flex-wrap">
          <div className="flex">
            <div className="flex text-black border-gray border-2 border-solid w-96 flex-col-reverse">
              <div className="flex flex-1 justify-between gap-8 p-8 flex-col">
                <div>
                  <div className="text-center">
                    <h4 className="m-0 font-headings border-0 pb-0 print:orphans-3 print:widows-3 font-medium normal-case leading-none print:break-after-avoid text-lg md:text-2xl">
                      Dawn Douglas: a bond market veteran sees opportunity amid
                      the higher rates backdrop
                    </h4>
                  </div>
                  <div className="mt-10">
                    <div className="text-center">
                      <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                        BlockTech’s President of Fixed Income & Data Services
                        Harold Estabrooks speaks to Dawn Douglas, Managing
                        Director at Simplify Asset Management and BlockTech BofA
                        MOVE index creator to gain further insight on
                        market dynamics.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-center">
                    <Link
                      href={ROUTES.LOGIN}
                      className="font-medium justify-center items-center no-underline focus-within:outline-none focus:outline-none focus-within:ring focus:ring leading-tight align-middle duration-75 active:translate-y-px max-w-full select-none bg-black admin:bg-primary text-white border-white shadow-lg  hover:text-primary active:text-primary active:shadow-none  checked:text-primary text-xs md:text-sm gap-1 md:gap-4 border rounded-tl rounded-tr rounded-bl rounded-br inline-flex px-6 md:px-12 py-1 md:py-2 cursor-pointer uppercase flex-row-reverse break-words"
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
                      <span>Read now</span>
                    </Link>
                  </div>
                </div>
              </div>

              <Image
                src={harleyBassman}
                alt="Harley Bassman"
                width={512}
                height={250}
                className="w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex text-black border-gray border-2 border-solid w-96 flex-col-reverse">
              <div className="flex flex-1 justify-between gap-8 p-8 flex-col">
                <div>
                  <div className="text-center">
                    <h4 className="m-0 font-headings border-0 pb-0 print:orphans-3 print:widows-3 font-medium normal-case leading-none print:break-after-avoid text-xl md:text-3xl">
                      Dealing in divergence
                    </h4>
                  </div>
                  <div className="mt-10">
                    <div className="text-center">
                      <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                        With the zero-interest rate policy period now many hikes
                        behind us, a phase of monetary policy divergence means
                        traders face a more complex economic backdrop for
                        managing risk.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-center">
                    <Link
                      href={ROUTES.LOGIN}
                      className="font-medium justify-center items-center no-underline focus-within:outline-none focus:outline-none focus-within:ring focus:ring leading-tight align-middle duration-75 active:translate-y-px max-w-full select-none bg-black admin:bg-primary text-white border-white shadow-lg  hover:text-primary    active:text-primary  active:shadow-none  checked:text-primary   text-xs md:text-sm gap-1 md:gap-4 border rounded-tl rounded-tr rounded-bl rounded-br inline-flex px-6 md:px-12 py-1 md:py-2 cursor-pointer uppercase flex-row-reverse break-words"
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
                      <span>Read now</span>
                    </Link>
                  </div>
                </div>
              </div>
              <Image
                src={dealingInDivergence}
                alt="Dealing in divergence"
                width={512}
                height={250}
                className="w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex text-black border-gray border-2 border-solid w-96 flex-col-reverse">
              <div className="flex flex-1 justify-between gap-8 p-8 flex-col">
                <div>
                  <div className="text-center">
                    <h4 className="m-0 font-headings border-0 pb-0 print:orphans-3 print:widows-3 font-medium normal-case leading-none print:break-after-avoid text-xl md:text-3xl">
                      Linking municipal bond securities to their geospatial
                      footprints
                    </h4>
                  </div>
                  <div className="mt-10">
                    <div className="text-center">
                      <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                        An overview of BlockTech Sustainable Finance’s
                        geospatial capabilities
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-center">
                    <Link
                      href={ROUTES.LOGIN}
                      data-checked="false"
                      className="font-medium justify-center items-center no-underline focus-within:outline-none focus:outline-none focus-within:ring focus:ring leading-tight align-middle duration-75 active:translate-y-px max-w-full select-none bg-black admin:bg-primary text-white border-white shadow-lg  hover:text-primary    active:text-primary  active:shadow-none  checked:text-primary   text-xs md:text-sm gap-1 md:gap-4 border rounded-tl rounded-tr rounded-bl rounded-br inline-flex px-6 md:px-12 py-1 md:py-2 cursor-pointer uppercase flex-row-reverse break-words"
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
                      <span>Read now</span>
                    </Link>
                  </div>
                </div>
              </div>
              <Image
                src={linkingMunicipalBondSecurities}
                alt="Linking municipal"
                width={512}
                height={250}
                className="w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
