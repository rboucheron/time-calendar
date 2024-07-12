import { Event } from "../interface/Event";


interface EventOptionProps {
  date: Date;
  hour: number;
  handleClose: (value: boolean) => void;
  handleConfirm: (event: Event | null) => void;
  handleUpdate: (value: boolean) => void; 
}

const EventOption: React.FC<EventOptionProps> = ({
  date,
  hour,
  handleClose,
  handleConfirm,
  handleUpdate,
}) => {

  const handleDelete = () => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      const parsedEvents: Event[] = JSON.parse(storedEvents);
      const updatedEvents = parsedEvents.filter(
        (e) =>
          !(
            new Date(e.date).toLocaleDateString() ===
              date.toLocaleDateString() && e.hour === hour
          )
      );
      localStorage.setItem("events", JSON.stringify(updatedEvents));
      handleConfirm(null);
    }
    handleClose(false);
  };

  return (
    <>
      <div className=" flex flex-col absolute w-full bg-white bg-opacity-80 rounded-sm -right-4 -bottom-4">
        <div
          className="transform transition-all duration-300 cursor-pointer pl-2 pr-2 text-gray-800 text-start rounded-t-sm border-b border-gray-800 pb-1 text-sm w-full pt-1 hover:bg-red-500 hover:text-white"
          onClick={() => handleDelete()}
        >
          Supprimer
        </div>
        <div
          className="transform transition-all duration-300 cursor-pointer pl-2 pr-2 text-gray-800 text-start rounded-b-sm pb-1 text-sm w-full pt-1 hover:bg-yellow-500 hover:text-white"
          onClick={() => handleUpdate(true)}
        >
          Modifier
        </div>
      </div>
    </>
  );
};

export default EventOption