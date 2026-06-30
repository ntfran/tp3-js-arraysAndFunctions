/* 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
 */
const pantalla = document.getElementById("pantalla");

const mostrarMeses = () => {
  let lista = `<h2 class='my-3'>Meses del año</h2>`;
  lista += '<ul class="list-group">';
  for (let i = 0; i < meses.length; i++) {
    lista += `<li class="list-group-item">${meses[i]}</li>`;
  }
  lista += "</ul>";
  pantalla.innerHTML += lista;
};
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

mostrarMeses();
