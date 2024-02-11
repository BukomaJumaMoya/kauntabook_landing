"use client";
import { Fade } from "react-awesome-reveal";
import { FEATURES } from "@/constants";
import Image from "next/image";
import FeatureCard from "./featureCard";

const Features = () => {
  return (
    <section id="features-section" className=" bg-white py-20 ">
      <div className="max-containter padding-container overflow-hidden flex flex-col items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="relative bold-32 lg:bold-40 uppercase">Features</h2>
          <p className="relative regular-14 lg:regular-16 text-green-50 max-w-[600px] text-center uppercase">
            Embark on a Journey of Seamless, Secure, and Budget-Friendly Student
            Financial Transfers with Kauntabook.
          </p>
        </div>

        <Fade cascade direction="right" duration={400} triggerOnce>
          <ul className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-10 lg:gap-10 ">
            {FEATURES.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </Fade>
      </div>
    </section>
  );
};

export default Features;
