let autor = {
  nombre: "Edgar Allan Poe",
  generos: ["Detectivesco", "Horror"],
  biografia:
    "Edgar Allan Poe nació el 19 de enero de 1809 en la ciudad de Boston. Su padre abandonó a su familia en 1810,35​ y su mujer, Elizabeth, murió un año después de tuberculosis; tenía veinticuatro años. Edgar fue acogido por una de las familias caritativas que habían cuidado de los niños al morir su madre: el matrimonio formado por Frances y John Allan....",
  printInfo() {
    console.log(`
        Autor: ${this.nombre} 
        Biografía: ${this.biografia}
        `);
  },
  printGeneros() {
    this.generos.forEach((genero) => {
      console.log(`Genero: ${genero}`);
    });
  },
};

autor.printInfo();
autor.printGeneros();
