import { useEffect, useState } from "react";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

export default function About() {
	const techs = [
		{ Icon: SiTypescript, color: "text-blue-500", duration: "duration-200" },
		{ Icon: SiTailwindcss, color: "text-blue-300", duration: "duration-500" },
	];
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		setAnimate(true);
	}, []);
	return (
		<div>
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.5 transform transition-all duration-300">Portfolio ?</h1>
			<p className="text-lg mb-3 animate-reveal-0.5">
			A portfolio is your personal showcase. It highlights your skills, experiences, and projects, offering a glimpse into your professional world.
			</p>
			<h1 className="text-2xl text-yellow-200 animate-reveal-0.7">
				Tech stack
			</h1>
			<p className="text-lg animate-reveal-0.7">
				This portfolio site has been built up by using TypeScript and TailwindCSS
			</p>
			<div className="flex gap-5 text-4xl">
				{techs.map(({ Icon, color, duration }, index) => {
					return (
						<Icon
							key={index}
							className={`${color} ${
								animate ? "scale-100" : "scale-0"
							} transform transition-all ${duration}`}
						/>
					);
				})}
			</div>
		</div>
	);
}
