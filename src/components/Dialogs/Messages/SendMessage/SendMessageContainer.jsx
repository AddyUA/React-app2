import { connect } from "react-redux";

import {
  sendMessageActionCreator,
  updateNewMessageActionCreator
} from "../../../../redux/dialogs-reducer";
import SendMessage from "./SendMessage";

// CODE
const mapStatetoProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    upateNewMessageValue: message => {
      let action = updateNewMessageActionCreator(message);
      dispatch(action);
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    }
  };
};

const SendMessagesContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(SendMessage);

export default SendMessagesContainer;
