import React, { Component } from "react";

class Messages extends Component {
  render() {
    return (
      <li className={`dialogs__right-list-item ${this.props.type}`}>
        {this.props.message}
      </li>
    );
  }
}

export default Messages;
