// import "./App.css";
import FirstComponent from "./FirstComponent";
import List from "./customComponent/List";
import PlayWithButton from "./customComponent/PlayWithButton";
import Person from "./customComponent/Person";
import Skill from "./customComponent/Skill";

function App() {
  const fruits = ["Apple", "Banana", "orange", "lemon", "mango", "Cherry"];
  const cities = ["Dhaka", "chittagong", "sylhet", "Rangpur", "barishal"];

  return (
    <>
      <FirstComponent />
      <List items={fruits} heading="Fruits" />
      <List items={cities} heading="Cities" />

      <PlayWithButton />

      <Person />
      <Skill />
    </>
  );
}

export default App;
