import fs from 'node:fs';
import dgram from 'node:dgram';
import { Server } from "socket.io";
import { handle } from "./network/protocol.js";
//import { getProtocolVersion, getGameVersion, getServerVersion } from "./network/protocol.js";

const server = dgram.createSocket('udp4');
const magic = new Buffer.from('A0101010101A01');
const port = readConfigFile('Port');
const io = new Server(port);

io.on("connection", (socket) => {
	socket.on("UNCONNECTED_PING", (data) => {
		handle(1, data, socket);
	});
	socket.on("LOGIN_PACKET", (data) => {
		handle(3, data, socket);
	});
});

export function readConfigFile(settings){
	var file = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
    return file[settings];
}

export function sendPacket(packet, socket, data){
	socket.emit(packet, data);
}

server.on('listening', function () {
	server.setBroadcast(true);
	setInterval(function () {server.send(magic, 0, magic.length, 7890, '255.255.255.255')}, 5000);
});
server.bind('8888');