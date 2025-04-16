import { useState } from "react";

const Person = () => {
  const [person, setPerson] = useState("");

  const handlePerson = () => {
    setPerson("john");
    console.log(person);
  };

  return (
    <div className="m-5">
      <button
        onClick={handlePerson}
        className="px-3 py-2 bg-cyan-500 text-white rounded-sm"
      >
        Click Me
      </button>
    </div>
  );
};

export default Person;
