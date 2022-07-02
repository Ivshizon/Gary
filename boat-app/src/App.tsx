import React from "react";
import "./App.css";
import { WSocket } from "./Components/WebSocket";
import { Joystick } from "react-joystick-component";
function App() {
	return (
		<div className="main">
			<WSocket url="ws://192.168.4.1:81" />
		</div>
	);
}

export default App;
