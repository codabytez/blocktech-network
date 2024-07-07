"use client";
import { NextPage } from "next";

const HowItWorks: NextPage = () => {
  return (
    <>
      <section className="relative">
        <div className="py-24">
          <div className="container max-w-[1140px] w-full px-2 mx-auto">
            <h2 className="mb-10 font-light relative pt-4 text-[#202020] text-center text-3xl border-effect">
              How BlockTech works
            </h2>
            <p className="text-center lg:mb-12">
              Our asset is the BlockTech. It combines a trading strategy managed
              by a trader with our asset {"manager's"} independent risk
              management engine.
            </p>
            <div className="flex items-center flex-wrap -mx-2 ">
              <div className="text-center py-6 lg:max-w-[41.6%] flex-[0_0_41.6%] relative w-full px-2" />
              <div className="relative w-full px-2 lg:flex-[0_0_58%] max-w-[58%]">
                <ul className="md:grid gap-8 grid-cols-2 mb-4">
                  <li className="grid-checkboxes__item md:pt-0.5">
                    <h3 className="text-[#202020] font-medium text-lg mb-2">
                      Independent risk management
                    </h3>
                    <div className="grid-checkboxes__text font-size-base">
                      <p className="mb-0">
                        The risk management engine ensures the target volatility
                        of each BlockTech is similar to that of an equity index.
                      </p>
                    </div>
                  </li>
                  <li className="grid-checkboxes__item md:pt-0.5">
                    <h3 className="text-[#202020] font-medium text-lg mb-2">
                      Liquid alpha
                    </h3>
                    <div className="grid-checkboxes__text font-size-base">
                      <p className="mb-0">
                        A BlockTech is a liquid alpha asset that can trade long
                        or short at any given time, meaning {"it's"}{" "}
                        uncorrelated to traditional assets.
                      </p>
                    </div>
                  </li>
                  <li className="grid-checkboxes__item md:pt-0.5">
                    <h3 className="text-[#202020] font-medium text-lg mb-2">
                      Wholesale brokerage fees
                    </h3>
                    <div className="grid-checkboxes__text font-size-base">
                      <p className="mb-0">
                        BlockTech execution enjoys 60% cheaper commissions than
                        retail. Lower transaction costs add up to higher
                        returns.
                      </p>
                    </div>
                  </li>
                  <li className="grid-checkboxes__item md:pt-0.5">
                    <h3 className="text-[#202020] font-medium text-lg mb-2">
                      Advanced analytical toolkit
                    </h3>
                    <div className="grid-checkboxes__text font-size-base">
                      <p className="mb-0">
                        Analyze and filter BlockTech assets according to your
                        own portfolio management criteria. BlockTech analyses
                        the 12 attributes that make up the DNA of a strategy, in
                        a way analogous to that of fundamental analysis of a
                        traditional share.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>
        {`
      .border-effect:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 3px;
    border-radius: 10px;
    background: -webkit-gradient(linear, left top, right top, from(transparent), to(#0dc9c9));
    background: linear-gradient(90deg, transparent, #0dc9c9);
}
    .border-effect:before {
    left: 50%;
    margin-left: -50px;
}

@media (min-width: 992px) {
    .border-effect:before {
        -webkit-transition: all .5s ease-out;
        transition: all .5s ease-out;
    }

    .grid-checkboxes__item {
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    padding-left: 1.8rem;
    padding-top: .3125rem;
    margin: 1rem 0;
    background-image: url(https://matston.com/en/statics-home/1_21_0/images/icons/icon-checked.svg);
    background-repeat: no-repeat;
    background-position: 0 .2rem;
    background-size: 1.25rem 1.25rem;
}

@media (min-width: 768px) {
    .grid-checkboxes__item:first-child {
        -ms-grid-column: 1;
        -ms-grid-column-span: 2 -1;
        -ms-grid-row: 1;
        -ms-grid-row-span: 2 -1;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }
}
`}
      </style>
    </>
  );
};

export default HowItWorks;
