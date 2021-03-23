import React from "react";
import me from "../images/Goofy Face.jpg";
import { AnimatedMain } from "../utils/AnimatedMain";

interface HomePageProps {}

const GoofPage: React.FC<HomePageProps> = () => {
  return (
    <AnimatedMain>
      <section className="about-page">
        <div className="img-container">
          <img src={me} alt="me" />
        </div>
        <div className="about-container">
          <h1>Who am I?</h1>

          <p>
            Hi, I am Nishit Dua, a 20 year old GoofBall. I am very much into
            internet and meme culture. I also Like World History, studying about
            different cultures, and Human Languages{" "}
            <span className="emojicon">:D</span> I am an extrovert, I like
            making friends and taking to other people, I also like to code for
            fun! I am currently Facinated with world economics and the concept
            of value and money, I also enjoy watching anime. Weird combination
            of tastes I know. but it's good to be unique{" "}
            <span className="emojicon">:3</span>
          </p>
          <div className="br" />
          <p></p>
          <div className="br" />
          <p></p>
        </div>
      </section>
    </AnimatedMain>
  );
};
export default GoofPage;
