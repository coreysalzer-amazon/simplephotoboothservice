/* eslint strict: 0 */
'use strict';

// Enables ES6 in Node
require('babel-core/register');
require('babel-polyfill');

const app = require('./src').default;
const debug = require('debug')('SimplePhotoboothService:server');
const http = require('http');

// Normalize a port into a number, string, or false.
const normalizePort = (val) => {
	const port = parseInt(val, 10);

	if(isNaN(port)){
		// named pipe
		return val;
	}

	if(port >= 0){
		// port number
		return port;
	}

	return false;
};

// Get port from environment and store in Express
const port = normalizePort(process.env.PORT || '7890');
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port, () => {
	console.log(`Simple Photobooth Service Server running on: http://localhost:${server.address().port}/`);
});

// Event listener for HTTP server "error" event.
server.on('error', (error) => {
	if(error.syscall !== 'listen') {
		throw error;
	}

	const bind = typeof port === 'string'
		? `Pipe ${port}`
    	: `Port ${port}`;

	// Handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			debug(`${bind} requires elevated privileges`);
			process.exit(1);
			break;
		case 'EADDRINUSE':
			debug(`${bind} is already in use`);
			process.exit(1);
			break;
		default:
			throw error;
	}
});

// Event listener for HTTP server "listening" event.
server.on('listening', () => {
	const addr = server.address();
	const bind = typeof addr === 'string'
    	? `pipe ${addr}`
		: `port ${addr.port}`;
	debug(`Listening on ${bind}`);
});

