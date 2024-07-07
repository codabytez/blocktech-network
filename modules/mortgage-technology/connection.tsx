import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo/Logo-02.png";
import { ROUTES } from "@/constants/routes";

const Connection: NextPage = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="h-[260px] sm:h-[350px] md:h-[450px] lg:h-[650px] relative z-20 bg-black">
        <video
          autoPlay
          muted
          loop
          className="h-full absolute left-0 right-0 mx-auto w-auto"
        >
          <source
            src="https://cdn.experience.elliemae.com/2025/video/s8qcEW5Wyf4dMTUfmhFV19.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="align-center flex h-full absolute top-6 w-full">
        <div className="container px-8 relative mx-auto w-full bg-transparent">
          <div className="text-white justify-end flex gap-16 flex-wrap -mx-8 max-w-[700px] relative z-50">
            <div className="relative flex-[1_0_0%] w-full px-8 z-10">
              <div
                className="p-8"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                }}
              >
                <div className="mb-4 text-center">
                  <Image src={logo} alt="logo" width={96} height={96} />
                </div>
                <h2 className="mb-4 text-3xl md:text-5xl">
                  Make the Connection
                </h2>
                <p className="mb-8">
                  Mark your calendar for BlockTech Experience 2025, happening at
                  the Wynn Las Vegas from March 10-12, 2025. This premier
                  conference offers a valuable opportunity to connect with
                  industry peers, technology experts, mortgage lenders and
                  servicers.
                </p>
                <p className="mb-8">
                  Join our Keep Me Informed list to receive timely updates on
                  early bird registration discounts, special hotel rates,
                  speaker line up, session details and pre-conference training
                  announcements coming this Fall.
                </p>
                <div className="flex gap-4 items-center flex-wrap pt-4">
                  <div className="relative flex-[0_0_auto] w-auto">
                    <Link
                      target="_blank"
                      rel="noreferrer noopener"
                      href={ROUTES.SIGNUP}
                      className="uppercase text-nowrap text-white font-bold mr-4 border-white border-2 p-5"
                    >
                      SIGN UP NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connection;
