type SectionTitleProps = {
    eyebrow: string;
    title: string;
    description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
    return (
        <div className="section-title">
            <p className="eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            {description && <p className="section-description">{description}</p>}
        </div>
    );
}
