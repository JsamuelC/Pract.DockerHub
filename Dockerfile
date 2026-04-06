# Imagen base
FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos
COPY package.json .
COPY app.js .

# Instalar dependencias (aunque aquí no hay)
RUN npm install

# Exponer puerto
EXPOSE 3000

# Comando para ejecutar
CMD ["node", "app.js"]