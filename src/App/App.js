import React, { createRef } from "react";
// LAYOUT
import Header from "../layout/header/Header.layout";
import Footer from "../layout/footer/Footer.layout";

// PAGES
import AboutSection from "../pages/1-about/AboutSection.page";
import Features from "../pages/2-features/Features.page";
import Tours from "../pages/3-tours/Tours.page";
import Stories from "../pages/4-stories/Stories.page";
import Book from "../pages/5-book/Book.page";

const aboutSectionRef = createRef();

const App = () => {
    return (
        <div className="App">
            <Header aboutSectionRef={aboutSectionRef} />
            <main>
                <AboutSection ref={aboutSectionRef} />
                <Features />
                <Tours />
                <Stories />
                <Book />
            </main>
            <Footer />
        </div>
    );
};

export default App;
