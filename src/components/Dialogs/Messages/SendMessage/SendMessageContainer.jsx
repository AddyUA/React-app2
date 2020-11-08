import React, { Component } from "react";
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator
} from "../../../../redux/dialogs-reducer";
import SendMessage from "./SendMessage";

class SendMessagesContainer extends Component {
  render() {
    const sendMessage = () => {
      this.props.store.dispatch(sendMessageActionCreator());
    };

    const onMessageChange = message => {
      let action = updateNewMessageActionCreator(message);
      this.props.store.dispatch(action);
    };

    return (
      <SendMessage
        upateNewMessageValue={onMessageChange}
        sendMessage={sendMessage}
        store={this.props.store}
      />
    );
  }
}

export default SendMessagesContainer;
