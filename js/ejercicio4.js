const determinarParImpar = (numero) => {
  if (numero % 2 === 0) {
    return `El número ${numero} es par.`;
  } else {
    return `El número ${numero} es impar.`;
  }
};

const pantalla = document.getElementById("pantalla");

const inputUsuario = parseInt(prompt("Ingrese un número entero:"));

if (!isNaN(inputUsuario)) {
  const resultado = determinarParImpar(inputUsuario);
  pantalla.innerHTML += `<h1>${resultado}</h1>`;
} else {
  alert("Por favor, ingrese un número válido.");
}