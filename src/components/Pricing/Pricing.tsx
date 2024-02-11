"use client";
import { Fade } from "react-awesome-reveal";
import { FEATURES } from "@/constants";
import PrincingCard from "./pricingCard";

const Pricing = () => {
  return (
    <section id="features-section" className=" bg-white pb-20 ">
      <div className="max-containter padding-container overflow-hidden flex flex-col items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="relative bold-32 lg:bold-40 uppercase">Pricing</h2>
          <p className="relative regular-14 lg:regular-16 text-green-50 max-w-[600px] text-center uppercase">
            Cost & Charges
          </p>
        </div>

        <Fade cascade direction="right" duration={400} triggerOnce>
          <ul className="mt-10 flex flex-row mx-auto lg:mt-5 lg:gap-5 ">
            <PrincingCard
              title="Web version"
              description="Your all in one solution with access to limitless capabilities of finannce management "
              pricing="UGX 5,000 / Month"
            />
            <PrincingCard
              title="Mobile version"
              description="Your all in one solution at your finger tips with access to limitless capabilities of finannce management "
              pricing="UGX 3,000 / Month"
            />
          </ul>
        </Fade>
      </div>
    </section>
  );
};

export default Pricing;
