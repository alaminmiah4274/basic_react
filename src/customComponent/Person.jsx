import { useState } from "react";

const Person = () => {
  // const defaultPerson = {
  //   firstName: "amin",
  //   lastName: "miah",
  //   email: "aminmiah@gmail.com",
  //   address: {
  //     area: "mirpur",
  //     city: "dhaka",
  //   },
  // };
  // const [person, setPerson] = useState(defaultPerson);

  const [person, setPerson] = useState({
    firstName: "amin",
    lastName: "miah",
    email: "aminmiah@gmail.com",
    address: {
      area: "mirpur",
      city: "dhaka",
    },
  });

  const handlePerson = () => {
    const newPerson = {
      ...person,
      firstName: "will",
      lastName: "jacks",
      address: {
        ...person.address,
        area: "dhanmondi",
        city: "barishal",
      },
    };

    setPerson(newPerson);
  };

  return (
    <div className="m-5">
      <h1>
        {person.firstName} {person.lastName} {person.email}
      </h1>
      <p>
        {person.address.area} {person.address.city}
      </p>
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
