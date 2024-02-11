"use client";
import { FaChevronRight } from "react-icons/fa";

type faqProps = {
  title: string;
  description: string;
  count: number;
  isExpanded: boolean;
  handleToggle: any;
};

const FaqItem = ({
  title,
  description,
  isExpanded,
  count,
  handleToggle,
}: faqProps) => {
  return (
    <div className="flex flex-col w-full  items-center bg-white rounded-lg lg:rounded-lg">
      <div
        className={`flex justify-between p-4 rounded-md items-center w-full cursor-pointer ${
          isExpanded ? "bg-green-60" : "bg-white"
        }`}
        onClick={handleToggle}
      >
        <div className="flex flex-row gap-3">
          <div
            className={`border border-gray-200 ${
              isExpanded ? "bg-white text-blue-500" : ""
            } regular-16`}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {count}
          </div>

          <h6
            className={`${
              isExpanded ? "text-white" : "text-slate-800"
            } regular-16`}
          >
            {title}
          </h6>
        </div>
        <FaChevronRight
          className={`${
            isExpanded ? "text-white" : "text-slate-400"
          } transition-all ${isExpanded ? "rotate-90" : ""}`}
          size={18}
        />
      </div>
      {isExpanded && (
        <div className="mt-2 regular-14 text-gray-600 py-4 pl-4 w-full text-left">
          {description}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
