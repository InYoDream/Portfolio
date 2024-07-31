import { FaLinkedin, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  const contacts = [
    {
      Icon: SiGmail,
      text: "Email",
      value: "abhishekkothiyal002@gmail.com",
      href: "mailto:abhishekkothiyal002@gmail.com",
    },
    {
      Icon: FaPhoneAlt,
      text: "Phone number",
      value: "+917037809921",
      href: "tel:+917037809921",
    },
    {
      Icon: FaLinkedin,
      text: "LinkedIn",
      value: "Abhishek Kothiyal",
      href: "https://www.linkedin.com/in/abhishek-kothiyal-09138b230/",
    },
    {
      Icon: FaInstagram,
      text: "Instagram",
      value: "@i._.m._.abhishek",
      href: "https://www.instagram.com/i._.m._.abhishek/",
    },
  ];
  return (
    <div className="w-11/12 mx-auto">
      {contacts.map(({ Icon, text, value, href }, index) => {
        return (
          <div className="flex items-center gap-20  mt-3" key={index}>
            <div className="text-lg flex items-center text-yellow-200">
              <Icon />
            <h1 className="mx-4 text-yellow-200 w-36">{text}</h1>
			</div>
            <a href={href} target="_blank" className="flex-1 underline text-blue-300 ">
              {value}
            </a>
          </div>
        );
      })}
    </div>
  );
}
