const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("http");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
io.on("connection", (sock) => sock.on('draw', (data) => io.emit('draw', data)));
httpServer.listen(process.env.PORT, () => console.log('http://localhost:' + process.env.PORT));