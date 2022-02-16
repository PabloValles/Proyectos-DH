let fs = require("fs");

let moduloTareas = {
  file: "./tareas.json",
  leerArchivo() {
    let data = fs.readFileSync(this.file, "utf-8");
    let tareas = JSON.parse(data);
    return tareas;
  },
  escribirArchivo(tareas) {
    let tareasJson = JSON.stringify(tareas);
    fs.writeFileSync(this.file, tareasJson);
  },
  listar() {
    let tareas = this.leerArchivo();

    tareas.forEach((tarea, index, tareas) => {
      console.log(
        `${index + 1} | Tarea: ${tarea.titulo} -> estado: ${tarea.estado} `
      );
    });
  },
  guardar(tarea) {
    let tareas = this.leerArchivo();
    tareas.push(tarea);
    this.escribirArchivo(tareas);
  },
};

module.exports = moduloTareas;
