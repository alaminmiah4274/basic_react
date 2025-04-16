import { useState } from "react";

const List = ({ items = [], heading }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  /* let selectedIndex = -1;
  const handleItemPrint = (index) => {
    selectedIndex = index;
    console.log(selectedIndex);
  }; 
    
  onClick={() => handleItemPrint(index)}
  */

  return (
    <>
      <h1 className="text-3xl mt-10">{heading}</h1>
      <ul className="list-disc text-xl pl-10">
        {items.map((fruit, index) => {
          return (
            <li
              className={
                selectedIndex === index ? "bg-orange-400 m-3 text-xl p-2" : ""
              }
              onClick={() => setSelectedIndex(index)}
              key={index}
            >
              {fruit}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
