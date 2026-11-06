import { ArrowUpRight, Award, CarFront } from "lucide-react";
import { cv } from "../../data/cv";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

const certificationCategories = [
    "Desarrollo y programación",
    "Bases de datos",
    "Cloud y sistemas",
    "Datos e inteligencia artificial",
    "Inglés",
];

export function Certifications() {
    return (
        <section className="section shell" id="certificaciones">
            <Reveal>
                <SectionTitle
                    eyebrow="ACREDITACIONES"
                    title="Certificaciones"
                    description="Credenciales recogidas de mi CV y de LinkedIn."
                />
            </Reveal>
            <div className="certification-groups">
                {certificationCategories.map((category) => {
                    const certifications = cv.certifications.filter(
                        (certification) => certification.category === category,
                    );

                    return (
                        <section className="certification-group" key={category} aria-label={category}>
                            <h3 className="certification-group-title">{category}</h3>
                            <div className="certification-list">
                                {certifications.map((certification, index) => (
                                    <Reveal key={certification.name} delay={(index % 4) * 0.04}>
                                        <article className="certification-card">
                                            <span className="certification-icon">
                                                <Award size={20} aria-hidden="true" />
                                            </span>
                                            <div className="certification-copy">
                                                <h4>{certification.name}</h4>
                                                {(certification.issuer || certification.issued) && (
                                                    <p>
                                                        {[certification.issuer, certification.issued].filter(Boolean).join(" · ")}
                                                    </p>
                                                )}
                                            </div>
                                            {certification.url && (
                                                <a
                                                    className="certification-link"
                                                    href={certification.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label={`Ver credencial: ${certification.name}`}
                                                    title="Ver credencial"
                                                >
                                                    <ArrowUpRight size={16} aria-hidden="true" />
                                                </a>
                                            )}
                                        </article>
                                    </Reveal>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
            <Reveal>
                <p className="license-note">
                    <CarFront size={17} aria-hidden="true" />
                    <span>{cv.drivingLicense.type}</span>
                    <span>{cv.drivingLicense.issuer} · expedido en {cv.drivingLicense.issued}</span>
                </p>
            </Reveal>
        </section>
    );
}
