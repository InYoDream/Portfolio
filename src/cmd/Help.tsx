type HelpCmd = {
	cmd: string;
	detail: string;
};
export default function Help() {
	const listOfHelpCommands: HelpCmd[] = [
		{ cmd: "info", detail: "Show information about me." },
		{ cmd: "skills", detail: "List all of my skills." },
        { cmd: "projects", detail: "List of my projects." },
		{ cmd: "con", detail: "List all of the contacts." },
		{ cmd: "about", detail: "To see info about this portfolio" },
        { cmd: "ctrl + c", detail: "To clear terminal history."},
	];
	return (
		<div className="w-11/12 mx-auto">
			{listOfHelpCommands.map(({ cmd, detail }, index) => {
				return (
					<div className="flex items-center gap-20  mt-3" key={index}>
						<h1 className="text-yellow-200 w-20">{cmd}</h1>
						<p className="text-gray-300 flex-1 ">{detail}</p>
					</div>
				);
			})}
		</div>
	);
}
