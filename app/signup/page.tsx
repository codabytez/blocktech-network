import LoginHeader from "@/modules/auth/header";
import SignUp from "@/modules/auth/sign-up";
import { NextPage } from "next";

const Signup: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <LoginHeader />
      <SignUp />;
    </div>
  );
};

export default Signup;
