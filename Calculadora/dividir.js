const dividir = (n1, n2) => {
  if (n1 == 0 || n2 == 0) {
    return "No se puede dividir por 0";
  } else {
    return n1 / n2;
  }
};

module.exports = dividir;
