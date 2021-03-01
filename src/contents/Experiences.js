import React, { Component } from "react";
import ProCard from "../components/ProCard";

class Experiences extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Mes expériences professionnelles</h1>
        <ProCard
          title="Développeur full stack"
          where="Jean-François Desné"
          from="Octobre 2020"
          to="Janvier 2021"
          content="Développement front end et intégration des maquettes, Développement back end, Coordination de l’équipe des devs/sysadmin"
          stack="Stack du projet : PHP et Javascript natif, MySQL, Apache, Github"
        />
        <ProCard
          title="Développeur full stack"
          where="TRENTE DIGITAL / Vincent Piéplu"
          from="Juin 2020"
          to="Octobre 2021"
          content="Développement d’un CMS à destination d’institutions publiques, Développement front end d’interfaces utilisateurs, Développement back end"
          stack="Stack du projet : Laravel, Vue js, Maria DB, Nginx, Gitlab"
        />
        <ProCard
          title="Ingénieur d'étude"
          where="CIRAM SAS"
          from="Septembre 2012"
          to="Décembre 2020"
          content="Création et gestion d’un pôle «datation» au sein de la structure, Gestion de projets et production analytique, Développement commercial en France et à l’étranger"
          stack=""
        />
      </div>
    );
  }
}
export default Experiences;