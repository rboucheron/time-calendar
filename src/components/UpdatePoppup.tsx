import { Event } from "../interface/Event";
import { useState, useEffect, useRef } from "react";
import Poppup, { HeaderPoppup, BodyPoppup, FooterPoppup } from "./Poppup";

interface UpdatePoppupProps {
  date: Date;
  hour: number;
  handleClose: (close: boolean) => void;
  handleConfirm: (event: Event | null) => void;
}

const UpdatePoppup: React.FC<UpdatePoppupProps> = ({
  date,
  hour,
  handleConfirm,
  handleClose,
}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      const parsedEvents: Event[] = JSON.parse(storedEvents);
      const foundEvent = parsedEvents.find(
        (e) =>
          new Date(e.date).toLocaleDateString() === date.toLocaleDateString() &&
          e.hour === hour
      );
      setTitle(foundEvent ? foundEvent.title : "");
      setDescription(foundEvent ? foundEvent.description : "");
    }
  }, [date, hour]);

  const handleUpdate = () => {
    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;

    if (title !== undefined && description !== undefined) {
      let events: Event[] = [];
      const storedEvents = localStorage.getItem("events");
      if (storedEvents) {
        events = JSON.parse(storedEvents);
      }
      const eventIndex = events.findIndex(
        (e) =>
          new Date(e.date).toLocaleDateString() === date.toLocaleDateString() &&
          e.hour === hour
      );

      if (eventIndex > -1) {
        events[eventIndex].title = title;
        events[eventIndex].description = description;
      } else {
        const newEvent: Event = {
          date: date,
          hour: hour,
          title: title,
          description: description,
        };
        events.push(newEvent);
      }
      localStorage.setItem("events", JSON.stringify(events));
      handleConfirm(events[eventIndex] || events[events.length - 1]);
    }

    handleClose(false);
  };

  return (
    <Poppup>
      <HeaderPoppup>Modifier L'évènement</HeaderPoppup>
      <BodyPoppup>
        <div className="mb-2">
          <input
            ref={titleRef}
            className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500"
            type="text"
            id="eventTitle"
            placeholder="Titre de l'évènement"
            value={title}
          />
        </div>
        <div>
          <input
            ref={descriptionRef}
            className="w-full px-3 py-2 pb-9 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500"
            type="text"
            id="eventDescription"
            placeholder="Description de l'évènement"
            value={description}
          />
        </div>
      </BodyPoppup>
      <FooterPoppup>
        <button
          className="mr-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
          onClick={() => handleClose(false)}
        >
          Annuler
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
          onClick={handleUpdate}
        >
          Confirmer
        </button>
      </FooterPoppup>
    </Poppup>
  );
};

export default UpdatePoppup;
