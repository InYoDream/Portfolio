import ProgressBar from "./ProgressBar";
import {
	SiCplusplus,
	SiJavascript,
	SiExpress,
	SiCss3,
	SiHtml5,
	SiReact,
	SiNodedotjs,
	SiTailwindcss,
	SiMongodb,
	SiPython,
	SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";


export default function Skills() {
	const listOfSkills = [
		{
			Icon: SiCplusplus,
			text: "C++",
		},
		{
			Icon :FaJava,
			text: "Java",
		},
		{
			Icon : SiHtml5,
			text: "HTML",
		},
		{
			Icon: SiCss3,
			text: "Css",
		},
		{
			Icon: SiJavascript,
			text: "JavaScript",
		},
		{
			Icon: SiReact,
			text: "React",
		},
		{
			Icon: SiTypescript,
			text: "TypeScript",
		},
		{
			Icon: SiExpress,
			text: "ExpressJS",
		},
		{
			Icon: SiNodedotjs,
			text: "NodeJS",
		},
		{
			Icon: SiTailwindcss,
			text: "Tailwindcss",
		},
		{
			Icon: SiMongodb,
			text: "MongoDB",
		},
		{
			Icon: SiPython,
			text: "Python",
		},
	];

	return (
		<div className="grid grid-cols-4 gap-4">
			{listOfSkills.map(({ Icon, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
