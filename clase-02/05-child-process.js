const {spawn} = require('node:child_process');

const executePythonFile = spawn('python', ['test.py', 'Node.js !!!']); // ejecutar el script y pasar un argumento

executePythonFile.stdout.on('data', data => {
	console.info(`stdout, ${data}`);
})

executePythonFile.stderr.on('data', data => {
	console.error(`stderr: ${data}`);
})

executePythonFile.on('close', (code) => {
	console.info(`proceso de python fue cerrado con código ${code}`);
})

