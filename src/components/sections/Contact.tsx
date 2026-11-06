import { ArrowUpRight, AtSign, Github, Linkedin, MapPin } from "lucide-react";
import { cv } from "../../data/cv";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";

const contactLinks = [
    { label: "Correo electrónico", value: cv.email, href: `mailto:${cv.email}`, icon: AtSign },
    { label: "GitHub", value: "github.com/donivanovich", href: cv.social.github, icon: Github },
    { label: "LinkedIn", value: "linkedin.com/in/donivanovich", href: cv.social.linkedin, icon: Linkedin },
    { label: "Credly", value: "credly.com/users/donivanovich", href: cv.social.credly, icon: ArrowUpRight },
];

export function Contact() {
    return (
        <section className="section contact-section" id="contacto">
            <div className="shell">
                <Reveal>
                    <SectionTitle eyebrow="HABLEMOS" title="¿Tienes un proyecto en mente?" description="Estoy abierto a conversar sobre desarrollo, oportunidades y nuevas ideas." />
                </Reveal>
                <div className="contact-grid">
                    <Reveal className="contact-intro">
                        <span className="contact-location"><MapPin size={16} aria-hidden="true" /> {cv.location}</span>
                        <a className="contact-email" href={`mailto:${cv.email}`}>{cv.email}<ArrowUpRight size={20} /></a>
                    </Reveal>
                    <div className="contact-links">
                        {contactLinks.map(({ label, value, href, icon: Icon }, index) => (
                            <Reveal key={label} delay={index * 0.04}>
                                <a className="contact-link" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
                                    <span className="contact-link-icon"><Icon size={17} aria-hidden="true" /></span>
                                    <span><span className="contact-link-label">{label}</span><span className="contact-link-value">{value}</span></span>
                                    <ArrowUpRight className="contact-link-arrow" size={16} aria-hidden="true" />
                                </a>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
