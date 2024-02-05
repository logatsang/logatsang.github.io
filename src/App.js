import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { CVPage } from "./pages/CVPage";
import { Layout } from "./Layout";

import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Layout /> }>
                    <Route index element={<LandingPage />} />
                    <Route path="cv" element={ <CVPage /> } />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
