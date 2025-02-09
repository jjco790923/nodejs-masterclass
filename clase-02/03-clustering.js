const express = require('express');
const app = express();
const port = process.env.PORT ?? '3000';
const cluster = require('node:cluster');

cluster.schedulingPolicy = cluster.SCHED_RR; // Round Robin for windows

console.info('estoy en master ???', cluster.isMaster);

if (cluster.isMaster ) {
	// si el cluster es master, entonces lo vas a ejecutar otra vez:
	cluster.fork()
	cluster.fork()
	cluster.fork()
	cluster.fork()
	cluster.fork()
	// PERO...
	// lo vas a ejecutar en modo child
} else {
	
	function blockEventLoop() {
		let i = 0;
		while (i < 7_000_000_000) {
			i++;
		}
	}
	
	app.get('/', (req, res) => {
		console.time('Time Elapsed');
		blockEventLoop()
		res.send('Cluster Fork!!')
		console.timeEnd('Time Elapsed');
	})
	
	app.get('/clusters', (req, res) => {
		res.send(`${Math.random()}`);
	})
	
	
	app.listen(port, () => console.log(`Listen on port ${port}`));
	
	
} // else cluster.isMaster
