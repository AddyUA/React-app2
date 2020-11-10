import React from "react";
import VisitorsElements from "./VisitorsElements/VisitorsElements";

const Visitors = props => {
  const dialogElements = props.dialogsPage.dialogs.map(el => (
    <VisitorsElements author={el.author} id={el.id} key={el.id} />
  ));

  return (
    <div className="dialogs__left">
      <h1>Left</h1>
      <ul className="dialogs__left-list">{dialogElements}</ul>
    </div>
  );
};

export default Visitors;
