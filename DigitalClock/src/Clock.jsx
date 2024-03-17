import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const TimeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(TimeInterval);
    };
  }, []);

  function FormatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const AmPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${PadZero(hours)}:${PadZero(minutes)}:${PadZero(seconds)}  ${AmPm}`;
  }

  function PadZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <>
      <div className="Clock-Container">
        <div className="Clock">
          <span>{FormatTime()}</span>
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
