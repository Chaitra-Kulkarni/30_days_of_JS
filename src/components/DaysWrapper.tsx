import { Tooltip } from "antd";
// import { useState } from "react";
import { IJsDay } from "../types";

const DaysWrapper = ({ label, content }: IJsDay) => {

  const handleDayContent = () => {
    console.log(content);
  };

  return (
    <Tooltip title={content}>
      <button
        onClick={handleDayContent}
        className="bg-emerald-500 px-5 py-2 rounded-xl font-medium hover:scale-105"
      >
        {label}
      </button>
    </Tooltip>
  );
};

export default DaysWrapper;
