const crypto = require('crypto');
const http = require("http");
const fs = require('fs');
const start = Date.now();

// Network
function pingURL(url = 'http://google.com') {
	http.request(url, res => {
		res.on('data', () => {});
		res.on('end', () => {
			console.info(`Ping URL`, Date.now() - start, 'ms');
		})
	}).end();
}

// Crypto
function multiThread() {
	crypto.pbkdf2('x', 'y', 100_000, 512, 'sha512', (err, result) => {
		console.info(`crypto`, Date.now() - start, 'ms');
	});
}

// File System
fs.readFile(__filename, (err, data) => {
	if (err) throw err;
	console.log("File read:", Date.now() - start, 'ms', data);
});

//
multiThread();
multiThread();

pingURL(); // delega al OS

multiThread();
multiThread();

console.log('event loop');

/** Threadpool default size = 4 */
//	http -> OS
//		1		2		3		4	??????
//	______	______	______	______	______
// 		FS	Crypto	Crypto	Crypto	Crypto

// readFile

//		1		2		3		4	??????
//	______	______	______	______	______
// 		FS	Crypto	Crypto	Crypto	Crypto


