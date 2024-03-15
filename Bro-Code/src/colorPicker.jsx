import react, { useState } from "react";

function ColorPicker() {
  function ChangeChooseColor(event) {
    setColor(event.target.value);
  }
  const [color, setColor] = useState("white");
  return (
    <>
      <div className="Color-picker">
        <h1 className="H1">Color Picker</h1>
        <div className="Display-Color" style={{ backgroundColor: color }}>
          <p>Selected Color: </p>
        </div>
        <label className="LABEL">Select a Color: </label>
        <input type="color" value={color} onChange={ChangeChooseColor} />
      </div>
    </>
  );
}

export default ColorPicker;
