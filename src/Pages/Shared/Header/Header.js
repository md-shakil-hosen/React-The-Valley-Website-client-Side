import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth()

  return (
    <div className="mb-2 fixed">
      <Navbar expand="lg  bg-info">
        <Container>
          {/* Navbar  */}
          <Navbar.Brand className='nav-brand' href="/">
            THE VALLEY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 text-dark fw-bold justify-content-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutUs">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/tourPackage">
                Our Package
              </Nav.Link>
              <Nav.Link as={Link} to="/articles">
                Articles & News
              </Nav.Link>
              {
                user?.email && <Nav.Link as={Link} to="/order">
                  My Order
                </Nav.Link>
              }
              {
                user?.email && <Nav.Link as={Link} to="/createNewEvent">
                  Create New Event
                </Nav.Link>
              }
              {
                (user?.email) && <Nav.Link as={Link} to="/management">
                  Managment
                </Nav.Link>
              }
            </Nav>

            {/* Login Section  */}
            <div className="">
            </div>

            {
              (user?.email) ? <Link to="/login">
                <button className='log-out' onClick={logOut}>Log out</button>
              </Link> : <Link to="/login">
                <button className='login'>Login</button>
              </Link>
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
