function HourRuler() {
  const hours = [];
  for (let i = 8; i <= 20; i++) {
    hours.push(i);
  }
  return (
    <>
      {hours.map((hour) => (
        <div key={hour} className="text-end pb-16 text-white">
          {hour.toString().padStart(2, "0")}:00
        </div>
      ))}
    </>
  );
}

export default HourRuler;
