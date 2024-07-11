import React, { useRef } from "react";
import { Event } from "../interface/Event";

interface PopupI {
  date: Date;
  hour: number;
  handleClose: (close: boolean) => void;
  handleConfirm: (event: Event) => void;
}

const Popup: React.FC<PopupI> = (props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (hour: number) => {
    return `${hour.toString().padStart(2, "0")}:00`;
  };

  const handleCancel = () => {
    props.handleClose(false);
  };

  const handleConfirm = () => {
    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;

    if (title !== undefined && description !== undefined) {
      const event: Event = {
        date: props.date,
        hour: props.hour,
        title: title,
        description: description,
      };

      let events: Event[] = [];

      const storedEvents = localStorage.getItem("events");
      if (storedEvents) {
        events = JSON.parse(storedEvents);
        events.push(event);
        localStorage.setItem("events", JSON.stringify(events));
      } else {
        events = [] 
        events.push(event)
        localStorage.setItem("events", JSON.stringify(events));
      }




      props.handleConfirm(event);
    }

    props.handleClose(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-full max-w-lg bg-[#2A2B34] border border-gray-700 rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Ajouter un Évènement</h2>
        </div>
        <div className="p-6">
          <div className="text-white mb-4">
            <div className="mb-2">
              <span className="font-bold">{formatDate(props.date)}</span> à{" "}
              <span className="font-bold">{formatTime(props.hour)}</span>
            </div>
            <div className="mb-2">
              <input
                ref={titleRef}
                className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500"
                type="text"
                id="eventTitle"
                placeholder="Titre de l'évènement"
              />
            </div>
            <div>
              <input
                ref={descriptionRef}
                className="w-full px-3 py-2 pb-9 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500"
                type="text"
                id="eventDescription"
                placeholder="Description de l'évènement"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end p-4 border-t border-gray-700">
          <button
            className="mr-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
            onClick={handleCancel}
          >
            Annuler
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
            onClick={handleConfirm}
          >
            Confirmer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;