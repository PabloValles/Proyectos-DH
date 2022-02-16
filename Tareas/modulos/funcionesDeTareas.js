let fs = require("fs");
let data = fs.readFileSync("./tareas.json");
//fs.writeFileSync()
let tareas = JSON.parse(data);

/* const listarTareas = () => {
  tareas.forEach((tarea, index, tareas) => {
    console.log(`${index + 1}) - ${tarea.titulo}`);
  });

  // Retorna undefined
  return;
}; */

let listarTareas = {
  listar() {
    tareas.forEach((tarea, index, tareas) => {
      console.log(`${index + 1}) - ${tarea.titulo}`);
    });
  },
};

module.exports = listarTareas;
