import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentD() {
  const user = useContext(UserContext);
  return (
    <>
      <h1 className="USESTATE">Hello {user}</h1>
    </>
  );
}

export default ComponentD;
