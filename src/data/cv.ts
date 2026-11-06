type Project = {
    name: string;
    description: string;
    technologies: string[];
    github: string;
    demo?: string;
    image?: string;
};

type Certification = {
    name: string;
    category: string;
    issuer?: string;
    issued?: string;
    url?: string;
};

export const cv = {
    name: "Ivan Kosolovskyy Fetsyk",
    role: "Desarrollador Full Stack · Estudiante de DAM / DAW",
    location: "Getafe, Madrid",
    email: "kosoivan12@gmail.com",
    summary:
        "Estudiante de desarrollo de software con formación en Desarrollo de Aplicaciones Multiplataforma y actualmente cursando Desarrollo de Aplicaciones Web. He realizado prácticas desarrollando interfaces web con React, TypeScript y Tailwind CSS, creando componentes reutilizables y aplicaciones responsive.",
    introduction:
        "Me considero una persona organizada, paciente, proactiva y atenta al detalle. Disfruto aprendiendo nuevas tecnologías, herramientas e idiomas, y quiero seguir creciendo en desarrollo web y ampliar mis conocimientos en cloud computing, datos y blockchain.",
    interests: ["Blockchain", "Big Data", "Cloud Computing"],
    social: {
        github: "https://github.com/donivanovich",
        linkedin: "https://www.linkedin.com/in/donivanovich/",
        credly: "https://credly.com/users/donivanovich",
    },
    drivingLicense: {
        type: "Permiso de conducir B",
        issuer: "Dirección General de Tráfico",
        issued: "enero 2026",
    },
    experience: [
        {
            position: "Prácticas de Desarrollo de Aplicaciones Multiplataforma",
            company: "STidea (Grupo ST)",
            period: "Marzo 2026 — Junio 2026",
            responsibilities: [
                "Desarrollo de interfaces web con React, TypeScript y Tailwind CSS.",
                "Implementación de componentes reutilizables e interfaces responsive.",
                "Control de versiones y seguimiento de tareas mediante GitLab y Jira.",
                "Resolución de errores y optimización de funcionalidades.",
            ],
            technologies: ["React", "TypeScript", "Tailwind CSS", "GitLab", "Jira"],
        },
    ],
    education: [
        {
            degree: "Técnico Superior en Desarrollo de Aplicaciones Web",
            school: "Colegio Joyfe",
            period: "Septiembre 2026 — Junio 2027",
            status: "En curso",
            topics: ["Desarrollo web y diseño frontend", "Posicionamiento SEO", "Blockchain"],
        },
        {
            degree: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
            school: "Colegio Joyfe",
            period: "Septiembre 2024 — Junio 2026",
            topics: [
                "Gestión y tratamiento de datos en backend",
                "Desarrollo de aplicaciones móviles y de escritorio",
                "Tecnologías y servicios en la nube",
            ],
        },
        {
            degree: "Bachillerato — Especialidad Tecnológica",
            school: "Colegio Fundación Caldeiro",
            period: "Septiembre 2022 — Junio 2024",
            topics: ["Participación en el equipo de baloncesto"],
        },
    ],
    skills: [
        {
            category: "Lenguajes de programación",
            items: ["JavaScript", "PHP", "C", "C++", "C#", "Java", "Python", "VB.NET", "Kotlin"],
        },
        {
            category: "Desarrollo frontend",
            items: ["HTML", "CSS", "React", "TypeScript", "Tailwind CSS", "Angular"],
        },
        {
            category: "Desarrollo backend",
            items: ["PHP", "Node.js", "Spring Boot"],
        },
        {
            category: "Bases de datos",
            items: ["SQL", "NoSQL", "PL/SQL"],
        },
        {
            category: "Cloud y DevOps",
            items: ["AWS", "Docker", "Linux"],
        },
        {
            category: "Herramientas y plataformas",
            items: ["Git", "GitLab", "Jira", "Power BI", "Business Central", "n8n", "Unity"],
        },
        {
            category: "Datos e inteligencia artificial",
            items: ["Machine Learning", "Aprendizaje profundo"],
        },
    ],
    certifications: [
        { name: "Unity Certified User: Programmer", category: "Desarrollo y programación", issuer: "Unity", issued: "diciembre 2025", url: "https://www.credly.com/badges/eef3ec2e-d4c2-4b0e-8fe9-06094b1f03db/linked_in_profile" },
        { name: "IT Specialist INF-301", category: "Desarrollo y programación", issuer: "IT Specialist", issued: "mayo 2026", url: "https://www.xperienceed.com/verify-certificate/3172b64c-8105-4cf7-a53b-c05ec21fdaa9" },
        { name: "IT Specialist INF-302", category: "Desarrollo y programación", issuer: "IT Specialist", issued: "mayo 2026", url: "https://www.xperienceed.com/verify-certificate/b98fec87-0a89-4fd1-b28d-c93546bd19f7" },
        { name: "IT Specialist INF-303", category: "Desarrollo y programación", issuer: "IT Specialist", issued: "mayo 2026", url: "https://www.xperienceed.com/verify-certificate/fa5dec88-8098-4370-806b-405bb840f796" },
        { name: "Cisco HTML Essentials", category: "Desarrollo y programación", issuer: "Cisco", issued: "mayo 2026", url: "https://www.credly.com/badges/e8888acd-d519-4927-a243-5612b3bd3312/linked_in_profile" },
        { name: "Cisco CSS Essentials", category: "Desarrollo y programación", issuer: "Cisco", issued: "mayo 2026", url: "https://www.credly.com/badges/b153fc77-b12a-46ca-87e3-25aa8d7ca370/linked_in_profile" },
        { name: "Cisco JavaScript Essentials 1", category: "Desarrollo y programación", issuer: "Cisco", issued: "septiembre 2025", url: "https://www.credly.com/badges/fa6328c0-dd70-48b6-bc4c-6f2ee03352a8/linked_in_profile" },
        { name: "Cisco JavaScript Essentials 2", category: "Desarrollo y programación", issuer: "Cisco", issued: "septiembre 2025", url: "https://www.credly.com/badges/75d2f1f0-b5ff-4d10-bf44-4ad76fd6b0ff/linked_in_profile" },
        { name: "Cisco Python Essentials 1", category: "Desarrollo y programación", issuer: "Cisco", issued: "marzo 2025", url: "https://www.credly.com/badges/b2863d14-f94e-4bb6-be4d-8ba0568e1852/linked_in_profile" },
        { name: "Cisco Python Essentials 2", category: "Desarrollo y programación", issuer: "Cisco", issued: "septiembre 2025", url: "https://www.credly.com/badges/5a29cf78-0762-447b-ae05-faae287b4131/linked_in_profile" },
        { name: "Oracle Database Programming with PL/SQL", category: "Bases de datos", issuer: "Oracle", issued: "febrero 2026" },
        { name: "AWS Academy Cloud Architecting", category: "Cloud y sistemas", issuer: "Amazon Web Services", issued: "febrero 2025", url: "https://www.credly.com/badges/2f529bbe-d5ad-4d32-bbd1-c51df045ed0b/print" },
        { name: "Red Hat RH104", category: "Cloud y sistemas", issuer: "Red Hat", issued: "febrero 2025" },
        { name: "Red Hat RH124", category: "Cloud y sistemas", issuer: "Red Hat", issued: "marzo 2025", url: "https://www.credly.com/badges/41de1552-5d1a-4990-8317-fa3e49e788eb/linked_in_profile" },
        { name: "Cisco Linux Unhatched", category: "Cloud y sistemas", issuer: "Cisco", issued: "septiembre 2025", url: "https://www.credly.com/badges/19bbc0c4-0506-448e-932f-5d9180c2888b/linked_in_profile" },
        { name: "IBM Artificial Intelligence Fundamentals", category: "Datos e inteligencia artificial", issuer: "IBM", issued: "marzo 2025", url: "https://www.credly.com/badges/d009890a-26f6-48e9-82ab-c2520c0e9b2b/linked_in_profile" },
        { name: "Cisco AI Fundamentals with IBM SkillsBuild", category: "Datos e inteligencia artificial", issuer: "Cisco", issued: "marzo 2025", url: "https://www.credly.com/badges/9929014a-233b-4455-a29c-540d14680324/linked_in_profile" },
        {
            name: "Google: Inteligencia Artificial y productividad",
            category: "Datos e inteligencia artificial",
            issuer: "Santander Open Academy",
            issued: "julio 2025",
        },
        { name: "Microsoft AI Skills Fest 2026", category: "Datos e inteligencia artificial", issuer: "Microsoft", issued: "junio 2026", url: "https://www.credly.com/badges/7121df90-4251-408c-88bb-9f15814e4e02/linked_in_profile" },
        { name: "Cisco English for IT 1", category: "Inglés", issuer: "Cisco", issued: "mayo 2026", url: "https://www.credly.com/badges/b1591fbd-e2a7-4ecf-9197-8467c8d2f2fc/linked_in_profile" },
        { name: "Cisco English for IT 2", category: "Inglés", issuer: "Cisco", issued: "mayo 2026", url: "https://www.credly.com/badges/d2b5a5b0-2b5a-4d99-bb18-fc6a95b03769/linked_in_profile" },
    ] as Certification[],
    languages: [
        { language: "Español", level: "Nativo" },
        { language: "Inglés", level: "Medio" },
        { language: "Ucraniano", level: "Medio" },
        { language: "Ruso", level: "Básico" },
    ],
    personalSkills: [
        "Trabajo en equipo y colaboración",
        "Resolución de problemas",
        "Organización y gestión del tiempo",
        "Atención al detalle",
        "Aprendizaje continuo y adaptación",
        "Proactividad e iniciativa",
    ],
    projects: [
        {
            name: "Shawarmas",
            description:
                "Proyecto de tienda de ropa con catálogo y pedidos, acceso para clientes y empleados y gestión de inventario. El repositorio reúne una app Java con MySQL, una versión web con PHP, CSS y JavaScript, y una implementación WPF.",
            technologies: ["Java", "MySQL", "PHP", "CSS", "JavaScript", "WPF"],
            github: "https://github.com/donivanovich/Shawarmas",
        },
    ] as Project[],
} as const;
