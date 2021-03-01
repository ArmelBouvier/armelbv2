import React, { Component } from "react";
import Widecard from "../components/Widecard";

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Ma formation</h1>
        <Widecard
          title="Spécialisation Symfony"
          where="Ecole O'Clock"
          from="Novembre"
          to="Décembre 2020"
        />
        <Widecard
          title="Certifications  Développeur et Intégrateur web"
          where="WebForce3 / Philomathique de Bordeaux"
          from="mars"
          to="juin 2020"
        />
        <Widecard
          title="Doctorat Physique appliquée à l'archéologie"
          where="Université Bordeaux - Montaigne"
          from="septembre 2007"
          to="mai 2011"
        />
      </div>
    );
  }
}
export default Education;