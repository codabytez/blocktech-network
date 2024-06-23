import { NextPage } from "next";
import Link from "next/link";

const Solution: NextPage = () => {
  return (
    <div className="pb-10 xl:pb-20">
      <div className="pb-0 xl:pb-5">
        <div className="">
          <h2 className="m-0 text-center font-headings border-0 pb-0 font-medium normal-case leading-none text-3xl md:text-5xl">
            Related solutions
          </h2>
          <hr className="border-0 border-black border-t-2 w-1/5 border-solid mx-auto my-4"></hr>
        </div>
      </div>
      <div className="w-max mx-auto overflow-x-auto">
        <div className="justify-center justify-items-center gap-x-2 gap-y-4 p-2 grid grid-cols-1 md:grid-cols-2 min-[1600px]:grid-cols-4">
          {solutions.map((solution, index) => (
            <div key={index} className="flex">
              <div className="flex text-black bg-white border-gray border-2 border-solid w-96 flex-col-reverse">
                <div className="flex flex-1 justify-between gap-8 p-8 flex-col">
                  <div>
                    <div className="text-center">
                      <h4 className="m-0 font-headings border-0 pb-0 print:orphans-3 print:widows-3 font-medium normal-case leading-none print:break-after-avoid text-xl md:text-3xl">
                        {solution.title}
                      </h4>
                    </div>
                    <div className="mt-10">
                      <div className="">
                        <div className="text-center">
                          <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
                            {solution.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <div className="text-center">
                        <div>
                          <Link
                            href={"#"}
                            className="font-medium justify-center items-center no-underline focus-within:outline-none focus:outline-none focus-within:ring focus:ring leading-tight align-middle duration-75 active:shadow-none active:translate-y-px max-w-full select-none bg-black text-white border-white shadow-lg hover:text-primary active:text-primary checked:text-primary text-xs md:text-sm gap-1 md:gap-4 border rounded-tl rounded-tr rounded-bl rounded-br inline-flex px-6 md:px-12 py-1 md:py-2 cursor-pointer uppercase flex-row-reverse break-words"
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
                            <span>{solution.buttonText}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const solutions = [
  {
    title: "WebICE",
    description:
      "Access the deep liquidity and transparency of the ICE futures markets with our multi-asset trading application. This secure, flexible technology supports a range of trading and risk management tools.",
    buttonText: "LEARN MORE",
  },
  {
    title: "ICE Connect",
    description:
      "Access to ICE proprietary data as well as prices from global exchanges, third-party news and advanced charting and analysis tools. Help manage price and currency risk across global markets and streamline your workflow to focus on your core business objectives.",
    buttonText: "LEARN MORE",
  },
  {
    title: "Product guide",
    description:
      "Our global network of regulated futures exchanges offers derivative trading across energy, fixed income, interest rates, equities, credit, currencies and metals. View contract specs and data for futures, options and OTC products spanning all major asset classes.",
    buttonText: "All products",
  },
  {
    title: "Proprietary data",
    description:
      "Access to a broad universe of low-latency financial information with full depth-of-market data is increasingly important for market participants - firms need to acquire high-quality data from a range of different sources in a cost-efficient manner.",
    buttonText: "Learn More",
  },
];

export default Solution;
