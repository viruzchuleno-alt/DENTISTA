# 🦷 Clínica Dental - Sitio Web Profesional

Sitio web moderno para clínica odontológica, construido con Next.js 14, TypeScript y Tailwind CSS. Diseño inspirado en Standard Bots adaptado al sector salud dental.

## 🎨 Características

- **Diseño Premium**: Paleta de colores oscura y profesional con acentos cyan
- **Totalmente Responsivo**: Mobile-first design
- **Animaciones Fluidas**: Framer Motion para transiciones suaves
- **SEO Optimizado**: Metadata y estructura semántica
- **Tipografía Custom**: Google Fonts (Sora + DM Sans)
- **Rendimiento**: Next.js 14 con App Router

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ instalado
- npm o yarn

### Instalación

1. **Navega a la carpeta del proyecto**:
   ```bash
   cd dental-clinic
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**:
   Visita [http://localhost:3000](http://localhost:3000)

## 📦 Comandos Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter de código
```

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Brand Dark | `#36213E` | Fondos principales, navbar, footer |
| Brand Purple | `#554971` | Secciones secundarias, hover states |
| Brand Slate | `#63768D` | Texto secundario, bordes |
| Brand Cyan | `#8AC6D0` | Iconos, acentos, hover |
| Brand Light | `#B8F3FF` | CTAs primarios, highlights |

## 📁 Estructura del Proyecto

```
dental-clinic/
├── app/
│   ├── layout.tsx           # Layout principal con fuentes
│   ├── page.tsx             # Página home
│   ├── globals.css          # Estilos globales
│   ├── servicios/
│   │   └── page.tsx         # Página de servicios
│   └── contacto/
│       └── page.tsx         # Página de contacto
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Navegación fija
│   │   └── Footer.tsx       # Footer con columnas
│   ├── sections/
│   │   ├── Hero.tsx         # Hero fullscreen
│   │   ├── Services.tsx     # Grid de servicios
│   │   ├── About.tsx        # Sobre la doctora
│   │   ├── WhyUs.tsx        # Por qué elegirnos
│   │   ├── Testimonials.tsx # Testimonios de pacientes
│   │   └── CtaBanner.tsx    # CTA final
│   └── ui/
│       └── ServiceCard.tsx  # Card de servicio
├── tailwind.config.ts       # Configuración Tailwind
├── tsconfig.json            # Configuración TypeScript
└── package.json             # Dependencias
```

## 🌟 Secciones del Sitio

### Página Principal (/)
1. **Hero**: Banner fullscreen con CTA principal
2. **Servicios**: Grid de 6 tratamientos dentales
3. **Banda de confianza**: Logos de instituciones
4. **Sobre nosotros**: Misión y estadísticas
5. **Por qué elegirnos**: 4 puntos diferenciadores
6. **Testimonios**: 3 reseñas de pacientes
7. **CTA Banner**: Llamado a acción final

### Servicios (/servicios)
- Grid de servicios expandido
- Información detallada: descripción, duración, precio
- Imágenes para cada tratamiento

### Contacto (/contacto)
- Formulario de contacto completo
- Información de ubicación y horarios
- Mapa de Google Maps embebido
- Links a redes sociales

## 🔧 Tecnologías

- **Next.js 14**: React framework con App Router
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Utility-first CSS
- **Framer Motion**: Animaciones
- **Google Fonts**: Sora + DM Sans

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ☁️ Deploy en Cloudflare Pages

Este proyecto está optimizado para Cloudflare Pages con static export.

### Configuración en Cloudflare Pages:

1. **Conecta tu repositorio GitHub** en Cloudflare Pages
2. **Configuración de build:**
   - **Framework preset**: `Next.js`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node version**: `18.17.0` (se detecta automáticamente desde `.node-version`)

3. **Variables de entorno** (si las necesitas):
   - Ninguna requerida para el deploy básico

4. **Deploy:**
   - Cloudflare hará el deploy automático en cada push a `main`
   - URL de producción disponible en ~2 minutos

### Build local para testing:

```bash
npm run build
# Los archivos estáticos se generan en la carpeta /out
```

## 🎯 Próximos Pasos

- [ ] Conectar formulario de contacto a backend/email
- [ ] Agregar galería de antes/después
- [ ] Sistema de reservas online
- [ ] Blog de salud dental
- [ ] Integración con WhatsApp Business API

## 📄 Licencia

Proyecto desarrollado siguiendo las especificaciones del prompt proporcionado.

---

**Desarrollado en Chile 🇨🇱 | Deploy-ready para Cloudflare Pages**
