import { ArrowUp, Github, Linkedin } from "lucide-react";
import { cv } from "../../data/cv";

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="shell footer-inner">
                <a className="footer-name" href="#inicio">{cv.name}</a>
                <div className="footer-links">
                    <a href={cv.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <Github size={17} />
                    </a>
                    <a href={cv.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <Linkedin size={17} />
                    </a>
                    <a className="back-to-top" href="#inicio">
                        Volver arriba <ArrowUp size={15} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
