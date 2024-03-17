import React, { useState, useEffect } from "react";

function UseEffect2() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", HandelResize);
    console.log("Event Listener Added");

    return () => {
      window.removeEventListener("resize", HandelResize);
      console.log("Event listener Removed");
    };
  }, []);

  useEffect(() => {
    document.title = `${height} and ${width}`;
  }, [width, height]);

  function HandelResize() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  return (
    <>
      <p>Window Height: {height}</p>
      <p>Window Width: {width}</p>
    </>
  );
}

export default UseEffect2;
