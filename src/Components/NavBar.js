import React, { Component } from "react";
import ThemeContext from "../context/ThemeContext";

class NavBar extends Component {
  static contextType = ThemeContext;

  state = {};
  render() {
    console.log(this.context)
    return (
      <nav>
        <h1>Context API</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
