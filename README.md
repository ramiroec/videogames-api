# Videogames API
================

Una API RESTful para gestionar videojuegos, desarrollada con Node.js y Express.js.

## Funcionalidades
----------------

* Listar todos los videojuegos
* Obtener un videojuego por ID
* Insertar un nuevo videojuego
* Actualizar un videojuego existente
* Eliminar un videojuego

## Instalación
------------

### 1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/videogames-api.git
```

### 2. Instala las dependencias:
```bash
npm install
```

### 3. Inicia el servidor:
```bash
node app.js
```
### 4. Utilización

### Listar todos los videojuegos
**Método:** GET  
**URL:** `/videogames`  
**Respuesta:** JSON con la lista de videojuegos

### Obtener un videojuego por ID
**Método:** GET  
**URL:** `/videogames/:id`  
**Parámetros:** `id` (número entero)  
**Respuesta:** JSON con el videojuego correspondiente al ID

### Insertar un nuevo videojuego
**Método:** POST  
**URL:** `/videogames`  
**Cuerpo:** JSON con los datos del videojuego (nombre, descripción, etc.)  
**Respuesta:** JSON con el videojuego insertado

### Actualizar un videojuego existente
**Método:** PUT  
**URL:** `/videogames/:id`  
**Parámetros:** `id` (número entero)  
**Cuerpo:** JSON con los datos actualizados del videojuego  
**Respuesta:** JSON con el videojuego actualizado

### Eliminar un videojuego
**Método:** DELETE  
**URL:** `/videogames/:id`  
**Parámetros:** `id` (número entero)  
**Respuesta:** Sin contenido (204 No Content)

## Dependencias
---------------

* **express:** framework para crear aplicaciones web con Node.js
* **body-parser:** middleware para parsear el cuerpo de las solicitudes HTTP
* **fs:** módulo para interactuar con el sistema de archivos


