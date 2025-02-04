const express = require('express');
const app = express();
const port = process.env.PORT ?? '3000';

function blockEventLoop() {
	let i = 0;
	while (i < 5_000_000_000) {
		i++;
	}
}

app.get('/', (req, res) => {
	console.time('Time Elapsed');
	blockEventLoop()
	res.send('Done!!')
	console.timeEnd('Time Elapsed');
})


app.listen(port, () => console.log(`Listen on port ${port}`));
