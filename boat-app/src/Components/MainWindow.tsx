import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SpinnerDotted, SpinnerCircularSplit } from "spinners-react";
import { Joystick } from "react-joystick-component";
export function MainWindow(props: any) {
	return (
		<div className="Joystick">
			<Joystick
				throttle={50}
				size={30}
				sticky={false}
				baseColor="rgba(98, 94, 94, 0.62)"
				stickColor="rgba(26, 139, 239, 0.62)"
				move={function(event) {
					if ((window as any).socket.readyState === 1) {
						console.log(event.x + "," + event.y + "," + event.distance);
						(window as any).socket.send(event.x + "," + event.y + "," + event.distance);
						console.log((window as any).socket.readyState);
						// console.log((window as any).socket.readyState.bufferdAmount);
					}
				}}
				start={function(event) {
					console.log(event);
				}}
				stop={function(event) {
					console.log(event);
					(window as any).socket.send(0 + "," + 0 + "," + 0);
				}}
			/>
		</div>
	);
}
