import React from "react";
import { Outlet } from "react-router-dom";
import DefaultNavbar from "./components/DefaultNavbar.js";

export const Layout = () => {
    return (
        <div className="App" data-bs-theme="dark">
            <DefaultNavbar />
            <Outlet />
        </div>
    );
};
