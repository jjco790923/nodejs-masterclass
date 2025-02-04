/** cambiar tamaño del ThreadPool
 * Windows:	$env:UV_THREADPOOL_SIZE=1; fileName
 * linux:	UV_THREADPOOL_SIZE=1 fileName
 */
/**
 * La función crypto.pbkdf2 en Node.js se utiliza para generar claves criptográficas seguras
 * a partir de contraseñas o frases de contraseña. Esta función implementa el algoritmo PBKDF2
 * (Password-Based Key Derivation Function 2), que es un estándar para derivar claves de manera segura.
 */

// en este ejercicio usamos pbkdf2, para probar como funciona el Thread Pool de libuv
const crypto = require('crypto');
const start = Date.now();

crypto.pbkdf2('x', 'y', 100_000, 512, 'sha512', (err, result) => {
	console.log('result1', Date.now() - start, 'ms');
});
crypto.pbkdf2('x', 'y', 100_000, 512, 'sha512', (err, result) => {
	console.log('result2', Date.now() - start, 'ms');
});
crypto.pbkdf2('x', 'y', 100_000, 512, 'sha512', (err, result) => {
	console.log('result3', Date.now() - start, 'ms');
});
crypto.pbkdf2('x', 'y', 100_000, 512, 'sha512', (err, result) => {
	console.log('result4', Date.now() - start, 'ms');
});
crypto.pbkdf2('x', 'y', 100_000, 512, 'sha512', (err, result) => {
	console.log('result5', Date.now() - start, 'ms');
});
crypto.pbkdf2('x', 'y', 100_000, 512, 'sha512', (err, result) => {
	console.log('result6', Date.now() - start, 'ms');
});
crypto.pbkdf2('x', 'y', 100_000, 512, 'sha512', (err, result) => {
	console.log('result7', Date.now() - start, 'ms');
});
crypto.pbkdf2('x', 'y', 100_000, 512, 'sha512', (err, result) => {
	console.log('result8', Date.now() - start, 'ms');
});
crypto.pbkdf2('x', 'y', 100_000, 512, 'sha512', (err, result) => {
	console.log('result9', Date.now() - start, 'ms');
});
crypto.pbkdf2('x', 'y', 100_000, 512, 'sha512', (err, result) => {
	console.log('result10', Date.now() - start, 'ms');
});
