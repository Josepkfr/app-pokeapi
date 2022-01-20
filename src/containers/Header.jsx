import React from "react";
import { Nav, NavItem } from "reactstrap";

const Header = () => {
  return (
    <Nav justified>
      <NavItem>
        <img src="/assets/img/logo.png" alt="" />
      </NavItem>
    </Nav>
  );
};

export default Header;
