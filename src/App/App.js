import React from "react";
// LAYOUT
import Header from "../layout/header/Header.layout";

// PAGES
import AboutSection from "../pages/1-about/AboutSection.page";
import Features from "../pages/2-features/Features.page";
const App = () => {
    return (
        <div className="App">
            <Header />
            <AboutSection />
            <Features />
        </div>
    );
};

export default App;
