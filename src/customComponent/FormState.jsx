import { useState } from "react";

const FormState = () => {
  const personObj = { name: "", age: "" };
  const [person, setPerson] = useState(personObj);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(person);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="text-gray-500 font-bold block mb-2" htmlFor="name">
            Name
          </label>
          <input
            value={person.name}
            onChange={(event) =>
              setPerson({ ...person, name: event.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name=""
            id="name"
          />
        </div>

        <div className="mb-3">
          <label className="text-gray-500 font-bold block mb-2" htmlFor="age">
            Age
          </label>
          <input
            value={person.age}
            onChange={(event) =>
              setPerson({ ...person, age: parseInt(event.target.value) })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name=""
            id="age"
          />
        </div>

        <button className="px-2 py-1 bg-blue-500 text-white rounded-sm">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormState;
