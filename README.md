# Portafolio Airbnb

Sitio React sencillo para presentar servicios de administracion de alojamientos Airbnb.

## Editar contenido

Todo el contenido principal esta en `src/content/portfolio.js`.

- `owner.profileImage`: agrega la URL de tu foto o una ruta local como `/profile.jpg`.
- `properties`: agrega o elimina alojamientos.
- `contact`: cambia WhatsApp, email e Instagram.
- `services`: ajusta los servicios que ofreces.

Si quieres usar imagenes locales, colocalas en `public/` y referencialas con `/nombre-del-archivo.jpg`.

## Comandos

```bash
npm install
npm run dev
npm run build
```

## Publicacion

En Netlify usa:

- Build command: `npm run build`
- Publish directory: `dist`
