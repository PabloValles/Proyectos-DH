let fs = require("fs");

let moduloTareas = {
  file: "./tareas.json",
  leerJSON() {
    let data = fs.readFileSync(this.file, "utf-8");
    let tareas = JSON.parse(data);
    return tareas;
  },
  escribirJSON(tareas) {
    let tareasJson = JSON.stringify(tareas);
    fs.writeFileSync(this.file, tareasJson);
  },
  listar(arg) {
    if (!arg) {
      let tareas = this.leerJSON();

      tareas.forEach((tarea, index, tareas) => {
        console.log(
          `${index + 1} | Tarea: ${tarea.titulo} -> estado: ${tarea.estado} `
        );
      });
    } else {
      arg.forEach((tarea, index, tareas) => {
        console.log(
          `${index + 1} | Tarea: ${tarea.titulo} -> estado: ${tarea.estado} `
        );
      });
    }
  },
  guardar(tarea) {
    let tareas = this.leerJSON();
    tareas.push(tarea);
    this.escribirJSON(tareas);
  },
  filtrarEstado(estado) {
    let tareas = this.leerJSON();
    return tareas.filter((tarea) => tarea.estado === estado);
  },
};

module.exports = moduloTareas;
