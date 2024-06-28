import { NextPage } from "next";
import DashboardHeader from "@/components/header";
import Sidebar from "@/components/sidebar";

const Layout: NextPage<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="bg-[#21273e08] w-full min-h-screen relative">
      <DashboardHeader />
      <Sidebar />

      <main className="min-h-screen pl-[400px]">
        <div className="pt-[70px] pb-5 px-2.5 min-h-[calc(100ch-70px)]">
          <div className="py-7 relative z-10">
            <div className="w-full px-3 mx-auto">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
