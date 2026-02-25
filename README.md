# Amarres Poderosos - Landing Page Premium

Bienvenido al código fuente de la Landing Page "Amarres Poderosos". Este proyecto es una *One-Page* estática de alto rendimiento orientada a conversiones de consultas espirituales y de parejas.

Está construida con tecnologías modernas enfatizando animaciones visuales profundas (Glassmorphism, ScrollSpy, Intercalado Parallax) sin depender de librerías CSS pesadas.

---

## Entorno Tecnológico Constuido

- **HTML5:** Marcado semántico y SEO-ready (Bento Grid Layouts, Etiquetas Meta, Secciones Claras).
- **CSS3 (SCSS):** Uso intensivo de CSS Grid, Flexbox, variables y funciones SCSS bajo una arquitectura modular (Arquitectura 7-1 minificada).
- **JavaScript (ES6):** Manejo de Intersecciones (`IntersectionObserver`), validación de eventos, transiciones asíncronas y *Smooth Scrolling* sin jQuery.
- **Construcción y DevServer:** Vite.
- **Entorno:** Dockerizado totalmente (No requiere instalación global de Node.js).
- **Iconografía:** FontAwesome 6 Free.

---

## Cómo Ejecutar en Desarrollo (Local)

Gracias a Docker, no necesitas lidiar con dependencias locales. Solo asegúrate de tener [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y corriendo en tu computadora.

Desde la misma carpeta donde está este `README.md`, abre tu terminal y ejecuta:

```bash
docker-compose up --build
```

Esto descargará una imagen ligera de Node, instalará las dependencias necesarias de `package.json` y levantará el servidor de desarrollo de Vite.
**El servidor estará disponible en:**
`http://localhost:5173`

*(Nota: Vite cuenta con "Hot Module Replacement", eso significa que todo cambio que hagas en los archivos `.scss`, `.js` o `.html` se reflejará instantáneamente sin tener que recargar la página).*

Para deter el servidor presiona `Ctrl + C` en terminal y si quieres destruir los contenedores, ejecuta `docker-compose down`.

---

## Cómo Construir para Producción (Go-Live)

Cuando la web esté lista y aprobada para subirse a un Hosting (Hostinger, cPanel, FTP tradicional, Vercel, etc.), no debes subir la carpeta completa. Debes **compilarla** primero, lo cual ofuscará tu código y minimizará el peso de los archivos.

Puedes hacerlo de dos formas:

### Opcion A: Usando Node local
Si tienes Node.js instalado en tu PC, abre tu consola, asegúrate de estar dentro de la carpeta del proyecto y corre:

```bash
npm install
npm run build
```

### Opcion B: Usando Docker (Recomendado)
Puedes ordenarle a tu entorno Dockerizado que compile el proyecto por ti:

```bash
docker-compose run web npm run build
```

### El Resultado Final (Subida FTP)

Ambos caminos generarán una nueva carpeta llamada **`dist/`** en la raíz de tu proyecto.
Esa carpeta `dist/` **es la verdadera página web terminada**. 

Contendrá tu `index.html` modificado para enlazar a archivos minificados, e integrará tu SCSS en un único archivo CSS y tu código JS en archivos puros dentro de la carpeta `assets/`.

**Son esos archivos DENTRO de la carpeta `dist/` los únicos que deberás arrastrar a tu cPanel, Administrador de archivos del Hosting o enviar mediante un cliente FTP (como Filezilla) a tu directorio `public_html`.**

---

## Arquitectura de Carpetas

Por si un desarrollador necesita expandir el diseño, aquí está cómo se segmentan los componentes:

```text
amarres-poderosos-one-page/
├── dist/                # (Aparecerá después de hacer 'build'. Código Listo para subir)
├── node_modules/        # (Descargado por Docker o npm, ignorado en subidas)
├── public/              # (Imágenes crudas o videos pesados de acceso libre)
├── src/                 # (El código maestro que tú debes editar)
│   ├── assets/          # (Imágenes usadas en SCSS o HTML / fonts locales)
│   ├── js/              # (Módulos vainilla: animations.js, main.js, navigation.js)
│   └── scss/            # (El cerebro del diseño)
│       ├── abstracts/   # (Mixins)
│       ├── base/        # (Reset global, tipografías personalizadas y el scrollbar)
│       ├── components/  # (Pedazos reusables: Botones, Cards, WA Button, Preloader)
│       ├── layout/      # (Estructura de cajas para Header, Footer, Grids)
│       └── sections/    # (Cada sección principal separada: Hero, Problemas, Testimonios...)
├── .gitignore           # (Excluye node_modules y copias de seguridad de git)
├── docker-compose.yml   # (Ajustes de servidor con puertos asíncronos para WSL)
├── Dockerfile           # (Instalador virtual de Alpine/NodeJS)
├── index.html           # (La Landing Page esquelética semántica)
├── package.json         # (Definiciones de Dependencias Frontend de Vite)
└── vite.config.js       # (Configuración especial para exponer IP local a móviles)
```

## Soporte WhatsApp
El botón transaccional de WhatsApp carga su destino como formato internacional en la línea flotante de HTML (clase `.whatsapp-float`). Al hacer clic automáticamente abre la APP / API de escritorio pre-cargando un texto definido como variable GET dentro del enlace: `https://wa.me/numerotelefonico?text=MiMensaje`.

desarrollado por: Santiago Peñaranda Peinado
github: https://github.com/Santiago-Penaranda-Peinado


## correcciones
- Reducir el espacio entre secciones
- Cambiar la imagen de la sección de "<!-- 3. SECCIÓN DE PROPUESTA DE VALOR -->"
- Quitar el filtro oscuro sobre las imagenes de las tarjetas de la segunda sección
- Revisar el responsivo
- Reducir el tamaño general de todos los botones, el el hero, boner los dos botones al mismo nivel en la version de pc
- Revisar los botones en la version de móvil
- Rediseñar el grid de la seccion "<!-- 5. SECCIÓN DE BENEFICIOS (Bento Box) -->" se ha solicitado que reduzcamos el tamaño general de la seccion.
