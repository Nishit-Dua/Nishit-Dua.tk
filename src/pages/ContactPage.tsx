import React from "react";
import { AnimatedMain } from "../utils/AnimatedMain";
import { FaPhone, FaTwitter, FaGithub, FaFilePdf } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const contactItterableShit = [
  {
    link: "mailto:nishitdua175@gmail.com",
    icon: <GrMail />,
    heading: "Email",
    content: "nishitdua175@gmail.com",
  },
  {
    link: "https://twitter.com/_lemark_",
    icon: <FaFilePdf />,
    heading: "My CV",
    content: "Nishit Dua",
  },
  {
    link: "https://github.com/nishit-dua",
    icon: <FaGithub />,
    heading: "Github",
    content: "@nishit-dua",
  },
  {
    link: "tel:+919812443585",
    icon: <FaPhone />,
    heading: "Call Me!",
    content: "+91 98124-43585",
  },
  {
    link: "https://twitter.com/_lemark_",
    icon: <FaTwitter />,
    heading: "Twitter",
    content: "@_lemark_",
  },
];

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <AnimatedMain className="contact-page">
      <div className="head">
        <h1>Like what you see?</h1>
        <p>Get in touch with me</p>
      </div>
      <div className="icon-container">
        {contactItterableShit.map((item, idx) => {
          return (
            <a
              key={idx}
              href={item.link}
              className="icon-link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-box">{item.icon}</div>
              <h3>{item.heading}</h3>
              <p>{item.content}</p>
            </a>
          );
        })}
      </div>
    </AnimatedMain>
  );
};
export default ContactPage;
