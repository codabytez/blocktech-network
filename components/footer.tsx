import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="contents ice">
        <div className="px-3 lg:px-24 bg-gray-200 pb-10 pt-24">
          <footer>
            <div className="flex flex-col items-center justify-center gap-10 pb-8 sm:flex-row sm:items-start sm:gap-16">
              <a href="/">
                <svg
                  role="img"
                  viewBox="0 0 79 80"
                  width="100"
                  className="inline-block"
                >
                  <title>ICE Logo</title>
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
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
              </a>
              <div className="sm:hidden">
                <ul className="m-0 flex list-none justify-center gap-4 p-0">
                  <li>
                    <a
                      href="https://www.twitter.com/ICE_Markets"
                      title="Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-[#71C5E8] flex h-12 w-12 items-center justify-center border-2 border-solid text-current"
                    >
                      <svg
                        role="img"
                        width="1em"
                        height="1em"
                        viewBox="0 0 1227 1227"
                      >
                        <path
                          d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                          className="fill-current"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/intercontinentalexchange-inc-"
                      title="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-[#71C5E8] flex h-12 w-12 items-center justify-center border-2 border-solid text-current"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:hidden">
                <hr className="border-0 border-[#71C5E8] border-t-2 border-solid mx-0 my-4" />
              </div>
              <div className="flex w-full flex-col gap-10 sm:gap-16">
                <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:items-start sm:gap-16">
                  <div className="w-full flex-1 px-8 sm:block sm:w-auto sm:px-0 space-y-4 hidden">
                    <h5 className="m-0 text-base font-bold normal-case text-current">
                      Solutions
                    </h5>
                    <ul className="m-0 list-none space-y-4 p-0 text-xs font-normal">
                      <li>
                        <a
                          href="/about/exchanges-clearing"
                          className="text-current no-underline hover:underline text-base"
                        >
                          Markets and Exchanges
                        </a>
                      </li>
                      <li>
                        <a
                          href="/fixed-income-data-services"
                          className="text-current no-underline hover:underline text-base"
                        >
                          Fixed Income and Data Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.icemortgagetechnology.com/"
                          className="text-current no-underline hover:underline text-base"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Mortgage Technology
                        </a>
                      </li>
                      <li>
                        <a
                          href="/iba"
                          className="text-current no-underline hover:underline text-base"
                        >
                          Benchmark Administration
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full flex-1 px-8 sm:block sm:w-auto sm:px-0 space-y-4 hidden">
                    <h5 className="m-0 text-base font-bold normal-case text-current">
                      Tools and Sources
                    </h5>
                    <ul className="m-0 list-none space-y-4 p-0 text-xs font-normal">
                      <li>
                        <a
                          href="/solutions/markets"
                          className="text-current no-underline hover:underline text-base"
                        >
                          Markets
                        </a>
                      </li>
                      <li>
                        <a
                          href="/solutions/clearing"
                          className="text-current no-underline hover:underline text-base"
                        >
                          Clearing
                        </a>
                      </li>
                      <li>
                        <a
                          href="/products"
                          className="text-current no-underline hover:underline text-base"
                        >
                          Product Guide
                        </a>
                      </li>
                      <li>
                        <a
                          href="/marketdata/reports"
                          className="text-current no-underline hover:underline text-base"
                        >
                          Market Reports
                        </a>
                      </li>
                      <li>
                        <a
                          href="/expiry-calendar"
                          className="text-current no-underline hover:underline text-base"
                        >
                          Expiry Calendars
                        </a>
                      </li>
                      <li>
                        <a
                          href="/clearing/margin-models"
                          className="text-current no-underline hover:underline text-base"
                        >
                          Margins
                        </a>
                      </li>
                      <li>
                        <a
                          href="/fees"
                          className="text-current no-underline hover:underline text-base"
                        >
                          Fees
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full flex-1 px-8 sm:block sm:w-auto sm:px-0 space-y-4">
                    <h5 className="m-0 text-base font-bold normal-case text-current">
                      Support
                    </h5>
                    <ul className="m-0 list-none space-y-4 p-0 text-xs font-normal">
                      <li>
                        <a
                          href="/contact"
                          className="text-current no-underline hover:underline text-base"
                        >
                          Trade and Clearing Helpdesk
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          className="text-current no-underline hover:underline text-base"
                        >
                          ICE Data Services Support
                        </a>
                      </li>
                      <li>
                        <a
                          href="/support/education"
                          className="text-current no-underline hover:underline text-base"
                        >
                          ICE Education
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://developer.ice.com"
                          className="text-current no-underline hover:underline text-base"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ICE Developer Portal
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full flex-1 px-8 sm:block sm:w-auto sm:px-0 space-y-4">
                    <h5 className="m-0 text-base font-bold normal-case text-current">
                      About
                    </h5>
                    <ul className="m-0 list-none space-y-4 p-0 text-xs font-normal">
                      <li>
                        <a
                          href="/media"
                          className="text-current no-underline hover:underline text-base"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Media Center
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://ir.theice.com/home/default.aspx"
                          className="text-current no-underline hover:underline text-base"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Investor Relations
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          className="text-current no-underline hover:underline text-base"
                        >
                          Contact
                        </a>
                      </li>
                      <li>
                        <a
                          href="/careers"
                          className="text-current no-underline hover:underline text-base"
                        >
                          Careers
                        </a>
                      </li>
                      <li>
                        <a
                          href="/events"
                          className="text-current no-underline hover:underline text-base"
                        >
                          ICE Events
                        </a>
                      </li>
                      <li>
                        <a
                          href="/about/corporate-responsibility"
                          className="text-current no-underline hover:underline text-base"
                        >
                          Sustainability
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full flex-1 px-8 sm:block sm:w-auto sm:px-0 space-y-4 hidden">
                    <h5 className="m-0 text-base font-bold normal-case text-current">
                      Insights
                    </h5>
                    <ul className="m-0 list-none space-y-4 p-0 text-xs font-normal">
                      <li>
                        <a
                          href="/insights/topic/sustainable-finance"
                          className="text-current no-underline hover:underline text-base"
                        >
                          Sustainable Finance
                        </a>
                      </li>
                      <li>
                        <a
                          href="/insights/topic/energy-markets"
                          className="text-current no-underline hover:underline text-base"
                        >
                          Energy Markets
                        </a>
                      </li>
                      <li>
                        <a
                          href="/insights/topic/fixed-income-data"
                          className="text-current no-underline hover:underline text-base"
                        >
                          Fixed Income and Data
                        </a>
                      </li>
                      <li>
                        <a
                          href="/insights/topic/mortgage"
                          className="text-current no-underline hover:underline text-base"
                        >
                          Mortgage
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-8 hidden flex-col items-stretch gap-4 sm:flex sm:flex-row sm:items-center">
              <div className="grow">
                <hr className="border-0 border-[#71C5E8] border-t-2 border-solid mx-0 my-4" />
              </div>
              <ul className="m-0 flex list-none justify-center gap-4 p-0">
                <li>
                  <a
                    href="https://www.twitter.com/ICE_Markets"
                    title="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-[#71C5E8] flex h-12 w-12 items-center justify-center border-2 border-solid text-current"
                  >
                    <svg
                      role="img"
                      width="1em"
                      height="1em"
                      viewBox="0 0 1227 1227"
                    >
                      <path
                        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                        className="fill-current"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/intercontinentalexchange-inc-"
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-[#71C5E8] flex h-12 w-12 items-center justify-center border-2 border-solid text-current"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-xs space-y-4 font-normal">
              <ul className="m-0 flex list-none flex-col gap-4 px-8 py-0 sm:flex-row sm:gap-0 sm:px-0">
                <li className="block sm:inline">
                  <span className="hidden sm:inline"></span>
                  <a
                    href="/terms-of-use"
                    className="text-current no-underline hover:underline"
                  >
                    Terms of Use
                  </a>
                </li>
                <li className="block sm:inline">
                  <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
                  <a
                    href="/privacy-policy"
                    className="text-current no-underline hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="block sm:inline">
                  <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
                  <a
                    href="/privacy-policy/events"
                    className="text-current no-underline hover:underline"
                  >
                    Event Privacy Policy
                  </a>
                </li>
                <li className="block sm:inline">
                  <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
                  <a
                    href="/security"
                    className="text-current no-underline hover:underline"
                  >
                    Security
                  </a>
                </li>
                <li className="block sm:inline">
                  <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
                  <a
                    href="/cookies"
                    className="text-current no-underline hover:underline"
                  >
                    Cookies
                  </a>
                </li>
                <li className="block sm:inline">
                  <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
                  <a className="text-current no-underline hover:underline">
                    Do Not Sell My Personal Information
                  </a>
                </li>
                <li className="block sm:inline">
                  <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
                  <a
                    href="/supported-browsers"
                    className="text-current no-underline hover:underline"
                  >
                    Supported Browsers
                  </a>
                </li>
                <li className="block sm:inline">
                  <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
                  <a
                    href="/data-protection"
                    className="text-current no-underline hover:underline"
                  >
                    Data Protection
                  </a>
                </li>
                <li className="block sm:inline">
                  <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
                  <a
                    href="/registered-investment-adviser-notice"
                    className="text-current no-underline hover:underline"
                  >
                    Registered Investment Advisor Notice
                  </a>
                </li>
              </ul>
              <div className="hidden sm:block">
                © {new Date().getFullYear()} Intercontinental Exchange, Inc.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
