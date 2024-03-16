import react, { useState } from "react";

function UpdaterObject() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function HandelAddCar() {
    const newCar = { year: carYear, model: carModel, make: carMake };
    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }
  function HandelRemoveCar(index) {
    setCars((c) => c.filter((element,i) => i !== index));
  }

  function HandelYearChange(event) {
    setCarYear(event.target.value);
  }
  function HandelModelChange(event) {
    setCarModel(event.target.value);
  }
  function HandelMakeChange(event) {
    setCarMake(event.target.value);
  }

  return (
    <>
      <h1>Object: </h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => HandelRemoveCar(index)}>
            {car.year} {car.model} {car.make}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={HandelYearChange} /> <br />
      <input
        type="text"
        value={carModel}
        onChange={HandelModelChange}
        placeholder="Model"
      />{" "}
      <br />
      <input
        type="text"
        value={carMake}
        onChange={HandelMakeChange}
        placeholder="Make"
      />{" "}
      <br />
      <button onClick={HandelAddCar}>Submit</button>
    </>
  );
}

export default UpdaterObject;
