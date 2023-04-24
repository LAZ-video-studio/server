import { sendPacket } from "../server.js";
import { getPacketByID } from "./protocol.js";

export function processEncode(packetid, socket, packetdata) {
	var packet = getPacketByID(packetid);
	var data = JSON.stringify(packetdata);
	sendPacket(packet, socket, data);
}

export function processDecode(data) {
	const output = JSON.parse(data);
	return output;
}