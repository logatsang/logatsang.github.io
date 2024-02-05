import React from "react";

import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useTranslation } from "react-i18next";

export const LandingPage = () => {
    const { t } = useTranslation();

    return (
        <div className="p-5">
            <h1>{t("greeting")}</h1>
        </div>
    );
};



