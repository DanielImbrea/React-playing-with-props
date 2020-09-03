import React from "react";

function Skills(props) {
  return (
    <div>
      {props.name.map(item => {
        return (
          <div>
            <h3>{props.description}</h3>
            <h2>{item.skill}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
