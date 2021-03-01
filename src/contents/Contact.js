import React, { Component } from "react";
import Social from "../components/Social";
class Contact extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Contactez-moi !</h1>
        <h3><a href="mailto:armel.bouvier.pro@gmail.com"><i class="far fa-envelope"></i></a></h3>
        <Social />
      </div>
    );
  }
}
export default Contact;