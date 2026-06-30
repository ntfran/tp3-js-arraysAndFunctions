# TP3 - JavaScript: Arrays y Funciones

Trabajo práctico de JavaScript en RollingCode. Consta de 7 ejercicios que abordan el uso de arrays, funciones, bucles (`for`, `do while`) y condicionales (`if`) en JavaScript puro (Vanilla), con Bootstrap 5 para el estilado.

## Tecnologías utilizadas

- HTML5
- JavaScript
- Bootstrap 5.3.8 (CDN)

## Estructura del proyecto

```
├── index.html
└── js/
    ├── ejercicio1.js
    ├── ejercicio2.js
    ├── ejercicio3.js
    ├── ejercicio4.js
    ├── ejercicio5.js
    ├── ejercicio6.js
    └── ejercicio7.js
```

## Cómo ejecutar

1. Cloná el repositorio.
2. Abrí `index.html` en el navegador.
3. Por defecto carga `ejercicio7.js`. Para probar otro ejercicio, editá la línea final de `index.html`:

   ```html
   <script src="/js/ejercicioN.js"></script>
   ```

   reemplazando `N` por el número de ejercicio que quieras correr.
4. Algunos ejercicios piden datos por `prompt()`: completalos en los cuadros de diálogo que aparecen.

## Ejercicios

### 1. Meses del año 🟢
Arma un array `meses` con los doce nombres del año y los muestra en pantalla como una lista, recorriendo el array con un `for`.

### 2. Array de ciudades 🟢🟡
Solicita ciudades al usuario mediante `prompt()` dentro de un `do while`, hasta que el usuario cancela. Luego:
- Muestra la longitud del array.
- Muestra el primer, tercer y último elemento.
- Agrega "Paris" al final.
- Muestra y luego reemplaza el segundo elemento por "Barcelona".
- Renderiza el listado final en pantalla.

### 3. Simulación de dados 🟢🟡🔴
Simula 50 lanzamientos de dos dados con `Math.random()`. Suma los resultados de cada tirada y lleva el conteo de apariciones de cada suma posible (2 a 12) en un array, usando el índice `suma - 2`. Muestra los resultados en una tabla.

### 4. Par o impar 🟢
Función `determinarParImpar(numero)` que recibe un número entero y devuelve un string indicando si es par o impar, usando el operador módulo (`%`).

### 5. Análisis de mayúsculas/minúsculas 🟢🟡
Función `analizarTexto(texto)` que recibe una cadena y determina, comparándola contra `toUpperCase()` y `toLowerCase()`, si está compuesta solo por mayúsculas, solo por minúsculas, o por una mezcla de ambas.

### 6. Perímetro de un rectángulo 🟢🟡
Solicita por `prompt()` los lados de un rectángulo y calcula su perímetro con la función `calcularPerimetro(ladoA, ladoB)`, aplicando la fórmula `p = 2 * (a + b)`. Incluye validación de que los valores sean numéricos y mayores a 0.

### 7. Tabla de multiplicar 🟢🟡
Solicita un número por `prompt()` y, mediante la función `generarTablaMultiplicar(numero)`, genera y muestra su tabla de multiplicar del 1 al 10 recorriendo un `for`.

## Autor

Sandoval Francisco Tomás