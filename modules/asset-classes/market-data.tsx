import React from "react";

const MarketData = () => {
  return (
    <div id="integration-id-cc65350" className="">
      <div className="flex min-w-0 w-full border-b-2 border-black">
        <div className="flex flex-1 shrink-0 justify-start overflow-auto items-end gap-x-4">
          <button
            type="button"
            role="tab"
            aria-selected="true"
            className="flex flex-nowrap items-center whitespace-nowrap focus:outline-none min-w-max-content max-w-1/6 pl-0 border-b-[12px] border-[#71c5e8] bottom-[2px] text-black hover:border-[#25b4ef] focus:border-[#25b4ef] font-medium grow p-2 pb-4 text-xl"
          >
            Energy
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            className="flex flex-nowrap items-center whitespace-nowrap focus:outline-none min-w-max-content max-w-1/6 text-gray-700 hover:text-black focus:text-black hover:border-gray-500 focus:border-gray-500 pl-0 border-b-[12px] border-gray-400 bottom-[2px] font-light grow p-2 pb-4 text-xl"
          >
            Interest Rates
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            className="flex flex-nowrap items-center whitespace-nowrap focus:outline-none min-w-max-content max-w-1/6 text-gray-700 hover:text-black focus:text-black hover:border-gray-500 focus:border-gray-500 pl-0 border-b-[12px] border-gray-400 bottom-[2px] font-light grow p-2 pb-4 text-xl"
          >
            Agriculture
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            className="flex flex-nowrap items-center whitespace-nowrap focus:outline-none min-w-max-content max-w-1/6 text-gray-700 hover:text-black focus:text-black hover:border-gray-500 focus:border-gray-500 pl-0 border-b-[12px] border-gray-400 bottom-[2px] font-light grow p-2 pb-4 text-xl"
          >
            Indices
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            className="flex flex-nowrap items-center whitespace-nowrap focus:outline-none min-w-max-content max-w-1/6 text-gray-700 hover:text-black focus:text-black hover:border-gray-500 focus:border-gray-500 pl-0 border-b-[12px] border-gray-400 bottom-[2px] font-light grow p-2 pb-4 text-xl"
          >
            CDS
          </button>
        </div>
      </div>
      <div className="">
        <div>
          <div className="">
            <div data-rich-text-ignore="true" className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left p-3.5">Futures</th>
                    <th className="hidden sm:table-cell text-left p-3.5">
                      Code
                    </th>
                    <th className="text-left p-3.5">Month</th>
                    <th className="text-left p-3.5">Last</th>
                    <th className="hidden whitespace-nowrap text-left p-3.5 sm:table-cell">
                      Change (%)
                    </th>
                    <th className="p-3.5 text-right">Intraday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="cursor-pointer hover:bg-gray" data-index="0">
                    <th className="border-t border-[#B5B5B5] text-left p-3.5">
                      <a
                        href="/products/213"
                        className="text-black hover:text-black hover:no-underline"
                      >
                        ICE WTI
                      </a>
                    </th>
                    <td className="hidden sm:table-cell">
                      <a
                        href="/products/213"
                        className="text-black hover:text-black hover:no-underline"
                      >
                        T
                      </a>
                    </td>
                    <td>Jul 24</td>
                    <td>78.090</td>
                    <td className="hidden text-left sm:table-cell">
                      <span className="whitespace-normal lg:whitespace-nowrap text-red-700">
                        <span>-0.359 (-0.459%)</span>
                      </span>
                    </td>
                    <td className="text-right">
                      <svg
                        viewBox="0 0 75 16"
                        height="1em"
                        className="inline-block"
                      >
                        <g>
                          <linearGradient
                            id="sparkline-gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            y1="16"
                            x2="0"
                            y2="0"
                          >
                            <stop offset="0%" stopColor="#b2eaf7"></stop>
                            <stop offset="50%" stopColor="#72c7e7"></stop>
                            <stop offset="100%" stopColor="#00b9e4"></stop>
                          </linearGradient>
                          <path
                            d="M0,3.6363636363634484L1.4705882352941178,2.5454545454543105L2.9411764705882355,0L4.411764705882353,2.181818181818276L16.176470588235293,7.272727272727414L19.11764705882353,9.454545454545173L20.58823529411765,8.363636363636035L22.058823529411764,6.909090909090862L23.529411764705884,6.181818181818276L25,5.818181818181724L26.470588235294116,14.54545454545431L30.88235294117647,8.363636363636035L32.35294117647059,7.272727272727414L41.1764705882353,8.727272727272586L42.64705882352941,8.727272727272586L44.11764705882353,10.909090909090862L45.588235294117645,12.363636363636035L66.17647058823529,13.090909090909138L69.11764705882354,15.636363636363448L70.58823529411765,16L72.05882352941177,14.181818181818276L73.52941176470588,16L75,15.636363636363448L75,16L0,16L0,3.6363636363634484"
                            style={{
                              fill: 'url("#sparkline-gradient")',
                              strokeWidth: "0",
                            }}
                          ></path>
                          <path
                            d="M0,3.6363636363634484L1.4705882352941178,2.5454545454543105L2.9411764705882355,0L4.411764705882353,2.181818181818276L16.176470588235293,7.272727272727414L19.11764705882353,9.454545454545173L20.58823529411765,8.363636363636035L22.058823529411764,6.909090909090862L23.529411764705884,6.181818181818276L25,5.818181818181724L26.470588235294116,14.54545454545431L30.88235294117647,8.363636363636035L32.35294117647059,7.272727272727414L41.1764705882353,8.727272727272586L42.64705882352941,8.727272727272586L44.11764705882353,10.909090909090862L45.588235294117645,12.363636363636035L66.17647058823529,13.090909090909138L69.11764705882354,15.636363636363448L70.58823529411765,16L72.05882352941177,14.181818181818276L73.52941176470588,16L75,15.636363636363448"
                            style={{
                              fill: "none",
                              stroke: "rgb(0, 185, 228)",
                              strokeWidth: "1px",
                            }}
                          ></path>
                        </g>
                      </svg>
                    </td>
                  </tr>
                  <tr className="cursor-pointer hover:bg-gray" data-index="1">
                    <th className="border-t border-[#B5B5B5] text-left p-3.5">
                      <a
                        href="/products/34361119"
                        className="text-black hover:text-black hover:no-underline"
                      >
                        LS Gasoil
                      </a>
                    </th>
                    <td className="hidden sm:table-cell">
                      <a
                        href="/products/34361119"
                        className="text-black hover:text-black hover:no-underline"
                      >
                        G
                      </a>
                    </td>
                    <td>Jul 24</td>
                    <td>758.250</td>
                    <td className="hidden text-left sm:table-cell">
                      <span className="whitespace-normal lg:whitespace-nowrap text-red-700">
                        <span>-4.000 (-0.525%)</span>
                      </span>
                    </td>
                    <td className="text-right">
                      <svg
                        viewBox="0 0 75 16"
                        height="1em"
                        className="inline-block"
                      >
                        <g>
                          <linearGradient
                            id="sparkline-gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            y1="16"
                            x2="0"
                            y2="0"
                          >
                            <stop offset="0%" stopColor="#b2eaf7"></stop>
                            <stop offset="50%" stopColor="#72c7e7"></stop>
                            <stop offset="100%" stopColor="#00b9e4"></stop>
                          </linearGradient>
                          <path
                            d="M0,7.199999999999999L1.4423076923076923,6.4L2.8846153846153846,0L4.326923076923077,2.4000000000000004L5.769230769230769,1.5999999999999996L7.211538461538462,1.5999999999999996L8.653846153846153,1.5999999999999996L10.096153846153847,3.1999999999999993L11.538461538461538,3.1999999999999993L12.98076923076923,4L14.423076923076923,4.800000000000001L15.865384615384615,4.800000000000001L17.307692307692307,7.199999999999999L18.75,8L20.192307692307693,8L21.634615384615383,5.6L23.076923076923077,4.800000000000001L24.51923076923077,4L25.96153846153846,9.6L27.403846153846153,4.800000000000001L28.846153846153847,7.199999999999999L30.28846153846154,5.6L31.73076923076923,5.6L33.17307692307692,4L34.61538461538461,6.4L36.05769230769231,7.199999999999999L37.5,8.8L38.94230769230769,7.199999999999999L40.38461538461539,7.199999999999999L41.82692307692308,8.8L43.26923076923077,12L44.71153846153846,12.8L46.15384615384615,12.8L47.59615384615385,12.8L49.03846153846154,12.8L50.48076923076923,12.8L51.92307692307692,12L53.36538461538461,12.8L54.80769230769231,11.2L56.25,12L57.69230769230769,12L59.13461538461539,12L60.57692307692308,12L62.01923076923077,12L63.46153846153846,11.2L64.90384615384616,13.6L66.34615384615384,12.8L67.78846153846153,12L69.23076923076923,12.8L70.67307692307692,12.8L72.11538461538461,13.6L73.5576923076923,15.2L75,16L75,16L0,16L0,7.199999999999999"
                            style={{
                              fill: 'url("#sparkline-gradient")',
                              strokeWidth: "0",
                            }}
                          ></path>
                          <path
                            d="M0,7.199999999999999L1.4423076923076923,6.4L2.8846153846153846,0L4.326923076923077,2.4000000000000004L5.769230769230769,1.5999999999999996L7.211538461538462,1.5999999999999996L8.653846153846153,1.5999999999999996L10.096153846153847,3.1999999999999993L11.538461538461538,3.1999999999999993L12.98076923076923,4L14.423076923076923,4.800000000000001L15.865384615384615,4.800000000000001L17.307692307692307,7.199999999999999L18.75,8L20.192307692307693,8L21.634615384615383,5.6L23.076923076923077,4.800000000000001L24.51923076923077,4L25.96153846153846,9.6L27.403846153846153,4.800000000000001L28.846153846153847,7.199999999999999L30.28846153846154,5.6L31.73076923076923,5.6L33.17307692307692,4L34.61538461538461,6.4L36.05769230769231,7.199999999999999L37.5,8.8L38.94230769230769,7.199999999999999L40.38461538461539,7.199999999999999L41.82692307692308,8.8L43.26923076923077,12L44.71153846153846,12.8L46.15384615384615,12.8L47.59615384615385,12.8L49.03846153846154,12.8L50.48076923076923,12.8L51.92307692307692,12L53.36538461538461,12.8L54.80769230769231,11.2L56.25,12L57.69230769230769,12L59.13461538461539,12L60.57692307692308,12L62.01923076923077,12L63.46153846153846,11.2L64.90384615384616,13.6L66.34615384615384,12.8L67.78846153846153,12L69.23076923076923,12.8L70.67307692307692,12.8L72.11538461538461,13.6L73.5576923076923,15.2L75,16"
                            style={{
                              fill: "none",
                              stroke: "rgb(0, 185, 228)",
                              strokeWidth: "1px",
                            }}
                          ></path>
                        </g>
                      </svg>
                    </td>
                  </tr>
                  <tr className="cursor-pointer hover:bg-gray" data-index="2">
                    <th className="border-t border-[#B5B5B5] text-left p-3.5">
                      <a
                        href="/products/910"
                        className="text-black hover:text-black hover:no-underline"
                      >
                        UK Nat Gas
                      </a>
                    </th>
                    <td className="hidden sm:table-cell">
                      <a
                        href="/products/910"
                        className="text-black hover:text-black hover:no-underline"
                      >
                        M
                      </a>
                    </td>
                    <td>Jul 24</td>
                    <td>83.750</td>
                    <td className="hidden text-left sm:table-cell">
                      <span className="whitespace-normal lg:whitespace-nowrap text-green-700">
                        <span>0.459 (0.552%)</span>
                      </span>
                    </td>
                    <td className="text-right">
                      <svg
                        viewBox="0 0 75 16"
                        height="1em"
                        className="inline-block"
                      >
                        <g>
                          <linearGradient
                            id="sparkline-gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            y1="16"
                            x2="0"
                            y2="0"
                          >
                            <stop offset="0%" stopColor="#b2eaf7"></stop>
                            <stop offset="50%" stopColor="#72c7e7"></stop>
                            <stop offset="100%" stopColor="#00b9e4"></stop>
                          </linearGradient>
                          <path
                            d="M0,16L37.5,0.8888888888887134L56.25,0L75,3.555555555555486L75,16L0,16L0,16"
                            style={{
                              fill: 'url("#sparkline-gradient")',
                              strokeWidth: "0",
                            }}
                          ></path>
                          <path
                            d="M0,16L37.5,0.8888888888887134L56.25,0L75,3.555555555555486"
                            style={{
                              fill: "none",
                              stroke: "rgb(0, 185, 228)",
                              strokeWidth: "1px",
                            }}
                          ></path>
                        </g>
                      </svg>
                    </td>
                  </tr>
                  <tr className="cursor-pointer hover:bg-gray" data-index="3">
                    <th className="border-t border-[#B5B5B5] text-left p-3.5">
                      <a
                        href="/products/197"
                        className="text-black hover:text-black hover:no-underline"
                      >
                        ICE EUA
                      </a>
                    </th>
                    <td className="hidden sm:table-cell">
                      <a
                        href="/products/197"
                        className="text-black hover:text-black hover:no-underline"
                      >
                        C
                      </a>
                    </td>
                    <td>Dec 24</td>
                    <td>68.960</td>
                    <td className="hidden text-left sm:table-cell">
                      <span className="whitespace-normal lg:whitespace-nowrap text-green-700">
                        <span>0.679 (0.996%)</span>
                      </span>
                    </td>
                    <td className="text-right">
                      <svg
                        viewBox="0 0 75 16"
                        height="1em"
                        className="inline-block"
                      >
                        <g>
                          <linearGradient
                            id="sparkline-gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            y1="16"
                            x2="0"
                            y2="0"
                          >
                            <stop offset="0%" stopColor="#b2eaf7"></stop>
                            <stop offset="50%" stopColor="#72c7e7"></stop>
                            <stop offset="100%" stopColor="#00b9e4"></stop>
                          </linearGradient>
                          <path
                            d="M0,8L18.75,2.4615384615380584L37.5,16L56.25,4.307692307692038L75,0L75,16L0,16L0,8"
                            style={{
                              fill: 'url("#sparkline-gradient")',
                              strokeWidth: "0",
                            }}
                          ></path>
                          <path
                            d="M0,8L18.75,2.4615384615380584L37.5,16L56.25,4.307692307692038L75,0"
                            style={{
                              fill: "none",
                              stroke: "rgb(0, 185, 228)",
                              strokeWidth: "1px",
                            }}
                          ></path>
                        </g>
                      </svg>
                    </td>
                  </tr>
                  <tr className="cursor-pointer hover:bg-gray" data-index="4">
                    <th className="border-t border-[#B5B5B5] text-left p-3.5">
                      <a
                        href="/products/6590258"
                        className="text-black hover:text-black hover:no-underline"
                      >
                        ICE Henry
                      </a>
                    </th>
                    <td className="hidden sm:table-cell">
                      <a
                        href="/products/6590258"
                        className="text-black hover:text-black hover:no-underline"
                      >
                        H
                      </a>
                    </td>
                    <td>Jul 24</td>
                    <td>2.795</td>
                    <td className="hidden text-left sm:table-cell">
                      <span className="whitespace-normal lg:whitespace-nowrap text-red-700">
                        <span>-0.085 (-2.985%)</span>
                      </span>
                    </td>
                    <td className="text-right">
                      <svg
                        viewBox="0 0 75 16"
                        height="1em"
                        className="inline-block"
                      >
                        <g>
                          <linearGradient
                            id="sparkline-gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            y1="16"
                            x2="0"
                            y2="0"
                          >
                            <stop offset="0%" stopColor="#b2eaf7"></stop>
                            <stop offset="50%" stopColor="#72c7e7"></stop>
                            <stop offset="100%" stopColor="#00b9e4"></stop>
                          </linearGradient>
                          <path
                            d="M0,0L1.4423076923076923,7.1999999999999105L2.8846153846153846,11.999999999999911L4.326923076923077,8.799999999999912L7.211538461538462,6.799999999999956L8.653846153846153,9.200000000000045L10.096153846153847,6.799999999999956L11.538461538461538,8L12.98076923076923,11.599999999999955L14.423076923076923,11.999999999999911L15.865384615384615,12.8L17.307692307692307,11.2L18.75,6.799999999999956L20.192307692307693,6.799999999999956L25.96153846153846,11.2L27.403846153846153,12.8L28.846153846153847,10.800000000000043L37.5,11.999999999999911L54.80769230769231,11.2L57.69230769230769,10.800000000000043L66.34615384615384,10.399999999999912L67.78846153846153,11.999999999999911L73.5576923076923,16L75,16L75,16L0,16L0,0"
                            style={{
                              fill: 'url("#sparkline-gradient")',
                              strokeWidth: "0",
                            }}
                          ></path>
                          <path
                            d="M0,0L1.4423076923076923,7.1999999999999105L2.8846153846153846,11.999999999999911L4.326923076923077,8.799999999999912L7.211538461538462,6.799999999999956L8.653846153846153,9.200000000000045L10.096153846153847,6.799999999999956L11.538461538461538,8L12.98076923076923,11.599999999999955L14.423076923076923,11.999999999999911L15.865384615384615,12.8L17.307692307692307,11.2L18.75,6.799999999999956L20.192307692307693,6.799999999999956L25.96153846153846,11.2L27.403846153846153,12.8L28.846153846153847,10.800000000000043L37.5,11.999999999999911L54.80769230769231,11.2L57.69230769230769,10.800000000000043L66.34615384615384,10.399999999999912L67.78846153846153,11.999999999999911L73.5576923076923,16L75,16"
                            style={{
                              fill: "none",
                              stroke: "rgb(0, 185, 228)",
                              strokeWidth: "1px",
                            }}
                          ></path>
                        </g>
                      </svg>
                    </td>
                  </tr>
                  <tr className="cursor-pointer hover:bg-gray" data-index="5">
                    <th className="border-t border-[#B5B5B5] text-left p-3.5">
                      <a
                        href="/products/27996665"
                        className="text-black hover:text-black hover:no-underline"
                      >
                        TTF Gas
                      </a>
                    </th>
                    <td className="hidden sm:table-cell">
                      <a
                        href="/products/27996665"
                        className="text-black hover:text-black hover:no-underline"
                      >
                        TFM
                      </a>
                    </td>
                    <td>Jul 24</td>
                    <td>35.575</td>
                    <td className="hidden text-left sm:table-cell">
                      <span className="whitespace-normal lg:whitespace-nowrap text-green-700">
                        <span>0.215 (0.608%)</span>
                      </span>
                    </td>
                    <td className="text-right">
                      <svg
                        viewBox="0 0 75 16"
                        height="1em"
                        className="inline-block"
                      >
                        <g>
                          <linearGradient
                            id="sparkline-gradient"
                            gradientUnits="userSpaceOnUse"
                            x1="0"
                            y1="16"
                            x2="0"
                            y2="0"
                          >
                            <stop offset="0%" stopColor="#b2eaf7"></stop>
                            <stop offset="50%" stopColor="#72c7e7"></stop>
                            <stop offset="100%" stopColor="#00b9e4"></stop>
                          </linearGradient>
                          <path
                            d="M0,16L18.75,11.000000000000178L37.5,0L56.25,4.499999999999556L75,4.999999999999822L75,16L0,16L0,16"
                            style={{
                              fill: 'url("#sparkline-gradient")',
                              strokeWidth: "0",
                            }}
                          ></path>
                          <path
                            d="M0,16L18.75,11.000000000000178L37.5,0L56.25,4.499999999999556L75,4.999999999999822"
                            style={{
                              fill: "none",
                              stroke: "rgb(0, 185, 228)",
                              strokeWidth: "1px",
                            }}
                          ></path>
                        </g>
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p>
            <span className="text-xs font-light leading-none text-gray-700">
              Market data delayed 15 mins.
            </span>
          </p>
        </div>
        <div className="text-right">
          <a
            href="/products"
            className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-secondary hover:text-secondary font-bold"
          >
            <span>Search All Products</span>
          </a>
        </div>
      </div>
      <div className="hidden">
        <div>
          <div className="tile-fill-width">
            <div style={{ minHeight: "244px" }}>
              <div className="flex flex-1 flex-col items-center justify-center duration-300 opacity-50">
                <svg
                  viewBox="0 0 66 66"
                  className="w-full max-w-20"
                  role="progressbar"
                  data-testid="spinner"
                  aria-label="Loading contracts..."
                  aria-busy="true"
                  aria-live="polite"
                >
                  <g>
                    <g>
                      <circle
                        fill="none"
                        strokeWidth="6"
                        strokeLinecap="round"
                        cx="33"
                        cy="33"
                        r="30"
                        strokeDasharray="187"
                        strokeDashoffset="0"
                        stroke="currentColor"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="187;46.75;187"
                          dur="1.4s"
                          repeatCount="indefinite"
                        ></animate>
                        <animateTransform
                          attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          values="0 0 0;135 0 0;450 0 0"
                          dur="1.4s"
                          repeatCount="indefinite"
                        ></animateTransform>
                      </circle>
                    </g>
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      from="0 33 33"
                      to="270 33 33"
                      dur="1.4s"
                      repeatCount="indefinite"
                    ></animateTransform>
                  </g>
                  <g className="duration-300">
                    <path
                      strokeWidth="6"
                      stroke="currentColor"
                      d="M33,10 L33,40 M33,45 L33,55"
                    ></path>
                  </g>
                </svg>
                <div className="shrink overflow-hidden px-4 text-center">
                  Still working...
                </div>
              </div>
            </div>
          </div>
          <p>
            <span className="text-xs font-light leading-none text-gray-700">
              Market data delayed 15 mins.
            </span>
          </p>
        </div>
        <div className="text-right">
          <a
            href="/products"
            className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-secondary hover:text-secondary font-bold"
          >
            <span>Search All Products</span>
          </a>
        </div>
      </div>
      <div className="hidden">
        <div>
          <div className="tile-fill-width">
            <div style={{ minHeight: "244px" }}>
              <div className="flex flex-1 flex-col items-center justify-center duration-300 opacity-50">
                <svg
                  viewBox="0 0 66 66"
                  className="w-full max-w-20"
                  role="progressbar"
                  aria-label="Loading contracts..."
                  aria-busy="true"
                  aria-live="polite"
                >
                  <g>
                    <g>
                      <circle
                        fill="none"
                        strokeWidth="6"
                        strokeLinecap="round"
                        cx="33"
                        cy="33"
                        r="30"
                        strokeDasharray="187"
                        strokeDashoffset="0"
                        stroke="currentColor"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="187;46.75;187"
                          dur="1.4s"
                          repeatCount="indefinite"
                        ></animate>
                        <animateTransform
                          attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          values="0 0 0;135 0 0;450 0 0"
                          dur="1.4s"
                          repeatCount="indefinite"
                        ></animateTransform>
                      </circle>
                    </g>
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      from="0 33 33"
                      to="270 33 33"
                      dur="1.4s"
                      repeatCount="indefinite"
                    ></animateTransform>
                  </g>
                  <g className="duration-300">
                    <path
                      strokeWidth="6"
                      stroke="currentColor"
                      d="M33,10 L33,40 M33,45 L33,55"
                    ></path>
                  </g>
                </svg>
                <div className="shrink overflow-hidden px-4 text-center">
                  Still working...
                </div>
              </div>
            </div>
          </div>
          <p>
            <span className="text-xs font-light leading-none text-gray-700">
              Market data delayed 15 mins.
            </span>
          </p>
        </div>
        <div className="text-right">
          <a
            href="/products"
            className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-secondary hover:text-secondary font-bold"
          >
            <span>Search All Products</span>
          </a>
        </div>
      </div>
      <div className="hidden">
        <div>
          <div className="tile-fill-width">
            <div style={{ minHeight: "244px" }}>
              <div className="flex flex-1 flex-col items-center justify-center duration-300 opacity-50">
                <svg
                  viewBox="0 0 66 66"
                  className="w-full max-w-20"
                  role="progressbar"
                  data-testid="spinner"
                  aria-label="Loading contracts..."
                  aria-busy="true"
                  aria-live="polite"
                >
                  <g>
                    <g>
                      <circle
                        fill="none"
                        strokeWidth="6"
                        strokeLinecap="round"
                        cx="33"
                        cy="33"
                        r="30"
                        strokeDasharray="187"
                        strokeDashoffset="0"
                        stroke="currentColor"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="187;46.75;187"
                          dur="1.4s"
                          repeatCount="indefinite"
                        ></animate>
                        <animateTransform
                          attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          values="0 0 0;135 0 0;450 0 0"
                          dur="1.4s"
                          repeatCount="indefinite"
                        ></animateTransform>
                      </circle>
                    </g>
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      from="0 33 33"
                      to="270 33 33"
                      dur="1.4s"
                      repeatCount="indefinite"
                    ></animateTransform>
                  </g>
                  <g className="duration-300">
                    <path
                      strokeWidth="6"
                      stroke="currentColor"
                      d="M33,10 L33,40 M33,45 L33,55"
                    ></path>
                  </g>
                </svg>
                <div className="shrink overflow-hidden px-4 text-center">
                  Still working...
                </div>
              </div>
            </div>
          </div>
          <p>
            <span className="text-xs font-light leading-none text-gray-700">
              Market data delayed 15 mins.
            </span>
          </p>
        </div>
        <div className="text-right">
          <a
            href="/products"
            className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-secondary hover:text-secondary font-bold"
          >
            <span>Search All Products</span>
          </a>
        </div>
      </div>
      <div className="hidden">
        <div data-rich-text-ignore="true" className="overflow-x-auto">
          <table className="table-stats">
            <thead>
              <tr>
                <td>Instrument</td>
                <td>EOD Price</td>
                <td>Date</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CDX-EMS36V1-5Y</td>
                <td>94.8756</td>
                <td>2022-01-28</td>
              </tr>
              <tr>
                <td>CDX-NAHYS37V1-5Y</td>
                <td>106.6321</td>
                <td>2022-01-28</td>
              </tr>
              <tr>
                <td>CDX-NAIGS37V1-5Y</td>
                <td>101.8083</td>
                <td>2022-01-28</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between gap-4 text-xs">
          <div className="flex-1">
            <a href="/publicdocs/Markit_ICE_Settlement_Pricing_Terms_of_Use.pdf">
              Markit ICE Settlement Prices Terms of Use
            </a>
          </div>
          <div className="flex-1 text-right">
            <a href="/cds/MarkitSingleNames.shtml">View Additional Details</a>
          </div>
        </div>
        <div className="text-xs">
          <p>
            ICE publishes its daily settlement prices on select indices and
            5-year single name CDS instruments.
          </p>
        </div>
        <div className="text-right">
          <a
            href="/products"
            className="inline-flex items-center no-underline hover:underline cursor-pointer print:text-black print:underline text-secondary hover:text-secondary font-bold"
          >
            <span>Search All Products</span>
          </a>
        </div>
      </div>
      <div className="h-16"></div>
    </div>
  );
};

export default MarketData;
