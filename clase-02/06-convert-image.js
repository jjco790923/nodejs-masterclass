const {spawn} = require('node:child_process');
const fs = require('fs');

// cwebp -q 80 image.png -o image.webp
let img = 'imagen1';
const convertImg = spawn('./cwebp', ['-q', '70', `${img}.jpg`, '-o', `${img}.webp`] );

convertImg.stdout.on('data', data => {
	console.log(`stdout: ${data}`);
})


convertImg.on('error', (err) => {
	console.error(err);
})

convertImg.on('close', (code) => {
	console.info(`child process closed code ${code}`);
})
