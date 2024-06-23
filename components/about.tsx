import { NextPage } from "next";
import AboutHero from "@/modules/about/hero";
import Transformation from "@/modules/about/transformation";
import Story from "@/modules/about/story";
import Sustainability from "@/modules/about/sustainability";
import CTA from "@/modules/about/cta";
import Business from "@/modules/about/business";

const About: NextPage = () => {
  return (
    <div>
      <AboutHero />
      <div className="px-3 lg:px-24">
        <Transformation />
        <Story />
        <Sustainability />
        <Business />
        <CTA />
      </div>
    </div>
  );
};

export default About;
