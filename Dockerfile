# Dockerfile multi-stage para clickup-forms
# Optimizado para producción con mejores prácticas

# ========================
# Stage 1: Build Stage
# ========================
FROM node:20-alpine AS builder

# Configurar directorio de trabajo
WORKDIR /app

# Configurar argumentos de construcción
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Instalar dependencias del sistema necesarias para Angular
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    && ln -sf python3 /usr/bin/python

# Copiar archivos de configuración de dependencias
COPY package*.json ./

# Configurar npm para producción
RUN npm config set fund false && \
    npm config set audit false

# Instalar todas las dependencias (necesarias para el build de Angular)
RUN --mount=type=cache,target=/root/.npm \
    npm ci --silent && \
    npm cache clean --force

# Copiar código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build:prod

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
COPY --from=builder /app/dist/clickup-forms/browser /usr/share/nginx/html

# Copiar configuración personalizada de nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Crear directorio para logs si no existe
RUN mkdir -p /var/log/nginx

# Configurar permisos apropiados
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Crear usuario no-root para seguridad (nginx ya corre como nginx user)
USER nginx

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