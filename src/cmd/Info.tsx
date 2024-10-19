import { GoVerified } from "react-icons/go";
import { SiGithub} from "react-icons/si";
import { FaLinkedin ,FaInstagram} from "react-icons/fa";

export default function Info() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/InYoDream",
			text: "@1nYoDream",
		},
		{
			title: "LinkedIn",
			Icon: FaLinkedin,
			href: "https://www.linkedin.com/in/abhishek-kothiyal-09138b230/",
			text: "@Abhishek Kothiyal",
		},
		{
			title: "Instagram",
			Icon: FaInstagram,
			href: "https://www.instagram.com/i._.m._.abhishek/",
			text: "@i._.m._.abhishek",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://media.licdn.com/dms/image/v2/D5603AQGLaR-bGrsgsQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719025525529?e=1734566400&v=beta&t=gZKgAmega-4syOeGVmFFSplhdnQh_yOewA80ju3GsFA"
					alt="Abhishek"
					className="w-40 h-40 rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">Abhishek Kothiyal</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">21 y/o</p>
				</div>
			</div>
			<p>
				Hi there, I am a final year student of Computer Science Engineering who is passionate about learning technologies.
				I have a keen interest in Full Stack Web Developement and solving algorithmic problems.
				You can contact me via :  
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
