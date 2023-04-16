import { process } from "../packetprocessor.js";
import { readConfigFile } from "../../server.js";

const packetid = 1;
const serverName = readConfigFile('ServerName');

const packet = {
	protocol: '7',
    online: '0',
	server: serverName,
	};
	
export function handleunconnectedPong() {
	process(packetid, packet);
}