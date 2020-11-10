import React, { Component } from "react";
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../../../redux/dialogs-reducer";
import StoreContext from "../../../../StoreContext";
import SendMessage from "./SendMessage";

class SendMessagesContainer extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => {
          const sendMessage = () => {
            store.dispatch(sendMessageActionCreator());
          };

          const onMessageChange = (message) => {
            let action = updateNewMessageActionCreator(message);
            store.dispatch(action);
          };
          return (
            <SendMessage
              upateNewMessageValue={onMessageChange}
              sendMessage={sendMessage}
              store={store}
            />
          );
        }}
      </StoreContext.Consumer>
    );
  }
}

export default SendMessagesContainer;
