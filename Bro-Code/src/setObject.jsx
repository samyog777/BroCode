import react, { useState } from "react";

function SetObject() {
  const [car, setCar] = useState({ name: "Rolls", class: "S", year: 2023 });
  function Loadnamehandel(event) {
    setCar((c) => ({ ...c, name: event.target.value }));
  }
  function Loadclasshandel(event) {
    setCar((c) => ({ ...c, class: event.target.value }));
  }
  function Loadnumberhandel(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  return (
    <>
      <h1>
        The car you select is: {car.name} class:{car.class} of {car.year}
      </h1>
      <input type="text" value={car.name} onChange={Loadnamehandel} /> <br />
      <input type="text" value={car.class} onChange={Loadclasshandel} /> <br />
      <input type="number" value={car.year} onChange={Loadnumberhandel} />
    </>
  );
}

export default SetObject;
