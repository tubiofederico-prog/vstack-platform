# 🎬 VSTACK - Premium Vertical Entertainment Platform

Una plataforma web premium de entretenimiento vertical estilo Netflix, diseñada como un prototipo visual completo con Next.js 16, TypeScript y Tailwind CSS. Incluye 3 dashboards integrados (Usuario, Administrador, Anunciante) con 23+ páginas navegables y datos 100% mockeados.

## 🌟 Características Principales

### 📱 Dashboards Integrados

**Dashboard Usuario (8 rutas)**
- 🏠 Home streaming con contenido destacado
- 🎬 Catálogo completo con búsqueda y filtros
- 💰 Sistema de wallet/monedas
- 🎫 Compras de contenido
- ⭐ Lista de favoritos
- 🎥 Reproductor vertical
- 📺 Detalles de series y episodios
- 💳 Planes de suscripción

**Dashboard Admin (8 rutas)**
- 📊 Dashboard con métricas principales
- 📹 Gestión de contenidos
- 👥 Administración de usuarios
- 📈 Analytics detallada con gráficos
- 📋 Reportes y análisis
- ⚙️ Configuración de plataforma

**Dashboard Anunciante (6 rutas)**
- 📊 Dashboard con campañas activas
- 📢 Listado y detalle de campañas
- 📄 Reportes comerciales
- 📊 Métricas de ROI
- ⚙️ Configuración de cuenta
- 🎯 Crear nuevas campañas

### 🎨 Diseño Premium

- **Tema Netflix Rojo**: Color primario #e50914 con gradientes naranja
- **Dark Mode Completo**: Negro puro (#0a0a0a) con grises oscuros
- **Glassmorphism**: Efectos de vidrio translúcido
- **Animaciones Suaves**: Transiciones y microinteracciones
- **100% Responsive**: Mobile-first design

## 🚀 Instalación

```bash
# Clonar
git clone https://github.com/tubiofederico-prog/vstack-platform.git
cd vstack-platform

# Instalar
npm install

# Desarrollo
npm run dev
# http://localhost:3000
```

## 📁 Estructura

```
vstack-platform/
├── app/
│   ├── auth/          # Login, Register
│   ├── dashboard/     # User, Admin, Advertiser
│   └── page.tsx       # Landing
├── components/
│   ├── layout/        # Sidebar, Topbar, DashboardLayout
│   ├── ui/            # Button, Badge
│   └── dashboard/     # ContentCard, StatCard
├── data/mock.ts       # Datos mockeados
└── types/index.ts     # TypeScript types
```

## 🎯 Rutas Disponibles

### Landing & Auth
- `/` - Landing page
- `/auth/login` - Login
- `/auth/register` - Registro

### Dashboard Usuario (8 rutas)
- `/dashboard/user` - Home
- `/dashboard/user/catalog` - Catálogo
- `/dashboard/user/favorites` - Favoritos
- `/dashboard/user/purchases` - Compras
- `/dashboard/user/wallet` - Wallet
- `/dashboard/user/subscription` - Suscripciones
- `/dashboard/user/series/[id]` - Serie
- `/dashboard/user/player/[id]/[episode]` - Reproductor

### Dashboard Admin (8 rutas)
- `/dashboard/admin` - Home
- `/dashboard/admin/content` - Contenidos
- `/dashboard/admin/analytics` - Analytics
- `/dashboard/admin/users` - Usuarios
- `/dashboard/admin/reports` - Reportes
- `/dashboard/admin/settings` - Config
- `/dashboard/admin/content/create` - Crear

### Dashboard Advertiser (6 rutas)
- `/dashboard/advertiser` - Home
- `/dashboard/advertiser/campaigns` - Campañas
- `/dashboard/advertiser/campaigns/create` - Crear
- `/dashboard/advertiser/campaigns/[id]` - Detalle
- `/dashboard/advertiser/reports` - Reportes
- `/dashboard/advertiser/settings` - Config

## 🛠️ Stack

- **Next.js 16** - Framework
- **TypeScript** - Tipado
- **Tailwind CSS v4** - Estilos
- **Recharts** - Gráficos
- **Lucide React** - Iconos

## 🎬 Características

✅ 23+ rutas funcionales  
✅ 0 errores 404  
✅ Tema Netflix rojo premium  
✅ 100% responsive  
✅ Datos realistas mockeados  
✅ 3 dashboards completos  
✅ Componentes reutilizables  
✅ Animaciones suaves  

## 📊 Datos Incluidos

- 8 Series con episodios
- 4 Planes de suscripción
- 5 Paquetes de monedas
- 3 Campañas publicitarias
- 12 meses de métricas
- 1000+ puntos de datos

## 📄 Licencia

MIT

---

**Status**: ✅ 100% Completo

Repository: [GitHub](https://github.com/tubiofederico-prog/vstack-platform)
