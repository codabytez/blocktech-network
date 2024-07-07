import Image from "next/image";
import logo from "@/public/logo/Logo-01.png";
import { NextPage } from "next";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const Footer: NextPage = () => {
  return (
    <div>
      <div className="contents ice">
        <div className="px-3 lg:px-24 bg-gray pb-10 pt-24">
          <footer>
            <div className="flex flex-col items-center justify-center gap-10 pb-8 sm:flex-row sm:items-start sm:gap-16">
              <Link href="/">
                <Image
                  src={logo}
                  alt="BlockTech Logo"
                  width={100}
                  height={100}
                />
              </Link>
              <div className="sm:hidden">
                <ul className="m-0 flex list-none justify-center gap-4 p-0">
                  <li>
                    <Link
                      href={ROUTES.LOGIN}
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
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={ROUTES.LOGIN}
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
                    </Link>
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
                        <Link
                          href={ROUTES.EXCHANGES_CLEARING}
                          className="text-current no-underline hover:underline text-base"
                        >
                          Markets and Exchanges
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.FIXED_INCOME}
                          className="text-current no-underline hover:underline text-base"
                        >
                          Fixed Income and Data Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.MORTGAGE_TECHNOLOGY}
                          className="text-current no-underline hover:underline text-base"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Mortgage Technology
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.LOGIN}
                          className="text-current no-underline hover:underline text-base"
                        >
                          Benchmark Administration
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full flex-1 px-8 sm:block sm:w-auto sm:px-0 space-y-4 hidden">
                    <h5 className="m-0 text-base font-bold normal-case text-current">
                      Tools and Sources
                    </h5>
                    <ul className="m-0 list-none space-y-4 p-0 text-xs font-normal">
                      <li>
                        <Link
                          href={ROUTES.LOGIN}
                          className="text-current no-underline hover:underline text-base"
                        >
                          Markets
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.EXCHANGES_CLEARING}
                          className="text-current no-underline hover:underline text-base"
                        >
                          Clearing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.LOGIN}
                          className="text-current no-underline hover:underline text-base"
                        >
                          Product Guide
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.LOGIN}
                          className="text-current no-underline hover:underline text-base"
                        >
                          Market Reports
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.LOGIN}
                          className="text-current no-underline hover:underline text-base"
                        >
                          Expiry Calendars
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.LOGIN}
                          className="text-current no-underline hover:underline text-base"
                        >
                          Margins
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.LOGIN}
                          className="text-current no-underline hover:underline text-base"
                        >
                          Fees
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full flex-1 px-8 sm:block sm:w-auto sm:px-0 space-y-4">
                    <h5 className="m-0 text-base font-bold normal-case text-current">
                      Support
                    </h5>
                    <ul className="m-0 list-none space-y-4 p-0 text-xs font-normal">
                      <li>
                        <Link
                          href={ROUTES.LOGIN}
                          className="text-current no-underline hover:underline text-base"
                        >
                          Trade and Clearing Helpdesk
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.LOGIN}
                          className="text-current no-underline hover:underline text-base"
                        >
                          BlockTech Data Services Support
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.LOGIN}
                          className="text-current no-underline hover:underline text-base"
                        >
                          BlockTech Education
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.LOGIN}
                          className="text-current no-underline hover:underline text-base"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          BlockTech Developer Portal
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full flex-1 px-8 sm:block sm:w-auto sm:px-0 space-y-4">
                    <h5 className="m-0 text-base font-bold normal-case text-current">
                      About
                    </h5>
                    <ul className="m-0 list-none space-y-4 p-0 text-xs font-normal">
                      <li>
                        <Link
                          href={ROUTES.ABOUT}
                          className="text-current no-underline hover:underline text-base"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Media Center
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.ABOUT}
                          className="text-current no-underline hover:underline text-base"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Investor Relations
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.ABOUT}
                          className="text-current no-underline hover:underline text-base"
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.ABOUT}
                          className="text-current no-underline hover:underline text-base"
                        >
                          Careers
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.ABOUT}
                          className="text-current no-underline hover:underline text-base"
                        >
                          BlockTech Events
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.ABOUT}
                          className="text-current no-underline hover:underline text-base"
                        >
                          Sustainability
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full flex-1 px-8 sm:block sm:w-auto sm:px-0 space-y-4 hidden">
                    <h5 className="m-0 text-base font-bold normal-case text-current">
                      Insights
                    </h5>
                    <ul className="m-0 list-none space-y-4 p-0 text-xs font-normal">
                      <li>
                        <Link
                          href={ROUTES.INSIGHTS}
                          className="text-current no-underline hover:underline text-base"
                        >
                          Sustainable Finance
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.INSIGHTS}
                          className="text-current no-underline hover:underline text-base"
                        >
                          Energy Markets
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.FIXED_INCOME}
                          className="text-current no-underline hover:underline text-base"
                        >
                          Fixed Income and Data
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={ROUTES.MORTGAGE_TECHNOLOGY}
                          className="text-current no-underline hover:underline text-base"
                        >
                          Mortgage
                        </Link>
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
                  <Link
                    href={ROUTES.LOGIN}
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
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.LOGIN}
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
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-xs space-y-4 font-normal">
              <ul className="m-0 flex list-none flex-col gap-4 px-8 py-0 sm:flex-row sm:gap-0 sm:px-0">
                <li className="block sm:inline">
                  <span className="hidden sm:inline"></span>
                  <Link
                    href={ROUTES.LOGIN}
                    className="text-current no-underline hover:underline"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li className="block sm:inline">
                  <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
                  <Link
                    href={ROUTES.LOGIN}
                    className="text-current no-underline hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="block sm:inline">
                  <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
                  <Link
                    href={ROUTES.LOGIN}
                    className="text-current no-underline hover:underline"
                  >
                    Event Privacy Policy
                  </Link>
                </li>
                <li className="block sm:inline">
                  <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
                  <Link
                    href={ROUTES.LOGIN}
                    className="text-current no-underline hover:underline"
                  >
                    Security
                  </Link>
                </li>
                <li className="block sm:inline">
                  <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
                  <Link
                    href={ROUTES.LOGIN}
                    className="text-current no-underline hover:underline"
                  >
                    Cookies
                  </Link>
                </li>
                <li className="block sm:inline">
                  <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
                  <Link
                    href={ROUTES.LOGIN}
                    className="text-current no-underline hover:underline"
                  >
                    Do Not Sell My Personal Information
                  </Link>
                </li>
                <li className="block sm:inline">
                  <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
                  <Link
                    href={ROUTES.LOGIN}
                    className="text-current no-underline hover:underline"
                  >
                    Supported Browsers
                  </Link>
                </li>
                <li className="block sm:inline">
                  <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
                  <Link
                    href={ROUTES.LOGIN}
                    className="text-current no-underline hover:underline"
                  >
                    Data Protection
                  </Link>
                </li>
                <li className="block sm:inline">
                  <span className="hidden sm:inline">&nbsp;|&nbsp;</span>
                  <Link
                    href={ROUTES.LOGIN}
                    className="text-current no-underline hover:underline"
                  >
                    Registered Investment Advisor Notice
                  </Link>
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
