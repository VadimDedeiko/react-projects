function PetInfo(props) {
  const { animal, age, hasPet } = props;
/*  const text = hasPet
    ? `My ${animal} is ${age} years old`
    : "I don't have a pet"*/
 /* return (
    <h1>
      {text}
    </h1>// TODO СВОЙСТВА ВНУТРИ КОМПОНЕНТОВ ИЗМЕНЯТЬ ЗАПРЕЩЕНО!!!!
  );*/
  return hasPet
    ? <h1>My {animal} is {age} years old</h1>
    : <h1>"I don't have a pet"</h1>
}

export default PetInfo;
