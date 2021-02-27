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
        <ReactTypingEffect
          className="typingeffect"
          text={["I am Armel Bouvier", "I am a web developer"]}
          speed={100}
          eraseDelay={700}
        />
        <Social />
      </div>
    );
  }
}
export default Home;