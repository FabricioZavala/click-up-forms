# Docker Setup para ClickUp Forms

##  Comandos Docker Disponibles

### Construcción de la Imagen
```bash
# O directamente con Docker
docker build -t clickup-forms .
```

### Ejecución del Contenedor

```bash
# O directamente con Docker
docker run -d -p 8080:80 --name clickup-forms-container clickup-forms
```

### Gestión del Contenedor

```bash
# Detener el contenedor
npm run docker:stop

# Eliminar el contenedor
npm run docker:remove

# Limpiar la imagen
npm run docker:clean
```

## 🔧 Configuración

### Puertos
- **Contenedor**: Puerto 80 (nginx)
- **Host**: Puerto 8080 (configurable)
- **Acceso**: http://localhost:8080

### Health Check
La imagen incluye un health check que verifica cada 30 segundos el endpoint `/health`.

### Variables de Entorno
- `NODE_ENV=production` (configurado en build time)
- `TZ=America/Guayaquil` (timezone configurado)

## 📁 Estructura de la Imagen

```
Stage 1 (Builder): node:20-alpine
├── Instalar dependencias
├── Construir aplicación Angular
└── Generar build de producción

Stage 2 (Production): nginx:1.26-alpine
├── Copiar build desde stage anterior
├── Configurar nginx
├── Setup de seguridad
└── Health checks
```

## 🔒 Características de Seguridad

- ✅ Ejecución con usuario no-root (nginx)
- ✅ Imagen base Alpine (menor superficie de ataque)
- ✅ Health checks configurados
- ✅ Headers de seguridad en nginx
- ✅ Cache optimizado para assets estáticos

## 🛠️ Troubleshooting

### Verificar que el contenedor está funcionando
```bash
docker ps
docker logs clickup-forms-container
```

### Acceder al contenedor para debugging
```bash
docker exec -it clickup-forms-container sh
```

### Limpiar todo (contenedores, imágenes, volumes)
```bash
docker system prune -a
```

## 📊 Optimizaciones Implementadas

1. **Multi-stage build**: Reduce el tamaño final de la imagen
2. **Cache mounting**: Acelera builds subsecuentes
3. **Layer caching**: Optimiza la reconstrucción
4. **Compression**: Gzip habilitado en nginx
5. **Security headers**: Headers de seguridad configurados
6. **Static assets caching**: Cache de 1 año para assets

## 🌐 Despliegue en Servidor

### Construcción para producción
```bash
docker build -t clickup-forms:latest .
```

### Ejecución en servidor
```bash
# Con restart automático
docker run -d \
  --name clickup-forms \
  --restart unless-stopped \
  -p 80:80 \
  clickup-forms:latest

# Con logs persistentes
docker run -d \
  --name clickup-forms \
  --restart unless-stopped \
  -p 80:80 \
  -v /var/log/clickup-forms:/var/log/nginx \
  clickup-forms:latest
```

### Configuración de proxy reverso (Nginx/Apache)
El contenedor expone el puerto 80, puedes configurar tu servidor web principal como proxy reverso hacia este contenedor.

## 📝 Notas Importantes

- La aplicación está optimizada para SPA (Single Page Application)
- Todos los routes de Angular son manejados por el `try_files` de nginx
- Los assets estáticos tienen cache configurado
- El contenedor incluye timezone configurado para Ecuador
- Se eliminaron las referencias a docker-compose del package.json