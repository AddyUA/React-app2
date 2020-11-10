import React, { Component } from "react";

import Messages from "./Messages/Messages";
import Visitors from "./Visitors/Visitors";

class Dialogs extends Component {
  render() {
    return (
      <div className="dialogs">
        <Visitors
        // store={this.props.store}
        />
        <Messages
        // store={this.props.store}
        />
      </div>
    );
  }
}

export default Dialogs;
