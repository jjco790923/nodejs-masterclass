async function fetchLocalhost() {
	const promesas = [
		fetch('http://localhost:3000'),
		fetch('http://localhost:3000'),
		fetch('http://localhost:3000'),
		fetch('http://localhost:3000'),
		fetch('http://localhost:3000'),
		fetch('http://localhost:3000'),
		fetch('http://localhost:3000'),
		fetch('http://localhost:3000'),
		fetch('http://localhost:3000'),
		fetch('http://localhost:3000'),
		fetch('http://localhost:3000'),
		fetch('http://localhost:3000'),
		fetch('http://localhost:3000'),
		fetch('http://localhost:3000'),
		fetch('http://localhost:3000'),
		fetch('http://localhost:3000'),
	];
	
	const response = await Promise.allSettled(promesas);
	
	response.forEach((resultado, index) => {
		console.info(`resultado ${index +1}`);
		if (resultado.status === 'fulfilled') {
			console.info('Success!!!!');
		} else {
			console.error('Rejected', resultado.reason);
		}
	})
	
}

fetchLocalhost()
.then( ()=>{
	console.info('END');
});
