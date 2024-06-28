import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo/Logo-03.png";

const DashboardHeader: NextPage = () => {
  return (
    <div className="bg-[#FFF] h-[70px] fixed top-0 w-full z-100 flex">
      <div className="border-r border-b border-[#535a9480] w-[400px] transition-all duration-300">
        <Link href="/dashboard" className="border h-10 inline-block">
          <Image
            src={Logo}
            alt="Logo"
            width={200}
            height={70}
            className="h-full"
          />
        </Link>
      </div>
      <div className="border border-black flex flex-1 justify-between">
        <div className="ml-5 flex items-center">
          <div className="bg-[#0dc9c9] text-white rounded py-2 px-3">
            {/* "\75" */}
            <span className="text-2xl">{"\u0070"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
