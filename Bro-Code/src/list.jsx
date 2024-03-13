function List() {
  const list = ["Hello", "Hi", "Hey", "Whatsup"];
  list.sort(); // To sort array using alphabet
  const ListItems = list.map((list) => <li>{list}</li>);
  return <ul>{ListItems}</ul>;
}

export default List;
