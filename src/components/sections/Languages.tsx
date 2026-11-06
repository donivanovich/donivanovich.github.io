import { Languages as LanguagesIcon } from "lucide-react";
import { cv } from "../../data/cv";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

export function Languages() {
    return (
        <section className="section shell" id="idiomas">
            <Reveal>
                <SectionTitle eyebrow="COMUNICACIÓN" title="Idiomas" />
            </Reveal>
            <div className="language-grid">
                {cv.languages.map((item, index) => (
                    <Reveal key={item.language} delay={index * 0.05}>
                        <article className="language-card">
                            <span><LanguagesIcon size={17} aria-hidden="true" /></span>
                            <h3>{item.language}</h3>
                            <p>{item.level}</p>
                        </article>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
