const {spawn} = require('node:child_process');
const fs = require('fs');

let img = 'imagen1';

// cwebp -q 80 image.png -o image.webp
const convertImg = spawn('cwebp', ['-q', '75', `${img}.jpg`, '-o', `${img}.webp`] );

convertImg.stdout.on('data', data => {
	console.log(`stdout: ${data}`);
})


convertImg.on('error', (err) => {
	console.error(err);
})

convertImg.on('close', (code) => {
	console.info(`child process closed code ${code}`);
})
