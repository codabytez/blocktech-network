import { NextPage } from "next";

const UserCards: NextPage = () => {
  return (
    <div className="mb-5 gap-6 flex flex-wrap -mx-3">
      <div className="w-full max-w-full px-3 flex-[0_0_auto] sm:w-[48%] xl:w-[23%]">
        <div className="bg-[#011B34] py-5 px-4 rounded-lg mb-8 relative flex justify-start">
          <div className="absolute h-16 w-16 rounded-full bg-[#ffc30080] -right-6 -top-6" />
          <div className="rounded-full text-2xl h-11 w-11 text-center bg-white text-[#535A94] mr-4">
            <i className="anticon anticon-file-add"></i>
          </div>
          <div className="content">
            <h4 className="mb-1 text-white font-medium text-2xl">
              <b className="relative -top-2">$</b>
              <span className="count">0</span>
            </h4>
            <p className="text-[#ffffffe6]">Total Capital Deployed</p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-full px-3 flex-[0_0_auto] sm:w-[48%] xl:w-[23%]">
        <div className="bg-[#011B34] py-5 px-4 rounded-lg mb-8 relative flex justify-start">
          <div className="absolute h-16 w-16 rounded-full bg-[#ffc30080] -right-6 -top-6" />
          <div className="rounded-full text-2xl h-11 w-11 text-center bg-white text-[#535A94] mr-4">
            <i className="anticon anticon-check-square"></i>
          </div>
          <div className="content">
            <h4 className="mb-1 text-white font-medium text-2xl">
              <b className="relative -top-2">$</b>
              <span className="count">0</span>
            </h4>
            <p className="text-[#ffffffe6]">Porfolio Value</p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-full px-3 flex-[0_0_auto] sm:w-[48%] xl:w-[23%]">
        <div className="bg-[#011B34] py-5 px-4 rounded-lg mb-8 relative flex justify-start">
          <div className="absolute h-16 w-16 rounded-full bg-[#ffc30080] -right-6 -top-6" />
          <div className="rounded-full text-2xl h-11 w-11 text-center bg-white text-[#535A94] mr-4">
            <i className="anticon anticon-credit-card before:content-['\e024']"></i>
          </div>
          <div className="content">
            <h4 className="mb-1 text-white font-medium text-2xl">
              <b className="relative -top-2">$</b>
              <span className="count">110.5</span>
            </h4>
            <p className="text-[#ffffffe6]">Total Returns</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-full px-3 flex-[0_0_auto] sm:w-[48%] xl:w-[23%]">
        <div className="bg-[#011B34] py-5 px-4 rounded-lg mb-8 relative flex justify-start">
          <div className="absolute h-16 w-16 rounded-full bg-[#ffc30080] -right-6 -top-6" />
          <div className="rounded-full text-2xl h-11 w-11 text-center bg-white text-[#535A94] mr-4">
            <i className="anticon anticon-money-collect"></i>
          </div>
          <div className="content">
            <h4 className="mb-1 text-white font-medium text-2xl">
              <b className="relative -top-2">$</b>
              <span className="count">0</span>
            </h4>
            <p className="text-[#ffffffe6]">Net Withdrawals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCards;
