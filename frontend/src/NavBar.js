import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import './NavBar.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
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
              <Link to='/companies'>
                <NavItem>
                  <NavLink>Companies</NavLink>
                </NavItem>
              </Link>
              <Link to='/jobs'>
                <NavItem>
                  <NavLink>Jobs</NavLink>
                </NavItem>
              </Link>
              <Link to='/profile'>
                <NavItem>
                  <NavLink>Profile</NavLink>
                </NavItem>
              </Link>
              <Link to='/logout'>
                <NavItem>
                  <NavLink>Logout</NavLink>
                </NavItem>
              </Link>
              <Link to='/login'>
                <NavItem>
                  <NavLink>Login</NavLink>
                </NavItem>
              </Link>
              <Link to='/signup'>
                <NavItem>
                  <NavLink>Sign Up</NavLink>
                </NavItem>
              </Link>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
