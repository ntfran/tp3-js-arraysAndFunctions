const paroimpar = (numero) => {
  if (numero % 2 === 0) {
    return "El numero es par";
  } else {
    return "El numero es impar";
  }
};
numero = parseInt(prompt("Ingresar un numero"));
alert(paroimpar(numero));
