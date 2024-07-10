const DayHeader = () => {
  return (
    <div className="w-full lg:grid grid-cols-7 mt-5 text-sm lg:text-2sm text-center gap-4">
      <div className="text-center p-2 text-white font-bold text-xl">
        Dimanche
      </div>
      <div className="text-center p-2 text-white font-bold text-xl ">Lundi</div>
      <div className="text-center p-2 text-white font-bold text-xl">Mardi</div>
      <div className="text-center p-2 text-white font-bold text-xl">
        Mercredi
      </div>
      <div className="text-center p-2 text-white font-bold text-xl">Jeudi</div>
      <div className="text-center p-2 text-white font-bold text-xl">
        Vendredi
      </div>
      <div className="text-center p-2 text-white font-bold text-xl">Samedi</div>
    </div>
  );
};

export default DayHeader;
