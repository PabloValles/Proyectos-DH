let comando = process.argv[2];

let tareas = require("./modulos/funcionesDeTareas");

console.log(tareas(comando));
