/**
 * El módulo "os" en Node.js proporciona una variedad de utilidades para interactuar con el sistema operativo subyacente.
 * Esto permite a los desarrolladores acceder a información y funcionalidades relacionadas con el sistema en el que se ejecuta la aplicación Node.js.
 */

const os = require('os'); // Asegúrate de requerir el módulo 'os'

const {arch, availableParallelism, cpus, totalmem, loadavg, freemem, userInfo, machine, version, hostname, type} = os;

console.info(
	type(),
	arch(),
	version(),
	// availableParallelism(),
	// cpus(),
	hostname(),
	// totalmem(),
	// loadavg(),
	// freemem(),
	userInfo(),
	// machine(),
);

function logMemoryUsage() {
	const memoryUsage = process.memoryUsage();
	console.log(`RSS: ${memoryUsage.rss / 1024 / 1024} MB`);
	console.log(`Heap Total: ${memoryUsage.heapTotal / 1024 / 1024} MB`);
	console.log(`Heap Used: ${memoryUsage.heapUsed / 1024 / 1024} MB`);
	console.log(`External: ${memoryUsage.external / 1024 / 1024} MB`);
	console.log(`Available System Memory: ${freemem() / 1024 / 1024} MB`);
}

console.log('----------------- Memory usage before creating buffer:');
logMemoryUsage();

let largeBuffer;

try {
	largeBuffer = Buffer.alloc(1073741824 * 8, 1);
	console.log('+++++++++++++ Buffer created successfully');
} catch (err) {
	console.error('Failed to create buffer:', err.message);
}


// Para liberar la memoria
setTimeout(() => {
	console.log('=============== Memory usage after creating buffer:');
	logMemoryUsage();
	//global.gc(); // Forzar la recolección de basura (ejecutar con `node --expose-gc`)
	largeBuffer = null;
	setTimeout(() => {
		console.log('*********************** Memory usage after clearing buffer:');
		logMemoryUsage()
	}, 5000)
	
}, 10000)
