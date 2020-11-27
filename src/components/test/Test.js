import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  render() {
    console.log("Render");
    return (
      <div>
        <h2>Test Compoent</h2>
      </div>
    );
  }
}

export default Test;
