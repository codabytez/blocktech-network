import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
    <div className="px-3 lg:px-24 lg:bg-[#e2e2e2] flex items-center gap-4 bg-white py-2 text-black">
      <Link href="/" className="contents lg:hidden">
        <svg
          role="img"
          viewBox="0 0 79 80"
          height="45"
          className="inline-block"
        >
          <title>ICE Logo</title>
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-60.000000, -79.000000)">
              <g transform="translate(60.000000, 79.000000)">
                <polygon
                  className="text-ice-blue fill-current"
                  points="0 0 0 79 15.3877027 79 15.3877027 71.781459 7.2168718 71.781459 7.2168718 7.2168718 71.781459 7.2168718 71.781459 47.0749194 79 47.0749194 79 0"
                ></polygon>
                <polygon
                  className="text-black fill-current"
                  points="23 79 28 79 28 55 23 55"
                ></polygon>
                <g transform="translate(32.000000, 55.000000)">
                  <path
                    d="M12.4628433,20.5567292 C8.16176588,20.5567292 5.08320506,17.2362315 5.08320506,12.4997921 C5.08320506,7.76335268 7.86914443,4.39461734 12.3650254,4.39461734 C15.0044459,4.39461734 17.2038936,5.6641827 18.6703308,7.71511502 L21.994061,4.44327085 C19.4033413,1.41594172 16.1287283,0 12.2676236,0 C5.32754189,0 0,5.4200835 0,12.4997921 C0,19.5799165 4.88715285,25 12.4628433,25 C16.5687011,25 19.8433141,23.2422362 22.1892807,20.1658378 L18.7190317,17.2362315 C17.2038936,19.3358173 15.1022639,20.5567292 12.4628433,20.5567292"
                    className="text-black fill-current"
                  ></path>
                  <g transform="translate(23.948922, 0.000083)">
                    <path
                      d="M5.29965336,14.5993779 C6.07012606,18.1885095 8.83109062,20.5567292 12.4628433,20.5567292 C15.1022639,20.5567292 17.2038936,19.3358173 18.7190317,17.2362315 L22.1892807,20.1658378 C19.8433141,23.2418204 16.5691173,24.9995842 12.4628433,24.9995842 C4.8875691,24.9995842 0,19.5795007 0,12.4997921 C0,5.41966766 4.84885816,0 11.7889399,0 C16.988694,0 24.0994369,3.61824049 22.9218749,14.5993779 L5.29965336,14.5993779 Z M18.2082969,10.7420283 C17.6767499,5.86461851 14.5178534,4.3942015 12.3658578,4.3942015 C8.7124603,4.3942015 6.06762858,6.68549044 5.21973399,10.7420283 L18.2082969,10.7420283 Z"
                      className="text-black fill-current"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </Link>
      <div className="flex-1"></div>
      <div className="text-xxs hidden md:text-xs lg:contents">
        <Link
          href="#"
          className="inline-flex items-center no-underline hover:underline cursor-pointer text-black hover:text-black font-bold"
        >
          <span>ICE</span>
        </Link>
        <Link
          href="#"
          className="inline-flex items-center no-underline hover:underline cursor-pointer text-black hover:text-black"
        >
          <span>NYSE</span>
        </Link>
        <span> | </span>
        <Link
          href="#"
          data-checked="false"
          className="font-medium justify-center items-center no-underline focus-within:outline-none focus:outline-none focus-within:ring focus:ring leading-tight align-middle duration-75 active:translate-y-px max-w-full select-none bg-black text-white border-white shadow-lg  hover:text-primary    active:text-primary  active:shadow-none  checked:text-primary   text-xxs md:text-xs gap-1 md:gap-2 rounded-tl rounded-tr rounded-bl rounded-br inline-flex px-2 md:px-3 py-1 md:py-2 cursor-pointer uppercase break-words"
        >
          Login
        </Link>
        <Link
          href="#"
          data-checked="false"
          className="font-medium justify-center items-center no-underline focus-within:outline-none focus:outline-none focus-within:ring focus:ring leading-tight align-middle duration-75 active:shadow-none active:translate-y-px max-w-full select-none bg-black text-white border-white shadow-lg  hover:text-primary active:text-primary checked:text-primary text-xxs md:text-xs gap-1 md:gap-2 rounded-tl rounded-tr rounded-bl rounded-br inline-flex px-2 md:px-3 py-1 md:py-2 cursor-pointer uppercase break-words"
        >
          WebICE
        </Link>
      </div>
      <div className="contents lg:hidden">
        <div className="hidden"></div>
        <div className="flex gap-2 overflow-hidden">
          <button
            type="button"
            className="js--mobile-nav flex h-12 w-12 items-center justify-center text-2xl"
          >
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 opacity-100">
                <svg
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 18 18"
                  className="h-8 w-8"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      transform="translate(-1362.000000, -104.000000)"
                      fill="currentColor"
                    >
                      <path d="M1379.00496,121.06904 C1378.86456,121.20944 1378.68096,121.28 1378.49736,121.28 C1378.31376,121.28 1378.13088,121.20944 1377.99048,121.06904 L1372.48032,115.538 C1371.37584,116.42576 1369.9776,116.96 1368.45552,116.96 C1364.89584,116.96 1362,114.05336 1362,110.48072 C1362,106.90736 1364.89584,104 1368.45552,104 C1372.0152,104 1374.91104,106.90736 1374.91104,110.48072 C1374.91104,112.00784 1374.37896,113.41112 1373.4948,114.51992 L1379.00496,120.05096 C1379.28504,120.33248 1379.28504,120.78752 1379.00496,121.06904 Z M1368.45552,105.44 C1365.6864,105.44 1363.43424,107.70152 1363.43424,110.48072 C1363.43424,113.2592 1365.6864,115.52 1368.45552,115.52 C1371.22392,115.52 1373.4768,113.2592 1373.4768,110.48072 C1373.4768,107.70152 1371.22392,105.44 1368.45552,105.44 Z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 opacity-0">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="h-8 w-8"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div className="px-3 lg:px-24 hidden items-center gap-8 py-8 lg:flex">
      <Link href="#">
        <svg
          role="img"
          viewBox="0 0 79 80"
          height="50"
          className="inline-block"
        >
          <title>ICE Logo</title>
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-60.000000, -79.000000)">
              <g transform="translate(60.000000, 79.000000)">
                <polygon
                  className="text-ice-blue fill-current"
                  points="0 0 0 79 15.3877027 79 15.3877027 71.781459 7.2168718 71.781459 7.2168718 7.2168718 71.781459 7.2168718 71.781459 47.0749194 79 47.0749194 79 0"
                ></polygon>
                <polygon
                  className="text-black fill-current"
                  points="23 79 28 79 28 55 23 55"
                ></polygon>
                <g transform="translate(32.000000, 55.000000)">
                  <path
                    d="M12.4628433,20.5567292 C8.16176588,20.5567292 5.08320506,17.2362315 5.08320506,12.4997921 C5.08320506,7.76335268 7.86914443,4.39461734 12.3650254,4.39461734 C15.0044459,4.39461734 17.2038936,5.6641827 18.6703308,7.71511502 L21.994061,4.44327085 C19.4033413,1.41594172 16.1287283,0 12.2676236,0 C5.32754189,0 0,5.4200835 0,12.4997921 C0,19.5799165 4.88715285,25 12.4628433,25 C16.5687011,25 19.8433141,23.2422362 22.1892807,20.1658378 L18.7190317,17.2362315 C17.2038936,19.3358173 15.1022639,20.5567292 12.4628433,20.5567292"
                    className="text-black fill-current"
                  ></path>
                  <g transform="translate(23.948922, 0.000083)">
                    <path
                      d="M5.29965336,14.5993779 C6.07012606,18.1885095 8.83109062,20.5567292 12.4628433,20.5567292 C15.1022639,20.5567292 17.2038936,19.3358173 18.7190317,17.2362315 L22.1892807,20.1658378 C19.8433141,23.2418204 16.5691173,24.9995842 12.4628433,24.9995842 C4.8875691,24.9995842 0,19.5795007 0,12.4997921 C0,5.41966766 4.84885816,0 11.7889399,0 C16.988694,0 24.0994369,3.61824049 22.9218749,14.5993779 L5.29965336,14.5993779 Z M18.2082969,10.7420283 C17.6767499,5.86461851 14.5178534,4.3942015 12.3658578,4.3942015 C8.7124603,4.3942015 6.06762858,6.68549044 5.21973399,10.7420283 L18.2082969,10.7420283 Z"
                      className="text-black fill-current"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </Link>
      <nav className="flex h-24 items-stretch justify-between">
        <button
          type="button"
          className="group cursor-pointer border-0 bg-transparent px-8 text-sm focus:outline-none"
        >
          <div className="border-b-4 group-hover:border-black group-focus:border-black border-transparent">
            Solutions
          </div>
        </button>
        <div className="hidden"></div>
        <button
          type="button"
          className="group cursor-pointer border-0 bg-transparent px-8 text-sm focus:outline-none"
        >
          <div className="border-b-4 group-hover:border-black group-focus:border-black border-transparent">
            Resources
          </div>
        </button>
        <div className="hidden"></div>
        <button
          type="button"
          className="group cursor-pointer border-0 bg-transparent px-8 text-sm focus:outline-none"
        >
          <div className="border-b-4 group-hover:border-black group-focus:border-black border-transparent">
            Insights
          </div>
        </button>
        <div className="hidden"></div>
        <button
          type="button"
          className="group cursor-pointer border-0 bg-transparent px-8 text-sm focus:outline-none"
        >
          <div className="border-b-4 group-hover:border-black group-focus:border-black border-transparent">
            About Us
          </div>
        </button>
        <div className="hidden"></div>
        <div className="hidden"></div>
      </nav>
      <div className="flex-1"></div>
      <div className="hidden"></div>
      <form
        method="GET"
        className="m-0 flex items-center text-black"
        action="/site-search"
      >
        <div className="relative text-base">
          <input
            type="search"
            name="q"
            placeholder="Search"
            className="border-0 border-b-2 border-solid bg-transparent p-2 text-base duration-100 focus:border-primary focus:outline-none border-black"
            value=""
          />
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 px-4">
            <svg role="img" width="1em" height="1em" viewBox="0 0 18 18">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                  transform="translate(-1362.000000, -104.000000)"
                  fill="currentColor"
                >
                  <path d="M1379.00496,121.06904 C1378.86456,121.20944 1378.68096,121.28 1378.49736,121.28 C1378.31376,121.28 1378.13088,121.20944 1377.99048,121.06904 L1372.48032,115.538 C1371.37584,116.42576 1369.9776,116.96 1368.45552,116.96 C1364.89584,116.96 1362,114.05336 1362,110.48072 C1362,106.90736 1364.89584,104 1368.45552,104 C1372.0152,104 1374.91104,106.90736 1374.91104,110.48072 C1374.91104,112.00784 1374.37896,113.41112 1373.4948,114.51992 L1379.00496,120.05096 C1379.28504,120.33248 1379.28504,120.78752 1379.00496,121.06904 Z M1368.45552,105.44 C1365.6864,105.44 1363.43424,107.70152 1363.43424,110.48072 C1363.43424,113.2592 1365.6864,115.52 1368.45552,115.52 C1371.22392,115.52 1373.4768,113.2592 1373.4768,110.48072 C1373.4768,107.70152 1371.22392,105.44 1368.45552,105.44 Z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="hidden"></div>
      </form>
    </div>
    </div>
  );
};

export default Navbar;