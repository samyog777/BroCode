import reactLogo from "./assets/aq.jpg";

export default function Card() {
  return (
    <div className="Card">
      <img className="Card-img" src={reactLogo} alt="" />
      <h2 className="Card-title">Samyog</h2>
      <p className="Card-text">
        My name is Samyog and i am student at Herald College !
      </p>
    </div>
  );
}
