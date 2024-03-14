function Button1() {
  const HandelClick = () => {
    console.log("NO!!!");
  };

  let count = 0;

  const handelClick1 = (name) => {
    count++;
    if (count <= 3) {
      console.log(`${name} Clicked me ${count} times`);
    } else {
      console.log(`${name}, Stop it!`);
    }
  };

  const handelClick2 = (e) => {
    console.log(e);
    e.target.innerText = "Please Don't";
  };

  return (
    <>
      <button className="BUTTON" onClick={HandelClick}>
        Click Me
      </button>
      <button
        className="BUTTON"
        onClick={() => {
          handelClick1("Sam");
        }}>
        Don't Click Me
      </button>
      <button
        className="BUTTON"
        onDoubleClick={(e) => {
          handelClick2(e);
        }}>
        Just Click Me !
      </button>
    </>
  );
}

export default Button1;
