import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import logo from '../../../public/assets/logo.png';
import '../../styles/NavigationBar.css';
import SearchBox from '../SearchBox';

const NavigationBar = ({ currentUser, logout }) => {
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand href="/" className="navbar-brand">
                    <img src={logo} alt="Logo" className="navbar-logo" />
                    TuniTicket
                </Navbar.Brand>
                <SearchBox />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        
                        <Nav.Link href="/Categories" className="nav-link">Categories</Nav.Link>
                        <Nav.Link href="/events" className="nav-link">Events</Nav.Link>
                        <Nav.Link href="#customers" className="nav-link">Cart</Nav.Link>

                        {currentUser ? (
                            <>
                                <NavDropdown title={currentUser.username} id="user-dropdown" className="nav-dropdown">
                                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="/" onClick={logout}>Logout</NavDropdown.Item>
                                </NavDropdown>

                                {currentUser.isAdmin && (
                                    <NavDropdown title="Admin" id="admin-dropdown" className="nav-dropdown">
                                        <NavDropdown.Item href="/admin/events">Events</NavDropdown.Item>
                                        <NavDropdown.Item href="/admin/orders">Orders</NavDropdown.Item>
                                        <NavDropdown.Item href="/admin/users">Users</NavDropdown.Item>
                                    </NavDropdown>
                                )}
                            </>
                        ) : (
                            <Button
                                href="/login"
                                variant="outline-light"
                                className="login-button"
                            >
                                Log In
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;


