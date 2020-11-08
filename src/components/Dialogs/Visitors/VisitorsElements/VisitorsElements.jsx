import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Visitors extends Component {
  render() {
    return (
      <li className="dialogs__left-list-item">
        <NavLink to={"/dialogs/" + this.props.id} activeClassName="selected">
          {this.props.author}
        </NavLink>
      </li>
    );
  }
}

export default Visitors;
