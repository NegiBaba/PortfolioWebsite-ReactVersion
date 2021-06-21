import React from "react";

import NavBrand from "./Navigation/Nav-Brand";
import HamButton from "./Navigation/Ham-Button";
import NavItem from "./Navigation/Nav-item";

function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light flex-row">
      <NavBrand title="Portfolio" />
      <HamButton />
      <div className="collapse  navbar-collapse w-100" id="navbarNavAltMarkup">
        <ul className="navbar-nav mx-sm-auto">
          <NavItem title="Home" />
          <NavItem title="Projects" />
          <NavItem title="About Me" />
          <NavItem title="Contacts" />
        </ul>
      </div>
      <div className="d-flex w-50"></div>
    </nav>
  );
}
export default Header;
