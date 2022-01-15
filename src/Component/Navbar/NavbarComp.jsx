import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Dropdown } from 'react-bootstrap'
import Sidebar from './Sidebar'

function NavbarComp() {
    return (
        <div>
            <Navbar expand="lg" className="mt-3">
                <Container>
                    <Navbar.Brand href="#home" className="me-5 fs-4"><b>nufruit</b></Navbar.Brand>
                    <Nav className="ms-lg-4 me-md-auto">
                        <Sidebar />
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComp
