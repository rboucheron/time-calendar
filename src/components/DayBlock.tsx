import React, { useState, useEffect } from "react";
import Popup from "./Poppup";
import { Event } from "../interface/Event";

interface DayBlockProps {
  date: Date;
  index: number;
}

interface HourBlockProps {
  hour: number;
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
          <HourBlock key={`${index}-${hourIndex}`} hour={hour} date={date} index={hourIndex} />
        ))}
      </div>
    </div>
  );
};

const HourBlock: React.FC<HourBlockProps> = ({ hour, date }) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    const storedEvent = localStorage.getItem("event");
    if (storedEvent) {
      const parsedEvent = JSON.parse(storedEvent);
      const eventDate = new Date(parsedEvent.date);
      if (
        eventDate.toLocaleDateString() === date.toLocaleDateString() &&
        parsedEvent.hour === hour
      ) {
        setEvent({ title: parsedEvent.title, description: parsedEvent.description, date: parsedEvent.date, hour: parsedEvent });
      }
    }
  }, [date, hour]);

  const handleClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <div
        className={`w-full rounded-xl pb-16 transform transition-all duration-300 cursor-pointer z-10 ${
          event ? 'bg-blue-500 text-white' : 'bg-[#2A2B34] bg-opacity-50 hover:scale-110 hover:bg-opacity-100'
        }`}
        onClick={handleClick}
      >
        {event && (
          <div className="p-2">
            <h3 className="font-bold">{event.title}</h3>
            <p>{event.description}</p>
          </div>
        )}
      </div>
      {isPopupOpen && <Popup date={date} hour={hour} handleConfirm={(event : Event) => setEvent(event)} handleClose={(value: boolean) => setIsPopupOpen(value)} />}
    </>
  );
};

export default DayBlock;