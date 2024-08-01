import About from "../cmd/About";
import Info from "../cmd/Info";
import Contact from "../cmd/Contact";
import Help from "../cmd/Help";
import NotFound from "../cmd/CommandNotFound";
import Skills from "../cmd/Skills";
import { CmdHistory } from "../HistoryTrack";
import Projects from "../cmd/Projects";

function CmdRecognize(cmd: string): CmdHistory {
	// const lowerCaseCmd = cmd.toLowerCase();
	switch (cmd) {
		case "help":
			return {
				cmd,
				Component: Help,
				time: "",
			};
		case "info":
			return {
				cmd,
				Component: Info,
				time: "",
			};
		case "skills":
			return {
				cmd,
				Component: Skills,
				time: "",
			};
		case "contact":
			return {
				cmd,
				Component: Contact,
				time: "",
			};
		case "about": {
			return {
				cmd,
				Component: About,
				time: "",
			};
        }
        case "projects": {
            return {
                cmd,
                Component: Projects,
                time: "",
            };
        }
		default:
			return {
				cmd,
				Component: NotFound,
				time: "",
			};
	}
}

export default CmdRecognize;
