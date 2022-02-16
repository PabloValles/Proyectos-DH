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

  case "filtrarPorEstado":
    let estado = process.argv[3];
    let tareasFiltradas = tareas.filtrarEstado(estado);
    tareas.listar(tareasFiltradas);
    break;

  case "actualizar":
    let tituloTarea = process.argv[3];
    let nuevoEstado = process.argv[4];
    tareas.actualizar(tituloTarea, nuevoEstado);
    tareas.listar();
    break;

  case "eliminar":
    let tareaEliminar = process.argv[3];
    tareas.eliminar(tareaEliminar);
    tareas.listar();
    break;

  case undefined:
    console.log("Atención - Tienes que pasar una acción.");
    break;

  default:
    console.log("No entiendo qué quieres hacer.");
    break;
}
