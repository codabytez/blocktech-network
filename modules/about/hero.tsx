import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import birdseye from "@/public/images/Hero-ESG-1920x550-25.jpg";

const AboutHero: NextPage = () => {
  return (
    <div className="pb-10 xl:pb-20">
      <Image
        src={birdseye}
        alt="Birdseye view iceberg"
        width={1920}
        height={550}
        className="w-full max-h-screen select-none object-cover object-center h-[550px]"
      />
      <div className="-mt-20 md:-mt-32 lg:-mt-40">
        <div className="px-3 lg:px-24">
          <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:gap-8">
            <div className="flex-2 p-8 bg-black text-white">
              <div className="">
                <div className="pb-5">
                  <div className="flex flex-wrap gap-2 text-[12px]">
                    <span>About BlockTech</span>
                  </div>
                </div>
                <div className="">
                  <h1 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none print:break-after-avoid text-4xl md:text-6xl">
                    Make the connection
                  </h1>
                  <div className="mb-6"></div>
                </div>
                <div className="">
                  <h3 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none print:break-after-avoid text-xl md:text-3xl">
                    The data, technology and expertise that create opportunity
                    and inspire innovation
                  </h3>
                  <div className="mb-6"></div>
                </div>
                <div className="">
                  <div>
                    BlockTech was founded in 1994 to digitize the energy markets
                    and provide greater price transparency. We’ve been
                    transforming markets, products and processes ever since. By
                    combining our world class technology with our leading data
                    services and operating expertise, we add transparency and
                    enable customer efficiency gains that advance both our
                    networks and solutions for our customers.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 lg:flex-auto lg:shrink-0 self-stretch p-8 text-black bg-gray lg:self-end">
              <div className="pr-0 pl-0 xl:pr-5 xl:pl-5">
                <div className="">
                  <div className="text-center">
                    <h4 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none print:break-after-avoid text-xl md:text-3xl">
                      BlockTech Welcomes Black Knight
                    </h4>
                    <div className="mb-4"></div>
                    <h5 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none print:break-after-avoid text-lg md:text-2xl">
                      The Ultimate Connection
                    </h5>
                    <div className="mb-6"></div>
                    <div>
                      <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium justify-center items-center no-underline focus-within:outline-none focus:outline-none focus-within:ring focus:ring leading-tight align-middle duration-75 active:translate-y-px max-w-full select-none bg-black admin:bg-primary text-white border-white shadow-lg  hover:text-primary admin:hover:text-white    active:text-primary admin:hover:text-white  active:shadow-none  checked:text-primary   text-xs md:text-sm gap-1 md:gap-4 border rounded-tl rounded-tr rounded-bl rounded-br inline-flex px-6 md:px-12 py-1 md:py-2 cursor-pointer uppercase flex-row-reverse break-words"
                      >
                        <span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
                            ></path>
                          </svg>
                        </span>
                        <span>Read the press release</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
