import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import logo from '../../../public/assets/logo.png';
import '../../styles/NavigationBar.css';
import SearchBox from '../SearchBox';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
    const navigate = useNavigate();

    // Retrieve token from localStorage to check if the user is authenticated
    const token = localStorage.getItem("token");
    const currentUser = token ? JSON.parse(atob(token.split('.')[1])) : null; // Decoding the JWT token to get user data

    const logout = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            localStorage.removeItem("token"); // Remove token from localStorage
            navigate("/"); // Redirect to home page or login page
        }
    };

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
                        <Nav.Link href="/cart" className="nav-link">Cart</Nav.Link>

                        {currentUser ? (
                            <>
                                <NavDropdown title={currentUser.username} id="user-dropdown" className="nav-dropdown">
                                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="/" onClick={logout}>Logout</NavDropdown.Item>
                                </NavDropdown>

                                {/* Admin-specific menu */}
                                {currentUser.role === "admin" && (
                                    <NavDropdown title="Admin" id="admin-dropdown" className="nav-dropdown">
                                        <NavDropdown.Item href="/admin/events">Events</NavDropdown.Item>
                                        <NavDropdown.Item href="/admin/orders">Orders</NavDropdown.Item>
                                        <NavDropdown.Item href="/admin/customers">Customers</NavDropdown.Item>
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


