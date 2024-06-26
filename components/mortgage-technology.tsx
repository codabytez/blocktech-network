import AboutUs from "@/modules/mortgage-technology/about-us";
import Connection from "@/modules/mortgage-technology/connection";
import CTA from "@/modules/mortgage-technology/cta";
import MortgageTechnologyHero from "@/modules/mortgage-technology/hero";
import { NextPage } from "next";

const MortgageTechnology: NextPage = () => {
  return (
    <div>
      <MortgageTechnologyHero />
      <main className="min-h-[600px]">
        <AboutUs />
        <Connection />
        <CTA />
      </main>
    </div>
  );
};

export default MortgageTechnology;
