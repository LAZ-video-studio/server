import fs from 'fs';
import { Server } from "socket.io";
import { handle } from "./network/packetprocessor.js";
import { getPacketByID } from "./network/protocol.js";

export const io = new Server(12312);

console.log('PowerSturnus Lite v0.0.1 on ');
console.log('For ');

io.on("connection", (socket) => {
	socket.on("UNCONNECTED_PING", (data) => {
		handle('unconnectedPong');
	});
});

export function readConfigFile(settings){
	var file = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
    return file[settings];
}

export function send(packetid, packet){
	io.emit(getPacketByID(packetid), JSON.stringify(packet));
}