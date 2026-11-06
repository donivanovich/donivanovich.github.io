import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import { cv } from "../../data/cv";
import { Reveal } from "../ui/Reveal";

export function Hero() {
    return (
        <section className="hero-section shell" id="inicio">
            <div className="hero-copy">
                <Reveal>
                    <p className="hero-kicker">
                        <span className="status-dot" />
                        ESTUDIANTE DE DESARROLLO · GETAFE, MADRID
                    </p>
                    <h1>
                        Hola, soy
                        <span className="hero-name">{cv.name}<span className="accent">.</span></span>
                    </h1>
                    <p className="hero-role">{cv.role}</p>
                    <p className="hero-description">{cv.summary}</p>
                    <div className="interest-list" aria-label="Áreas de interés">
                        {cv.interests.map((interest) => <span key={interest}>{interest}</span>)}
                    </div>
                    <div className="hero-actions">
                        <a className="button button-primary" href={`${import.meta.env.BASE_URL}cv.pdf`} download="Ivan Kosolovskyy Fetsyk CV.pdf">
                            <Download size={17} aria-hidden="true" />
                            Descargar CV
                        </a>
                        <a className="button button-outline" href="#contacto">
                            Contactar <ArrowUpRight size={17} aria-hidden="true" />
                        </a>
                    </div>
                    <div className="hero-socials">
                        <a href={cv.social.github} target="_blank" rel="noreferrer">
                            <Github size={17} aria-hidden="true" /> GitHub
                        </a>
                        <a href={cv.social.linkedin} target="_blank" rel="noreferrer">
                            <Linkedin size={17} aria-hidden="true" /> LinkedIn
                        </a>
                        <span><MapPin size={16} aria-hidden="true" /> {cv.location}</span>
                    </div>
                </Reveal>
            </div>
            <Reveal className="hero-aside" delay={0.12}>
                <div className="hero-monogram">
                    <img
                        className="hero-portrait"
                        src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                        alt={`Foto de perfil de ${cv.name}`}
                        onError={(event) => {
                            event.currentTarget.hidden = true;
                        }}
                    />
                    <span>IK</span>
                </div>
                <div className="hero-aside-note">
                    <span className="note-line" />
                    <p>Curioso por construir<br />y aprender cada día.</p>
                </div>
            </Reveal>
            <a className="scroll-cue" href="#sobre-mi">
                <ArrowDown size={15} aria-hidden="true" /> DESLIZA PARA EXPLORAR
            </a>
        </section>
    );
}
