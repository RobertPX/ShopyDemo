# Nexvo Showcase — Documento de Arquitectura del Proyecto

**Autor:** Robert / Nexvo
**Fecha:** Junio 2026
**Estado:** Borrador inicial — sujeto a cambios según avance el desarrollo

---

## 1. Resumen del proyecto

Nexvo Showcase es una herramienta interna de demostración. No es un e-commerce real ni un producto para usuarios finales: es un configurador en vivo que usas en reuniones comerciales para mostrarle a un cliente potencial cómo se vería su tienda online, ajustando rubro, estilo visual y colores en tiempo real, sin tener que programar una demo distinta para cada reunión.

El resultado de cada sesión es un link de configuración que puedes compartir con el cliente por WhatsApp o email para que revise la propuesta después.

## 2. Alcance (Scope)

**Incluye (V1):**
- Selector de rubro en la página de inicio (10 rubros)
- Selector de estilo de tienda (se define en detalle en una fase posterior)
- Selector de tema de color, vía URL, sin caché
- Página de tienda con grid de productos
- Detalle de producto con galería de imágenes y descripción
- Botón de WhatsApp con mensaje precargado
- Botón de Reserva (flujo conceptual, sin pasarela de pago real)
- Toda la configuración reflejada en la URL para poder compartir un estado exacto

**No incluye (por ahora):**
- Base de datos
- Autenticación / panel de administración
- Pasarela de pago real
- Carrito de compras funcional
- Backend propio

Cuando un cliente decida contratar el proyecto real, esta base visual sirve de punto de partida y se le agrega backend, DB y pagos según lo que ese negocio necesite específicamente.

> Nota práctica: por ser una herramienta interna, conviene agregar `meta robots noindex` en estas páginas para que no aparezcan indexadas en buscadores.

## 3. Stack tecnológico

- **Next.js 14+ (App Router)** — rutas simples, SSR/SSG, despliegue directo en Vercel
- **TypeScript** — tipado de productos, temas y rubros
- **Tailwind CSS** — estilos rápidos, se apoya bien en variables CSS para el sistema de temas
- **Framer Motion** — transiciones suaves entre temas, rubros y al abrir modales
- **Lucide React** — iconos (WhatsApp, cerrar, carrito, etc.)
- **React Context + hook propio** (sin librería extra como Zustand, salvo que la complejidad lo justifique más adelante) — para sincronizar tema/rubro/layout con la URL
- **Vercel** — hosting gratuito, deploy automático por git push

Sin base de datos. Productos y temas viven como archivos dentro del propio repositorio.

Sugerencia de despliegue: usar un subdominio propio en lugar de la URL default de Vercel, por ejemplo `showcase.nexvoapp.lat`, para que se vea más profesional frente al cliente.

## 4. Arquitectura de información

### Rutas

- `/` → Home: selector de rubro (entrada principal) y selector de estilos (entrada secundaria, más abajo)
- `/demo` → Página de tienda configurable. Lee rubro, layout y tema desde los query params

### Parámetros de URL

```
/demo?rubro=zapatos&layout=grid&tema=oscuro
```

- `rubro` → qué set de productos se carga
- `layout` → qué formato visual se usa (Fase 2)
- `tema` → qué paleta de colores está activa

Como todo vive en la URL, compartir una configuración exacta con un cliente es copiar y pegar el link.

## 5. Sistema de temas

### Esquema del JSON (`/themes/themes.json`)

```json
[
  {
    "id": "oscuro",
    "name": "Oscuro",
    "swatch": "#1A1A1A",
    "colors": {
      "bg": "#0F0F0F",
      "bgSecondary": "#1A1A1A",
      "text": "#F5F5F5",
      "textSecondary": "#A3A3A3",
      "accent": "#8B5CF6",
      "accentHover": "#7C3AED",
      "border": "#2A2A2A",
      "cardBg": "#1F1F1F"
    }
  }
]
```

`swatch` es el color que se pinta en el botón del selector, sin necesidad de abrir nada para saber a qué se parece el tema.

### Variables CSS que consumen los componentes

`--bg`, `--bg-secondary`, `--text`, `--text-secondary`, `--accent`, `--accent-hover`, `--border`, `--card-bg`

Regla de oro: ningún componente usa un color hex directo. Todos consumen estas variables.

### Mecanismo

1. Se importa `themes.json` al cargar la app
2. Se genera un botón por tema usando `swatch` como color de fondo
3. Al hacer click, se toma el objeto `colors` del tema elegido y se inyecta en `:root` vía `document.documentElement.style.setProperty(...)`
4. El cambio es instantáneo porque todo el árbol de componentes ya depende de esas variables

### Temas iniciales (8)

Claro, Oscuro, Café/Tierra, Pastel, Elegante Negro-Dorado, Verde Natural, Azul Corporativo, Rosa/Fucsia.

### Agregar un tema nuevo

Se agrega un objeto más al array del JSON con sus 8 valores de color. No se toca ningún componente.

Importante: como el JSON vive dentro del repositorio (no en una base de datos externa ni un CMS), agregar un tema sigue requiriendo un commit + redeploy en Vercel. Es trivial a nivel de código, pero no es edición en vivo desde el navegador.

## 6. Sistema de rubros

### Rubros confirmados (10)

Ropa, Zapatos, Comida, Consumibles, Electrónica, Belleza/Cosmética, Hogar/Decoración, Mascotas, Joyería/Accesorios, Deportivo/Fitness.

### Esquema de producto

```ts
interface Producto {
  id: string;
  nombre: string;
  precio: number;
  categoria: string;
  descripcionCorta: string;
  descripcionLarga: string;
  imagenes: string[];
  destacado?: boolean;
}
```

Cada rubro es un archivo (`/data/rubros/zapatos.ts`) que exporta un array de `Producto[]`. Se recomienda entre 8 y 12 productos por rubro: suficiente para que el grid se vea poblado sin disparar el trabajo de curaduría de contenido.

### Imágenes

Fotos de stock de Unsplash o Pexels (uso libre), organizadas en `/public/images/<rubro>/`. Es la parte más manual del proyecto — cada rubro nuevo implica buscar y seleccionar buenas fotos.

## 7. Sistema de layouts (Fase 2 — pendiente de definir)

Todavía no se define el detalle de cada estilo (grid grande, imagen única, 3D, etc.), eso se trabaja por partes más adelante.

Lo único que se fija ahora a nivel de arquitectura es que el componente de tienda debe aceptar el layout como una pieza intercambiable:

```tsx
<TiendaLayout layout={layoutSeleccionado} productos={productos} />
```

Así, cuando se diseñe cada estilo, se agrega como una variante más sin reescribir la lógica de datos, temas o botones de acción.

## 8. Componentes principales

- `RubroSelector` — grid de tarjetas de rubro en home
- `LayoutSelector` — sección inferior de home con accesos a los estilos
- `ThemeSwitcher` — barra superior con los botones de color
- `ProductGrid` / `ProductCard` — listado de productos
- `ProductDetailModal` — galería de fotos + descripción al abrir un producto
- `WhatsAppButton` — link directo con mensaje precargado
- `ReservaModal` — formulario simple (nombre, teléfono, producto)
- `StoreHeader` — encabezado de tienda que combina tema + navegación

## 9. Funcionalidades clave de producto

### Botón WhatsApp

```
https://wa.me/591XXXXXXXX?text=Hola,%20me%20interesa%20el%20producto%20[nombre]
```

Número y mensaje base configurables por rubro, o genéricos para la demo.

### Botón Reserva

En la demo abre un modal simple (nombre, teléfono, producto seleccionado) sin procesar ningún pago real. El objetivo es mostrarle al cliente el concepto: "aquí el cliente final reserva y paga, después retira el producto". Cuando el proyecto se vuelva real, ese modal se conecta a la pasarela de pago que el negocio necesite.

### Galería / detalle de producto

Al hacer click en un producto se abre un modal o vista de detalle con carrusel de imágenes y la descripción completa.

## 10. Estado y configuración compartible

Sin caché ni `localStorage`. Todo el estado (rubro, layout, tema) se sincroniza con los query params de la URL mediante `useSearchParams` / `useRouter` de Next.js. Esto permite:

- Refrescar la página sin perder la configuración actual
- Compartir un link exacto con un cliente después de la reunión
- No depender del dispositivo o navegador usado

## 11. Estructura de carpetas propuesta

```
/app
  page.tsx                  → Home (selector de rubro + estilos)
  /demo
    page.tsx                → Tienda configurable (lee searchParams)
  layout.tsx
  globals.css               → variables CSS base

/components
  /home
    RubroSelector.tsx
    LayoutSelector.tsx
  /store
    StoreHeader.tsx
    ThemeSwitcher.tsx
    ProductGrid.tsx
    ProductCard.tsx
    ProductDetailModal.tsx
    WhatsAppButton.tsx
    ReservaModal.tsx
  /ui

/data
  /rubros
    ropa.ts
    zapatos.ts
    comida.ts
    consumibles.ts
    electronica.ts
    belleza.ts
    hogar.ts
    mascotas.ts
    joyeria.ts
    deportivo.ts
  rubros.config.ts          → metadata de cada rubro (nombre, slug, ícono)

/themes
  themes.json

/lib
  useTiendaConfig.ts         → hook que sincroniza estado <-> URL
  whatsapp.ts                → helper para armar el link

/public
  /images
    /ropa
    /zapatos
    ...
```

## 12. Roadmap de desarrollo

1. **Fase 1 — Base:** setup Next.js + Tailwind, sistema de temas completo y funcional, home con selector de rubros
2. **Fase 2 — Tienda mínima:** un layout (grid clásico), botones de WhatsApp y Reserva funcionando
3. **Fase 3 — Contenido:** carga de productos y fotos para los 10 rubros
4. **Fase 4 — Layouts adicionales:** diseñar y construir cada estilo visual alternativo
5. **Fase 5 — Pulido y deploy:** animaciones, ajustes finales, dominio propio en Vercel

## 13. Decisiones pendientes

- Detalle de cada layout/estilo (grid grande, imagen única, 3D, etc.) — Fase 2
- Si el botón de Reserva en la demo debe enviar algo real (email, WhatsApp) o quedarse solo visual
- Cantidad exacta de productos por rubro
- Si en algún punto se justifica sumar Zustand u otra librería de estado, o si el Context propio es suficiente
