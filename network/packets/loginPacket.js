import { processEncode, processDecode } from "../packetprocessor.js";

const packetid = 2;

var input = {};
var output = {};

	
export function encode() {

}

export function decode() {
	console.log();
	console.log();
	console.log();
	console.log();
}

export function handlePacket(data, socket) {output = processDecode(data); encode(); decode(); processEncode(packetid, socket, input);}
