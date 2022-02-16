let tareas = require("./modulos/funcionesDeTareas");

let comando = process.argv[2];

switch (comando) {
  case "listar":
    tareas.listar();
    break;
  case undefined:
    console.log("Atención - Tienes que pasar una acción.");
    break;

  default:
    console.log("No entiendo qué quieres hacer.");
    break;
}
