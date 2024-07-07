import { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants/routes";

const routes = [
  {
    name: "overview",
    href: ROUTES.DASHBOARD,
  },
  {
    name: "stake history",
    href: ROUTES.STAKING,
  },
  {
    name: "all transaction",
    href: "#",
  },
  {
    name: "fund account",
    href: "#",
  },
  {
    name: "deposit history",
    href: "#",
  },
  {
    name: "wallet exchange",
    href: "#",
  },
  {
    name: "withdraw",
    href: "#",
  },
  {
    name: "withdraw history",
    href: "#",
  },
  {
    name: "market news",
    href: "#",
  },
  {
    name: "referral",
    href: "#",
  },
  {
    name: "settings",
    href: "#",
  },
  {
    name: "support tickets",
    href: "#",
  },
];

const Sidebar: NextPage<{ isOpen: boolean }> = ({ isOpen }) => {
  const pathname = usePathname();
  return (
    <div
      className={`bg-[#bee3db] w-[400px] z-50 fixed top-[70px] bottom-0 transition-all duration-300 ${
        isOpen ? "left-0" : "-left-[400px]"
      }`}
    >
      <div className="p-5 shadow-sm bg-[#BEE3DB]">
        <div
          className="p-4 mb-2.5 rounded relative"
          style={{ background: "linear-gradient(90deg, #102668, #0c1e1b)" }}
        >
          <div className="mb-3.5 relative ">
            <div className="text-xl font-bold text-white">Portfolio</div>
            <div className="absolute -top-[5px] -right-[5px] py-[5px] px-2.5 text-xs uppercase bg-white text-[#001219] rounded font-bold">
              Wallet
            </div>
          </div>
          <div className="font-bold mb-2.5 flex justify-between">
            <div className="text-white/80 flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 relative mr-1 -top-0.5 align-middle shrink-0"
                >
                  <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                  <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                  <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
                </svg>
              </span>
              <span>Main Wallet</span>
            </div>
            <div className="text-white">$0.00</div>
          </div>
          <div className="font-bold flex justify-between">
            <div className="text-white/80 flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 relative mr-1 -top-0.5 align-middle shrink-0"
                >
                  <line x1="3" y1="22" x2="21" y2="22"></line>
                  <line x1="6" y1="18" x2="6" y2="11"></line>
                  <line x1="10" y1="18" x2="10" y2="11"></line>
                  <line x1="14" y1="18" x2="14" y2="11"></line>
                  <line x1="18" y1="18" x2="18" y2="11"></line>
                  <polygon points="12 2 20 7 4 7"></polygon>
                </svg>
              </span>
              <span>Profit Wallet</span>
            </div>
            <div className="text-white">$79.00</div>
          </div>
        </div>
        <div className="flex justify-between text-center">
          <Link
            href="#"
            className="w-[48%] bg-[#0DC9C9] py-2.5 px-3 rounded text-white"
          >
            Deposit
          </Link>
          <Link
            href={ROUTES.STAKING}
            className="w-[48%] bg-[#0DC9C9] py-2.5 px-3 rounded text-white"
          >
            Stake Now
          </Link>
        </div>
      </div>
      <div className="relative h-full">
        <ul className="relative list-none h-[calc(100vh-70px)] p-8 overflow-auto">
          {routes.map((route) => (
            <li key={route.name} className="relative block rounded-md mb-3">
              <Link
                href={route.href}
                className={`relative block py-2.5 px-5 rounded-[50px] font-bold text-sm uppercase z-10 ${
                  pathname === route.href ? "bg-[#0DC9C9] text-white" : ""
                }`}
              >
                <span>{route.name}</span>
              </Link>
            </li>
          ))}
          <li className="relative block rounded-md mb-3">
            <form action="#">
              <input type="hidden" name="_token" />
              <button
                type="submit"
                className="relative block py-3 px-7 rounded-[50px] font-medium text-xs uppercase z-10 shadow w-full bg-[#0dc9c9] text-white"
              >
                <span>Logout</span>
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
