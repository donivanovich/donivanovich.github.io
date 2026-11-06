import { useTheme } from "./hooks/useTheme";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";
import { Education } from "./components/sections/Education";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Languages } from "./components/sections/Languages";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";

export default function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <a className="skip-link" href="#contenido">Saltar al contenido</a>
            <Navbar theme={theme} onToggleTheme={toggleTheme} />
            <main id="contenido">
                <Hero />
                <About />
                <Experience />
                <Education />
                <Skills />
                <Certifications />
                <Projects />
                <Languages />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
