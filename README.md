# Portafolio Airbnb

Portafolio web para presentar servicios de gestion, optimizacion y creacion de anuncios Airbnb. El sitio esta construido con React y Vite, usando contenido local para facilitar cambios rapidos sin depender de un backend.

## Objetivo

El proyecto muestra:

- Servicios ofrecidos para anfitriones de Airbnb.
- Casos reales de alojamientos trabajados.
- Resenas de huespedes.
- Proceso de trabajo y medios de contacto.

La intencion es que funcione como una tarjeta profesional publica, ligera y facil de desplegar en GitHub Pages.

## Stack

- React
- Vite
- CSS global
- lucide-react para iconos
- GitHub Actions para despliegue en GitHub Pages

## Estructura principal

```text
.
├── .github/workflows/deploy.yml  # Workflow de despliegue a GitHub Pages
├── index.html                    # Documento HTML base
├── netlify.toml                  # Configuracion opcional para Netlify
├── package.json                  # Scripts y dependencias
├── vite.config.js                # Configuracion de Vite y base path para Pages
└── src
    ├── App.jsx                   # Componentes principales de la pagina
    ├── components                # Componentes por seccion
    ├── main.jsx                  # Punto de entrada de React
    ├── styles.css                # Estilos globales y responsive
    ├── content/portfolio.js      # Contenido editable del portafolio
    └── assets                    # Imagenes usadas por el sitio
```

## Comandos

Instalar dependencias:

```bash
npm install
```

Levantar entorno local:

```bash
npm run dev
```

Generar build de produccion:

```bash
npm run build
```

Previsualizar el build:

```bash
npm run preview
```

## Editar contenido

El contenido principal vive en `src/content/portfolio.js`.

Secciones importantes:

- `owner`: datos del perfil profesional.
- `contact`: enlaces de WhatsApp y Airbnb.
- `hero`: textos principales del primer bloque.
- `stats`: datos cortos mostrados debajo del HERO.
- `services`: tarjetas de servicios.
- `properties`: alojamientos/casos reales.
- `process`: pasos del proceso de trabajo.

Las resenas del carrusel estan definidas en `src/content/portfolio.js` dentro de `reviews`.
Los componentes visuales estan separados en `src/components` para mantener `App.jsx` como una composicion simple de secciones.

## Agregar o cambiar imagenes

Las imagenes locales estan en `src/assets`. El sitio importa solo archivos `.webp` para mantener bajo el peso del build.

Para casos nuevos:

1. Agrega la imagen (jpg o png) dentro de `src/assets/cases/<nombre-del-caso>/`.
2. Ejecuta `npm run optimize-images` para generar la version `.webp` (1600px max, calidad 78).
3. Importa la version `.webp` en `src/content/portfolio.js` y elimina el original.
4. Agrega el nuevo objeto dentro de `properties`.

Ejemplo:

```js
import nuevaCasaCover from '../assets/cases/nueva-casa/cover.webp';

{
  name: 'Nueva Casa',
  image: nuevaCasaCover,
  gallery: [nuevaCasaCover],
  description: 'Descripcion breve del alojamiento.',
  highlights: ['Casa', 'Fotografia', 'Anuncio'],
  workDone: ['Accion realizada.'],
  result: 'Resultado obtenido.',
  link: 'https://www.airbnb.mx/...'
}
```

## Despliegue en GitHub Pages

El proyecto ya incluye `.github/workflows/deploy.yml`.

El flujo hace lo siguiente:

1. Se ejecuta al hacer push a `main`.
2. Instala dependencias con `npm ci`.
3. Genera el build con `npm run build`.
4. Publica la carpeta `dist` en GitHub Pages.

`vite.config.js` calcula el `base path` automaticamente cuando `GITHUB_PAGES=true`. Esto permite que los assets funcionen correctamente en repositorios publicados bajo una ruta como:

```text
https://usuario.github.io/bnbFolio/
```

## Buenas practicas aplicadas

- Contenido separado de la presentacion principal en `src/content/portfolio.js`.
- Componentes pequenos y enfocados en `src/App.jsx`.
- Assets importados desde `src/assets` para que Vite los procese correctamente.
- Enlaces externos con `target="_blank"` usan `rel="noreferrer"` cuando aplica.
- Estados interactivos simples para el carrusel de alojamientos y modal.
- Soporte para cerrar el modal con `Escape`, foco inicial y ciclo basico de tabulacion.
- Boton de compartir con Web Share API y fallback a copiar enlace.
- Estilos responsive para escritorio, tablet y movil.
- Respeto de `prefers-reduced-motion` para reducir animaciones cuando el usuario lo solicita.

## Seguridad y mantenimiento

- No hay backend ni persistencia de datos, por lo que la superficie de ataque es baja.
- No se usan `dangerouslySetInnerHTML` ni inserciones HTML dinamicas.
- Los textos se renderizan como contenido React normal, reduciendo riesgo de XSS.
- `.env`, `dist`, `node_modules`, `.DS_Store` e `.idea` estan ignorados en Git.
- No se deben subir secretos, tokens ni credenciales al repositorio.
- Antes de desplegar, ejecuta `npm run build` para detectar errores de compilacion.

## Notas

- `netlify.toml` se conserva como configuracion opcional si se quiere desplegar tambien en Netlify.
- Las imagenes pesadas pueden afectar el rendimiento inicial. Si el sitio crece, conviene optimizarlas a WebP/AVIF o generar versiones comprimidas.

- https://rogerperva.github.io/bnbFolio/
