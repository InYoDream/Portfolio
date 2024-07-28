export default function Contact() {
	const contacts = [
		{
			text: "Email",
			value: "abhishekkothiyal002@gmail.com",
			href: "mailto:abhishekkothiyal002@gmail.com",
		},
        {
			text: "Phone number",
			value: "+917037809921",
			href: "tel:+917037809921",
		},
		{
			text:"LinkedIn",
			value: "Abhishek Kothiyal",
			href: "https://www.linkedin.com/in/abhishek-kothiyal-09138b230/",
		}
	];
	return (
		<div className="w-11/12 mx-auto">
			{contacts.map(({ text, value, href }, index) => {
				return (
					<div className="flex items-center gap-20  mt-3" key={index}>
						<h1 className="text-yellow-200 w-36">{text}</h1>
						<a href={href} className="flex-1 underline text-blue-300 ">
							{value}
						</a>
					</div>
				);
			})}
		</div>
	);
}
