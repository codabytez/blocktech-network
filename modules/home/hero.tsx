import { NextPage } from "next";
import Image from "next/image";
import heroImg from "@/public/images/Hero-Data_Tech-1920x550-08.jpg";

const Hero: NextPage = () => {
  return (
    <div className="">
      <div className="sm:hidden">
        <div className="h-6"></div>
      </div>
      <div className="hidden sm:block">
        <div className="relative">
          <Image src={heroImg} alt="Webbing like bridge structure" width={1920} height={550} className="h-[550px]" />
          <div className="flex w-full flex-col justify-between xl:absolute xl:bottom-0 xl:flex-row">
            <div className="xl:w-2/5"></div>
            <div className="xl:w-2/5"></div>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <Image src={heroImg} alt="Webbing like bridge structure" width={1920} height={550} className="w-full max-h-screen select-none object-cover object-left h-[200px]" />
      </div>
    </div>
  );
};

export default Hero;
