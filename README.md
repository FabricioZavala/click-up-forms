# ClickUp Forms

## 🚀 Comandos Docker

### Construir imagen de producción

```bash
docker build -t clickup-forms:prod .
```

<button onclick="navigator.clipboard.writeText('docker build -t clickup-forms:prod .')">Copiar comando</button>

### Ejecutar contenedor en puerto 8080

```bash
docker run -d -p 8080:80 --name container-clickup-forms clickup-forms:prod
```

<button onclick="navigator.clipboard.writeText('docker run -d -p 8080:80 --name container-clickup-forms clickup-forms:prod')">Copiar comando</button>

### Gestión de contenedores

# Ver contenedores en ejecución
```bash
docker ps
```

<button onclick="navigator.clipboard.writeText('docker ps')">Copiar comando</button>

# Detener el contenedor
```bash
docker stop container-clickup-forms
```

<button onclick="navigator.clipboard.writeText('docker stop container-clickup-forms')">Copiar comando</button>

# Iniciar el contenedor
```bash
docker start container-clickup-forms
```

<button onclick="navigator.clipboard.writeText('docker start container-clickup-forms')">Copiar comando</button>

# Eliminar el contenedor
```bash
docker rm container-clickup-forms
```

<button onclick="navigator.clipboard.writeText('docker rm container-clickup-forms')">Copiar comando</button>

# Eliminar la imagen
```bash
docker rmi clickup-forms:prod
```

<button onclick="navigator.clipboard.writeText('docker rmi clickup-forms:prod')">Copiar comando</button>

# Ver logs del contenedor
```bash
docker logs container-clickup-forms
```

<button onclick="navigator.clipboard.writeText('docker logs container-clickup-forms')">Copiar comando</button>

# Acceder al contenedor
```bash
docker exec -it container-clickup-forms /bin/bash
```

### Acceso

- **URL**: http://localhost:8080
