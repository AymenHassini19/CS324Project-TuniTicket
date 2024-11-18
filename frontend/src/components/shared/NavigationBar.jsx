import React from 'react';
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap';
import logo from '../../../public/assets/logo.png';

const NavigationBar = ({currentUser, logout}) => {
    return (
        <Navbar expand="lg" className="bg-gradient-to-r from-gray-600 to-gray-800 transition-all duration-300">
            <Container>
                <Navbar.Brand href="/" className="text-white font-bold text-xl flex items-center">
                    <img src={logo} alt="Logo" className="w-10 h-10 mr-2"/>
                    TuniTicket
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto flex items-center">
                        <Nav.Link href="/Categories"
                                  className="text-gray-300 mr-4 text-lg uppercase tracking-wider hover:text-gray-400 transition-colors duration-200">Categories</Nav.Link>
                        <Nav.Link href="/events"
                                  className="text-gray-300 mr-4 text-lg uppercase tracking-wider hover:text-gray-400 transition-colors duration-200">Events</Nav.Link>
                        <Nav.Link href="#customers"
                                  className="text-gray-300 mr-4 text-lg uppercase tracking-wider hover:text-gray-400 transition-colors duration-200">Cart</Nav.Link>

                        {currentUser ? (
                            <>
                                <NavDropdown title={currentUser.username} id="user-dropdown" className="text-gray-300">
                                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="/" onClick={logout}>Logout</NavDropdown.Item>
                                </NavDropdown>

                                {currentUser.isAdmin && (
                                    <NavDropdown title="Admin" id="admin-dropdown" className="text-gray-300">
                                        <NavDropdown.Item href="/admin/events">Events</NavDropdown.Item>
                                        <NavDropdown.Item href="/admin/orders">Orders</NavDropdown.Item>
                                        <NavDropdown.Item href="/admin/users">Users</NavDropdown.Item>
                                    </NavDropdown>
                                )}
                            </>
                        ) : (
                            <Button href="/login" variant="outline-light"
                                    className="text-white border-white hover:bg-white hover:text-gray-800 transition-colors duration-200">Log
                                In</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;