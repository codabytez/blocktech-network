import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import media from "@/public/images/Hero-Regulation-1920x550-02.jpg";

const Services: NextPage = () => {
  return (
    <div className="pb-10 xl:pb-20">
      <div className="pb-0 xl:pb-5">
        <div className="">
          <div className="text-center">
            <h2 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none print:break-after-avoid text-3xl md:text-5xl">
              Global clearing services
            </h2>
            <hr className="border-0 border-black border-t-2 w-1/5 border-solid mx-auto my-4" />
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-center">
          <p>
            Our clearing houses deliver stability and risk management across
            global markets. With six clearing houses serving key derivatives
            asset classes across the U.S., U.K., Europe, Canada and Singapore,
            our clearing platform drives operational and capital efficiency
            regardless of where you transact. With strong governance, proven
            risk frameworks and capital, our clearing houses bring transparency,
            discipline and security to markets around the world.
          </p>
          <div className="mb-6"></div>
        </div>
      </div>
      <div className="flex flex-col items-stretch gap-4 sm:flex-row flex-grow">
        <div className="sm:flex-1 relative overflow-hidden">
          <Image
            src={media}
            alt="Media"
            width={1920}
            height={550}
            className="w-full sm:absolute sm:left-0 sm:top-0 sm:h-full object-cover object-center"
          />
        </div>
        <div className="sm:flex-1 overflow-hidden">
          <div className="">
            <div className="overflow-x-auto">
              <table className="table-data w-full table-fixed table-border-rows">
                <colgroup>
                  <col className="w-[40%] xl:w-[33%]" />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th>
                      <p className="font-bold text-left p-2">Clearing house</p>
                    </th>
                    <th>
                      <p className="font-bold text-left p-2">Asset classes</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Link
                        href="#"
                        className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                      >
                        <span>BlockTech Clear Credit</span>
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
                          />
                        </svg>
                      </Link>
                    </td>
                    <td className="flex items-center gap-2 flex-wrap">
                      <Link
                        href="/credit-derivatives"
                        className="label"
                        title="Credit"
                      >
                        Credit
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link
                        href="/clear-europe"
                        className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                      >
                        <span>BlockTech Clear Europe</span>
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
                          />
                        </svg>
                      </Link>
                    </td>
                    <td className="flex items-center gap-2 flex-wrap">
                      <Link
                        href="/agriculture"
                        className="label"
                        title="Agriculture"
                      >
                        Agriculture
                      </Link>
                      <Link href="/energy" className="label" title="Energy">
                        Energy
                      </Link>
                      <Link
                        href="/single-stock-equity-index"
                        className="label"
                        title="Equities"
                      >
                        Equities
                      </Link>
                      <Link
                        href="/interest-rates"
                        className="label"
                        title="Interest Rates"
                      >
                        Interest Rates
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link
                        href="/clear-netherlands"
                        className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                      >
                        <span>BlockTech Clear Netherlands</span>
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
                          />
                        </svg>
                      </Link>
                    </td>
                    <td className="flex items-center gap-2 flex-wrap">
                      <Link
                        href="/single-stock-equity-index"
                        className="label"
                        title="Equities"
                      >
                        Equities
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link
                        href="/ngx"
                        className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                      >
                        <span>BlockTech NGX</span>
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
                          />
                        </svg>
                      </Link>
                    </td>
                    <td className="flex items-center gap-2 flex-wrap">
                      <Link href="/energy" className="label" title="Energy">
                        Energy
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link
                        href="/clear-singapore"
                        className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                      >
                        <span>BlockTech Clear Singapore</span>
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
                          />
                        </svg>
                      </Link>
                    </td>
                    <td className="flex items-center gap-2 flex-wrap">
                      <Link
                        href="/products/79696475"
                        className="label"
                        title="Digital Assets"
                      >
                        Digital Assets
                      </Link>
                      <Link href="/energy" className="label" title="Energy">
                        Energy
                      </Link>
                      <Link href="/forex" className="label" title="Forex">
                        Forex
                      </Link>
                      <Link
                        href="/single-stock-equity-index"
                        className="label"
                        title="equity-derivatives"
                      >
                        Equities
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link
                        href="/clear-us"
                        className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                      >
                        <span>BlockTech Clear U.S.</span>
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
                          />
                        </svg>
                      </Link>
                    </td>
                    <td className="flex items-center gap-2 flex-wrap">
                      <Link
                        href="/agriculture"
                        className="label"
                        title="Agriculture"
                      >
                        Agriculture
                      </Link>
                      <Link
                        href="/equity-derivatives"
                        className="label"
                        title="Equity Derivatives"
                      >
                        Equity Derivatives
                      </Link>
                      <Link href="/forex" className="label" title="Forex">
                        Forex
                      </Link>
                      <Link
                        href="/market-data/indices/mortgage-rate-lock-index-futures"
                        className="label"
                        title="Interest Rates"
                      >
                        Interest Rates
                      </Link>
                      <Link href="/metals" className="label" title="Metals">
                        Metals
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
