import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();
function ComponentA() {
  const [user, setUser] = useState("Sam");
  //   setUser("Sam");

  return (
    <div className="USESTATE">
      <h1>Hello {user}</h1>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
