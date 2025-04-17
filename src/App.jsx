// import "./App.css";
// import FirstComponent from "./FirstComponent";
// import List from "./customComponent/List";
// import PlayWithButton from "./customComponent/PlayWithButton";
// import Person from "./customComponent/Person";
// import Skill from "./customComponent/Skill";
// import Employee from "./customComponent/Employee";
import { useState } from "react";
import Navbar from "/src/customComponent/Navbar";
import Cart from "/src/customComponent/Cart";
import Effect from "/src/customComponent/Effect";

function App() {
  // const fruits = ["Apple", "Banana", "orange", "lemon", "mango", "Cherry"];
  // const cities = ["Dhaka", "chittagong", "sylhet", "Rangpur", "barishal"];
  const [cartItems, setCartItems] = useState([
    "product 1",
    "product 2",
    "product 3",
    "product 4",
    "product 5",
  ]);

  const handleProductRemove = (item) => {
    setCartItems(cartItems.filter((product) => product != item));
  };

  return (
    <div className="m-5">
      {/*<FirstComponent />
      <List items={fruits} heading="Fruits" />
      <List items={cities} heading="Cities" />
      <PlayWithButton />
      <Person />
      <Skill />
      <Employee />*/}
      {/*<Navbar cartItemCount={cartItems.length} />
      <Cart
        cartItems={cartItems}
        onClose={() => setCartItems([])}
        onRemove={handleProductRemove}
      />*/}

      <Effect />
    </div>
  );
}

export default App;
