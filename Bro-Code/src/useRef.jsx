import React, { useState, useEffect, useRef } from "react";

function UseRef() {
  //   const [count, setCount] = useState(0);
  const ref = useRef(0);

  useEffect(() => {
    console.log("Rerenders");
  });

  //   function Update() {
  //     setCount((c) => c + 1);
  //     console.log(count);
  //   }

  function Update() {
    ref.current++;
    console.log(ref.current);
  }

  return (
    <>
      <button onClick={Update}>Click Here</button>
    </>
  );
}

export default UseRef;
