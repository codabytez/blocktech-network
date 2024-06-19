import About from "@/modules/home/about";
import CTA from "@/modules/home/cta";
import Hero from "@/modules/home/hero";
import Insights from "@/modules/home/insights";
import Sustainability from "@/modules/home/sustainability";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="px-3 lg:px-24">
        <About />
        <Sustainability />
        <Insights />
        <CTA />
      </div>
    </>
  );
}
