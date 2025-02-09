const {parentPort, workerData} = require('worker_threads');
// const {numero = 1, mystring = 'nothing' } = workerData;
// console.log(numero, mystring);

parentPort.on('message', (message) => {
	if (message === 'start') {
		// Simulating a CPU-intensive task (e.g., Fibonacci calculation)
		const result = cpuIntensive();
		parentPort.postMessage(result);
	}
});

function cpuIntensive() {
	let num = 40; // Example large computation
	return fibonacci(num);
}

// Example Fibonacci function (recursive, inefficient for demonstration)
function fibonacci(n) {
	if (n <= 1) return n;
	return fibonacci(n - 1) + fibonacci(n - 2);
}
