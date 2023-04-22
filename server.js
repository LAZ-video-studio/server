import fs from 'node:fs';
import { Server } from "socket.io";
import { handle } from "./network/protocol.js";
//import { getProtocolVersion, getGameVersion, getServerVersion } from "./network/protocol.js";

const port = readConfigFile('Port');
const io = new Server(port);

io.on("connection", (socket) => {
	socket.on("UNCONNECTED_PING", (data) => {
		handle(1, data);
		//console.log(socket.client.id);
	});
	socket.on("CONNECTED_PING", (data) => {
		//handle('connectedPong');
	});
});

export function readConfigFile(settings){
	var file = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
    return file[settings];
}

export function sendPacket(packet, data){
	io.emit(packet, data);
}