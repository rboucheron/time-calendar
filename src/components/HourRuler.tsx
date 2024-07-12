import { useState, useEffect } from "react";

function HourRuler() {
  const [cursorPosition, setCursorPosition] = useState(0);
  const hours = [];

  for (let i = 8; i <= 20; i++) {
    hours.push(i);
  }

  const definePosition = () => {
    const date = new Date();
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();
    const hoursSinceStart = currentHour - 8 + currentMinute / 60;
    const position = (hoursSinceStart / (20 - 7)) * 100;
    setCursorPosition(position);
  };

  useEffect(() => {
    definePosition();
    const timerId = setInterval(definePosition, 60000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <>
      <div
        className={`triangle ${new Date().getHours() > 20 || new Date().getHours() < 8 ? 'hidden' : '' }`}
        style={{
          top: `${cursorPosition}% `,
          right: 55,
        }}

      ></div>
      {hours.map((hour) => (
        <div key={hour} className="text-end pb-16 text-white">
          {hour.toString().padStart(2, "0")}:00
        </div>
      ))}
    </>
  );
}

export default HourRuler;
