import { NextPage } from "next";

const Transformation: NextPage = () => {
  return (
    <div className="pb-10 xl:pb-20">
      <div className="pb-0 xl:pb-5">
        <div className="">
          <div className="text-center">
            <h2 className="m-0 font-headings border-0 pb-0 font-medium normal-case leading-none text-3xl md:text-5xl">
              Driving transformation
            </h2>
            <hr className="border-0 border-black border-t-2 w-1/5 border-solid mx-auto my-4" />
          </div>
        </div>
      </div>
      <div className="">
        <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
          It is this consistent and strategic approach that has propelled our
          expansion from a small technology network serving the U.S. power
          industry just over two decades ago, into a global enterprise that
          operates networks across the major asset classes.
        </p>
        <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
          As our electronic markets and demand for clearing grew, access to new
          sources of information became central to our customers and data has
          increasingly become the lifeblood of markets. We saw this evolution
          and consistently we advanced our capabilities, building a data
          business which is complementary to every part of our solution.
        </p>
        <p className="print:orphans-3 print:widows-3 print:text-black mb-6 last:mb-0">
          <span className="font-bold">
            BlockTech’s unique digital networks combine expertise, data and
            technology, to connect people to opportunity.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Transformation;
