import React from "react";
import Skills from "./Skills";
function Skill() {
  const workExperience = [
    {
      startYear: 2018,
      endYear: 2019,
      description: "First Internship",
      name: [{ skill: "JS" }],
    },
    {
      startYear: 2019,
      endYear: 2020,
      description: "First Internship",
      name: [{ skill: "JS" }],
    },
    {
      startYear: 2019,
      endYear: 2020,
      description: "First Internship",
      name: [{ skill: "Css" }],
    },
  ];
  return (
    <div>
      {workExperience.map(
        ({ startYear, endYear, name, description }, key) => {
          return (
            <Skills
              key={key}
              startYear={startYear}
              endYear={endYear}
              name={name}
              description={description}
            />
          );
        },
      )}
    </div>
  );
}

export default Skill;
