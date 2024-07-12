import React, { useState, useEffect } from "react";
import CreatPopup from "./CreatPoppup";
import { Event } from "../interface/Event";
import EventOption from "./EventOption";
import UpdatePoppup from "./UpdatePoppup";

interface HourBlockProps {
  hour: number;
  date: Date;
  index: number;
}

const HourBlock: React.FC<HourBlockProps> = ({ hour, date }) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [event, setEvent] = useState<Event | null>(null);
  const [isOptionOpen, setIsOptionOpen] = useState<boolean>(false);
  const [isUpdatePoppupOpen, setIsUpdatePoppupOpen] = useState<boolean>(false);

  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-sky-500",
    "bg-lime-500",
    "bg-indigo-500",
    "bg-fuchsia-500",
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      const parsedEvents: Event[] = JSON.parse(storedEvents);
      const foundEvent = parsedEvents.find(
        (e) =>
          new Date(e.date).toLocaleDateString() === date.toLocaleDateString() &&
          e.hour === hour
      );

      setEvent(foundEvent ? foundEvent : null);
    }
  }, [date, hour]);

  useEffect(() => {
    setIsOptionOpen(false);
  }, [event]);

  const isPast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleUpdate = (value: boolean) => {
    setIsOptionOpen(false);
    setIsUpdatePoppupOpen(value);
  };

  return (
    <>
      <div
        className={`w-full rounded-xl pb-16 transform transition-all duration-300 cursor-pointer z-10 ${
          event
            ? `${getRandomColor()} text-white`
            : isPast(date)
            ? `bg-hash bg-opacity-50  hover:bg-opacity-100`
            : "bg-[#2A2B34] bg-opacity-40  hover:bg-opacity-100"
        }`}
        onClick={
          event ? () => setIsOptionOpen(!isOptionOpen) : () => setIsPopupOpen(true)
        }
      >
        {isOptionOpen && (
          <EventOption
            date={date}
            hour={hour}
            handleConfirm={(event: Event | null) => setEvent(event)}
            handleClose={(value: boolean) => setIsOptionOpen(value)}
            handleUpdate={handleUpdate}
          />
        )}
        {event && (
          <div className="p-1">
            <h3 className="font-bold">{event.title}</h3>
            <p>{event.description}</p>
          </div>
        )}
      </div>
      {isPopupOpen && (
        <CreatPopup
          date={date}
          hour={hour}
          handleConfirm={(newEvent: Event) => setEvent(newEvent)}
          handleClose={() => setIsPopupOpen(false)}
        />
      )}
      {isUpdatePoppupOpen && (
        <UpdatePoppup
          date={date}
          hour={hour}
          handleConfirm={(event: Event | null) => setEvent(event)}
          handleClose={() => setIsUpdatePoppupOpen(false)}
        />
      )}
    </>
  );
};

export default HourBlock;