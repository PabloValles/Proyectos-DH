const { listar } = require("./modulos/funcionesDeTareas");
let tareas = require("./modulos/funcionesDeTareas");

let comando = process.argv[2];

switch (comando) {
  case "listar":
    tareas.listar();
    break;
  case "guardar":
    let tarea = {
      titulo: process.argv[3],
      estado: "pendiente",
    };
    tareas.guardar(tarea);
    tareas.listar();
    break;
  case "filtrar":
    let estado = process.argv[3];
    let tareasFiltradas = tareas.filtrarEstado(estado);
    tareas.listar(tareasFiltradas);
    break;
  case undefined:
    console.log("Atención - Tienes que pasar una acción.");
    break;

  default:
    console.log("No entiendo qué quieres hacer.");
    break;
}
