import React from "react";

const SendMessages = props => {
  // debugger;
  let newMessageBody = props.dialogsPage.newMessageBody;

  const sendMessage = () => {
    props.sendMessage();
  };

  const onMessageChange = e => {
    let message = e.target.value;
    props.upateNewMessageValue(message);
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
};

export default SendMessages;
