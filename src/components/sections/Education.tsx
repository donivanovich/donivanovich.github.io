import { GraduationCap } from "lucide-react";
import { cv } from "../../data/cv";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

export function Education() {
    return (
        <section className="section shell" id="formacion">
            <Reveal>
                <SectionTitle eyebrow="FORMACIÓN" title="Una base para seguir creciendo." />
            </Reveal>
            <div className="education-grid">
                {cv.education.map((item, index) => (
                    <Reveal key={item.degree} delay={index * 0.07}>
                        <article className="education-card">
                            <div className="education-card-top">
                                <span className="education-icon"><GraduationCap size={19} aria-hidden="true" /></span>
                                <span className="education-period">{item.period}</span>
                            </div>
                            <h3>{item.degree}</h3>
                            <p className="education-school">{item.school}{"status" in item && <span className="status-pill">{item.status}</span>}</p>
                            <ul className="education-topics">
                                {item.topics.map((topic) => <li key={topic}>{topic}</li>)}
                            </ul>
                        </article>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
