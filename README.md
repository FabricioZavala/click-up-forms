### Ejecutar en servidor
docker-compose up -d --build


# Ver logs
docker logs clickup-forms-app

# Parar
docker-compose down

# Actualizar
docker-compose down && docker-compose up -d --build
