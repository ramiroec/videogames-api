const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = 'videogames.json';

app.use(bodyParser.json());

// Función auxiliar para leer el archivo JSON
const readData = () => {
  console.log('Leyendo datos del archivo JSON...');
  const data = fs.readFileSync(DATA_FILE);
  console.log('Datos leídos correctamente.');
  return JSON.parse(data);
};

// Función auxiliar para escribir en el archivo JSON
const writeData = (data) => {
  console.log('Escribiendo datos en el archivo JSON...');
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  console.log('Datos escritos correctamente.');
};

// Ruta principal
app.get('/', (req, res) => {
  console.log('Acceso a la ruta principal /');
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Listar todos los videojuegos
app.get('/videogames', (req, res) => {
  console.log('Acceso a GET /videogames');
  const videogames = readData();
  console.log('Videojuegos obtenidos:', videogames);
  res.json(videogames);
});

// Obtener un videojuego por id
app.get('/videogames/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`Acceso a GET /videogames/${id}`);
  const videogames = readData();
  const videogame = videogames.find(vg => vg.id === id);

  if (videogame) {
    console.log(`Videojuego encontrado:`, videogame);
    res.json(videogame);
  } else {
    console.log(`Videojuego con id ${id} no encontrado.`);
    res.status(404).json({ message: 'Videogame not found' });
  }
});

// Insertar un nuevo videojuego
app.post('/videogames', (req, res) => {
  console.log('Acceso a POST /videogames');
  const videogames = readData();
  const newVideogame = req.body;
  newVideogame.id = videogames.length ? videogames[videogames.length - 1].id + 1 : 1;
  console.log('Nuevo videojuego a insertar:', newVideogame);
  videogames.push(newVideogame);
  writeData(videogames);
  console.log('Videojuego insertado correctamente.');
  res.status(201).json(newVideogame);
});

// Actualizar un videojuego existente
app.put('/videogames/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`Acceso a PUT /videogames/${id}`);
  const videogames = readData();
  const index = videogames.findIndex(vg => vg.id === id);

  if (index !== -1) {
    const updatedVideogame = { ...videogames[index], ...req.body };
    console.log('Videojuego actualizado:', updatedVideogame);
    videogames[index] = updatedVideogame;
    writeData(videogames);
    res.json(updatedVideogame);
  } else {
    console.log(`Videojuego con id ${id} no encontrado.`);
    res.status(404).json({ message: 'Videogame not found' });
  }
});

// Eliminar un videojuego
app.delete('/videogames/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`Acceso a DELETE /videogames/${id}`);
  const videogames = readData();
  const newVideogames = videogames.filter(vg => vg.id !== id);

  if (newVideogames.length !== videogames.length) {
    console.log(`Videojuego con id ${id} eliminado.`);
    writeData(newVideogames);
    res.status(204).send();
  } else {
    console.log(`Videojuego con id ${id} no encontrado.`);
    res.status(404).json({ message: 'Videogame not found' });
  }
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
