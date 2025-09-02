import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Hero";
import ContactCards from "./components/Contact/ContactCards";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Skills from "./components/Skills";
import Projects from "./components/Project/Projects";
import Certificates from "./components/certificates/Certificates";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <div className="container my-5 html">
                <Intro />
                <ContactCards />
                <Experience />
                <Education />
                <Skills />
                <Projects />
                <Certificates />
            </div>
            <Footer />
        </div>
    );
}

export default App;
