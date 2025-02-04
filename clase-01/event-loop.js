/**
 * El Event Loop de Node.js y el Event Loop de JavaScript tienen una pila de llamadas y una cola de devolución de llamadas.
 * El bucle de eventos de Node.js se implementa y administra mediante una biblioteca llamada libuv escrita en C.
 *
 *  El bucle de eventos de Node.js tiene seis fases, que son:
 *	Timer phase: setTimeout y setInterval se ejecutan en timer phase.
 *  Pending Callbacks Phase: Las operaciones I/O de callbacks diferidas de la iteración anterior, se ejecutan en la fase pending callbacks.
 *  Idle Phase: Es un periodo donde revisa "low-priority results" y ejecuta el garbage collection.
 *  Poll Phase: El event loop busca nuevas operaciones de I/O y las ejecuta en poll queue.
 *  Check Phase: El event loop pasa a check phase cuando hay un setImmediate en el programa y el poll phase se completó o se queda en estado idle.
 *  Close Callbacks Phase: La fase close callbacks es la última fase del bucle de eventos de Node.js.
 */

// El siguiente ejemplo de código se ejecuta durante la fase de "pending callbacks"
const fs = require("fs");

fs.readFile(__filename, (err, data) => {
	if (err) throw err;
	console.log("File data:", data);
});



// Ejemplo: Entendiendo el orden de ejecución
console.log('Start ++++++');

setTimeout(() => {
	console.log('setTimeout Callback ------');
}, 0);

setImmediate(() => {
	console.log('setImmediate Callback ******');
});

Promise.resolve().then(() => {
	console.log('Promise Callback ······');
});

process.nextTick(() => {
	console.log('process.nextTick Callback ======');
});

console.log('End ++++++');

// OUTPUT
// Start
// End
// process.nextTick Callback
// Promise Callback
// setTimeout Callback / setImmediate Callback (Order may vary)
