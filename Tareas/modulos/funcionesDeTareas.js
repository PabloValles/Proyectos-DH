let fs = require("fs");
let data = fs.readFileSync("./tareas.json");
let tareas = JSON.parse(data);

const listarTareas = (comando) => tareas;

module.exports = listarTareas;
