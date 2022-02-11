let fs = require("fs");
let data = fs.readFileSync("./tareas.json");
let tareas = JSON.parse(data);

const listarTareas = (comando) => {
  if (comando !== undefined) {
    return comando === "listar" ? tareas : "No entiendo qué quieres hacer.";
  } else {
    return "Atención - Tienes que pasar una acción.";
  }
};

module.exports = listarTareas;
