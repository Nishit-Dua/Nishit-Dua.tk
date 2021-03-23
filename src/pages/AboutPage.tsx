import React from "react";
import { Link } from "react-router-dom";
import me2 from "../images/f.jpg";
import { AnimatedMain } from "../utils/AnimatedMain";
interface AboutPageProps {}

const AboutPage: React.FC<AboutPageProps> = () => {
  // TODO ass CV link
  return (
    <AnimatedMain className="about-page">
      <div className="img-container">
        <img src={me2} alt="me" />
      </div>
      <div className="about-container">
        <h1>About Me</h1>
        <p>
          Hi I am Nishit Dua a Prefinal student at
          <a
            href="https://www.bits-pilani.ac.in/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            BITS pilani, Goa
          </a>
          . I am Majoring with a BE (Hons.) in Electronics and an Msc (Hons.) in
          Biology. I am a developer and I love to try and use different
          technologies and make weird projects! I am currently learning Full
          stack web and app develoment. I have previously dabbled in the domain
          of Machine learning using Python, Tensorflow and keras. You can know
          more about who am i as a person
          <Link to="/goofy"> Here,</Link> or check out My{" "}
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            CV Here.
          </a>{" "}
          or reach me on my <a href="nishitdua175@gmail.com">email :D</a>
        </p>
      </div>
    </AnimatedMain>
  );
};

export default AboutPage;
