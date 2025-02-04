/**
 * En JavaScript, el término "hoisting" se refiere al comportamiento del lenguaje
 * donde las declaraciones de variables y funciones se mueven a la parte superior
 * de su ámbito antes de que se ejecute el código.
 */


// En este caso, la función miFuncion se eleva completamente, por lo que se puede llamar antes de su declaración.
console.log(miFuncion()); // La función se llama antes de su declaración

function miFuncion() {
	return "¡Hola desde miFuncion!";
}


// Aquí, la variable miVariable se eleva, pero su valor no se asigna hasta que se llega a la línea correspondiente.
console.log(miVariable); // Imprime undefined

var miVariable = "Este es mi valor";

console.log(miVariable); // Imprime "Este es mi valor"
