import React, { useState, useRef, useEffect } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalTime = useRef(0);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalTime.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 30);
    }

    return () => {
      clearInterval(intervalTime.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);

    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let second = Math.floor((elapsedTime / 1000) % 60);
    let millisecond = Math.floor((elapsedTime % 1000) / 10);

    minutes = String(minutes).padStart(2, "0");
    second = String(second).padStart(2, "0");
    millisecond = String(millisecond).padStart(2, "0");
    return `${minutes}: ${second}: ${millisecond}`;
  }

  return (
    <>
      <div className="Main-div">
        <div className="Time">{formatTime()}</div>
        <div className="buttons">
          <button className="start" onClick={start}>
            Start
          </button>
          <button className="stop" onClick={stop}>
            Stop
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default StopWatch;
