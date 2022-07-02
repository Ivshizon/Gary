import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SpinnerDotted, SpinnerCircularSplit } from "spinners-react";
import { MainWindow } from "./MainWindow";
import { Joystick } from "react-joystick-component";

export type WSocketProps = {
	url: string;
};

export function WSocket(props: WSocketProps) {
	const [connectingFlag, setConnectingFlag] = useState(true);
	const [socket, setSocket] = useState(new WebSocket(props.url));
	const [isConnected, setIsConnected] = useState(false);
	useEffect(
		function() {
			(window as any).socket = socket;
			socket.onopen = function() {
				console.log("Open");
				setIsConnected(true);
			};
			socket.onclose = function() {
				setConnectingFlag(false);
				console.log("Closed");
				console.log(isConnected);
				if (isConnected) {
					setIsConnected(false);
					setSocket(new WebSocket(props.url));
				}
			};
		},
		[socket, isConnected]
	);

	let div1 = (
		<div className="connection">
			<h3>login screen</h3>
			<SpinnerDotted />
			<p>{"connecting to socket..."}</p>
			<br />
		</div>
	);
	let div2 = (
		<div className="Reconnect">
			<button
				onClick={function() {
					setConnectingFlag(true);
					setSocket(new WebSocket(props.url));
				}}
			>
				Reconnect
			</button>
		</div>
	);

	// return !isConnected ? <SpinnerCircular /> : <div>OPEN!!!</div>;
	if (isConnected) {
		return (
			<div>
				<MainWindow />
			</div>
		);
	} else if (connectingFlag) {
		return div1;
	} else {
		return div2;
	}
}
