import { useEffect, useState } from "react";

let count = 0;

const Effect = () => {
  const [users, setUsers] = useState([]);
  const [depA, setDepA] = useState(0);
  const [depB, setDepB] = useState(0);

  useEffect(() => {
    console.log("effect occurred");
    setUsers(["john"]);
  }, [depA, depB]);

  return (
    <div>
      <h1>User List:</h1>
      <button
        onClick={() => setDepA(Math.random())}
        className="px-2 py-1 bg-green-500 rounded-sm text-white hover:bg-green-400 mr-3"
      >
        Click A
      </button>

      <button
        onClick={() => setDepB(Math.random())}
        className="px-2 py-1 bg-green-500 rounded-sm text-white hover:bg-green-400"
      >
        Click B
      </button>
    </div>
  );
};

export default Effect;

/*

""" with empty array """ 
useEffect(() => {
  console.log('Runs ONLY on mount (first render)');
}, []);


""" with dependency value in empty array """ 
useEffect(() => {
  console.log('Runs on mount AND whenever `someProp` changes');
}, [someProp]);


""" without empty array """
useEffect(() => {
  console.log('Runs after EVERY render');
});


*/
