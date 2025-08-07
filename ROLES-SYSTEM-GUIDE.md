# 📋 Guía Completa del Sistema de Roles

Esta guía te explica cómo funciona el sistema de roles y cómo añadir o modificar roles y permisos en la aplicación.

## 🎯 ¿Cómo Funciona el Sistema de Roles?

El sistema utiliza **parámetros de URL** para determinar qué categorías y sistemas mostrar a cada usuario:

- **Sin rol**: `http://localhost:4200/` - Muestra todas las categorías y sistemas
- **Con rol**: `http://localhost:4200/?role=riesgo` - Muestra solo contenido permitido para ese rol

### Roles Disponibles

| Rol | Parámetro URL | Descripción |
|-----|---------------|-------------|
| **Riesgo** | `?role=riesgo` | Acceso limitado, enfocado en seguridad |
| **ATC** | `?role=atc` | Acceso técnico y administrativo |
| **Soporte** | `?role=soporte` | Acceso completo de soporte |
| **Marketing** | `?role=marketing` | Acceso a herramientas de marketing |

## 🛠️ Cómo Añadir un Nuevo Rol

### Paso 1: Actualizar el Enum de Roles

**Archivo:** `src/app/shared/models/role.enum.ts`

```typescript
export enum Role {
  RIESGO = 'riesgo',
  ATC = 'atc',
  SOPORTE = 'soporte',
  MARKETING = 'marketing',
  VENTAS = 'ventas', // ⬅️ Nuevo rol
}
```

### Paso 2: Configurar Permisos de Categorías

**Archivo:** `src/app/shared/constants/app-data.constants.ts`

En cada categoría, añade el nuevo rol al array `allowedRoles`:

```typescript
{
  id: 'bugs',
  name: 'Bugs',
  description: 'Reportar errores y problemas técnicos',
  // ... otros campos
  allowedRoles: ['riesgo', 'atc', 'soporte', 'ventas'], // ⬅️ Añadir aquí
  systems: [
    // ...
  ]
}
```

### Paso 3: Configurar Permisos de Sistemas (Opcional)

Si quieres que ciertos sistemas estén ocultos para el nuevo rol:

```typescript
{
  id: 'growth-hacking',
  name: 'Growth Hacking',
  description: 'Herramientas de crecimiento',
  // ... otros campos
  allowedRoles: ['atc', 'soporte', 'marketing'], // ⬅️ NO incluir 'ventas'
}
```

## 🔒 Cómo Ocultar Categorías para un Rol

### Ejemplo: Ocultar "Marketing" para el rol "riesgo"

**Archivo:** `src/app/shared/constants/app-data.constants.ts`

```typescript
{
  id: 'marketing',
  name: 'Marketing y Promociones',
  description: 'Gestión de campañas y promociones',
  // ... otros campos
  allowedRoles: ['atc', 'soporte', 'marketing'], // ⬅️ NO incluir 'riesgo'
  systems: [
    // ...
  ]
}
```

## 🎯 Cómo Ocultar Sistemas para un Rol

### Ejemplo: Ocultar "Growth Hacking" para el rol "riesgo"

**Archivo:** `src/app/shared/constants/app-data.constants.ts`

```typescript
{
  id: 'growth-hacking',
  name: 'Growth Hacking',
  description: 'Herramientas de crecimiento',
  formUrl: '',
  image: '/assets/img/systems/growth-hacking.png',
  color: 'from-violet-600 to-violet-700',
  allowedRoles: ['atc', 'soporte', 'marketing'], // ⬅️ Excluye 'riesgo'
}
```

## 📁 Archivos que Debes Modificar

### Para Añadir un Nuevo Rol:

1. **`src/app/shared/models/role.enum.ts`** - Definir el nuevo rol
2. **`src/app/shared/constants/app-data.constants.ts`** - Configurar permisos

### Para Modificar Permisos:

1. **`src/app/shared/constants/app-data.constants.ts`** - Solo este archivo

## 🔧 Configuración Actual de Permisos

### Categorías por Rol:

| Categoría | Riesgo | ATC | Soporte | Marketing |
|-----------|--------|-----|---------|-----------|
| **Bugs** | ✅ | ✅ | ✅ | ❌ |
| **Mejoras** | ✅ | ✅ | ✅ | ✅ |
| **Marketing** | ❌ | ❌ | ❌ | ✅ |
| **Gestión de Riesgo** | ✅ | ❌ | ❌ | ❌ |
| **Soporte Técnico** | ✅ | ✅ | ✅ | ✅ |

### Sistemas con Restricciones:

| Sistema | Categoría | Roles Excluidos |
|---------|-----------|-----------------|
| **Growth Hacking** | Bugs | Riesgo |

## 🚀 Ejemplos de URLs

```bash
# Ver todas las categorías (sin restricciones)
http://localhost:4200/

# Ver solo categorías permitidas para riesgo
http://localhost:4200/?role=riesgo

# Ver solo categorías permitidas para marketing
http://localhost:4200/?role=marketing

# Ver solo categorías permitidas para ATC
http://localhost:4200/?role=atc

# Ver solo categorías permitidas para soporte
http://localhost:4200/?role=soporte
```

## ⚡ Flujo del Sistema

1. **Usuario accede con URL** → `?role=riesgo`
2. **RoleService detecta el rol** → Extrae 'riesgo' de la URL
3. **CategoryFilterService filtra** → Solo muestra categorías permitidas
4. **SystemFilterService filtra** → Solo muestra sistemas permitidos
5. **Usuario ve contenido filtrado** → Según sus permisos

## 🎨 Características Técnicas

- **Filtrado en tiempo real**: Los cambios de rol se aplican inmediatamente
- **Sin recarga**: Usa observables para actualizaciones dinámicas
- **Fallback seguro**: Si no hay rol, muestra todo el contenido
- **Tipado fuerte**: Usa TypeScript para prevenir errores

## 🔍 Debugging

Para probar diferentes roles rápidamente:

```javascript
// En la consola del navegador
window.location.href = window.location.pathname + '?role=riesgo';
window.location.href = window.location.pathname + '?role=marketing';
window.location.href = window.location.pathname + '?role=atc';
window.location.href = window.location.pathname + '?role=soporte';
```

---

¿Necesitas ayuda? Revisa los servicios en `src/app/core/services/` para entender la lógica de filtrado.
