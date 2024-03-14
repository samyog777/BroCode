import react, { useState } from "react";

function RealTimeUpdate() {
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Text, setText] = useState("");
  const [Option, setOption] = useState("");
  const [Shipping, setShipping] = useState("Delivery");

  function Changing(event) {
    setName(event.target.value);
  }
  function ChangeNumber(event) {
    setNumber(event.target.value);
  }
  function UpdateText(event) {
    setText(event.target.value);
  }
  function Options(event) {
    setOption(event.target.value);
  }
  function Shop(event) {
    setShipping(event.target.value);
  }
  function Eventt(e) {
    console.log(e);
  }
  return (
    <>
      <input value={Name} type="text" onChange={Changing} />
      <p>Name: {Name}</p>
      <hr />
      <input value={Number} type="number" onChange={ChangeNumber} />
      <p>Number: {Number}</p>
      <hr />
      <textarea
        cols="30"
        rows="10"
        value={Text}
        onChange={UpdateText}
        placeholder="Enter a Message"
      />
      <p>Comment: {Text}</p>
      <hr />
      <select value={Option} onChange={Options}>
        <option value="">Select an Method</option>
        <option value="Creditcard">Credit Card</option>
        <option value="MasterCard">Master Card</option>
        <option value="Devitcard">Devit Card</option>
      </select>
      <p>Payment method: {Option}</p>
      <hr />
      <hr />
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={Shipping === "Delivery"}
          onChange={Shop}
        />
        Delivery
        <br />
      </label>
      <label>
        <input
          type="radio"
          value="Pick up"
          checked={Shipping === "Pick up"}
          onChange={Shop}
        />
        Pick Up
      </label>
      <p>Shipping: {Shipping}</p>
      <h1 onClick={Eventt}>Hello</h1>
    </>
  );
}

export default RealTimeUpdate;
