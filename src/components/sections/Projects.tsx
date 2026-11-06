import { ArrowUpRight, FolderKanban } from "lucide-react";
import { cv } from "../../data/cv";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

export function Projects() {
    return (
        <section className="section section-muted" id="proyectos">
            <div className="shell">
                <Reveal>
                    <SectionTitle eyebrow="TRABAJO PERSONAL" title="Proyectos" description="Una selección de proyectos personales, en cuanto estén documentados." />
                </Reveal>
                {cv.projects.length > 0 ? (
                    <div className="projects-grid">
                        {cv.projects.map((project) => (
                            <article className="project-card" key={project.name}>
                                {project.image && (
                                    <img className="project-image" src={project.image} alt={`Captura del proyecto ${project.name}`} />
                                )}
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div className="tag-list">{project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noreferrer">Ver repositorio <ArrowUpRight size={16} /></a>
                                    {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Ver demo <ArrowUpRight size={16} /></a>}
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <Reveal>
                        <div className="empty-projects">
                            <span className="empty-project-icon"><FolderKanban size={22} aria-hidden="true" /></span>
                            <div>
                                <h3>Espacio para próximos proyectos</h3>
                                <p>Esta sección está preparada para añadir proyectos reales con su descripción, tecnologías, capturas y enlaces.</p>
                            </div>
                            <span className="empty-project-label">EN PREPARACIÓN</span>
                        </div>
                    </Reveal>
                )}
            </div>
        </section>
    );
}
