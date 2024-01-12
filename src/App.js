import React from "react";
import { useTranslation } from "react-i18next";

import "./App.css";

import DefaultNavbar from "./components/DefaultNavbar.js";

function App() {
    const { t } = useTranslation();

    return (
        <div className="App" data-bs-theme="dark">
            <DefaultNavbar />
            <div className="p-5">
                <h1>{t("greeting")}</h1>
            </div>
        </div>
    );
}

export default App;
