import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ChangeWeekProps {
  ChooseDay: Date;
  onChange: (Day: Date) => void;
}

const ChangeWeek: React.FC<ChangeWeekProps> = ({ ChooseDay, onChange }) => {
  const [landmarkDay, setLandmarkDay] = useState<Date>(ChooseDay);
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("fr-FR", {
      month: "long",
      year: "numeric",
    });
  };

  const handleDayIncreases = () => {
    const newDate = new Date(landmarkDay);
    newDate.setDate(newDate.getDate() + 7);
    setLandmarkDay(newDate);
    onChange(newDate);
  };

  const handleDayDecreases = () => {
    const newDate = new Date(landmarkDay);
    newDate.setDate(newDate.getDate() - 7);
    setLandmarkDay(newDate);
    onChange(newDate);
  };

  return (
    <div className="flex space-x-4  text-white">
      <div onClick={handleDayDecreases} className="cursor-pointer">
        <ArrowLeft  />
      </div>
      <p className="cursor-default select-none">{String(formatDate(landmarkDay))}</p>
      <div onClick={handleDayIncreases} className="cursor-pointer">
        <ArrowRight />
      </div>
    </div>
  );
};

export default ChangeWeek;
