import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import webICE from "@/public/images/WebICE-White-64px.png";
import chat from "@/public/images/Chat-White-64px.png";
import connect from "@/public/images/ICE-Connect_Icon_Border-64x64.png";
import options from "@/public/images/Options_Analytics-White-64px.png";
import block from "@/public/images/Block-White-64px.png";
import positions from "@/public/images/Positions-White-64px.png";
import ICEHub from "@/public/images/ETFHub-White-64px.png";
import quoteBoard from "@/public/images/QuoteBoard-White-64px.png";
import { ROUTES } from "@/constants/routes";

const Login: NextPage = () => {
  return (
    <div className="bg-white relative z-10 w-full py-6 px-[4%] mx-auto">
      <div className="min-h-[79vh]">
        <div className="py-5 px-10 shadow md:w-3/5 lg:w-5/12 mx-auto">
          <div className="float-right">
            <Link href="#" className="text-sm text-primary">
              2FA/Passcode Help
            </Link>
          </div>
          <h1 className="text-3xl pb-2">Login</h1>
          <div>
            <div className="relative mb-5 w-full text-left">
              <hr className="border-t my-4 border-[#d2d4d3]" />
              <span className="absolute -top-2.5 text-[#818078] bg-white pr-2.5 font-bold text-sm">
                Blocktech Connect Apps
              </span>
            </div>

            <div className="-mx-5">
              <div className="mb-1 md:w-full px-6">
                <div className="flex flex-nowrap justify-around">
                  <Link
                    href="#"
                    className="icon-link"
                    style={{ margin: "0.2em" }}
                  >
                    <Image src={webICE} alt="WebICE" width={48} height={48} />
                    <div
                      className="icon-link-label"
                      style={{ fontSize: "10px" }}
                    >
                      WebBlocktech
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="icon-link"
                    style={{ margin: "0.2em" }}
                  >
                    <Image src={chat} alt="Chat" width={48} height={48} />
                    <div
                      className="icon-link-label"
                      style={{ fontSize: "10px" }}
                    >
                      Chat
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="icon-link"
                    style={{ margin: "0.2em" }}
                  >
                    <Image src={connect} alt="Connect" width={48} height={48} />
                    <div
                      className="icon-link-label"
                      style={{ fontSize: "10px" }}
                    >
                      Connect
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="icon-link"
                    style={{ margin: "0.2em" }}
                  >
                    <Image src={options} alt="Options" width={48} height={48} />
                    <div
                      className="icon-link-label"
                      style={{ fontSize: "10px" }}
                    >
                      Options
                    </div>
                    <div
                      className="icon-link-label"
                      style={{ fontSize: "10px", marginTop: "-0.6em" }}
                    >
                      Analytics
                    </div>
                  </Link>
                </div>
                <div className="flex flex-nowrap justify-around">
                  <Link
                    href="#"
                    className="icon-link"
                    style={{ margin: "0.2em" }}
                  >
                    <Image src={block} alt="Block" width={48} height={48} />
                    <div
                      className="icon-link-label"
                      style={{ fontSize: "10px" }}
                    >
                      Block
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="icon-link"
                    style={{ margin: "0.2em" }}
                  >
                    <Image
                      src={positions}
                      alt="Positions"
                      width={48}
                      height={48}
                    />
                    <div
                      className="icon-link-label"
                      style={{ fontSize: "10px" }}
                    >
                      Positions
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="icon-link"
                    style={{ margin: "0.2em" }}
                  >
                    <Image src={ICEHub} alt="ETFHub" width={48} height={48} />

                    <div
                      className="icon-link-label"
                      style={{ fontSize: "10px" }}
                    >
                      Blocktech
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="icon-link"
                    style={{ margin: "0.2em" }}
                  >
                    <Image
                      src={quoteBoard}
                      alt="QuoteBoard"
                      width={48}
                      height={48}
                    />
                    <div
                      className="icon-link-label"
                      style={{ fontSize: "10px" }}
                    >
                      Quote Board
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative mb-5 w-full text-left">
              <hr className="border-t my-4 border-[#d2d4d3]" />
              <span className="absolute -top-2.5 text-[#818078] bg-white pr-2.5 font-bold text-sm">
                Other Blocktech Apps
              </span>
            </div>

            <p className="text-xs mb-6">
              To access additional applications - please enter your User
              ID/Password and click Login. You will then see the applications
              you have access to. Click on icon to access the application.
            </p>
          </div>

          <div>
            <form className="mb-6">
              <div>
                <div className="-mx-5">
                  <div className="mb-1 md:w-full">
                    <label
                      htmlFor="user"
                      className="text-xs text-[#808080] font-bold"
                    >
                      User ID
                    </label>
                    <input
                      className="text-[#565A5C] text-sm w-full h-7 py-1 px-2 shadow-[inset_0_1px_1px_rgba(0,_0,_0,_.075)] border border-[#a2a4a3]"
                      type="text"
                      name="user"
                      value=""
                    />
                  </div>

                  <div className="mb-1 md:w-full">
                    <label
                      htmlFor="password"
                      className="text-xs text-[#808080] font-bold"
                    >
                      Password
                    </label>
                    <input
                      className="text-[#565A5C] text-sm w-full h-7 py-1 px-2 shadow-[inset_0_1px_1px_rgba(0,_0,_0,_.075)] border border-[#a2a4a3]"
                      type="text"
                      name="password"
                      value=""
                    />
                  </div>
                </div>

                <div className="-mx-5 mb-2">
                  <div className="mb-1 md:w-full">
                    <label className="text-xs text-[#808080]">
                      <input name="remember_me" type="checkbox" />
                      Remember User ID
                    </label>
                  </div>
                </div>

                <div className="pb-3 w-full">
                  <div className="-mx-5 flex justify-between">
                    <div className="w-1/3 px-4">
                      <div>
                        <div className="pb-0.5 leading-none">
                          <Link href="#" className="text-xs text-[#8DC7E9]">
                            Change Password
                          </Link>
                        </div>
                        <div
                          id="loginPageForgotPassword"
                          className="pb-0.5 leading-none"
                        >
                          <Link href="#" className="text-xs text-[#8DC7E9]">
                            Forgot/Reset Password
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="w-2/3 px-4 float-right">
                      <div className="-mx-5">
                        <div className="mb-1 w-full relative px-5">
                          <div className="float-right">
                            <button
                              type="submit"
                              className="bg-[#231f20] py-2 px-3 border-2 text-center text-sm text-white"
                              name="loginPageSubmitBtn"
                            >
                              Login
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div>
              <br />
              <p className="text-xs mb-6">
                To access Blocktech Data Services{" "}
                <Link href={ROUTES.SIGNUP} className="text-[#8DC7E9]">
                  Click here
                </Link>
              </p>
            </div>

            <br />
            <p className="text-xs text-[#B00017]">
              Blocktech Applications require Blocktech WebStart to run. Please
              download and install Blocktech WebStart from{" "}
              <Link href={ROUTES.SIGNUP} className="text-[#8DC7E9]">
                here
              </Link>{" "}
              before attempting to launch the app.
            </p>

            <br />

            <p style={{ fontSize: "12px", marginBottom: "0.1em" }}>
              24 hour trading and technical support{" "}
              <Link href="#" className="text-[#8DC7E9]">
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
