import { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

export default function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
console.log("hello");
  return (
    <div >
      <Navbar dark fixed="top" style={{display:"flex", backgroundColor:"#2F297D", paddingLeft:40, paddingRight:40}}   expand="md">
        <NavbarBrand tag={Link} style={{color:"white"}} to="/"><strong>Pixel Perfect</strong></NavbarBrand>
        <NavbarToggler dark={true} onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar >
          <NavItem>
            <NavLink tag={Link} style={{color:"white"}} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={Link} style={{color:"white"}} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={Link} style={{color:"white"}} to="/gallery">Gallery</NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={Link} style={{color:"white"}} to="/users">Contact</NavLink>
            </NavItem>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}
