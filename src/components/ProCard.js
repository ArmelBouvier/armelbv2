import React, { Component } from "react";

class ProCard extends Component {
  render() {
    return (
      <div class="proCard">
        <div class="compdet">
          <h3 class="secondtext">{this.props.title} | {this.props.where}</h3>
          <h4 class="secondtext">
            {this.props.from} - {this.props.to}
          </h4>
          <p class="expContent">{this.props.content}</p>
          <p class="stack">{this.props.stack}</p>
        </div>
      </div>
    );
  }
}

export default ProCard;