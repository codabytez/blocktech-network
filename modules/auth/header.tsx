import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo/Logo-01.png";
import { NextPage } from "next";

const LoginHeader: NextPage = () => {
  return (
    <div className="relative top-0 z-20 min-h-16 text-white bg-[#D7D8DA] px-[4%]">
      <div className="pt-2 items-center md:flex w-full justify-between">
        <Link href="/">
          <Image src={logo} alt="BlockTech Logo" width={100} height={100} />
        </Link>

        <div className="text-right flex justify-between items-center min-h-12">
          <Link href="#" className="text-black pl-9 hover:underline">
            BLOCKTECH
          </Link>
          <Link href="#" className="text-black pl-9 hover:underline">
            NYSE
          </Link>
          <Link href="#" className="text-black pl-9 hover:underline">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginHeader;
