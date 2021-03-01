import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/profileAB.jpg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img
          src={profilepic}
          alt="Armel Bouvier portrait"
          className="profilepic"
        ></img>
        <br/>
        <ReactTypingEffect
          className="typingeffect"
          text={["Je suis Armel Bouvier", "Je suis un développeur web", "Fullstack Symfony/React"]}
          speed={50}
          eraseDelay={500}
        />
        <Social />
      </div>
    );
  }
}
export default Home;