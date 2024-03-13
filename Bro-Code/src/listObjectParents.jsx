function ObjectList(props) {
  const Catagory = props.category;
  const Itemes = props.items;

  const Listitems = Itemes.map((Item) => (
    <li className="ItemsCalory">
      {Item.name} : <b>{Item.calories}</b>
    </li>
  ));
  return (
    <>
      <h3 className="HeadingThree">{Catagory}</h3> <ul>{Listitems}</ul>
    </>
  );
}

export default ObjectList;
