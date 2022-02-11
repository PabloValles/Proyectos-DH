let operacion = (fx, n1, n2) => {
  if (fx != "") {
    switch (fx) {
      case "sumar":
        return n1 + n2;
        break;
      case "restar":
        return n1 - n2;
        break;
      case "dividir":
        return n1 == 0 || n2 == 0 ? "No se puede dividir por 0" : n1 / n2;
        break;
      case "multiplicar":
        return n1 == 0 || n2 == 0 ? 0 : n1 * n2;
        break;
    }
  } else {
    return "No se envió que tipo de operacion quiere realizar";
  }
};

module.exports = operacion;
