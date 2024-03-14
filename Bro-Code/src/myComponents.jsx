import react, { useState } from "react";

function MyComponents() {
  const [Name, setName] = useState("Guest");
  const [Age, setAge] = useState(0);
  const [IsEmployee, setisEmployee] = useState(false);

  const handelClick = () => {
    setName("Samyog");
  };

  const increaseAge = () => {
    setAge(Age + 1);
  };
  const decreaseAge = () => {
    setAge(Age - 1);
  };
  const reset = () => {
    setAge(0);
  };
  const isEmployee = () => {
    setisEmployee(!IsEmployee);
  };
  return (
    <>
      <h1>Name: {Name}</h1>
      <button className="BUTTONN" onClick={handelClick}>
        Submit
      </button>

      <h1>Age: {Age}</h1>
      <button className="BUTTONN" onClick={decreaseAge}>
        Decrease
      </button>
      <button className="BUTTONN" onClick={reset}>
        Reset
      </button>
      <button className="BUTTONN" onClick={increaseAge}>
        Increase
      </button>
      <h1>Is Employee: {IsEmployee ? "Yes" : "No"}</h1>
      <button className="BUTTONN" onClick={isEmployee}>
        Change Status
      </button>
    </>
  );
}

export default MyComponents;
