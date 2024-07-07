"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo/Logo-01.png";
import { NextPage } from "next";
import { ROUTES } from "@/constants/routes";
import MegaMenu from "./mega-menu";
import { useState, useCallback } from "react";

const solutionsMenuItems = [
  {
    title: "Exchanges",
    items: [
      {
        name: "Exchanges & Clearing Houses",
        href: ROUTES.EXCHANGES_CLEARING,
      },
      {
        name: "Asset Classes",
        href: ROUTES.ASSET_CLASSES,
      },
    ],
  },
  {
    title: "Fixed Income & Data Services",
    items: [
      {
        name: "Fixed Income",
        href: ROUTES.FIXED_INCOME,
      },
      {
        name: "Mortgage Technology",
        href: ROUTES.MORTGAGE_TECHNOLOGY,
      },
      {
        name: "Sustainable Finance",
        href: ROUTES.SUSTAINABLE_FINANCE,
      },
    ],
  },
];

const tradingMenuItems = [
  {
    title: "Fx & Crypto",
    items: [
      {
        name: "Deposits and Withdrawal",
        href: ROUTES.DEPOSIT_WITHDRAWAL,
      },
      {
        name: "£1M Deposit Protection",
        href: ROUTES.DEPOSIT_PROTECTION,
      },
      {
        name: "Platforms and Connectivity",
        href: "#",
      },
      {
        name: "Assets and Spreads",
        href: "#",
      },
      {
        name: "Talent-Linked Pricing",
        href: "#",
      },

      {
        name: "Professional Accounts",
        href: "#",
      },
    ],
  },
  {
    title: "Stocks & Futures",
    items: [
      {
        name: "Account Types",
        href: "#",
      },
      {
        name: "Futures Pricing",
        href: "#",
      },
      {
        name: "Stocks Pricing",
        href: "#",
      },
    ],
  },
];

const stakingMenuItems = [
  {
    items: [
      {
        name: "Stake in BlockTech",
        href: ROUTES.STAKE,
      },
      {
        name: "£1M Deposit Protection",
        href: ROUTES.DEPOSIT_PROTECTION,
      },
      {
        name: "Deposits and Withdrawals",
        href: ROUTES.DEPOSIT_WITHDRAWAL,
      },
    ],
  },
];

const Navbar: NextPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<
    string | null
  >(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setExpandedMobileSection(null);
  }, []);

  const toggleMobileSection = (section: string) => {
    if (expandedMobileSection === section) {
      setExpandedMobileSection(null);
    } else {
      setExpandedMobileSection(section);
    }
  };

  const NavLink = ({
    href,
    children,
    className,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <Link href={href} className={className} onClick={closeMobileMenu}>
      {children}
    </Link>
  );

  return (
    <div>
      <div className="px-3 lg:px-24 lg:bg-[#e2e2e2] flex items-center gap-4 bg-white py-2 text-black">
        <NavLink href="/" className="contents lg:hidden">
          <Image src={logo} alt="BlockTech Logo" width={45} height={45} />
        </NavLink>
        <div className="flex-1"></div>
        <div className="text-xxs hidden lg:flex md:text-xs items-center space-x-2">
          <NavLink
            href="/"
            className="no-underline hover:underline cursor-pointer text-black hover:text-black font-bold"
          >
            BlockTech
          </NavLink>
          <NavLink
            href="#"
            className="no-underline hover:underline cursor-pointer text-black hover:text-black"
          >
            NYSE
          </NavLink>
          <span className="mx-2">|</span>
          <NavLink
            href={ROUTES.LOGIN}
            className="font-medium justify-center items-center no-underline focus-within:outline-none focus:outline-none focus-within:ring focus:ring leading-tight align-middle duration-75 active:translate-y-px max-w-full select-none text-xs md:text-xs gap-1 md:gap-2 rounded-tl rounded-tr rounded-bl rounded-br inline-flex px-2 md:px-3 py-1 md:py-2 cursor-pointer uppercase break-words bg-black text-white border-white shadow-lg hover:text-primary active:text-primary active:shadow-none checked:text-primary"
          >
            Login
          </NavLink>
          <NavLink
            href={ROUTES.SIGNUP}
            className="font-medium justify-center items-center no-underline focus-within:outline-none focus:outline-none focus-within:ring focus:ring leading-tight align-middle duration-75 active:translate-y-px max-w-full select-none text-xs md:text-xs gap-1 md:gap-2 rounded-tl rounded-tr rounded-bl rounded-br inline-flex px-2 md:px-3 py-1 md:py-2 cursor-pointer uppercase break-words bg-black text-white border-white shadow-lg hover:text-primary active:text-primary active:shadow-none checked:text-primary"
          >
            WebBlockTech
          </NavLink>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex items-center justify-center w-10 h-10"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6 relative z-[999]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 relative z-[999]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop */}
      <div className="px-3 lg:px-24 hidden lg:flex items-center gap-8 py-8">
        <NavLink href="/">
          <Image src={logo} alt="BlockTech Logo" width={100} height={100} />
        </NavLink>
        <nav className="flex h-24 items-stretch justify-between">
          <div className="group relative cursor-pointer">
            <NavLink
              href="#"
              className="group cursor-pointer border-0 bg-transparent px-8 text-sm focus:outline-none flex items-center h-full"
            >
              <div className="border-b-4 group-hover:border-black group-focus:border-black border-transparent">
                Solutions
              </div>
            </NavLink>
            <MegaMenu items={solutionsMenuItems} />
          </div>

          <div className="group relative cursor-pointer">
            <NavLink
              href={"#"}
              className="group cursor-pointer border-0 bg-transparent px-8 text-sm focus:outline-none flex items-center h-full"
            >
              <p className="border-b-4 group-hover:border-black group-focus:border-black border-transparent">
                Trading
              </p>
            </NavLink>
            <MegaMenu items={tradingMenuItems} />
          </div>

          <div className="group relative cursor-pointer">
            <NavLink
              href={"#"}
              className="group cursor-pointer border-0 bg-transparent px-8 text-sm focus:outline-none flex items-center h-full"
            >
              <p className="border-b-4 group-hover:border-black group-focus:border-black border-transparent">
                Staking
              </p>
            </NavLink>
            <MegaMenu items={stakingMenuItems} />
          </div>

          <NavLink
            href={ROUTES.INSIGHTS}
            className="group cursor-pointer border-0 bg-transparent px-8 text-sm focus:outline-none flex items-center h-full"
          >
            <p className="border-b-4 group-hover:border-black group-focus:border-black border-transparent">
              Insights
            </p>
          </NavLink>

          <NavLink
            href={ROUTES.ABOUT}
            className="group cursor-pointer border-0 bg-transparent px-8 text-sm focus:outline-none flex items-center h-full"
          >
            <div className="border-b-4 group-hover:border-black group-focus:border-black border-transparent">
              About Us
            </div>
          </NavLink>
        </nav>
        <div className="flex-1"></div>

        <form className="m-0 flex items-center text-black">
          <div className="relative text-base">
            <input
              type="search"
              name="q"
              placeholder="Search"
              className="border-0 border-b-2 border-solid bg-transparent p-2 text-base duration-100 focus:border-primary focus:outline-none border-black"
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
        </form>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-3">
          <nav className="flex flex-col space-y-4">
            <div>
              <button
                onClick={() => toggleMobileSection("solutions")}
                className="flex justify-between items-center w-full text-black hover:underline"
              >
                Solutions
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedMobileSection === "solutions"
                      ? "transform rotate-180"
                      : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {expandedMobileSection === "solutions" && (
                <div className="pl-4 mt-2 space-y-2">
                  {solutionsMenuItems.map((category, index) => (
                    <div key={index}>
                      {category.title && (
                        <h3 className="font-bold mt-2">{category.title}</h3>
                      )}
                      {category.items.map((item, itemIndex) => (
                        <NavLink
                          key={itemIndex}
                          href={item.href}
                          className="block text-sm hover:underline"
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleMobileSection("trading")}
                className="flex justify-between items-center w-full text-black hover:underline"
              >
                Trading
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedMobileSection === "trading"
                      ? "transform rotate-180"
                      : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {expandedMobileSection === "trading" && (
                <div className="pl-4 mt-2 space-y-2">
                  {tradingMenuItems.map((category, index) => (
                    <div key={index}>
                      {category.title && (
                        <h3 className="font-bold mt-2">{category.title}</h3>
                      )}
                      {category.items.map((item, itemIndex) => (
                        <NavLink
                          key={itemIndex}
                          href={item.href}
                          className="block text-sm hover:underline"
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleMobileSection("staking")}
                className="flex justify-between items-center w-full text-black hover:underline"
              >
                Staking
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedMobileSection === "staking"
                      ? "transform rotate-180"
                      : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {expandedMobileSection === "staking" && (
                <div className="pl-4 mt-2 space-y-2">
                  {stakingMenuItems[0].items.map((item, index) => (
                    <NavLink
                      key={index}
                      href={item.href}
                      className="block text-sm hover:underline"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              href={ROUTES.INSIGHTS}
              className="text-black hover:underline"
            >
              Insights
            </NavLink>
            <NavLink href={ROUTES.ABOUT} className="text-black hover:underline">
              About Us
            </NavLink>
          </nav>
          <form className="mt-4">
            <input
              type="search"
              name="q"
              placeholder="Search"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Navbar;
