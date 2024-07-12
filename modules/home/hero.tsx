import { NextPage } from "next";
import Image from "next/image";
import heroImg from "@/public/images/Hero-Data_Tech-1920x550-08.jpg";

const Hero: NextPage = () => {
  return (
    <>
      <Image
        src={heroImg}
        alt="Webbing like bridge structure"
        width={1920}
        height={550}
        className="h-full object-cover flex-1 w-full hidden sm:inline-block"
      />
      <div className="sm:hidden">
        <Image
          src={heroImg}
          alt="Webbing like bridge structure"
          width={1920}
          height={550}
          className="w-full max-h-screen select-none object-cover object-left h-[200px]"
        />
      </div>
    </>
  );
};

export default Hero;
