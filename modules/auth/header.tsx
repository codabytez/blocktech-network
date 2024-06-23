import React from "react";
import Link from "next/link";

const LoginHeader = () => {
  return (
    <div className="relative top-0 z-20 min-h-16 text-white bg-[#D7D8DA] px-[4%]">
      <div className="pt-2 items-center md:flex w-full justify-between">
        <Link href="/">
          <img
            alt="ICE"
            src="https://www.ice.com/publicdocs/images/ice_sso_top_left_logo.png"
          />
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
