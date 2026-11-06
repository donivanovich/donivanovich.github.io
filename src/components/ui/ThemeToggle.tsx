import { Moon, Sun } from "lucide-react";
import type { Theme } from "../../hooks/useTheme";

type ThemeToggleProps = {
    theme: Theme;
    onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
    const isDark = theme === "dark";

    return (
        <button
            className="icon-button theme-toggle"
            type="button"
            onClick={onToggle}
            aria-label={`Cambiar a modo ${isDark ? "claro" : "oscuro"}`}
            title={`Cambiar a modo ${isDark ? "claro" : "oscuro"}`}
        >
            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </button>
    );
}
