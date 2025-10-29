// ------------------------
// Tarea 1: Identificación de Scope (Ámbito)
// ------------------------

const nombre = "Priscila";
console.log("Nombre:", nombre);

// Intentar reasignar un valor (esto causa error si se descomenta)
// nombre = "Otro nombre";

if (true) {
  var contador = 50;
  console.log("Dentro del bloque (var contador):", contador);
}
console.log("Fuera del bloque (var contador):", contador);

if (true) {
  let mensaje = "Variable de bloque";
  console.log("Dentro del bloque (let mensaje):", mensaje);
}
try {
  console.log("Fuera del bloque (let mensaje):", mensaje);
} catch (error) {
  console.log("Error al acceder a 'mensaje' fuera del bloque:", error.message);
}

// ------------------------
// Tarea 2A: Creación de Objeto Dinámico (for y Objetos)
// ------------------------

let productosInventario = {};

for (let i = 1; i <= 5; i++) {
  let clave = `producto_${i}`; // clave dinámica
  let valor = i * 10;          // valor = índice * 10
  productosInventario[clave] = valor;
}

console.log("Objeto productosInventario:", productosInventario);

// ------------------------
// Tarea 2B: Iteración sobre Claves y Valores (forEach)
// ------------------------

Object.entries(productosInventario).forEach(([clave, valor]) => {
  console.log(`El ${clave} tiene un stock de ${valor}.`);
});
// ------------------------
// Ejercicio 1: Seleccionar un elemento y modificarlo
// ------------------------

// Seleccionamos el título de la tarjeta usando querySelector
const titulo = document.querySelector(".card__title");

// Modificamos su texto
titulo.textContent = "Tarjeta modificada con JavaScript";

// También podemos cambiar el color desde JS
titulo.style.color = "#06a884";

// Y mostrar un mensaje en consola para confirmar
console.log("El título fue modificado correctamente.");
