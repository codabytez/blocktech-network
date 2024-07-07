import { ROUTES } from "@/constants/routes";
import { NextPage } from "next";
import Link from "next/link";

const CTA: NextPage = () => {
  return (
    <section className="py-24 overflow-hidden bg-black text-white text-center">
      <div className="container max-w-[1320px] px-8 relative z-10 mx-auto w-full">
        <div className="gap-16 flex flex-wrap -mx-8 justify-center">
          <div className="relative flex-[0_0_auto] w-full px-8">
            <div className="flex items-center flex-col">
              <h1 className="font-medium mb-8 text-5xl">
                Ready for a true digital mortgage experience?
                <br />
                Get in touch with us.
              </h1>
              <Link
                href={ROUTES.CONTACT}
                className="text-white uppercase text-lg font-bold mx-8 p-6 border-2 border-white text-center"
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
