const mostrarResultados = () => {
  let tabla = `<table class="table">`;
  tabla += ` <thead>
    <tr>
      <th scope="col">Suma</th>
      <th scope="col">Apariciones</th>
          </tr>
  </thead>`;
  tabla += `  <tbody> <tr>`;
  for (let i = 0; i < 11; i++) {
    tabla += `<tr>`;
    tabla += `<td>${sumasPosibles[i]}</td>`;
    tabla += `<td>${contadorSumaDados[i]}</td>`;
    tabla += `</tr>`;
  }
  tabla += "</tbody></table>";
  pantalla.innerHTML += tabla;
};

const pantalla = document.getElementById("pantalla");
const contadorSumaDados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const sumasPosibles = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < 50; i++) {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  const sumaDados = dado1 + dado2;
  contadorSumaDados[sumaDados - 2] += 1;
}
console.log(contadorSumaDados);


mostrarResultados();
