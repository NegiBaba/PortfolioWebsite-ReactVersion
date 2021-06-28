import React from "react";

function Heading(props) {
  return (
    <div className="col-md-6 profile-text">
      <h1>{props.name}</h1>
      <p>{props.title}</p>
    </div>
  );
}
export default Heading;
