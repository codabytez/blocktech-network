import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import media from "@/public/images/Hero-Commodities-1920x550-05.jpg";

const Infrastructure: NextPage = () => {
  return (
    <div className="pb-10 xl:pb-20">
      <div className="pb-0 xl:pb-5">
        <div className="">
          <div className="text-center">
            <h2 className="m-0 font-headings font-medium normal-case leading-none text-3xl md:text-5xl">
              Capital efficient infrastructure
            </h2>
            <hr className="border-0 border-black border-t-2 w-1/5 border-solid mx-auto my-4" />
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-center">
          <p>
            As markets become interconnected, the need for efficient pricing and
            transparency has increased. Our exchanges and clearing services
            enable participants to transact with precision wherever they are.
          </p>
        </div>
        <div className="mb-6"></div>
      </div>
      <div className="flex flex-col items-stretch gap-4 flex-grow sm:flex-row-reverse">
        <div className="sm:flex-1 relative overflow-hidden">
          <Image
            src={media}
            alt="Media"
            className="w-full sm:absolute sm:left-0 sm:top-0 sm:h-full object-cover object-center"
          />
        </div>
        <div className="sm:flex-1 overflow-hidden">
          <div className="">
            <div data-rich-text-ignore="true" className="overflow-x-auto">
              <table className="w-full table-fixed">
                <colgroup>
                  <col className="w-[40%] xl:w-[33%]" />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th>
                      <p className="font-bold text-left p-2">Markets</p>
                    </th>
                    <th>
                      <p className="font-bold text-left p-2">Asset classes</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <Link
                          href="#"
                          className="inline-flex items-center no-underline hover:underline cursor-pointer text-[#235F73] hover:text-[#235F73] font-bold"
                        >
                          <span>BlockTech Futures Europe</span>
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
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Link href="#" className="label">
                          Agriculture
                        </Link>
                        <Link href="#" className="label">
                          Energy
                        </Link>
                        <Link href="#" className="label">
                          Equities
                        </Link>
                        <Link href="#" className="label">
                          IR
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <Link
                          href="#"
                          className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                        >
                          <span>BlockTech Futures U.S.</span>
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
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Link href="#" className="label">
                          Agriculture
                        </Link>

                        <Link href="#" className="label">
                          Energy
                        </Link>
                        <Link href="#" className="label">
                          Equities
                        </Link>
                        <Link href="#" className="label">
                          Forex (FX)
                        </Link>
                        <Link href="#" className="label">
                          Metals
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <Link
                          href="#"
                          className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                        >
                          <span>BlockTech Futures Singapore</span>
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
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Link href="#" className="label">
                          Energy
                        </Link>
                        <Link href="#" className="label">
                          Equities
                        </Link>
                        <Link href="#" className="label">
                          Forex (FX)
                        </Link>
                        <Link href="#" className="label">
                          Digital Assets
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <Link
                          href="#"
                          className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                        >
                          <span>BlockTech Futures Abu Dhabi</span>
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
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Link href="#" className="label">
                          Energy
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <Link
                          href="#"
                          className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                        >
                          <span>BlockTech Endex</span>
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
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Link href="#" className="label">
                          Energy
                        </Link>
                        <Link href="#" className="label">
                          Equities
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <Link
                          href="#"
                          className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                        >
                          <span>Creditex</span>
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
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Link href="#" className="label">
                          Credit
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <Link
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                        >
                          <span>NYSE</span>
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
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Link
                          rel="noopener noreferrer"
                          href="#"
                          target="_blank"
                          className="label"
                        >
                          Listings
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <Link
                          href="#"
                          className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                        >
                          <span>BlockTech Swap Trade</span>
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
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Link href="#" className="label">
                          Credit
                        </Link>
                        <Link href="#" className="label">
                          Energy
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <Link
                          href="#"
                          className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                        >
                          <span>BlockTech OTC Energy</span>
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
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Link href="#" className="label">
                          Energy
                        </Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <Link
                          href="#"
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
                            ></path>
                          </svg>
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Link href="#" className="label">
                          Energy
                        </Link>
                      </div>
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

export default Infrastructure;
