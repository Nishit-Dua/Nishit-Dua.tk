import React from "react";
import me from "../images/Goofy Face.jpg";
import { AnimatedMain } from "../utils/AnimatedMain";

interface HomePageProps {}

const GoofPage: React.FC<HomePageProps> = ({}) => {
  return (
    <AnimatedMain className="goofy-page">
      <div className="img-container">
        <img src={me} alt="man" />
      </div>
      <div className="about-me-container">
        <h1>Who am I?</h1>

        <p>
          Hi, I am Nishit Dua, a 20 year old GoofBall. I am very much into
          internet and meme culture. I also Like World History, studying about
          different cultures, and Human Languages :D
        </p>
        <br />
        <p>
          I am an extrovert, I like making friends and taking to other people, I
          also like to code for fun!
        </p>
        <br />
        <p>
          I am currently Facinated with world economics and the concept of value
          and money, I also like watching anime. Weird combination of tastes I
          know. but it's good to be unique :3
        </p>
      </div>
    </AnimatedMain>
  );
};
export default GoofPage;
