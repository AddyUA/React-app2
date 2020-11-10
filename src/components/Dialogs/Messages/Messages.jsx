import React from "react";
import MessagesLog from "./MessagesLog/MessagesLog";
import SendMessagesContainer from "./SendMessage/SendMessageContainer";

const Messages = props => {
  // debugger;
  const messageElements = props.dialogsPage.messages.map(el => (
    <MessagesLog message={el.message} type={el.type} key={el.id} />
  ));

  return (
    <div className="dialogs__right">
      <h1>Right</h1>
      <div className="message">
        <div className="dialogs__right-avatar">
          <img
            src="https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-715x657.png"
            alt="post logo"
          />
        </div>
        <ul className="dialogs__right-list">{messageElements}</ul>
      </div>
      <SendMessagesContainer />
    </div>
  );
};

export default Messages;
