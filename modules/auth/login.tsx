import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <section
      className="w-full min-h-screen relative bg-[#003049] py-20 text-base"
      style={{
        backgroundImage: "url(https://matston.com/en/loginimge.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center">
        <a href="https://matston.com/en">
          <img
            src="https://matston.com/en/assets/global/images/UNOu81RsuLkC74Z1QyLH.png"
            alt="logo"
            className="w-[350px] h-[40px] inline-block"
          />
        </a>
      </div>
      <br />

      <div className="sm:w-[95%] px-3 mx-auto">
        <div className="flex justify-center flex-wrap">
          <div className="w-full lg:w-2/3 xl:w-5/12 flex-[0_0_auto] max-w-[720px] lg:max-w-[550px] px-3">
            <div className="mb-8 rounded-2xl relative z-[1] py-10 px-4 sm:px-16 bg-[#FFFFFF78]">
              <div className="mt-12">
                <form>
                  <input
                    type="hidden"
                    name="_token"
                    value="PWWH1oNKL89o1A95kUYdVbS7429SH7Hs8LKen3vv"
                  />

                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#001219cc] mb-1"
                    >
                      Email Or Username
                    </label>
                    <input
                      className="w-full h-12 rounded indent-1 bg-white transition-all duration-300 relative border border-[#CDD4E7]"
                      type="text"
                      name="email"
                      placeholder="Enter your email address or username"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-[#001219cc] mb-1"
                    >
                      Password
                    </label>
                    <input
                      className="w-full h-12 rounded indent-1 bg-white transition-all duration-300 relative border border-[#CDD4E7]"
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="mb-5 flex justify-between items-center">
                    <div className="flex items-center">
                      <input
                        className="mr-1 border border-[#CDD4E7] h-6 w-6 mt-0.5 rounded bg-white"
                        type="checkbox"
                        name="remember"
                        id="flexCheckDefault"
                      />
                      <label
                        className="inline-block"
                        htmlFor="flexCheckDefault"
                      >
                        Remember me
                      </label>
                    </div>
                    <span>
                      <a href="https://matston.com/en/forgot-password">
                        Forget Password
                      </a>
                    </span>
                  </div>

                  <button className="mb-5 bg-[#0DC9C9] text-white py-3 px-7 rounded-[50px] font-medium text-sm uppercase shadow-sm w-full">
                    Account Login
                  </button>
                </form>

                <p className="text-center">
                  Not a member of Matston?{" "}
                  <a
                    className="text-[#0dc9c9]"
                    href="https://matston.com/en/register"
                  >
                    Start Staking
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
