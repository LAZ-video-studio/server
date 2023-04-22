import { processEncode, processDecode } from "../packetprocessor.js";
import { readConfigFile } from "../../server.js";
import { getGameVersion } from "../protocol.js";

const packetid = 1;
const serverName = readConfigFile('ServerName');

var input = {};
var output = {};
	
export function encode() {
	input.protocol = '7';
	input.online = '0';
	input.server = serverName;
	input.version = getGameVersion();
}

export function decode() {
}

export function handlePacket(data) {output = processDecode(data); encode(); decode(); processEncode(packetid, input);}
