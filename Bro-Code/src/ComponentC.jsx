import React, { useContext } from "react";
import { UserContext } from "./ComponentA";
import ComponentD from "./ComponentD";

function ComponentC() {
  const user = useContext(UserContext);
  return (
    <>
      <h1 className="USESTATE">Hello {user}</h1>
      <ComponentD />
    </>
  );
}

export default ComponentC;
