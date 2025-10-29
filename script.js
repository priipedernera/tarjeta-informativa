// Tarea 1: Identificación de Scope (Ámbito)

// 1. const nombre
const nombre = "Priscila";
console.log("Nombre:", nombre);

// Intentar reasignar un valor (esto causará error si se descomenta)
// nombre = "Otro nombre"; // ❌ TypeError: Assignment to constant variable.

// 2. var contador dentro de un bloque if
if (true) {
  var contador = 50;
  console.log("Dentro del bloque (var contador):", contador);
}
console.log("Fuera del bloque (var contador):", contador); // ✅ accesible (scope global)

// 3. let mensaje dentro de un bloque if
if (true) {
  let mensaje = "Variable de bloque";
  console.log("Dentro del bloque (let mensaje):", mensaje);
}
console.log("Fuera del bloque (let mensaje):", mensaje); // ❌ ReferenceError
