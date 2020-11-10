import React, { Component } from "react";
import StoreContext from "../../../StoreContext";
import VisitorsElements from "./VisitorsElements/VisitorsElements";

class Visitors extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => {
          let state = store.getState();

          const dialogElements = state.dialogsPage.dialogs.map((el) => (
            <VisitorsElements author={el.author} id={el.id} key={el.id} />
          ));
          return (
            <div className="dialogs__left">
              <h1>Left</h1>
              <ul className="dialogs__left-list">{dialogElements}</ul>
            </div>
          );
        }}
      </StoreContext.Consumer>
    );
  }
}

export default Visitors;
