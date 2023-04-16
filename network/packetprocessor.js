import { send } from "../server.js";

import { handleunconnectedPong } from "./packets/unconnectedPong.js";

export function handle(packet) {
	if (packet == 'unconnectedPong'){
		handleunconnectedPong();
	}
}

export function process(packetid, packet) {
	send(packetid, packet);
}