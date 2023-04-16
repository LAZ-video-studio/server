var currentprotocol = 7;

export function getProtocol() {
	return currentprotocol;
}

export function getPacketByID(id) {
	switch (id) {
		case 1:
			return "UNCONNECTED_PONG";
	}
}
