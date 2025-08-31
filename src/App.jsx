import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience/Experience.jsx";
import Education from "./components/Education/Education.jsx";
import Skills from "./components/Skills";
import Projects from "./components/projects/Projects.jsx";
import Certificates from "./components/certificates/Certificates.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
            <Footer />
        </>
    );
}
export default App;
