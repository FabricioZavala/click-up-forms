# ClickUp Forms

Aplicación Angular 18 stand-alone para gestión de formularios dinámicos basados en roles.

## Características

- **Angular 18** con standalone components
- **Tailwind CSS** para estilos
- **Routing** dinámico basado en roles
- **Zoneless** architecture (sin zone.js)
- **Modal con iframe** para formularios externos
- **Responsive design** con grid adaptativo

## Estructura del Proyecto

```
src/
├─ app/
│  ├─ core/
│  │  ├─ guards/
│  │  │  └─ role.guard.ts
│  │  └─ services/
│  │     ├─ config.service.ts
│  │     └─ role.service.ts
│  ├─ features/
│  │  ├─ categories/
│  │  │  ├─ category-list.component.ts
│  │  │  ├─ category-list.component.html
│  │  │  └─ category-list.component.scss
│  │  └─ systems/
│  │     ├─ system-list.component.ts
│  │     ├─ system-list.component.html
│  │     ├─ system-list.component.scss
│  │     └─ form-modal.component.ts
│  ├─ shared/
│  │  ├─ components/
│  │  │  ├─ button-primary.component.ts
│  │  │  └─ loading-spinner.component.ts
│  │  └─ models/
│  │     ├─ role.enum.ts
│  │     └─ config.types.ts
│  └─ app.routes.ts
└─ assets/
   └─ form-config.json
```

## Instalación y Ejecución

1. **Clonar o descargar el proyecto**

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**

   ```bash
   npm start
   # o
   ng serve
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

## Uso

### URLs de Acceso

La aplicación requiere un parámetro `role` en la URL:

- **Rol Riesgo**: `http://localhost:4200/?role=riesgo`
- **Rol ATC**: `http://localhost:4200/?role=atc`
- **Rol Soporte**: `http://localhost:4200/?role=soporte`

### Configuración

El archivo `src/assets/form-config.json` contiene:

- Roles disponibles
- Categorías por rol
- Sistemas por categoría
- URLs de formularios (actualmente vacías - placeholder)

### Flujo de Navegación

1. **Landing** → Muestra categorías filtradas por rol
2. **Categoría** → Lista sistemas disponibles
3. **Sistema** → Abre modal con iframe del formulario
4. **Formulario** → Al enviar cierra modal y vuelve al inicio

### Personalización

Para agregar nuevas categorías o sistemas, edita `form-config.json`:

```json
{
  "roles": ["riesgo", "atc", "soporte"],
  "categories": {
    "nueva-categoria": {
      "label": "Nueva Categoría",
      "icon": "icon-name",
      "roles": ["riesgo"],
      "systems": {
        "Sistema1": "https://url-del-formulario.com",
        "Sistema2": ""
      }
    }
  }
}
```

## Tecnologías

- Angular 18 (Zoneless)
- Tailwind CSS 3.4
- TypeScript
- RxJS
- Angular Router

## Notas

- Sin autenticación implementada
- Sin pruebas unitarias (archivos `.spec.ts` omitidos)
- Sin configuración de hosting adicional
- Modal escucha el evento `postMessage` con `form:sended` para cerrar

## Comandos Útiles

```bash
# Desarrollo
npm start
npm run watch

# Producción
npm run build

# Linting
npm run lint

# Instalar dependencias
npm install
```
