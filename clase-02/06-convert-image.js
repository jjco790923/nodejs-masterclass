const {spawn} = require('node:child_process');
const fs = require('fs');

let img = 'image1.jpg';

// cwebp -q 80 image.png -o image.webp
const convertImg = spawn('cwebp', ['-q', '75', img, '-o', `imagenX.webp`] );

convertImg.stdout.on('data', data => {
	console.log(`stdout: ${data}`);
})


convertImg.on('error', (err) => {
	console.error(err);
})

convertImg.on('close', (code) => {
	console.info(`child process closed code ${code}`);
})
