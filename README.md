# 🎮 Videogames API

Una API RESTful para gestionar videojuegos, desarrollada con **Node.js** y **Express.js**.

## ✨ Funcionalidades
--------------------

- 📜 **Listar todos los videojuegos**
- 🔍 **Obtener un videojuego por ID**
- ➕ **Insertar un nuevo videojuego**
- ✏️ **Actualizar un videojuego existente**
- 🗑️ **Eliminar un videojuego**

## 🚀 Instalación
----------------

### 1️⃣ Clonar el repositorio:

Clona el repositorio utilizando el siguiente comando:

`git clone https://github.com/ramiroec/videogames-api.git`

### 2️⃣ Instalar las dependencias:

Una vez clonado el repositorio, navega dentro de la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias:

`npm install`

### 3️⃣ Iniciar el servidor:

Para iniciar el servidor, ejecuta el siguiente comando:

`node app.js`

## 📋 Utilización
----------------

### Listar todos los videojuegos
- **Método:** GET  
- **URL:** `/videogames`  
- **Respuesta:** JSON con la lista de videojuegos

### Obtener un videojuego por ID
- **Método:** GET  
- **URL:** `/videogames/:id`  
- **Parámetros:** `id` (número entero)  
- **Respuesta:** JSON con el videojuego correspondiente al ID

### Insertar un nuevo videojuego
- **Método:** POST  
- **URL:** `/videogames`  
- **Cuerpo:** JSON con los datos del videojuego (nombre, descripción, etc.)  
- **Respuesta:** JSON con el videojuego insertado

### Actualizar un videojuego existente
- **Método:** PUT  
- **URL:** `/videogames/:id`  
- **Parámetros:** `id` (número entero)  
- **Cuerpo:** JSON con los datos actualizados del videojuego  
- **Respuesta:** JSON con el videojuego actualizado

### Eliminar un videojuego
- **Método:** DELETE  
- **URL:** `/videogames/:id`  
- **Parámetros:** `id` (número entero)  
- **Respuesta:** Sin contenido (204 No Content)

## 📦 Dependencias
-----------------

- **express:** framework para crear aplicaciones web con Node.js
- **body-parser:** middleware para parsear el cuerpo de las solicitudes HTTP
- **fs:** módulo para interactuar con el sistema de archivos

## 📜 **Licencia**
Este proyecto está bajo la licencia MIT. Siéntete libre de usar y modificarlo.

---

## Autor

Creado por **Ramiro Estigarribia Canese**.  
Si tienes alguna pregunta o sugerencia, no dudes en contactarme.
