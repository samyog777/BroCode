function ListObject() {
  const fruits = [
    { id: 1, name: "Apple", calories: 176 },
    { id: 2, name: "Mango", calories: 38 },
    { id: 3, name: "Guava", calories: 128 },
    { id: 4, name: "Grapes", calories: 79 },
    { id: 5, name: "Random", calories: 54 },
  ];

  //   fruits.sort((a, b) => a.name.localeCompare(b.name));
  //   fruits.sort((a, b) => b.name.localeCompare(a.name));
  //   fruits.sort((a, b) => a.calories - b.calories);
  //   fruits.sort((a, b) => b.calories - a.calories);

  //   const lowCaloriesFruits = fruits.filter((fruit) => fruit.calories < 100);
  const HighCaloriesFruits = fruits.filter((fruit) => fruit.calories >= 100);

  const HighList = HighCaloriesFruits.map((HighCaloriesFruit) => (
    <li key={HighCaloriesFruit.id}>
      {HighCaloriesFruit.name}: <b>{HighCaloriesFruit.calories}</b>
    </li>
  ));

  const ListFruits = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; <b>{fruit.calories}</b>
    </li>
  ));
  return (
    <>
      <ul>{ListFruits}</ul>
      <ol>{HighList}</ol>
    </>
  );
}

export default ListObject;
