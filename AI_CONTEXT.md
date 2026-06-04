# Contexto para IA

Este proyecto es un portafolio web de Rogelio Pervaz para presentar servicios de gestion, optimizacion y creacion de anuncios Airbnb.

## Stack

- React con Vite.
- CSS global en `src/styles.css`.
- Iconos con `lucide-react`.
- Deploy preparado para GitHub Pages con `.github/workflows/deploy.yml`.

## Archivos clave

- `src/App.jsx`: componentes principales, carrusel de resenas, HERO, servicios, alojamientos, proceso y contacto.
- `src/components/`: componentes separados por seccion (`Hero`, `ReviewsMarquee`, `Properties`, `Contact`, etc.).
- `src/content/portfolio.js`: contenido editable del portafolio, servicios, casos, enlaces y textos principales.
- `src/styles.css`: estilos visuales, responsive, animaciones y layout.
- `vite.config.js`: configura el `base` para GitHub Pages cuando `GITHUB_PAGES=true`.
- `README.md`: guia humana de uso, edicion y despliegue.

## Comandos utiles

```bash
npm run dev
npm run build
npm run preview
```

## Criterios de trabajo

- Mantener cambios pequenos y enfocados.
- No agregar librerias sin justificar.
- No subir secretos ni credenciales.
- Cuidar responsive, accesibilidad y rendimiento de imagenes.
- Preferir assets `.optimized.jpg` cuando existan para mantener bajo el peso del build.
- Antes de desplegar, validar con `npm run build`.
