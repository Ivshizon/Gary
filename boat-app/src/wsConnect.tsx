export let Socket: WebSocket | undefined = undefined;

// export function wsConnect() {
// 	Socket = new WebSocket("ws://localhost:8080");
// 	console.log(Socket.readyState);

// 	(window as any).Socket = Socket;
// 	// while (Socket.readyState !== WebSocket.OPEN && Socket.readyState !== WebSocket.CLOSED) {
// 		console.log(Socket.readyState);
// 	}
// 	if (Socket.readyState === WebSocket.CLOSED) {
// 		console.log("Socket closed");
// 		wsConnect();
// 		return;
// 	}
// 	console.log("Connected to server,", Socket.readyState);
// 	// if (Socket === undefined) {
// 	// 	(window as any).Socket = Socket;
// 	// 	Socket.onopen = function(event) {
// 	// 		console.log("Connected");
// 	// 	};
// 	// 	Socket.onclose = function(event) {
// 	// 		console.log("Disconnected");
// 	// 		Socket = undefined;
// 	// 	};
// 	// 	Socket.onerror = function(event) {
// 	// 		console.log("Error");
// 	// 		Socket = undefined;
// 	// 	};
// 	// } else {
// 	// 	console.log("Already connected");
// 	// }
// 	// console.log("1");
// 	// if (Socket) {
// 	// 	console.log("2");
// 	// 	Socket.close(3001);
// 	// } else {
// 	// 	console.log("3");
// 	// 	Socket = new WebSocket("ws://192.168.4.1:81/");
// 	// 	Socket.onopen = function() {
// 	// 		console.log("connected");
// 	// 	};
// 	// 	Socket.onmessage = function(msg: any) {
// 	// 		console.log(msg);
// 	// 	};
// 	// 	Socket.onclose = function(evt: any) {
// 	// 		console.log("4");
// 	// 		if (evt.code == 3001) {
// 	// 			console.log("5");
// 	// 			console.log("ws closed");
// 	// 			Socket = null;
// 	// 		} else {
// 	// 			console.log("6");
// 	// 			Socket = null;
// 	// 			console.log("ws connection error");
// 	// 		}
// 	// 		return Socket;
// 	// 	};
// 	// 	Socket.onerror = function(evt: any) {
// 	// 		if (Socket.readyState == 1) {
// 	// 			console.log("ws normal error: " + evt.type);
// 	// 		}
// 	// 	};
// 	// 	return Socket;
// 	// }
// }
