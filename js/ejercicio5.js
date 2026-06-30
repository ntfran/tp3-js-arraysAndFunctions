const analizarTexto = (texto) => {
  if (texto === texto.toUpperCase()) {
    return `El texto "${texto}" está formado sólo por MAYÚSCULAS.`;
  } else if (texto === texto.toLowerCase()) {
    return `El texto "${texto}" está formado sólo por minúsculas.`;
  } else {
    return `El texto "${texto}" está formado por mayúsculas y minúsculas.`;
  }
};

const inputTexto = prompt("Ingrese una frase para analizar:");
if (inputTexto !== null && inputTexto !== "") {
  const resultado = analizarTexto(inputTexto);
  pantalla.innerHTML += `<p>${resultado}</p>`;
} else {
  alert("No ingresaste ningún texto válido.");
}