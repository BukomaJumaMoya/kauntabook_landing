import Image from "next/image";
import { useState } from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  link?: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button = ({ type, title, link, icon, variant, full }: ButtonProps) => {
  const handleTap = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getVariantClasses = () => {
    if (variant === "btn_dark_green_outline") {
      return isHovered
        ? "bg-green-500 text-white hover:bg-white hover:text-green-500"
        : "text-green-500 border border-green-500 hover:bg-green-500 hover:text-white";
    } else {
      return "border " + variant;
    }
  };

  return (
    <button
      className={`flexCenter gap-3 rounded-md border ${getVariantClasses()} ${variant} ${
        full && "w-full"
      }`}
      type={type}
      onClick={handleTap}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon && (
        <div>
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
            style={{ filter: "invert(1) brightness(100)" }}
          />
        </div>
      )}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
