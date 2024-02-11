"use client";

import React, { useState } from "react";
import FaqItem from "./FAQItem";
import { FAQ_LIST } from "@/constants";
import { Fade } from "react-awesome-reveal";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section id="faq-section" className="relative">
      <div className="max-containter padding-container bg-gray-100  flex flex-col py-10 lg:py-20">
        <div className="flex flex-col items-center sm:text-center pb-10 ">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h2 className="relative bold-32 lg:bold-40 text-center">
              Frequently Asked Questions
            </h2>
          </Fade>

          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <p className="relative regular-14 lg:regular-16 pt-3 text-green-50 max-w-[600px] text-center">
              Need help using Kauntabook? Find answers to frequently asked
              questions here
            </p>
          </Fade>
        </div>

        <ul className="flex flex-col items-center gap-4 text-gray-30">
          {FAQ_LIST.map((faq, index) => (
            <FaqItem
              key={index}
              count={index + 1}
              title={faq.title}
              description={faq.description}
              isExpanded={openIndex === index}
              handleToggle={() => handleToggle(index)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
