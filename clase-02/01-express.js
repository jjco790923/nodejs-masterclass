const express = require('express');
const app = express();
const port = process.env.PORT || '3000';



app.get('/', (req, res) => {
	res.status(200)
	.send('Hola desde Express!!!!');
})


app.listen(port, () => console.log(`Server started on port ${port}`));
