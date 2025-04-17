import { useState } from "react";

const Employee = () => {
  const employeeArr = [
    { name: "john", age: 21 },
    { name: "bravo", age: 20 },
    { name: "david", age: 23 },
  ];

  const [employee, setEmployee] = useState(employeeArr);

  const handleClick = () => {
    setEmployee(
      employee.map((emp) => (emp.name === "john" ? { ...emp, age: 82 } : emp)),
    );
  };

  return (
    <div>
      <ul>
        {employee.map((emp, idx) => {
          return (
            <li key={idx}>
              Name: {emp.name}, Age: {emp.age}
            </li>
          );
        })}
      </ul>
      <button
        onClick={handleClick}
        className="px-2 py-1 bg-green-500 rounded-sm text-white"
      >
        click to update age
      </button>
    </div>
  );
};

export default Employee;
