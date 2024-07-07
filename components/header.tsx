import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo/Logo-02.png";

const DashboardHeader: NextPage<{
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}> = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="bg-[#FFF] h-[70px] fixed top-0 w-full z-100 flex">
      <div
        className={`border-r border-b border-[#dddddd85] w-[400px] transition-all duration-300 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <Link href="/dashboard" className="h-20 inline-block">
          <Image
            src={Logo}
            alt="Logo"
            width={200}
            height={70}
            className="h-full"
          />
        </Link>
      </div>
      <div className="border border-[#dddddd85] flex flex-1 justify-between">
        <div className="ml-5 flex items-center">
          <button
            onClick={toggleSidebar}
            className="bg-[#0dc9c9] text-white rounded py-2 px-3"
          >
            <span className="text-2xl">{"\u2630"}</span>
          </button>
        </div>
        <div className="mr-5 flex items-center">
          <div className="bg-[#0dc9c9] text-white rounded py-2 px-3">
            <span className="text-2xl">{"\u1F46"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
