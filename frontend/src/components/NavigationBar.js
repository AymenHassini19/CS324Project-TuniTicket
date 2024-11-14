import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import '../Navbar.css';


const NavigationBar = ({ currentUser,logout}) => {

  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/" className="navbar-logo">
          <img src="/logo.png" alt="Logo" className="logo" />
          TuniTicket
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/Categories" className="nav-link">Categories</Nav.Link>
            <Nav.Link href="/events" className="nav-link">Events</Nav.Link>
            <Nav.Link href="#customers" className="nav-link">Cart</Nav.Link>

            {currentUser ? (
              <>
                {/* User is signed in */}
                <NavDropdown title={currentUser.username} id="user-dropdown">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/" onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
                
                {/* Admin dropdown if the user is an admin */}
                {currentUser.isAdmin && (
                  <NavDropdown title="Admin" id="admin-dropdown">
                    <NavDropdown.Item href="/admin/events">Events</NavDropdown.Item>
                    <NavDropdown.Item href="/admin/orders">Orders</NavDropdown.Item>
                    <NavDropdown.Item href="/admin/users">Users</NavDropdown.Item>
                  </NavDropdown>
                )}
              </>
            ) : (
              // User is not signed in
              <Button href="/login" variant="outline-light">Log In</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default NavigationBar;

