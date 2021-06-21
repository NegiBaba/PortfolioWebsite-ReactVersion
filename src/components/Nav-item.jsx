import React from "react";

function NavItem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#carousel-with-desc">
        {props.title}
      </a>
    </li>
  );
}

export default NavItem;
