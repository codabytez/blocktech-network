import { NextPage } from "next";

const RecentTransaction: NextPage = () => {
  return (
    <div className="gap-6 flex flex-wrap -mx-3">
      <div className="w-full max-w-full px-3 xl:flex-[0_0_auto]">
        <div className="mb-8 bg-white rounded shadow">
          <div className="p-5 border-b border-[#EEE] overflow-hidden flex justify-between items-center">
            <h3 className="text-[#003049] text-xl font-medium">
              Recent Transactions
            </h3>
          </div>
          <div className="p-5 overflow-x-auto">
            <div className="">
              <table className="w-full mb-8 bg-white shadow min-w-[1200px]">
                <thead>
                  <tr>
                    <th className="border-b border-[#535a9433] bg-[#535a941a] px-2.5 py-4 text-[#003049] font-bold text-xs uppercase">
                      Description
                    </th>
                    <th className="border-b border-[#535a9433] bg-[#535a941a] px-2.5 py-4 text-[#003049] font-bold text-xs uppercase">
                      Transactions ID
                    </th>
                    <th className="border-b border-[#535a9433] bg-[#535a941a] px-2.5 py-4 text-[#003049] font-bold text-xs uppercase">
                      Type
                    </th>
                    <th className="border-b border-[#535a9433] bg-[#535a941a] px-2.5 py-4 text-[#003049] font-bold text-xs uppercase">
                      Amount
                    </th>
                    <th className="border-b border-[#535a9433] bg-[#535a941a] px-2.5 py-4 text-[#003049] font-bold text-xs uppercase">
                      Fee
                    </th>
                    <th className="border-b border-[#535a9433] bg-[#535a941a] px-2.5 py-4 text-[#003049] font-bold text-xs uppercase">
                      Status
                    </th>
                    <th className="border-b border-[#535a9433] bg-[#535a941a] px-2.5 py-4 text-[#003049] font-bold text-xs uppercase">
                      Gateway
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <div className="flex items-center">
                        <div className="h-11 w-11 leading-[42px] rounded-full text-[@001219] text-center mr-4 bg-[#d2d3d8b3] flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"></path>
                            <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
                            <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"></path>
                            <path d="M8 10h8"></path>
                            <path d="M8 18h8"></path>
                          </svg>
                        </div>

                        <div>
                          <strong>Profit to Main Wallet Exchanged </strong>
                          <div className="text-xs text-[#001219bf]">
                            Jun 27 2024 03:22
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong>TRXPJF35DQDHE</strong>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <div className="text-white py-1 px-4 rounded-[25px] text-xs font-bold bg-primary inline">
                        Exchange
                      </div>
                    </td>

                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong className="text-[#2a9d8f]">+100 USD</strong>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong>0.05 USD</strong>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <div className="bg-[#2a9d8f] inline text-white py-1 px-4 rounded-[25px] text-xs font-bold">
                        Success
                      </div>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong>System</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <div className="flex items-center">
                        <div className="h-11 w-11 leading-[42px] rounded-full text-[@001219] text-center mr-4 bg-[#d2d3d8b3] flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"></path>
                            <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
                            <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"></path>
                            <path d="M8 10h8"></path>
                            <path d="M8 18h8"></path>
                          </svg>
                        </div>

                        <div>
                          <strong>
                            Investment Referral Bonus Via Marco Nepitali - Level
                            1{" "}
                          </strong>
                          <div className="text-xs text-[#001219bf]">
                            Jun 27 2024 02:16
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong>TRXFOKFFP6ZC0</strong>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <div className="text-white py-1 px-4 rounded-[25px] text-xs font-bold bg-primary inline">
                        Referral
                      </div>
                    </td>

                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong className="text-[#2a9d8f]">+29.2475 USD</strong>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong>0 USD</strong>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <div className="bg-[#2a9d8f] inline text-white py-1 px-4 rounded-[25px] text-xs font-bold">
                        Success
                      </div>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong>System</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <div className="flex items-center">
                        <div className="h-11 w-11 leading-[42px] rounded-full text-[@001219] text-center mr-4 bg-[#d2d3d8b3] flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"></path>
                            <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
                            <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"></path>
                            <path d="M8 10h8"></path>
                            <path d="M8 18h8"></path>
                          </svg>
                        </div>

                        <div>
                          <strong>
                            Profit Referral Bonus Via Marco Nepitali - Level 1{" "}
                          </strong>
                          <div className="text-xs text-[#001219bf]">
                            Jun 27 2024 12:50
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong>TRXCGAXA39MFF</strong>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <div className="text-white py-1 px-4 rounded-[25px] text-xs font-bold bg-primary inline">
                        Referral
                      </div>
                    </td>

                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong className="text-[#2a9d8f]">+2.25 USD</strong>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong>0 USD</strong>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <div className="bg-[#2a9d8f] inline text-white py-1 px-4 rounded-[25px] text-xs font-bold">
                        Success
                      </div>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong>System</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <div className="flex items-center">
                        <div className="h-11 w-11 leading-[42px] rounded-full text-[@001219] text-center mr-4 bg-[#d2d3d8b3] flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"></path>
                            <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
                            <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"></path>
                            <path d="M8 10h8"></path>
                            <path d="M8 18h8"></path>
                          </svg>
                        </div>

                        <div>
                          <strong>
                            Profit Referral Bonus Via Marco Nepitali - Level 1{" "}
                          </strong>
                          <div className="text-xs text-[#001219bf]">
                            Jun 26 2024 12:50
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong>TRXASOCXDWHM1</strong>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <div className="text-white py-1 px-4 rounded-[25px] text-xs font-bold bg-primary inline">
                        Referral
                      </div>
                    </td>

                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong className="text-[#2a9d8f]">+2.25 USD</strong>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong>0 USD</strong>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <div className="bg-[#2a9d8f] inline text-white py-1 px-4 rounded-[25px] text-xs font-bold">
                        Success
                      </div>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong>System</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <div className="flex items-center">
                        <div className="h-11 w-11 leading-[42px] rounded-full text-[@001219] text-center mr-4 bg-[#d2d3d8b3] flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"></path>
                            <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
                            <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5"></path>
                            <path d="M8 10h8"></path>
                            <path d="M8 18h8"></path>
                          </svg>
                        </div>

                        <div>
                          <strong>
                            Profit Referral Bonus Via Marco Nepitali - Level 1{" "}
                          </strong>
                          <div className="text-xs text-[#001219bf]">
                            Jun 25 2024 12:45
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong>TRXRIKAT8WLQV</strong>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <div className="text-white py-1 px-4 rounded-[25px] text-xs font-bold bg-primary inline">
                        Referral
                      </div>
                    </td>

                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong className="text-[#2a9d8f]">+2.25 USD</strong>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong>0 USD</strong>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <div className="bg-[#2a9d8f] inline text-white py-1 px-4 rounded-[25px] text-xs font-bold">
                        Success
                      </div>
                    </td>
                    <td className="border-b border-[#535a941a] px-2.5 py-4 text-[#003049] text-sm">
                      <strong>System</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransaction;
