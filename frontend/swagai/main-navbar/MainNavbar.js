import React, { Component } from 'react';
import './main-navbar.css';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

//https://react-bootstrap.github.io/components/navbar/
class MainNavbar extends Component {
  render() {
    return (
      <div className='navbar-div'>
        <Navbar bg='white' expand='xl' style={{ margin: 0, padding: 0 }}>
          <Navbar.Brand>
            <Link bsClass='home-button' to='/'>
              <h1 style={{ float: 'left' }} className='title'>
                swagai
              </h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='hamburger-menu'>
            <Nav className='dropdown-menus'>
              {/* Not sure what to put in these dropdown menus, here are placeholders I addedd */}
              <NavDropdown
                title='Topics'
                className='first-dropdown-btn'
                id='basic-nav-dropdown'
              >
                <NavDropdown.Item>
                  <Link className='dropdown-link' to='/math'>
                    Math
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>History</NavDropdown.Item>
                <NavDropdown.Item>Science</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title='Help'
                className='first-dropdown-btn'
                id='basic-nav-dropdown'
              >
                <NavDropdown.Item>
                  {' '}
                  <Link className='dropdown-link' to='/sign-in'>
                    Get Started
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>FAQ</NavDropdown.Item>
                <NavDropdown.Item>Contact Us</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title='About'
                className='first-dropdown-btn'
                id='basic-nav-dropdown'
              >
                <NavDropdown.Item>Who Are We?</NavDropdown.Item>
                <NavDropdown.Item>Press</NavDropdown.Item>
                <NavDropdown.Item>Careers</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className='nav-buttons' id='non-dropdown-buttons'>
              <Nav>
                <Link id='nav-button' className='signin-button' to='/sign-in'>
                  Sign In
                </Link>
              </Nav>
              <Nav>
                <Link
                  id='nav-button'
                  className='topic-selection-button'
                  to='/topic-selection'
                >
                  Topic Selection
                </Link>
              </Nav>
              <Nav>
                <Link id='nav-button' className='upload-button' to='/upload'>
                  Upload
                </Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <span id='gradient-line' className='block-example '></span>
      </div>
    );
  }
}

export default MainNavbar;
