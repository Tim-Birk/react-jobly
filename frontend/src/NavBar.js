import React, { useState } from 'react';
import './NavBar.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <Container>
          <NavbarBrand href='/'>Jobly</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink href='/companies'>Companies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/jobs'>Jobs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/profile'>Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/logout'>Logout</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/login'>Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/signup'>Sign Up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
