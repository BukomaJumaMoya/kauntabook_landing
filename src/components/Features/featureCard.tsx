import Image from "next/image";
import { useState } from "react";

type featureItemProps = {
  title: string;
  description: string;
  icon: string;
};

function FeatureCard({ title, description, icon }: featureItemProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`p-10 border border-gray-100 rounded-md overflow-hidden transition-transform transform ${
        hovered ? "scale-105" : ""
      } ${hovered ? "shadow-md" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <li className="flex w-full flex-1 flex-col items-start">
        <div className="rounded-full p-4 left-full lg:p-7 bg-green-50">
          <Image src={icon} alt="map" width={28} height={28} />
        </div>
        <h2 className="bold-20 lg:bold32 mt-5 capitalize">{title}</h2>
        <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
          {description}
        </p>
      </li>
    </div>
  );
}

export default FeatureCard;
