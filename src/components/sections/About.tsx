import { Sparkles } from "lucide-react";
import { cv } from "../../data/cv";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

export function About() {
    return (
        <section className="section shell" id="sobre-mi">
            <Reveal>
                <SectionTitle eyebrow="UN POCO SOBRE MÍ" title="Sobre mí" />
            </Reveal>
            <div className="about-grid">
                <Reveal className="about-copy">
                    <p>{cv.introduction}</p>
                    <p>Mi objetivo es seguir desarrollándome profesionalmente en el ámbito del software, aportar en proyectos web y continuar explorando tecnologías relacionadas con datos, cloud y blockchain.</p>
                </Reveal>
                <div className="trait-grid">
                    {cv.personalSkills.map((skill, index) => (
                        <Reveal key={skill} delay={index * 0.05}>
                            <article className="trait-card">
                                <span className="trait-icon"><Sparkles size={17} aria-hidden="true" /></span>
                                <h3>{skill}</h3>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
