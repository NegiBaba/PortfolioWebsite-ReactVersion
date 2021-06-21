import React from "react";

function NavBrand(props) {
  return (
    <a href className="navbar-brand d-flex w-50 mr-0">
      {props.title}
    </a>
  );
}
export default NavBrand;
