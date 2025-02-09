/**
 * El "scoping" en JavaScript es un concepto fundamental que determina la accesibilidad
 * de las variables y otras declaraciones (como funciones) en diferentes partes de tu código.
 *
 * El "scoping" es esencial para escribir código JavaScript más organizado y mantenible.
 * Ayuda a evitar colisiones de nombres de variables y a mantener las variables relevantes en el contexto adecuado.
 */


// Las variables declaradas fuera de cualquier función tienen un "scoping" global.
// Esto significa que se pueden acceder y modificar desde cualquier parte de tu código
var nombre = "Jean"; // Variable global

function saludar() {
	console.log("Hola, " + nombre); // Accediendo a la variable global
}

saludar(); // Output: Hola, Jean
console.log(nombre); // Output: Jean


// Las variables declaradas dentro de una función tienen un "scoping" local.
// Esto significa que solo son accesibles dentro de esa función específica
// y no se pueden usar desde otras partes del código.
function miFuncion() {
	var mensaje = "Este es un mensaje local"; // Variable local
	console.log(mensaje); // Output: Este es un mensaje local
}

miFuncion();
console.log(mensaje); // Error: no se puede acceder desde fuera de la función.


// Además del "scoping" global y local (de función),
// JavaScript también introdujo el "scoping" de bloque con la llegada de ECMAScript 6 (ES6).
// Esto se aplica a las variables declaradas con let y const.
function ejemploScopingBloque() {
	if (true) {
		let x = 10; // Variable con scoping de bloque (solo accesible dentro del 'if')
		const y = 20; // Constante con scoping de bloque (solo accesible dentro del 'if')
		console.log(x); // Output: 10
		console.log(y); // Output: 20
	}
	
	console.log(x); // Error: x no se puede acceder desde fuera del bloque 'if'
	console.log(y); // Error: y no se puede acceder desde fuera del bloque 'if'
}

ejemploScopingBloque();
