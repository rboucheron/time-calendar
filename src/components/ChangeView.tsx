import { Link } from "react-router-dom";

const ChangeView = () => {
  const { pathname } = window.location;
  const week = "/week";
  const month = "/";

  return (
    <div className="border bg-transparent rounded-lg text-sm text-center grid grid-cols-2 text-white w-40 mt-2 h-10">
      <Link to="/week" className={`${pathname === week ? "bg-red-500" : ""} flex items-center justify-center rounded-lg cursor-pointer`}>
        Semaine
      </Link>
      <Link to="/" className={`${pathname === month ? "bg-red-500" : ""} flex items-center justify-center rounded-lg cursor-pointer`}>
        Mois
      </Link>
    </div>
  );
};

export default ChangeView;