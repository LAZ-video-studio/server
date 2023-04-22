import { process } from "../packetprocessor.js";
import { readConfigFile } from "../../server.js";
import { getGameVersion } from "../protocol.js";

const packet = {};

const packetid = 2;
const serverName = readConfigFile('ServerName');
	
export function handleunconnectedPong() {
	packet.protocol = '7';
	packet.online = '0';
	packet.server = serverName;
	packet.version = getGameVersion();
	process(packetid, packet);
}