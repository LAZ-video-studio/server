import { handlePacket as UNCONNECTED_PONG } from "./packets/unconnectedPong.js";

var currentprotocol = 7;
var currentserver = "0.2.1";
var currentgame = "1.0.0";

export function getPacketByID(id) {
	switch (id) {
		case 1:
			return "UNCONNECTED_PONG";
	}
}

export function getProtocolVersion() {
	return currentprotocol;
}

export function getGameVersion() {
	return currentgame;
}

export function getServerVersion() {
	return currentserver;
}

export function handle(packet, data) {
	var packetname = getPacketByID(packet);
	var packet = eval(packetname);
	packet(data);
}