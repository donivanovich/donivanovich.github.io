import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { cv } from "../../data/cv";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

export function Experience() {
    return (
        <section className="section section-muted" id="experiencia">
            <div className="shell">
                <Reveal>
                    <SectionTitle eyebrow="TRAYECTORIA" title="Experiencia profesional" description="Primeros pasos profesionales en desarrollo de interfaces y aplicaciones web." />
                </Reveal>
                <div className="timeline">
                    {cv.experience.map((item) => (
                        <Reveal key={item.company}>
                            <article className="timeline-card">
                                <div className="timeline-marker"><BriefcaseBusiness size={17} aria-hidden="true" /></div>
                                <div className="timeline-content">
                                    <div className="timeline-head">
                                        <div>
                                            <p className="eyebrow">{item.period}</p>
                                            <h3>{item.position}</h3>
                                            <p className="company-name">{item.company}</p>
                                        </div>
                                        <ArrowUpRight className="card-arrow" size={19} aria-hidden="true" />
                                    </div>
                                    <ul className="detail-list">
                                        {item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                                    </ul>
                                    <div className="tag-list">
                                        {item.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
