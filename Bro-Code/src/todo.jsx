import react, { useState } from "react";

function Todo() {
  const [works, setWorks] = useState(["Hello", "Hey", "Hi"]);

  function HandelAddWork() {
    let newwork = document.querySelector("#foodInput").value;
    document.querySelector("#foodInput").value = "";

    setWorks((w) => [...w, newwork]);
  }

  function HandelRemoveWork(index) {
    setWorks(works.filter((_, i) => i !== index));
  }
  return (
    <>
      <h2>The List Items are: </h2>
      <ul>
        {works.map((work, index) => (
          <li
            title="Remove it"
            className="LISTPOINT"
            key={index}
            onClick={() => HandelRemoveWork(index)}>
            {work}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={HandelAddWork}>Add Work</button>
    </>
  );
}

export default Todo;
