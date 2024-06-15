import React from "react";

const Infrastructure = () => {
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
      <div className="flex flex-col items-stretch gap-4 sm:flex-row flex-grow sm:flex-row-reverse">
        <div className="sm:flex-1 relative overflow-hidden">
          <img
            src="https://www.ice.com/publicdocs/images/Hero-Commodities-1920x550-05.jpg"
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
                        <a
                          href="/futures-europe"
                          className="inline-flex items-center no-underline hover:underline cursor-pointer text-[#235F73] hover:text-[#235F73] font-bold"
                        >
                          <span>ICE Futures Europe</span>
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
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <a
                          href="/agriculture"
                          className="label"
                          title="Agriculture"
                        >
                          Agriculture
                        </a>
                        <a href="/energy" className="label" title="Energy">
                          Energy
                        </a>
                        <a
                          href="/single-stock-equity-index"
                          className="label"
                          title="Equities"
                        >
                          Equities
                        </a>
                        <a
                          href="/interest-rates"
                          className="label"
                          title="Interest Rates"
                        >
                          IR
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <a
                          href="/futures-us"
                          className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                        >
                          <span>ICE Futures U.S.</span>
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
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <a
                          href="/agriculture"
                          className="label"
                          title="Agriculture"
                        >
                          Agriculture
                        </a>

                        <a href="/energy" className="label" title="Energy">
                          Energy
                        </a>
                        <a
                          href="/single-stock-equity-index"
                          className="label"
                          title="Equities"
                        >
                          Equities
                        </a>
                        <a href="/forex" className="label" title="Forex (FX)">
                          Forex (FX)
                        </a>
                        <a href="/metals" className="label" title="Metals">
                          Metals
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <a
                          href="/futures-singapore"
                          className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                        >
                          <span>ICE Futures Singapore</span>
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
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <a href="/energy" className="label" title="Energy">
                          Energy
                        </a>
                        <a
                          href="/single-stock-equity-index"
                          className="label"
                          title="Equities"
                        >
                          Equities
                        </a>
                        <a href="/forex" className="label" title="Forex (FX)">
                          Forex (FX)
                        </a>
                        <a
                          href="/products/79696475"
                          className="label"
                          title="Digital Assets"
                        >
                          Digital Assets
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <a
                          href="/futures-abu-dhabi"
                          className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                        >
                          <span>ICE Futures Abu Dhabi</span>
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
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <a href="/energy" className="label" title="Energy">
                          Energy
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <a
                          href="/endex"
                          className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                        >
                          <span>ICE Endex</span>
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
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <a href="/energy" className="label" title="Energy">
                          Energy
                        </a>
                        <a
                          href="/single-stock-equity-index"
                          className="label"
                          title="Equities"
                        >
                          Equities
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <a
                          href="/service/creditex"
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
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <a
                          href="/credit-derivatives"
                          className="label"
                          title="Credit"
                        >
                          Credit
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <a
                          href="https://www.nyse.com/index"
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
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <a
                          rel="noopener noreferrer"
                          href="https://www.nyse.com/index"
                          target="_blank"
                          className="label"
                          title="Listings"
                        >
                          Listings
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <a
                          href="/swap-trade"
                          className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                        >
                          <span>ICE Swap Trade</span>
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
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <a
                          href="/credit-derivatives"
                          className="label"
                          title="Credit"
                        >
                          Credit
                        </a>
                        <a href="/energy" className="label" title="Energy">
                          Energy
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <a
                          href="/otc-energy"
                          className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                        >
                          <span>ICE OTC Energy</span>
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
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <a href="/energy" className="label" title="Energy">
                          Energy
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <a
                          href="/ngx"
                          className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-[#235F73] hover:text-[#235F73] font-bold"
                        >
                          <span>ICE NGX</span>
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
                        </a>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-2 flex-wrap">
                        <a href="/energy" className="label" title="Energy">
                          Energy
                        </a>
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
