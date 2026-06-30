const calcularPerimetro = (ladoA, ladoB) => 2 * (ladoA + ladoB);

const pantalla = document.getElementById("pantalla");

const base = Number(prompt("Ingrese la base del rectángulo (lado A):"));
const altura = Number(prompt("Ingrese la altura del rectángulo (lado B):"));
if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {
  const resultadoPerimetro = calcularPerimetro(base, altura);
  pantalla.innerHTML += `<h1>Cálculo de Perímetro:</h1>`;
  pantalla.innerHTML += `<h3>Base: ${base} | Altura: ${altura}</h3>`;
  pantalla.innerHTML += `<h2>El perímetro es: ${resultadoPerimetro}</h2>`;
} else {
  alert("Por favor, ingrese valores numéricos válidos y mayores a 0.");
}
