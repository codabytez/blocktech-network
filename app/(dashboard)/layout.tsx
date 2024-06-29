"use client";
import { NextPage } from "next";
import { useState, useEffect } from "react";
import DashboardHeader from "@/components/header";
import Sidebar from "@/components/sidebar";

const Layout: NextPage<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-[#21273e08] w-full min-h-screen relative">
      <DashboardHeader
        toggleSidebar={toggleSidebar}
        isSidebarOpen={sidebarOpen}
      />
      <Sidebar isOpen={sidebarOpen} />
      <main
        className={`min-h-screen ${
          isMobile || !sidebarOpen ? "pl-0" : "pl-[400px]"
        } transition-all duration-300`}
      >
        <div className="pt-[70px] pb-5 px-2.5 min-h-[calc(100vh-70px)]">
          <div className="py-7 relative z-10">
            <div className="w-full px-3 mx-auto">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
