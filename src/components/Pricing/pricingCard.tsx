import Image from "next/image";
import { useState } from "react";

type pricingItemProps = {
  title: string;
  description: string;
  pricing: string;
  icon?: string;
};

function PrincingCard({ title, description, pricing }: pricingItemProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`p-5 border border-gray-200 rounded-md overflow-hidden transition-transform transform ${
        hovered ? "scale-105" : ""
      } ${hovered ? "shadow-md" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <li className="flex w-full flex-1 flex-col items-start">
        <h2 className="bold-16 lg:bold-18  capitalize">{title}</h2>
        <p className="regular-14 bg-white/80 text-green-50 lg:mt-[20px] lg:bg-none">
          {description}
        </p>
        <h3 className="bold-16 lg:bold-18 pt-2  lg:pt-5 ">{pricing}</h3>
        <button className="bg-green-50 rounded-md py-2 px-2 w-full mt-2 lg:mt-4 text-white">
          Get the App Now
        </button>
        <div className="border bg-black" />

        <h1 className="text-black regular-14 uppercase mt-4">
          What&apos;s included
        </h1>
        <div className="flex flex-row gap-2 justify-center mt-2 ">
          <div className="regular-14 text-green-90 ">✔️</div>

          <h6 className="regular-16">Expense Tracking</h6>
        </div>
        <div className="flex flex-row gap-2 justify-center mt-2 ">
          <div className="regular-14 text-green-90 ">✔️</div>

          <h6 className="regular-16">Budget Management</h6>
        </div>
        <div className="flex flex-row gap-2 justify-center mt-2 ">
          <div className="regular-14 text-green-90 ">✔️</div>

          <h6 className="regular-16">Bill Reminders and Payments</h6>
        </div>
        <div className="flex flex-row gap-2 justify-center mt-2 ">
          <div className="regular-14 text-green-90 ">✔️</div>

          <h6 className="regular-16">Financial Insights and Reports</h6>
        </div>
      </li>
    </div>
  );
}

export default PrincingCard;
