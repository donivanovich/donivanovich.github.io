# Ivan Kosolovskyy — Portfolio

Portfolio estático creado con React 19, TypeScript, Vite, Tailwind CSS 4, Motion y Lucide React.

## Desarrollo local

```bash
npm install
npm run dev
```

## PDF del currículum

Guarda el CV original como `public/cv.pdf`; los botones de descarga ya apuntan a esa ruta.

## Foto de perfil

Guarda la foto como `public/images/profile.jpg`. Se mostrará en el hero y, si todavía no está añadida, se conserva el monograma como alternativa.

## Enlaces de certificaciones

Abre `src/data/cv.ts` y añade la propiedad `url` a la certificación correspondiente dentro de `cv.certifications`. Al guardar, aparecerá un enlace **Ver credencial** que abre la verificación en otra pestaña.

```ts
{
    name: "Cisco Python Essentials 1",
    issuer: "Cisco",
    issued: "marzo 2025",
    url: "https://sitio-de-verificacion/tu-credencial",
},
```

Sustituye el valor de `url` por el enlace público real de esa credencial. Si aún no tienes un enlace, deja la propiedad fuera; se indicará que no hay enlace.

## GitHub Pages

El proyecto usa rutas relativas (`base: "./"`) para funcionar tanto en un dominio propio como en una URL de proyecto (`usuario.github.io/repositorio/`). Los recursos públicos, incluido el favicon, se sirven desde `public/`.

1. Sube el proyecto a una rama `main` de un repositorio de GitHub.
2. En **Settings → Pages**, selecciona **GitHub Actions** como origen de publicación.
3. Cada push a `main` compilará y publicará `dist` mediante `.github/workflows/deploy.yml`.

Para comprobar la compilación local:

```bash
npm run build
npm run preview
```
