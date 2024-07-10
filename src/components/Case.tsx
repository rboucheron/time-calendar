import React from "react";
import { Link } from "react-router-dom";

interface CaseProps {
  date: Date;
}

const Case: React.FC<CaseProps> = ({ date }) => {
  const dayString = date.toLocaleString("fr-FR", { day: "numeric" });
  const isPast = date < new Date();

  // Formatage de la date en "year-month-day"
  const formattedDate = date.toISOString().split('T')[0];

  return (
    <Link
      to={`/week?${formattedDate}`}
      className={`relative text-white ${
        isPast ? "bg-hash" : "bg-[#2A2B34] hover:scale-110 cursor-pointer"
      } m-2 text-start p-2 pb-24 font-medium rounded-xl transform transition-all duration-300`}
    >
      <div>{dayString}</div>
    </Link>
  );
};

export default Case;