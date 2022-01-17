import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import "../assets/NavBar.css";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="NavBar">
      <Navbar dark expand="md">
        <NavbarBrand href="/" className='main-title'>tindog</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Contacts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Download</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;