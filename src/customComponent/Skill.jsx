import { useState } from "react";

const Skill = () => {
  const [skills, setSkills] = useState([
    "python",
    "django",
    "javascript",
    "react",
  ]);

  const handleSkills = () => {
    // add
    const newSkills = [...skills, "MySQL", "PostgreSQL"];
    // setSkills(newSkills);

    // remove
    const removeSkills = skills.filter((item) => item != "react");
    // setSkills([skills.filter((item) => item != "react")]);

    // update
    const updateSkills = skills.map((item) =>
      item === "django" ? (item = "MySQL") : item,
    );
    // setSkills([
    //   skills.map((item) => (item === "python" ? (item = "MSQL") : item)),
    // ]);
  };

  return (
    <>
      <ul className="list-disc ml-8">
        {skills.map((skill, index) => {
          return (
            <li className="" key={index}>
              {skill}
            </li>
          );
        })}
      </ul>
      <button
        onClick={handleSkills}
        className="py-2 px-2 text-white bg-blue-500 rounded-sm"
      >
        Update Skill
      </button>
    </>
  );
};

export default Skill;
