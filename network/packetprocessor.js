import { sendPacket } from "../server.js";
import { getPacketByID } from "./protocol.js";

export function processEncode(packetid, packetdata) {
	var packet = getPacketByID(packetid);
	var data = JSON.stringify(packetdata);
	sendPacket(packet, data);
}

export function processDecode(data) {
	const output = JSON.parse(data);
	return output;
}