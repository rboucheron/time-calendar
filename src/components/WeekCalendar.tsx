import React, { useState, useEffect } from "react";
import ChangeView from "./ChangeView";
import DayBlock from "./DayBlock";
import ChangeWeek from "./ChangeWeek";

const WeekCalendar = () => {
  const { search } = window.location;
  const [chooseDate, setChooseDate] = useState<Date>(
    search ? new Date(search) : new Date()
  );
  const [weekDates, setWeekDates] = useState<Date[]>([]);

  const getWeekDates = (startDate: Date) => {
    const start = new Date(startDate);
    const day = start.getDay();
    const diff = start.getDate() - day + (day === 0 ? -6 : 1);
    start.setDate(diff);

    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  useEffect(() => {
    setWeekDates(getWeekDates(chooseDate));
  }, [chooseDate]);

  const getWeekday = (date: Date) => {
    return date.toLocaleDateString("fr-FR", { weekday: "long" });
  };

  const getDay = (date: Date) => {
    return date.toLocaleDateString("fr-FR", { day: "numeric" });
  };

  const hours = [];
  for (let i = 8; i <= 20; i++) {
    hours.push(i);
  }

  return (
    <div className="w-11/12 m-auto mb-4">
      <div className="w-full grid grid-cols-2 mt-10">
        <div>
          <ChangeWeek
            ChooseDay={chooseDate}
            onChange={(date: Date) => setChooseDate(date)}
          />
        </div>
        <div className="grid justify-items-end">
          <ChangeView />
        </div>
      </div>
      <div className="grid grid-cols-7 sticky top-0 bg-[#1F1F26] pb-2 z-40">
        <div className="col-span-1"></div>
        <div className="col-span-6 w-full lg:grid grid-cols-7 mt-5 text-sm lg:text-2sm text-center gap-4 truncate">
          {weekDates.map((date, index) => (
            <div
              key={index}
              className="text-center p-2 text-white font-bold text-xl"
            >
              <div>{getWeekday(date)}</div>
              <div className={`${date === new Date() ? 'bg-red-500 rounded-full' : ''} p-2`}>{getDay(date)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-7">
        {/* Heures */}
        <div className="col-span-1 grid grid-cols-1 grid-rows-12 gap-3">
          {hours.map((hour) => (
            <div key={hour} className="text-end pb-16 text-white">
              {hour.toString().padStart(2, "0")}:00
            </div>
          ))}
        </div>
        {/* Carrés pour les heures */}
        <div className="col-span-6 grid grid-cols-7">
          {weekDates.map((date, index) => (
            <DayBlock key={index} date={date} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeekCalendar;