import Card from "./Card";
import Button from "./button/button.jsx";
import Student from "./student/student.jsx";

function App() {
  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Button />
      <hr />
      <hr />
      <hr />
      <Student name="Samyog" age={18} isStudent={true} />
      <Student name="Sam" age={5} isStudent={false} />
      <Student name="Flask" age={20} isStudent={false} />
      <Student />
      <Student name="Flutter" age={12} isStudent={true} />
      <Student name="Django" age="22" isStudent={true} />{" "}
      {/* Error Because Of The String insted of number in age */}
    </>
  );
}

export default App;
