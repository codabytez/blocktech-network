import { ROUTES } from "@/constants/routes";
import { NextPage } from "next";
import Link from "next/link";

const CTA: NextPage = () => {
  return (
    <div className="">
      <div className="-mx-3 lg:-mx-24">
        <div className="bg-black text-white flex pt-10 pb-10 gap-4 flex-col xl:pt-16 xl:pb-16">
          <div className="px-3 lg:px-24">
            <div className="">
              <div className="text-center">
                <h2 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none print:break-after-avoid text-3xl md:text-5xl">
                  Connect with BlockTech
                </h2>
                <div className="mb-6"></div>
                <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                  Subscribe to our newsletters and notices to receive the latest
                  updates from BlockTech.
                </p>
                <div className="mb-6"></div>
                <div>
                  <Link
                    href={ROUTES.SUBSCRIBE}
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
                    <span>Subscribe</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
