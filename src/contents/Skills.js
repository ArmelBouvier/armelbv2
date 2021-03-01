import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myskills: ["HTML", "CSS", "JS", "PHP", "SQL", "REACT JS", "SYMFONY", "MYSQL",  "SQLITE", "GIT", "GITHUB", "GITLAB", "TRELLO"],
    };
  }
  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">Mes compétences</h1>
        <ul>
          {this.state.myskills.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default Skills;