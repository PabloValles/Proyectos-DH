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
    let autoPersona = this.buscarAuto(auto);
    let segundaCondicion =
      persona.capacidadDePagoEnCuotas >=
      (autoPersona.precio / autoPersona.cuotas).toFixed(2);

    return persona.capacidadDePagoTotal >= autoPersona.precio &&
      segundaCondicion
      ? true
      : false;
  },
};

/**
 * Una es el costo total:
 * si el total de un auto excede lo que la persona considera caro, no va a comprar el auto.
 * Otra condición es su capacidad de pago en cuotas:
 * si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. Si ambas condiciones se cumplen, se realiza la compra.
 */

let persona = {
  nombre: "Juan",
  capacidadDePagoEnCuotas: 20000,
  capacidadDePagoTotal: 100000,
};

console.log(concesionaria.puedeComprar("APL123", persona));
console.log(concesionaria.puedeComprar("JJK116", persona));

/* ================================================================= */
/**
 *  Duda!: al metodo puedeComprar -> se le pasan 2 parámetros un auto y una persona
 * Nose a q se refiere el parametro auto, yo lo hice, como que le pasa la patente, para reutilizar la función buscar auto, y luego aplicar la lógica del ejercicio en caso que pueda comprarlo o no
 */
