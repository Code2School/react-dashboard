const express = require('express');
const path = require('path');
const jsonServer = require('json-server');
const router = jsonServer.router('data.json');

const port = process.env.PORT || 3001;
const server = express();

server.use(express.static(path.join(__dirname, 'dist')));

server.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

server.use(router);

server.listen(port, () => {
	console.log(`JSON Server is running with port ${port}`)
});
