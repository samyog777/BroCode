import React, { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");

  useEffect(() => {
    document.title = `count: ${count} ${color}`;

    return () => {
      // CleanUp Code
    };
  }, [count, color]);

  function AddCount() {
    setCount((c) => c + 1);
  }

  function SubCount() {
    setCount((c) => c - 1);
  }

  function ChangeColor() {
    setColor((c) => (c === "black" ? "red" : "black"));
  }

  return (
    <>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={AddCount}>Add</button>
      <button onClick={SubCount}>Sub</button>
      <button onClick={ChangeColor}>Change Color</button>
    </>
  );
}

export default UseEffect;
