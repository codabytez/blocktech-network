import { NextPage } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Layout: NextPage<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
