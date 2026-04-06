# 🚀 Práctica DevOps - Hola Mundo con Docker y CI/CD

## 📌 Descripción

Este proyecto consiste en la creación de una aplicación web sencilla "Hola Mundo", su contenerización con Docker y la automatización del proceso de construcción y publicación utilizando GitHub Actions.

---

## 🧠 Tecnologías utilizadas

* Node.js
* Docker
* Docker Hub
* GitHub Actions

---

## 📁 Estructura del proyecto

```
.
├── app.js
├── package.json
├── Dockerfile
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## ▶️ Ejecución local

### 1. Clonar repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

### 2. Construir imagen Docker

```bash
docker build -t hola-mundo .
```

### 3. Ejecutar contenedor

```bash
docker run -p 3000:3000 hola-mundo
```

### 4. Abrir en navegador

```
http://localhost:3000
```

---

## 🐳 Imagen en Docker Hub

La imagen del proyecto se encuentra en:

👉 https://hub.docker.com/r/leonsadakenedi/hola-mundo

---

## ⚙️ CI/CD con GitHub Actions

Se implementó un pipeline que automatiza:

* Construcción de la imagen Docker
* Publicación en Docker Hub

El pipeline se ejecuta automáticamente al hacer push a la rama `main`.

---

## 🔐 Variables de entorno (GitHub Secrets)

Para el funcionamiento del pipeline se configuraron:

```
DOCKER_USERNAME
DOCKER_PASSWORD
```

---

## 🔄 Flujo DevOps implementado

```
Código → Docker → GitHub → GitHub Actions → Docker Hub
```

---

## 🎯 Resultados

* Aplicación web funcional
* Imagen Docker creada y publicada
* Automatización del proceso mediante CI/CD

---

## 📌 Autor

**Josue Samuel Campusano**

---

## 📄 Nota

El despliegue en producción puede integrarse fácilmente con plataformas cloud como Render o similares.
