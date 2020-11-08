import React, { Component } from "react";

class SendMessages extends Component {
  render() {
    let state = this.props.store.getState();
    let newMessageBody = state.dialogsPage.newMessageBody;

    const sendMessage = () => {
      this.props.sendMessage();
    };

    const onMessageChange = e => {
      let message = e.target.value;
      this.props.upateNewMessageValue(message);
    };

    return (
      <div className="dialog__textarea">
        <textarea
          className="dialog__textarea-field"
          value={newMessageBody}
          onChange={onMessageChange}
          placeholder="Enter your message"
          cols="55"
          rows="5"
        ></textarea>
        <button className="btn" onClick={sendMessage}>
          Send
        </button>
      </div>
    );
  }
}

export default SendMessages;
