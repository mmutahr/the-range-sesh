import "materialize-css/dist/css/materialize.min.css";
import React from "react";

const Drill = ({ name, description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Drill;
