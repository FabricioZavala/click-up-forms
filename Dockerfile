# Dockerfile multi-stage para clickup-forms
# Optimizado para producción con mejores prácticas

# ========================
# Stage 1: Build Stage
# ========================
FROM node:20-alpine AS builder

# Configurar directorio de trabajo
WORKDIR /app

# Instalar dependencias del sistema necesarias para Angular
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    && ln -sf python3 /usr/bin/python

# Copiar archivos de configuración de dependencias
COPY package*.json ./

# Configurar npm
RUN npm config set fund false && \
    npm config set audit false


# Usamos npm install pq el ci da errorrr
RUN npm install --no-optional

# Copiar código fuente
COPY . .

# Construir la aplicación Angular
RUN npx ng build --configuration=production

# ========================
# Stage 2: Production Stage
# ========================
FROM nginx:1.26-alpine AS production

# Instalar herramientas útiles para debugging (opcional)
RUN apk add --no-cache \
    curl \
    tzdata \
    && rm -rf /var/cache/apk/*

# Configurar timezone (opcional)
ENV TZ=America/Guayaquil
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Remover configuración default de nginx
RUN rm -rf /usr/share/nginx/html/* && \
    rm /etc/nginx/conf.d/default.conf

# Copiar la aplicación construida desde el stage anterior
# Angular 20 genera la salida en dist/clickup-forms/browser
COPY --from=builder /app/dist/clickup-forms/browser /usr/share/nginx/html

# Copiar configuración personalizada de nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Crear directorio para logs si no existe
RUN mkdir -p /var/log/nginx

# Configurar permisos apropiados
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Nginx automáticamente cambia al usuario nginx después de iniciar

# Exponer puerto 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:80/health || exit 1

# Configurar labels para metadata
LABEL maintainer="Fabricio Zavala" \
    version="1.0.0" \
    description="ClickUp Forms Angular Application" \
    app.name="clickup-forms" \
    app.version="1.0.0"

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]