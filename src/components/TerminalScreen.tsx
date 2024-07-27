
import Navbar from "./Navbar";
import Date from "./Date";

export default function TerminalScreen() {
	return (
		<div>
			<Navbar />
			<div className="max-w-4xl border-x-2 border-b-2 border-slate-800 rounded-b-md mx-auto text-gray-300 text-xl p-2 overflow-y-auto h-55vh bg-black bg-opacity-75 box">
				<Date/>
			</div>
		</div>
	);
}
