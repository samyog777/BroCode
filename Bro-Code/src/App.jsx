import Card from "./Card";
import Button from "./button/button.jsx";
import Student from "./student/student.jsx";
import Login from "./login/login.jsx";
import List from "./list.jsx";
import ListObject from "./listObject.jsx";
import ObjectList from "./listObjectParents.jsx";
import Button1 from "./button.jsx";
import ProfilePic from "./ProfilePic.jsx";
import MyComponents from "./myComponents.jsx";
import RealTimeUpdate from "./realTImeUpdate.jsx";
import ColorPicker from "./colorPicker.jsx";
import SetObject from "./setObject.jsx";

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 176 },
    { id: 2, name: "Mango", calories: 38 },
    { id: 3, name: "Guava", calories: 128 },
    { id: 4, name: "Grapes", calories: 79 },
    { id: 5, name: "Random", calories: 54 },
  ];
  const Vegatible = [
    { id: 6, name: "Potatp", calories: 176 },
    { id: 7, name: "Carrot", calories: 38 },
    { id: 8, name: "Cucumber", calories: 128 },
    { id: 9, name: "Kopi", calories: 79 },
    { id: 10, name: "Meat", calories: 54 },
  ];
  return (
    <>
      <Login isLogin={true} userName="Sam" />
      <Login isLogin={true} />
      <Login />
      <hr />
      <Button1 />
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
      {fruits.length > 0 ? (
        <ObjectList items={fruits} category="Fruits" />
      ) : null}
      {Vegatible.length > 0 ? (
        <ObjectList items={Vegatible} category="Vegatible" />
      ) : null}
      <hr />
      <Student name="Samyog" age={18} isStudent={true} />
      <Student name="Sam" age={5} isStudent={false} />
      <Student name="Flask" age={20} isStudent={false} />
      <Student />
      <Student name="Flutter" age={12} isStudent={true} />
      <Student name="Django" age={34} isStudent={true} />{" "}
      {/* Error Because Of The String insted of number in age */}
      <List />
      <ListObject />
      <ProfilePic />
      <MyComponents />
      <hr />
      <hr />
      <RealTimeUpdate />
      <ColorPicker />
      <SetObject />
    </>
  );
}

export default App;
