let autos = require("./autos");

const concesionaria = {
  autos: autos,
  buscarAuto(patente) {
    // 1ro Filtramos el array de autos, según la patente -> nos devuelve un array
    let autoBuscado = this.autos.filter((auto) => auto.patente === patente);
    // Podríamos devolver acá mismo el array que nos filtro, xq va a ser único (segun la patente) así:
    /* return autoBuscado != "" ? autoBuscado[0] : null; */

    // Luego Indexamos el array de autos -> por Patente
    const result = this.autos.reduce(
      (accumulator, auto) => ({
        ...accumulator,
        [auto.patente]: auto,
      }),
      {}
    );

    // Sino encuentra la patente en el filtro -> devuelve null; Si la encuentra -> devuelve nuestro objeto reducido según la patente
    return autoBuscado != "" ? result[patente] : null;
  },
  venderAuto(patente) {
    let autoParaVender = this.buscarAuto(patente);
    autoParaVender != null ? (autoParaVender.vendido = true) : null;
    return `${autoParaVender.marca} ${autoParaVender.modelo}: Vendido`;
  },
  autosParaLaVenta() {
    return this.autos.filter((auto) => auto.vendido != true);
  },
  autosNuevos() {
    let autosParaVender = this.autosParaLaVenta();
    return autosParaVender.filter((auto) => auto.km <= 100);
  },
  listaDeVentas() {
    let lista = [];

    this.autos.map((auto) => {
      auto.vendido ? lista.push(auto.precio) : "";
    });

    return lista;
  },
};

//console.log(concesionaria.autos);
console.log(concesionaria.listaDeVentas());
console.log(concesionaria.venderAuto("JJK116"));
console.log(concesionaria.listaDeVentas());
console.log(concesionaria.venderAuto("APL123"));
console.log(concesionaria.listaDeVentas());
