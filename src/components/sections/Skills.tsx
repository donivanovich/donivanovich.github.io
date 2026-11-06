import { BrainCircuit, Braces, Cloud, Code2, Database, Layers3, Wrench } from "lucide-react";
import { cv } from "../../data/cv";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

const categoryIcons = [Code2, Braces, Layers3, Database, Cloud, Wrench, BrainCircuit];

export function Skills() {
    return (
        <section className="section section-muted" id="habilidades">
            <div className="shell">
                <Reveal>
                    <SectionTitle eyebrow="STACK" title="Herramientas que conozco." description="Tecnologías presentes en mi formación y experiencia, sin niveles de dominio asignados." />
                </Reveal>
                <div className="skills-grid">
                    {cv.skills.map(({ category, items }, index) => {
                        const Icon = categoryIcons[index] ?? Wrench;
                        return (
                            <Reveal key={category} delay={(index % 3) * 0.06}>
                                <article className="skill-card">
                                    <div className="skill-heading">
                                        <span className="skill-icon"><Icon size={18} aria-hidden="true" /></span>
                                        <h3>{category}</h3>
                                    </div>
                                    <div className="tag-list">
                                        {items.map((item) => <span className="tag" key={item}>{item}</span>)}
                                    </div>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
