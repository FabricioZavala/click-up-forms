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

```bash
# Ver contenedores en ejecución
docker ps
```

<button onclick="navigator.clipboard.writeText('docker ps')">Copiar comando</button>

```bash
# Detener el contenedor
docker stop container-clickup-forms
```

<button onclick="navigator.clipboard.writeText('docker stop container-clickup-forms')">Copiar comando</button>

```bash
# Iniciar el contenedor
docker start container-clickup-forms
```

<button onclick="navigator.clipboard.writeText('docker start container-clickup-forms')">Copiar comando</button>

```bash
# Eliminar el contenedor
docker rm container-clickup-forms
```

<button onclick="navigator.clipboard.writeText('docker rm container-clickup-forms')">Copiar comando</button>

```bash
# Eliminar la imagen
docker rmi clickup-forms:prod
```

<button onclick="navigator.clipboard.writeText('docker rmi clickup-forms:prod')">Copiar comando</button>

```bash
# Ver logs del contenedor
docker logs container-clickup-forms
```

<button onclick="navigator.clipboard.writeText('docker logs container-clickup-forms')">Copiar comando</button>

```bash
# Acceder al contenedor
docker exec -it container-clickup-forms /bin/bash
```

<button onclick="navigator.clipboard.writeText('docker exec -it container-clickup-forms /bin/bash')">Copiar comando</button>

### Acceso

- **URL**: http://localhost:8080
