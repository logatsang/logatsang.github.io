import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useTranslation } from "react-i18next";

import LanguageSelector from "./LanguageSelector";

function DefaultNavbar() {
    const { t } = useTranslation();

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">{t("fullName")}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>{t("categoryCV")}</Nav.Link>
                        <Nav.Link>{t("categoryContact")}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Text>
                    <LanguageSelector className="space-between me-auto"/>
                </Navbar.Text>
            </Container>
        </Navbar>
    );
}

export default DefaultNavbar;
