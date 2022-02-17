let autos = require("./autos");

const concesionaria = {
  autos: autos,
  buscarAuto(patente) {
    let autoBuscado = this.autos.filter((auto) => auto.patente === patente);
    //return autoBuscado[0].marca;
    return autoBuscado != "" ? autoBuscado[0] : null;
  },
};

console.log(concesionaria.buscarAuto("APL123"));
console.log(concesionaria.buscarAuto("aa"));
