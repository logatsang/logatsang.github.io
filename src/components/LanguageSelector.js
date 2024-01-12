import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Globe2 } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

import i18n from "../i18n";

const LanguageSelector = () => {
    const { t } = useTranslation();

    const chooseLanguage = (eventKey, event) => {
        event.preventDefault();
        i18n.changeLanguage(eventKey);
        localStorage.setItem("lang", eventKey);
    };

    return (
        <NavDropdown title={<span> <Globe2 style={{verticalAlign: -2.5 + "px"}} /> {t("languageName")}</span>} onSelect={chooseLanguage} id="basic-nav-dropdown">
            <NavDropdown.Item eventKey="en">English</NavDropdown.Item>
            <NavDropdown.Item eventKey="jp">日本語</NavDropdown.Item>
        </NavDropdown>
    );
};

export default LanguageSelector;
