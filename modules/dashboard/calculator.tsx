import { NextPage } from "next";
import Link from "next/link";

const Calculator: NextPage = () => {
  return (
    <div className="max-w-full mx-auto mb-16">
      <h2>Staking Plan Calculator</h2>
      <label htmlFor="investment">
        Enter your Staking amount ($50 - $1000000):
      </label>
      <input
        type="number"
        id="investment"
        min="50"
        max="1000000"
        step="1"
        required
        className="w-full p-2.5 mb-2.5 box-border"
      />
      <br />
      <button className="w-full p-2.5 bg-[#0DC9C9] text-white border-0">
        Calculate
      </button>
      <br />
      <br />
      <Link href="#">
        <button className="w-full p-2.5 bg-[#0DC9C9] text-white border-0">
          Stake
        </button>
      </Link>

      <div id="result" className="mt-5 p-2.5 border border-[#CCC]">
        {/* Results will be displayed here */}
      </div>
    </div>
  );
};

export default Calculator;
