import React, { Component } from "react";

import MessagesContainer from "./Messages/MessagesContainer";
import VisitorsContainer from "./Visitors/VisitorsContainer";

class Dialogs extends Component {
  render() {
    return (
      <div className="dialogs">
        <VisitorsContainer />
        <MessagesContainer />
      </div>
    );
  }
}

export default Dialogs;
