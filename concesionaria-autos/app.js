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
  totalDeVentas() {
    let ventas = this.listaDeVentas();
    let total = ventas.reduce((acc, val) => acc + val, 0);
    return total;
  },

  puedeComprar(auto, persona) {
    let condicionCuotas =
      persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas).toFixed(2);

    return persona.capacidadDePagoTotal >= auto.precio && condicionCuotas
      ? true
      : false;
  },

  autosQuePuedeComprar(persona) {
    let autosEnVenta = this.autosParaLaVenta();
    let listaDeAutos = [];

    autosEnVenta.forEach((auto, index) => {
      if (this.puedeComprar(auto, persona)) {
        listaDeAutos.push(auto);
      }
    });

    return listaDeAutos;
  },
};

let persona = {
  nombre: "Juan",
  capacidadDePagoEnCuotas: 20000,
  capacidadDePagoTotal: 100000,
};

console.log(concesionaria.autosQuePuedeComprar(persona));
