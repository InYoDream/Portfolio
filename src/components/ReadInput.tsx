
import BaseCmdInput from "./BaseCmdInput";
import Status from "./Status";
import CmdTextDisplay from "./TextDisplay";

interface ReadInput {
	cmd: string;
	time: string;
}

export default function ReadOnlyCmdInput({ cmd, time }: ReadInput) {
	return (
		<BaseCmdInput
			CmdStatus={<Status cmd={cmd} />}
			Children={<CmdTextDisplay cmd={cmd} time={time} />}
		/>
	);
}
