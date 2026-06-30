const generarTablaMultiplicar = (numero) => {
  let tabla = `<h3 class="my-3">Tabla del ${numero}</h3>`;
  tabla += '<ul class="list-group">';
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    tabla += `<li class="list-group-item">${numero} x ${i}= ${resultado}</li>`;
  }
  tabla += "</ul>";
  pantalla.innerHTML += tabla;
};

const pantalla = document.getElementById("pantalla");

const numeroTabla = parseInt(
  prompt("Ingresar numero para ver su tabla de multiplicar"),
);

if (!isNaN(numeroTabla)) {
  generarTablaMultiplicar(numeroTabla);
} else {
  alert("Por favor, ingrese un número entero válido.");
}
