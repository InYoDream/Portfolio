import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import DateF from "./Date";
import Hello from "./Hello";
import Help from "../cmd/Help";
import CmdRecognize from "../utils/CmdRecognize";
import EnteredCmd from "./EnteredCmd";
import CmdUserInput from "./UserInput";

export default function TerminalScreen() {
  const [enteredCmd, setEnteredCmd] = useState([
    {
      cmd: "",
      Component: Hello,
      time: new Date().toLocaleTimeString(),
    },
    {
      cmd: "help",
      Component: Help,
      time: new Date().toLocaleTimeString(),
    },
  ]);

  const dummyRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    dummyRef.current.scrollIntoView({ behavior: "auto" });
  }, [enteredCmd]);
  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyEvent);
  }, []);
  const handleSubmit = (cmd: string) => {
    setEnteredCmd((currentCmd) => [
      ...currentCmd,
      { ...CmdRecognize(cmd), time: new Date().toLocaleTimeString() },
    ]);
  };

  const handleKeyEvent = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key.toLocaleLowerCase() === "c") {
      setEnteredCmd([]);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="h-full w-3/4 flex flex-col justify-center">
        <Navbar />
        <div className="italic overflow-y-auto w-full border-x-2 border-b-2 border-slate-800 rounded-b-md mx-auto text-gray-300 text-xl p-2 h-3/4 bg-black bg-opacity-80 box">
          <DateF />
          <EnteredCmd enteredCmd={enteredCmd} />
          <CmdUserInput onSubmit={handleSubmit} />
          <div ref={dummyRef}></div>
        </div>
      </div>
    </div>
  );
}
