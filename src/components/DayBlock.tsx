import React, { useState } from "react";
import Poppup from "./Poppup";

interface DayBlockProps {
  date: Date;
  index: number;
}
interface HourBlockProps {
  hour: number;
  index: number;
}

const DayBlock: React.FC<DayBlockProps> = ({ date, index }) => {
  const hours = [];
  for (let i = 8; i <= 20; i++) {
    hours.push(i);
  }
  return (
    <div className="text-center ml-4 ">
      <div className=" h-full mb-0 grid grid-cols-1 grid-rows-12 gap-4  ">
        {hours.map((hour, hourIndex) => (
          <HourBlock key={hourIndex} hour={hour} index={hourIndex} />
        ))}
      </div>
    </div>
  );
};

const HourBlock: React.FC<HourBlockProps> = ({ hour, index }) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <div
        className="w-full bg-opacity-50 bg-[#2A2B34] rounded-xl pb-16 transform transition-all duration-300 hover:scale-110 hover:bg-opacity-100 cursor-pointer z-10"
        onClick={handleClick}
      ></div>
      {isPopupOpen ? <Poppup /> : ""}
    </>
  );
};

export default DayBlock;
