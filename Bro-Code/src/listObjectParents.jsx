import PropTypes from "prop-types";

function ObjectList(props) {
  const Catagory = props.category;
  const Itemes = props.items;

  const Listitems = Itemes.map((Item) => (
    <li key={Item.id}>
      {Item.name} : <b>{Item.calories}</b>
    </li>
  ));
  return (
    <>
      <h3 className="List-Catagory">{Catagory}</h3>
      <ul className="List-Items">{Listitems}</ul>
    </>
  );
}

ObjectList.propTypes = {
  Catagory: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      Calories: PropTypes.number,
    })
  ),
};

ObjectList.defaultProps = {
  Catagory: "Catagory",
  items: [],
};

export default ObjectList;
