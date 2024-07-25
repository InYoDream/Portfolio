// import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";

export default function TerminalScreen() {
	
	// const dummyRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	// useEffect(() => {
	// 	dummyRef.current.scrollIntoView({ behavior: "auto" });
	// }, [enteredCmd]);
	// useEffect(() => {
	// 	document.body.addEventListener("keydown", handleKeyEvent);
	// }, []);
	// const handleSubmit = (cmd: string) => {
	// 	setEnteredCmd((currentCmd) => [
	// 		...currentCmd,
	// 		{ ...renderCmd(cmd), time: new Date().toLocaleTimeString() },
	// 	]);
	// };

	// const handleKeyEvent = (e: KeyboardEvent) => {
	// 	if (e.ctrlKey && e.key.toLocaleLowerCase() === "l") {
	// 		setEnteredCmd([]);
	// 	}
	// };
	return (
		<div>
			<Navbar />
			<div className="max-w-4xl border-x-2 border-b-2 border-slate-800 rounded-b-md mx-auto text-gray-300 text-xl p-2 overflow-y-auto h-55vh bg-black bg-opacity-75 box">
				{/* <TodayDate />
				<EnteredCmd enteredCmd={enteredCmd} />
				<CmdUserInput onSubmit={handleSubmit} />
				<div ref={dummyRef}></div> */}
			</div>
		</div>
	);
}
