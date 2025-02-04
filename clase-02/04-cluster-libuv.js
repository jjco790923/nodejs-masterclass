const express = require('express');
const app = express();
const port = process.env.PORT ?? '3000';
const cluster = require('node:cluster');
const crypto = require('crypto');

cluster.schedulingPolicy = cluster.SCHED_RR; // Round Robin for windows

console.info('estoy en master ???', cluster.isMaster);

if (cluster.isMaster) {
	// si el cluster es master, entonces lo vas a ejecutar otra vez:
	cluster.fork()
	cluster.fork()
	cluster.fork()
	cluster.fork()
	cluster.fork()
	cluster.fork()
	cluster.fork()
	cluster.fork()
	cluster.fork()
	cluster.fork()
	cluster.fork()
	cluster.fork()
	cluster.fork()
	cluster.fork()
	cluster.fork()
	cluster.fork()
	// PERO...
	// lo vas a ejecutar en modo child
} else {
	
	function hashPassword() {
		crypto.pbkdf2('x', 'y', 10_000_000, 1512, 'sha512', (err, result) => {
			console.info(`crypto`);
			// return result.toString('hex');
		});
	}
	
	app.get('/', (req, res) => {
		console.time('Time Elapsed');
		hashPassword()
		hashPassword()
		hashPassword()
		hashPassword()
		hashPassword()
		hashPassword()
		hashPassword()
		res.send('Cluster Fork!!');
		console.timeEnd('Time Elapsed');
	})
	
	app.get('/clusters', (req, res) => {
		res.send(`${Math.random()}`);
	})
	
	app.listen(port, () => console.log(`Listen on port ${port}`));
	
} // else cluster.isMaster
