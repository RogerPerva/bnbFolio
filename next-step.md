# Next Steps — Rediseño bnbFolio

> Objetivo: convertir el sitio en un portafolio que **llame la atención, venda y se sienta profesional pero cálido** — la misma sensación de hospitalidad que transmite Airbnb: confianza, calidez humana y atención al detalle.

Diagnóstico realizado el 2026-06-10 con Playwright (escritorio 1440px y móvil 390px) sobre `http://localhost:5173`.

> **Estado (2026-06-10):** Bloques A–E ejecutados. Capturas finales en `final-desktop.jpeg` y `final-mobile.jpeg`. Pendiente: revisión del dueño y commit.
>
> **Iteración 2 (2026-06-10, tras feedback del dueño):** la dirección "hospitalidad editorial" clara se descartó por sentirse simple. Nueva dirección con `taste-skill`: **tema oscuro único premium** (slate casi negro + acento terracota, sin verde), tipografía Geist + Geist Mono, sección Confianza al estilo Floria (foto sangrando a negro + pasos escalonados 01-04), reveals al scroll con IntersectionObserver, grano sutil, eyebrows reducidos a 2, titulares con punto final e itálica de énfasis. Referencias: tasteskill.dev, floria-landing-page.vercel.app.

---

## 1. Observaciones del sitio actual

### Lo que ya funciona (conservar)
- **Arquitectura de la página**: Hero → reseñas → servicios → portafolio → proceso → contacto. El flujo narrativo de venta es correcto y no hay que tocarlo.
- **Contenido real**: fotos propias, propiedades reales con enlaces a Airbnb, reseñas verídicas. Es el mejor activo del sitio.
- El **mockup de tablet con carrusel** de propiedades es una idea diferenciadora con potencial.
- Responsive funcional y soporte de `prefers-reduced-motion`.

### Problemas detectados (en orden de impacto)

| # | Problema | Detalle |
|---|----------|---------|
| 1 | **Ruido decorativo con el Bélo de Airbnb** | El logo de Airbnb aparece 5+ veces como garabato solo en el hero; uno **tapa el texto del eyebrow** ("GESTIÓN AIRBNB PROFESIONAL" queda ilegible). Además del ruido visual, usar la marca registrada de Airbnb de forma tan prominente es un riesgo legal para un servicio independiente. |
| 2 | **Paleta sin jerarquía** | ~11 variables de color en `src/styles.css` (`--petrol`, `--deep-green`, `--brand-red`, `--wine`, `--taupe`, `--accent`…) y el CTA principal es **naranja**, un color que ni siquiera existe como variable. El ojo no identifica cuál es "el color de la marca". |
| 3 | **Tipografía genérica** | Stack de fuentes del sistema. Un sitio que vende "imagen y presentación" necesita una tipografía con carácter; hoy contradice su propia propuesta de valor. |
| 4 | **Hero "AI slop"** | Fondo oscuro con grid + glow: el patrón genérico que cualquier generador produce por defecto. No transmite calidez ni hospitalidad. |
| 5 | **Transiciones abruptas entre secciones** | Alterna oscuro → crema → oscuro → crema sin elementos de continuidad; la página se fragmenta en bloques que parecen de sitios distintos. |
| 6 | **Chips del carrusel saturados** | Bajo el mockup de tablet hay 8 chips de propiedades en dos filas que compiten con el contenido principal. |

---

## 2. Dirección de diseño propuesta

**Concepto: "hospitalidad editorial"** — profesional pero cálido, como entrar a un alojamiento bien cuidado.

- **Base clara y cálida**: fondos crema/marfil (`--ivory`, `--warm-bg` ya existen) como lienzo dominante. El modo oscuro actual transmite "tech", no "hogar".
- **Un solo acento**: elegir UN color de marca (recomendado: un coral/terracota cálido, familia cromática de Airbnb sin copiar su `#FF5A5F`) y usarlo exclusivamente para CTAs y momentos clave. Todo lo demás en neutros cálidos + un verde profundo para texto/contraste.
- **Tipografía con carácter**: una serif editorial para titulares (p. ej. Fraunces, Lora o similar — transmite calidez y artesanía) + una sans humanista para cuerpo (p. ej. Inter, Source Sans). Cargar vía `@font-face`/Google Fonts.
- **Fotografía como protagonista**: las fotos de las propiedades son la prueba de venta. Dárles más tamaño y aire; menos marcos y decoración alrededor.
- **Identidad propia**: sustituir los garabatos del Bélo por un monograma/marca propia ("RP") y dejar la mención a Airbnb solo en texto y en el enlace al perfil.

---

## 3. Modificaciones concretas (por bloques)

### Bloque A — Limpieza y sistema de diseño (base)
- [x] Eliminar todos los Bélos decorativos (hero, botones, FAB) y dejar uno solo discreto en el enlace "Ver perfil de Airbnb".
- [x] Reducir la paleta en `styles.css` a: fondo crema, tinta verde oscuro, 1 acento cálido, 2 neutros. Eliminar variables muertas.
- [x] Unificar el CTA: mismo color de acento en todos los botones primarios (hoy naranja vs. rojo).
- [x] Incorporar tipografía display (serif) + texto (sans) y definir escala tipográfica (h1–h6, body, caption).

### Bloque B — Hero
- [x] Rediseñar sobre fondo claro/cálido: titular grande en serif, foto de perfil con tratamiento cálido, CTA único y prominente.
- [x] Restaurar legibilidad del eyebrow (hoy tapado por un logo).
- [x] Mantener los 3 pilares (Lanzamiento / Imagen / Soporte) pero integrados a la sección, no como banda separada.

### Bloque C — Secciones de contenido
- [x] Reseñas: darles rostro y calidez (iniciales con color, comillas grandes, estrellas) — son la prueba social más fuerte.
- [x] Servicios: reducir a tarjetas más limpias con iconografía consistente (lucide-react ya está instalado).
- [x] Propiedades: protagonismo a las fotos; simplificar los chips (máx. 1 fila o un selector compacto).
- [x] Proceso: puede conservar un fondo de contraste (verde profundo) como ÚNICA sección oscura, para dar ritmo sin fragmentar.

### Bloque D — Contacto y cierre
- [x] Contacto sobre fondo cálido con CTA de WhatsApp protagonista (es el canal real de conversión en México).
- [x] Footer simple con marca propia.

### Bloque E — Verificación
- [x] Revisar con Playwright en 1440px y 390px tras cada bloque.
- [x] Verificar contraste AA, estados hover/focus y `prefers-reduced-motion`.
- [x] `npm run build` sin errores antes de hacer commit.

---

## 4. Cómo ejecutar

Las skills ya están instaladas en `.claude/skills/`:
- **`redesign-skill`** (`redesign-existing-projects`) — auditoría y mejora de un sitio existente sin romper funcionalidad. **Usar esta como guía principal.**
- **`taste-skill`** (`design-taste-frontend`) — dirección de diseño anti-genérico para decisiones de tipografía, color y layout.

Orden sugerido: Bloque A → B → C → D, verificando (E) entre cada uno. Cada bloque debería ser un commit independiente para poder revertir con facilidad.
