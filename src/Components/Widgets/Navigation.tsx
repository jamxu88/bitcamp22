import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'; 
import '../../Static/Styles/Navigation.css'

function Navigation() {
    const navigate = useNavigate();

    const navDashboard = () => {
        return navigate("/dashboard");
    }

    const navGroups = () => {
        return navigate("/groups");
    }

    const navBalances = () => {
        return navigate("/balances");
    }

    const navPreferences = () => {
        return navigate("/preferences");
    }

    /*const navMore = () => {
        return navigate("/dashboard");
    }*/

    return (
        <Navbar bg="black">
            <Container>
                <Navbar.Brand>Muse</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={() => navDashboard()}>Dashboard</Nav.Link>
                    <Nav.Link onClick={() => navGroups()}>Groups</Nav.Link>
                    <Nav.Link onClick={() => navBalances()}>Balances</Nav.Link>
                    <Nav.Link onClick={() => navPreferences()}>Preferences</Nav.Link>
                    <NavDropdown title="More" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            <hr />
        </Navbar>
    )    
}

export default Navigation;