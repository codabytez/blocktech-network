import LoginHeader from "@/modules/auth/header";
import Login from "@/modules/auth/login";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <LoginHeader />
      <Login />;
    </div>
  );
};

export default LoginPage;
