import {useState} from "react";
import Navbar from "./Navbar";
import DateF from "./Date";
import Hello from "./Hello";
import Help from "../cmd/Help";

export default function TerminalScreen() {

	const [enteredCmd, setEnteredCmd] = useState([
		{
			cmd: "",
			Component: Hello,
			time: new Date().toLocaleTimeString(),
		},
		{
			cmd: "ls",
			Component: Help,
			time: new Date().toLocaleTimeString(),
		},
	]);


	return (
		<div>
			<Navbar />
			<div className="max-w-4xl border-x-2 border-b-2 border-slate-800 rounded-b-md mx-auto text-gray-300 text-xl p-2 overflow-y-auto h-55vh bg-black bg-opacity-75 box">
				<DateF/>
			</div>
		</div>
	);
}
