import React from "react";
import HourBlock from "./HourBlock";
interface DayBlockProps {
  date: Date;
  index: number;
}

const DayBlock: React.FC<DayBlockProps> = ({ date, index }) => {
  const hours = [];
  for (let i = 8; i <= 20; i++) {
    hours.push(i);
  }
  return (
    <div className="text-center ml-4">
      <div className="h-full mb-0 grid grid-cols-1 grid-rows-12 gap-4">
        {hours.map((hour, hourIndex) => (
          <HourBlock
            key={`${index}-${hourIndex}`}
            hour={hour}
            date={date}
            index={hourIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default DayBlock;
