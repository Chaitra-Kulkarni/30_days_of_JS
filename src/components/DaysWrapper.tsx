import { daysOfJs } from "../jsStore";
import { IJsDay } from "../types";

const DaysWrapper = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {daysOfJs.map((dayEle: IJsDay) => (
        <button className="bg-emerald-500 px-5 py-2 rounded-xl font-medium hover:scale-105">
          {dayEle.label}
        </button>
      ))}
    </div>
  );
};

export default DaysWrapper;
