import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { LinkContainer } from "react-router-bootstrap";

import { useTranslation } from "react-i18next";

import LanguageSelector from "./LanguageSelector";

function DefaultNavbar() {
    const { t } = useTranslation();

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="#home">{t("fullName")}</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <LinkContainer to="/cv">
                            <Nav.Link>{t("categoryCV")}</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>{t("categoryContact")}</Nav.Link>
                        </LinkContainer>
                        
                        
                    </Nav>
                    <Nav className="ms-auto">
                        <LanguageSelector />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default DefaultNavbar;
