const express = require('express');
const app = express();
const port = process.env.PORT || '3000';
// const {Worker} = require('node:worker_threads');


// importar routers
const posts = require('./Routes/post.js')

app.use('/api/v1/post', posts);

// TODO: crear usuarios


app.get('/', (req, res) => {
	res.status(200)
	.send(`Hola desde PM2!!!! ${Math.random()} `);
})

//
// app.get('/worker', (req, res) => {
//
// 	const worker = new Worker('./worker.js', {workerData: {numero: 43, mystring: 'hola'}}); // Spawns a new worker thread
//
// 	worker.on('message', (result) => {
// 		res.status(200).send(`Resultado del cálculo: ${result}`);
// 	});
//
// 	worker.on('error', (err) => {
// 		res.status(500).send(`Error en el Worker: ${err.message}`);
// 	});
//
// 	worker.postMessage('start'); // Sends a message to start computation
// });
//

app.listen(port, () => {
	
	console.log(`Server started on port ${port}`);
});
