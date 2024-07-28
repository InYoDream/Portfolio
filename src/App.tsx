import Background from "./components/Background";
import TerminalScreen from "./components/TerminalScreen";

export default function App() {
	return (
		<>
			<div className="h-screen w-full flex justify-center items-center  font-josefin">
				<div className="w-full items-center">
					<div className="block sm:hidden mb-10 bg-yellow-200 py-3  text-center text-xl text-gray-700">
						<p>Run via pc for better experience...</p>
					</div>
					<TerminalScreen />
				</div>
			</div>
			<Background/>
		</>
	);
}
