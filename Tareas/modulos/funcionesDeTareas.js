let fs = require("fs");
let data = fs.readFileSync("./tareas.json");
let tareas = JSON.parse(data);

const listarTareas = (comando) => {
  tareas.forEach((tarea, index, tareas) => {
    console.log(`${index + 1}) - ${tarea.titulo}`);
  });

  // Retorna undefined
};

module.exports = listarTareas;
