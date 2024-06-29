import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import starter from "@/public/images/dkXJS0Wq9WARj6ikBcwc.png";
import compound from "@/public/images/cC2JXbi4MvMyofFdrSsx.png";
import max from "@/public/images/K44dtSANEB3Yb2vGnHUN.png";
import elite from "@/public/images/6uCtDfObLCvRZaXY1URX.png";

const StakingOffer: NextPage = () => {
  return (
    <>
      <div className="py-4 px-5 border-b border-[#EEE] overflow-hidden flex justify-between items-center">
        <h3 className="text-[#003049] text-lg inline-block">
          All Staking Offer
        </h3>
      </div>

      <div className="p-5">
        <div className="gap-6 flex flex-wrap -mx-3">
          <div className="max-w-full px-3  w-full flex-[0_0_auto] md:w-[48%] xl:w-[23%]">
            <div className="mb-8 py-10 px-6 bg-white/5 rounded-lg border-2 border-[#112a37] relative">
              <Image
                src={starter}
                width={50}
                height={50}
                alt="Starter Staking Plan"
                className="mb-6 w-[50px]"
              />

              <h3 className="text-2xl font-medium">Starter Staking Plan</h3>
              <p className="text-sm mb-8 text-[#e73667cc]">Daily 2.9%</p>
              <ul>
                <li className="relative mb-5 text-sm">
                  Range{" "}
                  <span className="py-0.5 px-2 bg-[#2a9d8f99] rounded-lg float-right">
                    $50-$999
                  </span>
                </li>
                <li className="relative mb-5 text-sm">
                  Capital Back
                  <span className="float-right">Yes</span>
                </li>
                <li className="relative mb-5 text-sm">
                  Return Type <span className="float-right">Period</span>
                </li>
                <li className="relative mb-5 text-sm">
                  Duration
                  <span className="float-right">5 Days</span>
                </li>
              </ul>

              <Link
                href="#"
                className="mt-5 text-center bg-primary text-white py-3 px-7 rounded-[50px] font-medium text-xs uppercase shadow w-full inline-block"
              >
                Stake
              </Link>
            </div>
          </div>

          <div className="max-w-full px-3  w-full flex-[0_0_auto] md:w-[48%] xl:w-[23%]">
            <div className="mb-8 py-10 px-6 bg-white/5 rounded-lg border-2 border-[#112a37] relative">
              <Image
                src={compound}
                width={50}
                height={50}
                alt="Compound Staking Plan"
                className="mb-6 w-[50px]"
              />

              <h3 className="text-2xl font-medium">Compound Staking Plan</h3>
              <p className="text-sm mb-8 text-[#e73667cc]">Daily 4.9%</p>
              <ul>
                <li className="relative mb-5 text-sm">
                  Range{" "}
                  <span className="py-0.5 px-2 bg-[#2a9d8f99] rounded-lg float-right">
                    $1000-$4999
                  </span>
                </li>
                <li className="relative mb-5 text-sm">
                  Capital Back
                  <span className="float-right">Yes</span>
                </li>
                <li className="relative mb-5 text-sm">
                  Return Type <span className="float-right">Period</span>
                </li>
                <li className="relative mb-5 text-sm">
                  Duration
                  <span className="float-right">5 Days</span>
                </li>
              </ul>

              <Link
                href="#"
                className="mt-5 text-center bg-primary text-white py-3 px-7 rounded-[50px] font-medium text-xs uppercase shadow w-full inline-block"
              >
                Stake
              </Link>
            </div>
          </div>

          <div className="max-w-full px-3  w-full flex-[0_0_auto] md:w-[48%] xl:w-[23%]">
            <div className="mb-8 py-10 px-6 bg-white/5 rounded-lg border-2 border-[#112a37] relative">
              <Image
                src={max}
                width={50}
                height={50}
                alt="Max Staking Plan"
                className="mb-6 w-[50px]"
              />

              <h3 className="text-2xl font-medium">Max Staking Plan</h3>
              <p className="text-sm mb-8 text-[#e73667cc]">Daily 6.9%</p>
              <ul>
                <li className="relative mb-5 text-sm">
                  Range{" "}
                  <span className="py-0.5 px-2 bg-[#2a9d8f99] rounded-lg float-right">
                    $5000-$9999
                  </span>
                </li>
                <li className="relative mb-5 text-sm">
                  Capital Back
                  <span className="float-right">Yes</span>
                </li>
                <li className="relative mb-5 text-sm">
                  Return Type <span className="float-right">Period</span>
                </li>
                <li className="relative mb-5 text-sm">
                  Duration
                  <span className="float-right">5 Days</span>
                </li>
              </ul>

              <Link
                href="#"
                className="mt-5 text-center bg-primary text-white py-3 px-7 rounded-[50px] font-medium text-xs uppercase shadow w-full inline-block"
              >
                Stake
              </Link>
            </div>
          </div>

          <div className="max-w-full px-3  w-full flex-[0_0_auto] md:w-[48%] xl:w-[23%]">
            <div className="mb-8 py-10 px-6 bg-white/5 rounded-lg border-2 border-[#112a37] relative">
              <Image
                src={elite}
                width={50}
                height={50}
                alt="Elite Staking Plan"
                className="mb-6 w-[50px]"
              />

              <h3 className="text-2xl font-medium">Elite Staking Plan</h3>
              <p className="text-sm mb-8 text-[#e73667cc]">Daily 8.9%</p>
              <ul>
                <li className="relative mb-5 text-sm">
                  Range{" "}
                  <span className="py-0.5 px-2 bg-[#2a9d8f99] rounded-lg float-right">
                    $10000-$1000000
                  </span>
                </li>
                <li className="relative mb-5 text-sm">
                  Capital Back
                  <span className="float-right">Yes</span>
                </li>
                <li className="relative mb-5 text-sm">
                  Return Type <span className="float-right">Period</span>
                </li>
                <li className="relative mb-5 text-sm">
                  Duration
                  <span className="float-right">5 Days</span>
                </li>
              </ul>

              <Link
                href="#"
                className="mt-5 text-center bg-primary text-white py-3 px-7 rounded-[50px] font-medium text-xs uppercase shadow w-full inline-block"
              >
                Stake
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StakingOffer;
