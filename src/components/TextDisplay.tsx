interface TextDisplayProp {
	cmd: string;
	time: string;
}
export default function TextDisplay({ cmd, time }: TextDisplayProp) {
	return (
		<div className="flex justify-between items-center translate-y-2 -translate-x-3 w-full">
			<h1>{cmd}</h1>
			<h1 className="text-sm">{time}</h1>
		</div>
	);
}
