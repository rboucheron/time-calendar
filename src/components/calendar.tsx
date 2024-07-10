import React, { useState } from "react";
import DayHeader from "./DayHeader";
import Case from "./Case";
import Dropdown, { Option } from "./Dropdown";
import ChangeView from "./ChangeView";
const Calendar: React.FC = () => {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const [month, setMonth] = useState<number>(today.getMonth());
  const firstDay: Date = new Date(year, month, 1);
  const lastDay: Date = new Date(year, month + 1, 0);
  const totalDays: number = lastDay.getDate();
  const days: JSX.Element[] = [];

  const monthOptions: Option[] = [
    { label: "Janvier", value: 0 },
    { label: "Février", value: 1 },
    { label: "Mars", value: 2 },
    { label: "Avril", value: 3 },
    { label: "Mai", value: 4 },
    { label: "Juin", value: 5 },
    { label: "Juillet", value: 6 },
    { label: "Août", value: 7 },
    { label: "Septembre", value: 8 },
    { label: "Octobre", value: 9 },
    { label: "Novembre", value: 10 },
    { label: "Décembre", value: 11 },
  ];

  for (let i = 0; i < firstDay.getDay(); i++) {
    days.push(
      <div
        key={`empty-${i}`}
        className="relative text-white m-2 text-start p-2 pb-10 cursor-pointer rounded-xl"
      />
    );
  }

  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(year, month, i);
    days.push(<Case key={i} date={date} />);
  }

  return (
    <div className="w-11/12 m-auto">
      <div className="w-full  grid grid-cols-2 mt-10 ">
        <div>
          <Dropdown
            options={monthOptions}
            onChange={(value: number) => setMonth(value)}
          >
            Mois
          </Dropdown>
        </div>

        <div className=" grid justify-items-end">
          <ChangeView />
        </div>
      </div>

      <div className=" w-full text-center p-2 text-white font-bold text-3xl">
        {firstDay.toLocaleString("fr-FR", { month: "long" })}
      </div>
      <DayHeader />
      <div className="grid grid-cols-7 mt-5">{days}</div>
    </div>
  );
};

export default Calendar;
