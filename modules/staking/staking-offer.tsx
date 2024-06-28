import { NextPage } from "next";

const StakingOffer: NextPage = () => {
  return (
    <>
      <div className="py-4 px-5 border-b border-[#EEE] overflow-hidden flex justify-between items-center">
        <h3 className="text-[#003049] text-lg inline-block">
          All Staking Offer
        </h3>
      </div>

      <div className="site-card-body">
        <div className="row">
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="single-investment-plan">
              <img
                className="investment-plan-icon"
                src="https://matston.com/en/assets/global/images/dkXJS0Wq9WARj6ikBcwc.png"
                alt=""
              />

              <h3>Starter Staking Plan</h3>
              <p>Daily 2.9%</p>
              <ul>
                <li>
                  Range <span className="special">$50-$999</span>
                </li>
                <li>
                  Capital Back
                  <span>Yes</span>
                </li>
                <li>
                  Return Type <span>Period</span>
                </li>
                <li>
                  Duration
                  <span>5 Days</span>
                </li>
              </ul>

              <a
                href="https://matston.com/en/user/schema-preview/2"
                className="site-btn grad-btn w-100 centered"
              >
                <i className="anticon anticon-check"></i>Stake
              </a>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="single-investment-plan">
              <img
                className="investment-plan-icon"
                src="https://matston.com/en/assets/global/images/cC2JXbi4MvMyofFdrSsx.png"
                alt=""
              />

              <h3>Compound Staking Plan</h3>
              <p>Daily 4.9%</p>
              <ul>
                <li>
                  Range <span className="special">$1000-$4999</span>
                </li>
                <li>
                  Capital Back
                  <span>Yes</span>
                </li>
                <li>
                  Return Type <span>Period</span>
                </li>
                <li>
                  Duration
                  <span>5 Days</span>
                </li>
              </ul>

              <a
                href="https://matston.com/en/user/schema-preview/3"
                className="site-btn grad-btn w-100 centered"
              >
                <i className="anticon anticon-check"></i>Stake
              </a>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="single-investment-plan">
              <img
                className="investment-plan-icon"
                src="https://matston.com/en/assets/global/images/K44dtSANEB3Yb2vGnHUN.png"
                alt=""
              />

              <h3>Max Staking Plan</h3>
              <p>Daily 6.9%</p>
              <ul>
                <li>
                  Range <span className="special">$5000-$9999</span>
                </li>
                <li>
                  Capital Back
                  <span>Yes</span>
                </li>
                <li>
                  Return Type <span>Period</span>
                </li>
                <li>
                  Duration
                  <span>5 Days</span>
                </li>
              </ul>

              <a
                href="https://matston.com/en/user/schema-preview/4"
                className="site-btn grad-btn w-100 centered"
              >
                <i className="anticon anticon-check"></i>Stake
              </a>
            </div>
          </div>

          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="single-investment-plan">
              <img
                className="investment-plan-icon"
                src="https://matston.com/en/assets/global/images/6uCtDfObLCvRZaXY1URX.png"
                alt=""
              />

              <h3>Elite Staking Plan</h3>
              <p>Daily 8.9%</p>
              <ul>
                <li>
                  Range <span className="special">$10000-$1000000</span>
                </li>
                <li>
                  Capital Back
                  <span>Yes</span>
                </li>
                <li>
                  Return Type <span>Period</span>
                </li>
                <li>
                  Duration
                  <span>5 Days</span>
                </li>
              </ul>

              <a
                href="https://matston.com/en/user/schema-preview/5"
                className="site-btn grad-btn w-100 centered"
              >
                <i className="anticon anticon-check"></i>Stake
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StakingOffer;
