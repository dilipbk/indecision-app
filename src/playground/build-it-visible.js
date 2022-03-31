import react, { Component } from "react";
import ReactDOM from "react-dom";

export default class Visibility extends Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  toggleVisibility() {
    this.setState((prev) => {
      return {
        visibility: !prev.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>This is visibility toggle using state</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && <p>The text is visible now</p>}
      </div>
    );
  }
}
