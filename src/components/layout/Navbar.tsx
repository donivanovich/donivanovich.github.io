import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "../ui/ThemeToggle";
import type { Theme } from "../../hooks/useTheme";

const links = [
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#formacion", label: "Formación" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
];

type NavbarProps = {
    theme: Theme;
    onToggleTheme: () => void;
};

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="site-header">
            <nav className="navbar shell" aria-label="Navegación principal">
                <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Inicio">
                    <span className="brand-mark">IK</span>
                    <span>Ivan Kosolovskyy<span className="brand-dot">.</span></span>
                </a>

                <div className={`nav-content${menuOpen ? " is-open" : ""}`}>
                    <div className="nav-links">
                        {links.map((link) => (
                            <a key={link.href} href={link.href} onClick={closeMenu}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="nav-actions">
                        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
                        <a className="button button-small button-outline nav-download" href={`${import.meta.env.BASE_URL}cv.pdf`} download="Ivan Kosolovskyy Fetsyk CV.pdf">
                            <Download size={15} aria-hidden="true" />
                            Descargar CV
                        </a>
                    </div>
                </div>

                <button
                    className="icon-button mobile-menu-toggle"
                    type="button"
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((isOpen) => !isOpen)}
                >
                    {menuOpen ? <X size={21} /> : <Menu size={21} />}
                </button>
            </nav>
        </header>
    );
}
