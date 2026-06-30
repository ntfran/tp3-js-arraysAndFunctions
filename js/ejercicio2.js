const mostrarCiudades = () => {
  let lista = `<h2 class='my-3'>Ciudades</h2>`;
  lista += '<ul class="list-group">';
  for (let i = 0; i < ciudades.length; i++) {
    lista += `<li class="list-group-item">${ciudades[i]}</li>`;
  }
  lista += "</ul>";
  pantalla.innerHTML += lista;
};

const pantalla = document.getElementById("pantalla");

const ciudades = [];

let inputCiudad;
do {
  inputCiudad = prompt("Ingrese una ciudad (o Cancelar para salir)");
  if (inputCiudad !== null && inputCiudad !== "") {
    ciudades.push(inputCiudad);
  } else if (inputCiudad !== null) {
    alert("Ingrese una ciudad válida.");
  }
} while (inputCiudad !== null);
console.log("Array inicial", ciudades);
console.log("Longitud del array", ciudades.length);

pantalla.innerHTML += `<p>Primera ciudad: ${ciudades[0]}</p>`;
pantalla.innerHTML += `<p>Tercera ciudad: ${ciudades[2]}</p>`;
pantalla.innerHTML += `<p>Ultima ciudad: ${ciudades[ciudades.length - 1]}</p>`;
ciudades.push("Paris");
pantalla.innerHTML += `<p>Ultima ciudad: ${ciudades[ciudades.length - 1]}</p>`;
ciudades[1] = "Barcelona";
pantalla.innerHTML += `<p>Segunda ciudad: ${ciudades[1]}</p>`;

console.log(ciudades);
mostrarCiudades();
