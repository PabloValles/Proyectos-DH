let lavarropas = {
  marca: "Drean",
  alto: 85.5,
  ancho: 59.5,
  color: "blanco",
  modelo: "NEXT 6.06 ECO",
  origen: "ARGENTINA",
  peso: 61.8,
  capacidad: 6,
  tecnologia: "automatico",
  funciones: [
    "centrifugado",
    "lavado rápido",
    "Antiarrugas",
    "Lavado de 1/2 hr",
    "Eco Wash",
    "Hand Wash",
  ],
  printInfo() {
    return `
        Lavarropas: ${this.marca} - Modelo: ${this.modelo}
        ==================================================
        Ancho: ${this.ancho} - Alto: ${this.alto} - Peso: ${this.peso}
        Color: ${this.color}
        Orígen: ${this.origen}
        Capacidad: ${this.capacidad} 
        Tipo de tecnología: ${this.tecnologia}
        `;
  },

  printFunciones() {
    this.funciones.forEach((funcion) => {
      console.log(`Funcion: ${funcion}`);
    });
  },
};

console.log(lavarropas.printInfo());
console.log(lavarropas.printFunciones2());
lavarropas.printFunciones();
