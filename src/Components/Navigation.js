import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav, .nav-link {
        color: #adb1b8;
        text-decoration: none;
        &:hover {
            color: white;
        }
    }
`

export default function Navigation() {
    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand><Link to="/">Versta dev</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link><Link to="/offers">Заказы</Link></Nav.Link>
                                <Nav.Link><Link to="/create-offer">Создать заказ</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Button onClick={() => localStorage.clear()}>Log out</Button>
                    </Container>
                </Navbar>
            </Styles>
        </>
    )
}